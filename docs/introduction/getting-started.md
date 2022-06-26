---
id: getting-started
title: 시작하기
sidebar_label: 시작하기
hide_title: true
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

&nbsp;

# Redux Toolkit 시작하기

## Purpose

**Redux Toolkit** 패키지는 [Redux](https://redux.js.org) 로직을 작성하기 위한 표준 방식을 위해 만들어졌습니다. 시작은 Redux에 대한 세 가지 일반적인 문제를 해결하기 위해 만들어졌습니다:

- "Redux store를 구성하는 것은 너무 복잡합니다"
- "Redux에서 유용한 작업을 수행하기 위해서는 많은 패키지를 추가해야합니다"
- "Redux는 너무 많은 boilerplate code를 필요로 합니다"

모든 사용 사례를 해결할 수는 없지만, [`create-react-app`](https://github.com/facebook/create-react-app) 정신을 따라 구성 과정을 추상화하고 가장 일반적인 사용 사례를 처리하는 몇 가지 도구를 제공할 수 있을 뿐만 아니라 여러가지 유용한 유틸리티를를 통해 사용자가 애플리케이션 코드를 단순화할 수 있도록 도와줍니다.

Redux Toolkit에는 ["RTK Query"](#rtk-query) 라고 하는 강력한 data fetching 및 caching 기능도 포함되어 있습니다. 이것은 별도의 진입점으로 패키지에 포함되어 있습니다. 물론 선택사항이지만, 이를 사용하면 더 이상 data fetching logic을 직접 작성할 필요가 없습니다.

**이 도구는 모든 Redux 사용자에게 유용해야 합니다**. 첫 번째 프로젝트를 시작하는 새로운 Redux 사용자이든 기존 애플리케이션을 단순화하려는 숙련된 사용자이든 **Redux Toolkit**은 Redux 코드를 개선하는 데 도움이 될 수 있습니다.

## 설치하기

### Create React App 사용

새롭게 React와 Redux를 사용하여 개발을 시작하는 추천 방법은 [Create React App](https://github.com/facebook/create-react-app) 의 템플릿으로 만들어진 [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) 또는 [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) 를 사용하여 **[Redux Toolkit](https://redux-toolkit.js.org/)** 과 React 컴포넌트와의 React Redux 통합의 이점을 가져가는 것입니다.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

### An Existing App

NPM에서 Redux Toolkit 패키지를 설치하여 모듈 번들러 또는 node 애플리케이션과 함께 사용할 수 있습니다:

```bash
# NPM
npm install @reduxjs/toolkit
```

or

```bash
# Yarn
yarn add @reduxjs/toolkit
```

또한 `window.RTK` 전역 변수를 정의하는 미리 컴파일된 UMD 패키지로도 사용할 수 있습니다.
UMD 패키지는 [`<script>` 태그](https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js) 로 직접 사용할 수 있습니다.

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

[**RTK Query**](../rtk-query/overview.md)는 `@reduxjs/toolkit`의 선택적 애드온으로서 제공됩니다. 이것은 data fetching 및 caching을 위해 특별히 제작되었으며 앱에 대한 API 인터페이스 계층을 정의하기 위한 작지만 강력한 도구 모음을 제공합니다. 이를 통해 웹 애플리케이션에서 데이터를 로드하는 일반적인 경우에 대해 단순화하여 data fetching & caching 로직을 직접 작성할 필요가 없습니다.

RTK Query는 Redux Toolkit core 위에 구현되어 있으며, 아키텍처 내부적으로 [Redux](https://redux.js.org/) 를 사용합니다. Although knowledge of Redux and RTK are not required to use RTK Query, you should explore all of the additional global store management capabilities they provide, as well as installing the [Redux DevTools browser extension](https://github.com/reduxjs/redux-devtools), which works flawlessly with RTK Query to traverse and replay a timeline of your request & cache behavior.

RTK Query는 Redux Toolkit 패키지에 포함되어 있습니다. 아래의 두가지 entry points 중 하나를 통해 사용할 수 있습니다:

```ts no-transpile
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

### What's included

RTK Query 는 다음 API들을 포함하고 있습니다:

- [`createApi()`](../rtk-query/api/createApi.mdx): RTK Query의 기능의 핵심입니다. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
- [`fetchBaseQuery()`](../rtk-query/api/fetchBaseQuery.mdx): 간단한 요청을 위한 [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 의 wrapper입니다. 대부분의 사용자에게 `createApi` 의 `baseQuery` 로 사용하는 것을 권장합니다.
- [`<ApiProvider />`](../rtk-query/api/ApiProvider.mdx): **Redux store가 없는 경우**  `Provider` 로 사용할 수 있습니다.
- [`setupListeners()`](../rtk-query/api/setupListeners.mdx): `refetchOnMount` 및 `refetchOnReconnect` 를 사용하기 위해 필요한 유틸리티 입니다.

[**RTK Query 살펴보기**](../rtk-query/overview.md) 페이지를 통해 RTK Query가 무엇인지, 어떤 문제를 해결하는지, 어떻게 사용하는지에 대해 확인할 수 있습니다.

## Redux 배우기

Redux를 배우는 데 도움이 되는 다양한 리소스가 있습니다.

### Redux Essentials Tutorial

[**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) 은 "Redux를 올바르게 사용하는 방법"을 가르치는 "하향식" 튜토리얼이며, 최신 권장 API 및 모범 사례를 사용합니다. 이 튜토리얼부터 시작하는 것을 추천합니다.

### Redux Fundamentals Tutorial

[**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) 은 추상화 없이 첫 번째 원칙에서 "Redux가 작동하는 방식"과 표준 Redux 사용 패턴이 존재하는 이유를 가르치는 "상향식" 튜토리얼입니다.

### Learn Modern Redux Livestream

Redux maintainer인 Mark Erikson은 "Learn with Jason" 쇼를 통해 오늘날의 Redux 권장 사용법에 대해 설명합니다. 이 쇼에서는 Redux Toolkit과 React-Redux hooks를 Typescript와 함께 사용하는 방법과 RTK Query를 통한 데이터 가져오기 API를 사용하는 법을 보여주는 live-coded 예시 어플리케이션이 포함되어 있습니다.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## 도움 및 논의

**[Reactiflux Discord community](http://www.reactiflux.com)** 의 **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** 에서 Redux와 관련된 질문의 공식 리소스를 확인할 수 있습니다. Reactiflux는 어울리고, 질문하고, 배울 수 있는 좋은 장소입니다 - 우리와 함께 하세요!

또한 [Stack Overflow](https://stackoverflow.com) 에서 **[#redux tag](https://stackoverflow.com/questions/tagged/redux)** 를 통해 질문할 수 있습니다.
