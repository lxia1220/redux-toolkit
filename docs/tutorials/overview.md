---
id: tutorials-overview
slug: overview
title: Tutorials Overview
sidebar_label: Tutorials Overview
hide_title: true
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

&nbsp;

# Tutorials Overview

**Redux core 문서 사이트인 https://redux.js.org 에는 Redux 학습을 위한 기본 튜토리얼과 함께**, Redux Toolkit과 React-Redux를 함께 사용하는 방법이 포함되어 있습니다.

:::tip

Redux core와 Redux Toolkit의 문서 간 중복 설명을 피하기 위해 Redux core 문서의 튜토리얼을 포괄적으로 만드는 데 중점을 두었으며, Redux Toolkit 문서에서 내용을 늘리는 대신 이를 가리키도록 하였습니다.

:::

Redux Toolkit을 효과적으로 사용하는 방법을 배우려면 다음의 링크된 튜토리얼들을 참조하세요.

## Redux Toolkit Quick Starts

[**Redux Toolkit Quick Start tutorial**](./quick-start.mdx) 은 React 애플리케이션에서 Redux Toolkit을 추가하고 사용하는 방법을 간략하게 보여줍니다.

**기본 예시를 빠르게 실행 해 보고 싶다면 Quick Start tutorial을 확인하세요.**

Redux Toolkit 및 React-Redux와 함께 TypeScript를 설정하고 사용하는 방법을 간략하게 보여주는 [**TypeScript Quick Start tutorial**](./typescript.md)도 있습니다.

## Redux Essentials: A Real-World Example

[**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) 은 Redux 로직을 작성하기 위한 표준 접근 방식으로 Redux Toolkit을 사용하여 "올바른 방법으로 Redux를 사용하는 방법"을 알려줍니다.

이것은 "real world" 스타일의 예제 애플리케이션을 구축하는 방법을 보여주며 그 과정에서 Redux의 개념을 가르칩니다.

**이전에 Redux를 사용한 적이 없고 "이것을 사용하여 유용한 것을 구축하는 방법"을 알고 싶다면 Redux Essentials 튜토리얼부터 시작하세요.**

## Redux Fundamentals: Redux from the Ground Up

[**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview)  은 Redux 코드를 손으로 작성하는 방법과 표준 사용 패턴이 존재하는 이유를 보여줌으로써 "Redux가 어떻게 작동하는지, 아래에서 위로" 가르쳐줍니다. 그뒤, Redux Toolkit이 이러한 Redux 사용 패턴을 어떻게 단순화하는지에 대해 보여줍니다.

Redux Toolkit은 Redux core를 둘러싸는 추상화 계층이므로 RTK의 API가 내부에서 실제로 무엇을 하는지 아는 것이 도움이 됩니다. **Redux가 실제로 작동하는 방식과 RTK가 권장되는 접근 방식인 이유를 이해하려면 Redux 기초 튜토리얼을 읽어보세요.**

## Learn Modern Redux Livestream

Redux maintainer인 Mark Erikson은 "Learn with Jason" 쇼를 통해 오늘날의 Redux 권장 사용법에 대해 설명합니다. 이 쇼에서는 Redux Toolkit과 React-Redux hooks를 Typescript와 함께 사용하는 방법과 RTK Query를 통한 데이터 가져오기 API를 사용하는 법을 보여주는 live-coded 예시 어플리케이션이 포함되어 있습니다.

transcript 및 예제 앱 소스에 대한 링크는 [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) 를 참조하세요.

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## Redux Toolkit 사용하기

[RTK **사용 가이드** 문서 페이지](../usage/usage-guide.md) 에서는 각 RTK API의 표준 사용 패턴을 설명합니다. [API 참조](../api/configureStore.mdx) 섹션에서는 각 API 기능에 대한 설명과 추가 사용 예가 있습니다.

또한 [Redux Essentials 튜토리얼](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) 은  애플리케이션을 빌드하는 동안 각 API를 사용하는 방법을 보여줍니다.

## Vanilla Redux를 Redux Toolkit로 이전하기

이미 Redux에 대해 알고 있고 Redux Toolkit으로 이전하고 싶은 방법을 알고 싶은 경우, [**"Modern Redux with Redux Toolkit" page in the Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux) 에서 어떻게 RTK의 API가 Redux의 패턴을 단순화 하는지와 이로 이전 하는 방법을 확인할 수 있습니다.

## TypeScript와 함께 Redux Toolkit 사용하기

RTK 문서 페이지 중 [**Usage with TypeScript**](../usage/usage-with-typescript.md) 에서는 TypeScript 및 React로 Redux 툴킷을 설정하기 위한 기본 패턴을 보여주고 각 RTK API에 대한 특정 TS 패턴을 보여줍니다.

또한, [Redux + TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) 은 이러한 TS 패턴을 사용하도록 이미 구성된 RTK와 함께 제공되며, 이것이 어떻게 작동하는지 이해하는데에 대한 좋은 예입니다.

## Legacy Redux Toolkit Tutorials

이전의 Redux Toolkit 문서에 "기본/중급/고급" 튜토리얼 세트가 있었습니다. 그것들은 도움이 되었지만 Redux core 문서에서 "Essentials" 및 "Fundamentals" 튜토리얼을 가리키기 위해 그것들을 제거했습니다.

이전 자습서를 보고싶다면, 저장소 기록에서 해당 콘텐츠 파일을 볼 수 있습니다.

[Redux Toolkit repo: legacy "Basic/Intermediate/Advanced" tutorial files](https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials)
