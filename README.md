# 오픈소스SW입문(F044-1) 기말 과제

## 주제 선정

Redux Toolkit은 Redux를 보다 쉽게 사용할 수 있도록 해주는 라이브러리로서, 기존의 Redux에서는 작업시 많아지는 액션을 관리하기 위해 redux-actions을, 불변성 보존을 위한 immer, store값을 효율적으로 핸들링하여 불필요한 리렌더링을 막기 위해 reselect, 비동기 작업을 위한 thunk 와 saga 등 리덕스의 유효한 기능을 사용하기 위해 4~5개의 라이브러리를 사용해야 했으며 이에 따른 방대한 Boilerplate 코드를을 필요로 했습니다. Redux Toolkit은 위의 문제점을 해결하여 처음 Redux를 사용하는 사용자들에게 보다 높은 접근성을 제공 해 줍니다. 그러나 이에 대한 번역 문서들이 명확히 존재하지 않아, 이를 해결하고자 선정하였습니다.

## 진행 방식

Redux Toolkit의 목적이 Redux를 보다 쉽고 간결하게 사용하게 해줄 수 있는 라이브러리를 지향하고 있으므로 초보자에게 도움이 되는 문서들 (기본 사용법, 예시 등) 을 우선순위로 두고, 상세한 설명이 요구되는 API Reference와 같은 내용은 후순위로 두었습니다. 진행 중 한글화가 어렵거나, 번역하였을때 의미 전달이 어려운 용어, 그리고 해당 라이브러리에서 사용되는 고유명사의 경우엔 명확한 의미 전달을 위해 원문으로 남겨두었습니다.

## 번역 현황

Full-document는 아래 주소에서 확인할 수 있습니다.

[원문](https://redux-toolkit.js.org/) (https://redux-toolkit.js.org/)

[번역](https://lxia1220.github.io/redux-toolkit/) (https://lxia1220.github.io/redux-toolkit/)


추가적으로 아래 목차의 제목을 통해 diffsite를 통한 원본과 번역본 비교를 동시에 확인할 수 있습니다.

PC 환경의 경우 Viewport width를 iPad로 설정하여 보는 것을 권장합니다.

- [x] Introduction
  - [x] [Getting Started - **90%**](https://pianomister.github.io/diffsite/?url1=https%3A%2F%2Flxia1220.github.io%2Fredux-toolkit%2Fintroduction%2Fgetting-started&url2=https%3A%2F%2Fredux-toolkit.js.org%2Fintroduction%2Fgetting-started)
- [x] Tutorials
  - [x] [Tutorials Overview - **100%**](https://pianomister.github.io/diffsite/?url1=https%3A%2F%2Flxia1220.github.io%2Fredux-toolkit%2Ftutorials%2Foverview&url2=https%3A%2F%2Fredux-toolkit.js.org%2Ftutorials%2Foverview)
  - [x] [Quick Start - **100%**](https://pianomister.github.io/diffsite/?url1=https%3A%2F%2Flxia1220.github.io%2Fredux-toolkit%2Ftutorials%2Fquick-start&url2=https%3A%2F%2Fredux-toolkit.js.org%2Ftutorials%2Fquick-start)
  - [x] Typescript Quick Start - **50%**
  - [x] RTK Query Quick Start - **90%**
- [x] Using Redux Toolkit
    - [x] Usage Guide - **30%**
    - [x] Usage With Typescript - **30%**
    - [x] Writting Reducers with Immer - **70%**
- [ ] API Reference - **10%**
- [x] RTK Query
  - [x] RTK Query Overview - **97%**
  - [x] Comparision with Other Tools - **70%**
  - [x] Examples - **100%**
  - [x] Usage with Typescript - **30%**
  - [x] Using RTK Query
    - [x] Queries - **60%**
    - [x] Mutations - **0%**
    - [x] Cache Behavior - **30%**
    - [ ] Automated Re-fetching - **0%**
    - [ ] Manual Cache Updates - **0%**
    - [x] Conditional Fetching - **100%**
    - [x] Error Handling - **100%**
    - [ ] Pagination - **10%**
    - [ ] Prefetching - **10%**
    - [x] Polling - **100%**
    - [ ] Streaming Updates - **0%**
    - [x] Code Splitting - **100%**
    - [x] Code Generation - **100%**
    - [x] Server Side Rendering - **100%**
    - [ ] Persistence and Rehydration - **0%**
    - [ ] Customizing createApi - **0%**
    - [ ] Customizing Queries - **0%**
    - [ ] Usage Without React Hooks - **0%**
    - [ ] Migrating to RTK Query - **10%**
  - [ ] API Reference - **0%**

## 아쉬운점

RTK에서 새로이 RTK Query가 추가되면서 예상했던 것 보다 문서의 분량이 방대해졌습니다. 이러한 방대한 양으로 인해 과제 기간동안에 모든 문서에 대해 번역작업을 하지는 못했으나, 이후 남은 문서들의 번역을 완료된다면 KR Doc을 할당하기로 이야기를 나누어 두어 과제 제출 이후에도 남은 작업을 완료한 뒤 MR을 통해 번역본을 전달 할 예정입니다.
