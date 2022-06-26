---
id: typescript
title: TypeScript Quick Start
sidebar_label: TypeScript Quick Start
hide_title: true
---

&nbsp;

# Redux Toolkit TypeScript Quick Start

:::tip 배울 내용

- TypeScript와 함께 Redux Toolkit 및 React-Redux를 설정하고 사용하는 방법

:::

:::info Prerequisites

- React [Hooks](https://reactjs.org/docs/hooks-intro.html) 에 대한 지식 
- [Redux의 용어 및 개념](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow) 에 대한 이해
- TypeScript의 구문 및 개념에 대한 이해

:::

## 소개

Redux Toolkit Typescript Quick Start 튜토리얼에 오신 것을 환영합니다! **이 튜토리얼에서는 Redux Toolkit과 함께 TypeScript를 사용하는 방법을 간략하게 보여줍니다**.

이 페이지에서는 TypeScript를 설정하는 방법에 중점을 둡니다. Redux가 무엇인지, 어떻게 작동하는지, Redux Toolkit을 사용하는 방법에 대한 전체 예제는 ["Tutorials Overview" 페이지에 링크된 튜토리얼](./overview.md)을 참조하세요.

Redux Toolkit은 TypeScript로 작성되었으므로 TS type 정의가 내장되어 있습니다.

[React Redux](https://react-redux.js.org) has its type definitions in a separate [`@types/react-redux` typedefs package](https://npm.im/@types/react-redux) on NPM. In addition to typing the library functions, the types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components.

React Redux v7.2.3부터 `react-redux` 패키지는 `@types/react-redux`에 종속되므로 type definition은 라이브러리와 함께 자동으로 설치됩니다. 그렇지 않다면 수동으로 직접 설치해야 합니다(일반적으로 `npm install @types/react-redux` ).

[Create-React-App용 Redux+TS 템플릿](https://github.com/reduxjs/cra-template-redux-typescript) 은 이미 구성된 이러한 패턴의 작업 예제와 함께 제공됩니다.

## 프로젝트 설정

### Define Root State and Dispatch Types

Using [configureStore](../api/configureStore.mdx) should not need any additional typings. You will, however, want to extract the `RootState` type and the `Dispatch` type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

Since those are types, it's safe to export them directly from your store setup file such as `app/store.ts` and import them directly into other files.

```ts title="app/store.ts"
import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
})

// highlight-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// highlight-end
```

### Define Typed Hooks

While it's possible to import the `RootState` and `AppDispatch` types into each component, it's **better to create typed versions of the `useDispatch` and `useSelector` hooks for usage in your application**. This is important for a couple reasons:

- For `useSelector`, it saves you the need to type `(state: RootState)` every time
- For `useDispatch`, the default `Dispatch` type does not know about thunks. In order to correctly dispatch thunks, you need to use the specific customized `AppDispatch` type from the store that includes the thunk middleware types, and use that with `useDispatch`. Adding a pre-typed `useDispatch` hook keeps you from forgetting to import `AppDispatch` where it's needed.

Since these are actual variables, not types, it's important to define them in a separate file such as `app/hooks.ts`, not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues.

```ts title="app/hooks.ts"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// highlight-start
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// highlight-end
```

## Application Usage

### Define Slice State and Action Types

Each slice file should define a type for its initial state value, so that `createSlice` can correctly infer the type of `state` in each case reducer.

All generated actions should be defined using the `PayloadAction<T>` type from Redux Toolkit, which takes the type of the `action.payload` field as its generic argument.

You can safely import the `RootState` type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions.

```ts title="features/counter/counterSlice.ts"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// highlight-start
// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}
// highlight-end

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // highlight-start
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // highlight-end
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
```

The generated action creators will be correctly typed to accept a `payload` argument based on the `PayloadAction<T>` type you provided for the reducer. For example, `incrementByAmount` requires a `number` as its argument.

In some cases, [TypeScript may unnecessarily tighten the type of the initial state](https://github.com/reduxjs/redux-toolkit/pull/827). If that happens, you can work around it by casting the initial state using `as`, instead of declaring the type of the variable:

```ts
// Workaround: cast state instead of declaring variable type
const initialState = {
  value: 0,
} as CounterState
```

### Use Typed Hooks in Components

In component files, import the pre-typed hooks instead of the standard hooks from React-Redux.

```tsx title="features/counter/Counter.tsx"
import React, { useState } from 'react'

// highlight-next-line
import { useAppSelector, useAppDispatch } from 'app/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // highlight-start
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  // highlight-end

  // omit rendering logic
}
```

## What's Next?

See [the "Usage with TypeScript" page](../usage/usage-with-typescript.md) for extended details on how to use Redux Toolkit's APIs with TypeScript.
