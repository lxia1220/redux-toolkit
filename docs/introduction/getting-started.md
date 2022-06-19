---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
hide_title: true
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

&nbsp;

# Redux Toolkit 시작하기

## Purpose

**Redux Toolkit** 패키지는 [Redux](https://redux.js.org) 로직을 작성하기 위한 표준 방식을 위해 만들어졌습니다. It was originally created to help address three common concerns about Redux:

- "Redux store를 구성하는 것은 너무 복잡합니다"
- "Redux에서 유용한 작업을 수행하기 위해서는 많은 패키지를 추가해야합니다"
- "Redux는 너무 많은 boilerplate code를 필요로 합니다"

We can't solve every use case, but in the spirit of [`create-react-app`](https://github.com/facebook/create-react-app), we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code.

Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed ["RTK Query"](#rtk-query). It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself.

**These tools should be beneficial to all Redux users**. Whether you're a brand new Redux user setting up your
first project, or an experienced user who wants to simplify an existing application, **Redux Toolkit** can help
you make your Redux code better.

## 설치하기

### Create React App 사용

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

### An Existing App

Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install @reduxjs/toolkit
```

or

```bash
# Yarn
yarn add @reduxjs/toolkit
```

It is also available as a precompiled UMD package that defines a `window.RTK` global variable.
The UMD package can be used as a [`<script>` tag](https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js) directly.

## What's Included

Redux Toolkit 은 다음 API들을 포함하고 있습니다:

- [`configureStore()`](../api/configureStore.mdx): wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes `redux-thunk` by default, and enables use of the Redux DevTools Extension.
- [`createReducer()`](../api/createReducer.mdx): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the [`immer` library](https://github.com/immerjs/immer) to let you write simpler immutable updates with normal mutative code, like `state.todos[3].completed = true`.
- [`createAction()`](../api/createAction.mdx): generates an action creator function for the given action type string. The function itself has `toString()` defined, so that it can be used in place of the type constant.
- [`createSlice()`](../api/createSlice.mdx): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
- [`createAsyncThunk`](../api/createAsyncThunk.mdx): accepts an action type string and a function that returns a promise, and generates a thunk that dispatches `pending/fulfilled/rejected` action types based on that promise
- [`createEntityAdapter`](../api/createEntityAdapter.mdx): generates a set of reusable reducers and selectors to manage normalized data in the store
- The [`createSelector` utility](../api/createSelector.mdx) from the [Reselect](https://github.com/reduxjs/reselect) library, re-exported for ease of use.

## RTK Query

[**RTK Query**](../rtk-query/overview.md) is provided as an optional addon within the `@reduxjs/toolkit` package. It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app. It is intended to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

RTK Query is built on top of the Redux Toolkit core for its implementation, using [Redux](https://redux.js.org/) internally for its architecture. Although knowledge of Redux and RTK are not required to use RTK Query, you should explore all of the additional global store management capabilities they provide, as well as installing the [Redux DevTools browser extension](https://github.com/reduxjs/redux-devtools), which works flawlessly with RTK Query to traverse and replay a timeline of your request & cache behavior.

RTK Query is included within the installation of the core Redux Toolkit package. 아래의 두가지 entry points 중 하나를 통해 사용할 수 있습니다:

```ts no-transpile
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

### What's included

RTK Query 는 다음 API들을 포함하고 있습니다:

- [`createApi()`](../rtk-query/api/createApi.mdx): RTK Query의 기능의 핵심입니다. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
- [`fetchBaseQuery()`](../rtk-query/api/fetchBaseQuery.mdx): A small wrapper around [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that aims to simplify requests. Intended as the recommended `baseQuery` to be used in `createApi` for the majority of users.
- [`<ApiProvider />`](../rtk-query/api/ApiProvider.mdx): **Redux store가 없는 경우**  `Provider` 로 사용할 수 있습니다.
- [`setupListeners()`](../rtk-query/api/setupListeners.mdx): `refetchOnMount` 및 `refetchOnReconnect` 를 사용하기 위해 필요한 유틸리티 입니다.

See the [**RTK Query Overview**](../rtk-query/overview.md) page for more details on what RTK Query is, what problems it solves, and how to use it.

## Redux 배우기

Redux를 배우는 데 도움이 되는 다양한 리소스가 있습니다.

### Redux Essentials Tutorial

The [**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.

### Redux Fundamentals Tutorial

The [**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.

### Learn Modern Redux Livestream

Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## 도움 및 논의

**[Reactiflux Discord community](http://www.reactiflux.com)** 의 **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** 에서 Redux와 관련된 질문의 공식 리소스를 확인할 수 있습니다. Reactiflux는 어울리고, 질문하고, 배울 수 있는 좋은 장소입니다 - 우리와 함께 하세요!

또한 [Stack Overflow](https://stackoverflow.com) 에서 **[#redux tag](https://stackoverflow.com/questions/tagged/redux)** 를 통해 질문할 수 있습니다.
