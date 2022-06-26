---
id: overview
title: RTK Query Overview
sidebar_label: RTK Query Overview
hide_title: true
description: 'RTK Query > Overview: a summary of the RTK Query data caching API for Redux Toolkit'
---

&nbsp;

# RTK Query 개요

:::tip 배울 내용

- RTK 쿼리란 무엇이며 어떤 문제를 해결하는지
- RTK Query에 포함되어있는 API
- RTK Query 기본 사용법

:::

**RTK Query**는 강력한 data fetching 및 caching 도구입니다. 이는 웹 애플리케이션에서 데이터를 로드하는 일반적인 경우를 단순화하도록 설계되어 **data fetching 및 caching 로직을 직접 작성할 필요가 없습니다**.

RTK Query는 **Redux Toolkit 패키지에 포함된 선택적 애드온**이며, Redux Toolkit의 다른 API들을 통해 기능이 구현되어 있습니다.

:::info

RTK Query의 사용법을 배우고 싶다면, Redux core 문서인 ["Redux Essentials" tutorial](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics) 를 참조하세요

:::

## Motivation

웹 애플리케이션은 보통 데이터를 화면에 보여주기 위해 서버로부터 그 데이터를 가져올 필요가 있습니다. 또한, 그 데이터를 업데이트하고, 업데이트된 데이터를 서버로 보내고, 서버에 있는 데이터와 동기화한 클라이언트 측 데이터를 캐싱하여 보관할 필요도 있습니다. 요즘의 웹 애플리케이션들은 다음과 같은 많은 추가 기능들을 구현할 필요가 있기 때문에 이 과정들은 너무 복잡해지기 마련입니다:

- 스피너 UI 표시를 위한 로딩 상태 관리
- 같은 데이터에 대한 중복 요청 제거
- UI가 더 빠르게 느껴지도록 하기 위한 Optimistic updates
- 사용자가 UI와 상호 작용할 때의 캐시 수명 관리

Redux core는 항상 최소한으로 구성되어 있었으며 - 실제 로직을 어떻게 작성하는지는 개발자에게 달려 있었습니다. That means that Redux has never included anything built in to help solve these use cases. The Redux docs have taught [some common patterns for dispatching actions around the request lifecycle to track loading state and request results](https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#async-request-status), and [Redux Toolkit's `createAsyncThunk` API](../api/createAsyncThunk.mdx) was designed to abstract that typical pattern. However, users still have to write significant amounts of reducer logic to manage the loading state and the cached data.

지난 몇 년 간 React 커뮤니티는 "data fetching과 caching"은 "state management"와 완전히 다른 관심사라는 사실을 깨닫게 되었습니다. 여러분은 지금까지 그래왔듯이 앞으로도 데이터를 캐싱하기 위해 Redux와 같은 상태 관리 라이브러리를 사용할 수도 있지만, 데이터를 가져오는 상황을 해결하기 위한 목적으로 만들어진 도구를 사용하는 것이 더 나을 것입니다.

RTK Query는 이런 상황에서 해결법을 제시한 다른 도구들(Apollo Client, React Query, Urql, SWR)로부터 영감을 받아 탄생했습니다. 그러나 그들과는 다르게 API 디자인 방식에 다음과 같은 독특한 접근법들을 추가했습니다:

- data fetching과 caching 로직은 Redux Toolkit의 `createSlice`와 `createAsyncThunk` API 위에 구성되어 있습니다.
- Redux Toolkit은 UI 레이어에 구애받지 않기 때문에, 이의 API를 사용하는 RTK Query또한 모든 UI 레이어에서 사용할 수 있습니다.
- API 엔드포인트는 인수에서 쿼리 매개변수를 생성하고 캐싱을 위해 응답을 변환하는 방법을 포함하여 미리 정의됩니다.
- RTK Query는 또한 전체 data fetching 프로세스를 캡슐화하고, 컴포넌트에 `data` 및 `isLoading` 필드를 제공하며, 컴포넌트가 마운트 및 마운트 해제될 때 캐시된 데이터의 수명을 관리하는 React hook을 생성할 수 있습니다.
- RTK Query는 초기 데이터를 가져온 후 웹 소켓 메시지를 통한 업데이트가 진행되는 streaming cache updates와 같은 사용 사례를 위해 "cache entry lifecycle" 옵션을 제공합니다.
- OpenAPI와 GraphQL 스키마에서 API slice를 만드는 code generation 예제를 제공합니다.
- 마지막으로, RTK Query는 완전히 TypeScript로 작성되었으며 우수한 TS 사용 경험을 제공하도록 설계되었습니다.

## What's included

### APIs

RTK Query는 Redux Toolkit 패키지에 포함되어있습니다. It is available via either of the two entry points below:

```ts no-transpile
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

RTK Query 는 다음 API들을 포함하고 있습니다:

- [`createApi()`](./api/createApi.mdx): RTK Query의 기능의 핵심입니다. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
- [`fetchBaseQuery()`](./api/fetchBaseQuery.mdx): 간단한 요청을 위한 [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 의 wrapper입니다. 대부분의 사용자에게 `createApi` 의 `baseQuery` 로 사용하는 것을 권장합니다.
- [`<ApiProvider />`](./api/ApiProvider.mdx): **Redux store가 없는 경우**  `Provider` 로 사용할 수 있습니다.
- [`setupListeners()`](./api/setupListeners.mdx): `refetchOnMount` 및 `refetchOnReconnect` 를 사용하기 위해 필요한 유틸리티 입니다.

### Bundle Size

RTK Query는 고정된 크기를 앱의 번들 사이즈에 추가합니다. Since RTK Query builds on top of Redux Toolkit and React-Redux, the added size varies depending on whether you are already using those in your app. 예상되는 min+gzip 번들 사이즈는:

- 이미 RTK 를 사용중이라면: ~9kb for RTK Query and ~2kb for the hooks.
- 이미 RTK 를 사용중이지 않다면:
  - Without React: 17 kB for RTK+dependencies+RTK Query
  - With React: 19kB + React-Redux, which is a peer dependency

Adding additional endpoint definitions should only increase size based on the actual code inside the `endpoints` definitions, which will typically be just a few bytes.

The functionality included in RTK Query quickly pays for the added bundle size, and the elimination of hand-written data fetching logic should be a net improvement in size for most meaningful applications.

## Basic Usage

### Create an API Slice

RTK Query는 Redux Toolkit 패키지에 포함되어있습니다. 다음과 같은 두가지 엔트리 포인트를 통해 사용할 수 있습니다:

```ts
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

React와의 일반적인 사용법은 `createApi`를 가져와서 서버의 기본 URL과 상호 작용하려는 엔드포인트를 나열하는 "API 슬라이스"를 정의하는 것으로 시작합니다:

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
```

### Store 구성하기

"API slice"에는 자동으로 생성되는 Redux slice 리듀서와 구독 수명을 관리하는 커스텀 미들웨어가 포함되어 있습니다. 다음과 같이 둘 모두 Redux Store에 등록해야 합니다:

```ts
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
```

### 컴포넌트에서 hook 사용하기

최종적으로 API 슬라이스에서 자동 생성된 React hook을 컴포넌트 파일로 가져와 필요한 매개변수를 사용하여 컴포넌트의 hook을 호출합니다. RTK Query는 마운트 시 자동으로 데이터를 가져오고, 매개변수가 변경되면 다시 데이터를 가져오게 되며, 결과에 `{data, isFetching}` 값을 제공하고, 해당 값이 변경되면 컴포넌트를 다시 렌더링합니다:

```ts
import * as React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  
  // render UI based on data and loading state
}
```

## 추가 정보

[**RTK Query Quick Start tutorial**](../tutorials/rtk-query.mdx/) 에서 Redux Toolkit을 사용하는 프로젝트에 RTK Query를 추가하고, 엔드포인트 정의로 "API slice"를 설정하고, 컴포넌트에서 자동 생성된 React hook을 사용하는 방법에 대한 예시를 확인할 수 있습니다.

[**RTK Query usage guide section**](./usage/queries.mdx) 에는 [querying data](./usage/queries.mdx), [mutation을 통해 서버로 업데이트 요청 전송](./usage/mutations.mdx), [streaming cache updates](./usage/streaming-updates.mdx) 등과 같은 주제에 대한 정보가 있습니다.

[**예제 페이지**](./usage/examples.mdx)에는 [GraphQL로 쿼리 작성하기](./usage/examples.mdx#react-with-graphql), [authentication](./usage/examples.mdx#authentication), [Svelte와 같은 다른 UI 라이브러리와 함께 RTK Query 사용하기](./usage/examples.mdx#svelte)와 같은 주제를 보여주는 실행 가능한 CodeSandbox가 있습니다.
