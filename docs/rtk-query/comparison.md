---
id: comparison
title: Comparison with Other Tools
sidebar_label: Comparison with Other Tools
hide_title: true
description: 'RTK Query > Comparison: Compares features and tradeoffs vs other similar tools'
---

&nbsp;

# Comparison with Other Tools

**RTK Query takes inspiration from many other data fetching libraries in the ecosystem**. Much like [the Redux core library was inspired by tools like Flux and Elm](https://redux.js.org/understanding/history-and-design/prior-art), RTK Query builds on API design patterns and feature concepts popularized by libraries like [React Query](https://react-query.tanstack.com/), [SWR](https://swr.vercel.app/), [Apollo](https://www.apollographql.com/), and [Urql](https://formidable.com/open-source/urql/). RTK Query has been written from scratch, but tries to use the best concepts from those libraries and other data fetching tools, with an eye towards leveraging the unique strengths and capabilities of Redux.

우리는 이 모든 툴들이 멋지다고 생각합니다! 만약 당신이 그 중 하나를 사용하고 있으며, 그에 만족하고, 그것이 당신의 어플리케이션에서 직면한 문제를 해결한다면 해당 툴을 계속 사용하세요. The information on this page is meant to help show **where there are differences in features, implementation approaches, and API design**. The goal is to help you **make informed decisions and understand tradeoffs**, rather than argue that tool X is better than tool Y.

## 언제 RTK Query를 사용해야하나요?

RTK Query를 사용하는 주된 이유로는:

- Redux 어플리케이션을 가지고 있으며, 이에 이미 작성된 Data Fetching 로직을 단순화하고 싶은 경우
- Redux DevTools를 통해 state의 history 변화를 보고 싶은 경우
- You want to be able to integrate the RTK Query behavior with the rest of the Redux ecosystem
- 어플리케이션 로직이 React 밖에서 동작하고 싶은 경우

### 특별한 기능들

RTK 쿼리에는 고려해 볼 만한 가치가 있는 몇 가지 고유한 API 디자인 측면과 기능들이 있습니다.

- With React Query and SWR, you usually define your hooks yourself, and you can do that all over the place and on the fly. With RTK Query, you do so in one central place by defining an "API slice" with multiple endpoints ahead of time. This allows for a more tightly integrated model of mutations automatically invalidating/refetching queries on trigger.
- Because RTK Query dispatches normal Redux actions as requests are processed, all actions are visible in the Redux DevTools. Additionally, every request is automatically visible to your Redux reducers and can easily update the global application state if necessary ([see example](https://github.com/reduxjs/redux-toolkit/issues/958#issuecomment-809570419)). You can use the endpoint [matcher functionality](./api/created-api/endpoints#matchers) to do additional processing of cache-related actions in your own reducers.
- Redux 자체와 마찬가지로, RTK Query는 UI에 구애받지 않으며 모든 UI 계층에서 사용할 수 있습니다.
- You can easily invalidate entities or patch existing query data (via `util.updateQueryData`) from middleware.
- RTK Query enables [streaming cache updates](./usage/streaming-updates.mdx), such as updating the initial fetched data as messages are received over a websocket, and has built in support for [optimistic updates](./usage/manual-cache-updates.mdx#optimistic-updates) as well.
- RTK Query ships a very tiny and flexible fetch wrapper: [`fetchBaseQuery`](./api/fetchBaseQuery.mdx). It's also very easy to [swap our client with your own](./usage/customizing-queries.mdx), such as using `axios`, `redaxios`, or something custom.
- RTK Query has [a (currently experimental) code-gen tool](https://github.com/reduxjs/redux-toolkit/tree/master/packages/rtk-query-codegen-openapi) that will take an OpenAPI spec or GraphQL schema and give you a typed API client, as well as provide methods for enhancing the generated client after the fact.

## Tradeoffs

### 캐시 정규화 및 중복 제거 미지원

RTK Query는 **여러 요청에서 동일한 항목에 대한 캐시 중복제거를 의도적으로 구현하지 _않았습니다_**. 그 이유로는 여러가지가 있는데:

- A fully normalized shared-across-queries cache is a _hard_ problem to solve
- 저희는 현재 그 문제를 해결하기위한 시간, 자원, 흥미가 충분하지 않습니다
- In many cases, simply refetching data when it's invalidated works well and is easier to understand
- At a minimum, RTKQ can help solve the general use case of "fetch some data", which is a big pain point for a lot of people

### 번들 사이즈

RTK Query는 고정된 크기를 앱의 번들 사이즈에 추가합니다. Since RTK Query builds on top of Redux Toolkit and React-Redux, the added size varies depending on whether you are already using those in your app. 예상되는 min+gzip 번들 사이즈는:

- 이미 RTK 를 사용중이라면: ~9kb for RTK Query and ~2kb for the hooks.
- 이미 RTK 를 사용중이지 않다면:
  - Without React: 17 kB for RTK+dependencies+RTK Query
  - With React: 19kB + React-Redux, which is a peer dependency

Adding additional endpoint definitions should only increase size based on the actual code inside the `endpoints` definitions, which will typically be just a few bytes.

The functionality included in RTK Query quickly pays for the added bundle size, and the elimination of hand-written data fetching logic should be a net improvement in size for most meaningful applications.

## 라이브러리 기능 비교

It's worth comparing the feature sets of all these tools to get a sense of their similarities and differences.

:::info

이 비교표는 최대한 정확하고 편향되지 않도록 노력하였습니다. 이러한 라이브러리 중 하나를 사용하보고 개선되어야 할 정보가 있다고 생각되면 [opening an issue](https://github.com/reduxjs/redux-toolkit/issues/new) 를 통해 자유롭게 변경 사항을 제안하세요 (with notes or evidence of claims).

:::

| Feature                                | rtk-query                               | [react-query]            | [apollo]                                                                            | [urql]                                                                                                      |
| -------------------------------------- | --------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Supported Protocols**                | any, REST included                      | any, none included       | GraphQL                                                                             | GraphQL                                                                                                     |
| **API Definition**                     | declarative                             | on use, declarative      | GraphQL schema                                                                      | GraphQL schema                                                                                              |
| **Cache by**                           | endpoint + serialized arguments         | user-defined query-key   | type/id                                                                             | type/id?                                                                                                    |
| **Invalidation Strategy + Refetching** | declarative, by type and/or type/id     | manual by cache key      | automatic cache updates on per-entity level, manual query invalidation by cache key | declarative, by type OR automatic cache updates on per-entity level, manual query invalidation by cache key |
| **Polling **                           | yes                                     | yes                      | yes                                                                                 | yes                                                                                                         |
| **Parallel queries **                  | yes                                     | yes                      | yes                                                                                 | yes                                                                                                         |
| **Dependent queries**                  | yes                                     | yes                      | yes                                                                                 | yes                                                                                                         |
| **Skip queries**                       | yes                                     | yes                      | yes                                                                                 | yes                                                                                                         |
| **Lagged queries**                     | yes                                     | yes                      | no                                                                                  | ?                                                                                                           |
| **Auto garbage collection**            | yes                                     | yes                      | no                                                                                  | ?                                                                                                           |
| **Normalized caching**                 | no                                      | no                       | yes                                                                                 | yes                                                                                                         |
| **Infinite scrolling**                 | TODO                                    | yes                      | requires manual code                                                                | ?                                                                                                           |
| **Prefetching**                        | yes                                     | yes                      | yes                                                                                 | yes?                                                                                                        |
| **Retrying**                           | yes                                     | yes                      | requires manual code                                                                | ?                                                                                                           |
| **Optimistic updates**                 | can update cache by hand                | can update cache by hand | `optimisticResponse`                                                                | ?                                                                                                           |
| **Manual cache manipulation**          | yes                                     | yes                      | yes                                                                                 | yes                                                                                                         |
| **Platforms**                          | hooks for React, everywhere Redux works | hooks for React          | various                                                                             | various                                                                                                     |

[react-query]: https://react-query.tanstack.com/
[apollo]: https://www.apollographql.com/
[urql]: https://formidable.com/open-source/urql/

## 추가 정보

- The [React Query "Comparison" page](https://react-query.tanstack.com/comparison) has an additional detailed feature set comparison table and discussion of capabilities
- Urql maintainer Phil Pluckthun wrote [an excellent explanation of what a "normalized cache" is and how Urql's cache works](https://kitten.sh/graphql-normalized-caching)
- The [RTK Query "Cache Behavior" page](./usage/cache-behavior.mdx#tradeoffs) has further details on why RTK Query does not implement a normalized cache
