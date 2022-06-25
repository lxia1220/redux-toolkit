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

The [**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) teaches you "how to use Redux the right way", using Redux Toolkit as the standard approach for writing Redux logic.

It shows how to build a "real world"-style example application, and teaches Redux concepts along the way.

**If you've never used Redux before, and just want to know "how do I use this to build something useful?", start with the Redux Essentials tutorial.**

## Redux Fundamentals: Redux from the Ground Up

The [**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) teaches "how Redux works, from the bottom up", by showing how to write Redux code by hand and why standard usage patterns exist. It then shows how Redux Toolkit simplifies those Redux usage patterns.

Since Redux Toolkit is an abstraction layer that wraps around the Redux core, it's helpful to know what RTK's APIs are actually doing for you under the hood. **If you want to understand how Redux really works and why RTK is the recommended approach, read the Redux Fundamentals tutorial.**

## Learn Modern Redux Livestream

Redux maintainer인 Mark Erikson은 "Learn with Jason" 쇼를 통해 오늘날의 Redux 권장 사용법에 대해 설명합니다. 이 쇼에서는 Redux Toolkit과 React-Redux hooks를 Typescript와 함께 사용하는 방법과 RTK Query를 통한 데이터 가져오기 API를 사용하는 법을 보여주는 live-coded 예시 어플리케이션이 포함되어 있습니다.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

## Using Redux Toolkit

The RTK [**Usage Guide** docs page](../usage/usage-guide.md) explains the standard usage patterns for each of RTK's APIs. The [API Reference](../api/configureStore.mdx) section describes each API function and has additional usage examples.

The [Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) also shows how to use each of the APIs while building an application.

## Vanilla Redux를 Redux Toolkit로 이전하기

이미 Redux에 대해 알고 있고 Redux Toolkit으로 이전하고 싶은 방법을 알고 싶은 경우, [**"Modern Redux with Redux Toolkit" page in the Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux) 에서 어떻게 RTK의 API가 Redux의 패턴을 단순화 하는지와 이로 이전 하는 방법을 확인할 수 있습니다.

## TypeScript와 함께 Redux Toolkit 사용하기

The RTK docs page on [**Usage with TypeScript**](../usage/usage-with-typescript.md) shows the basic pattern for setting up Redux Toolkit with TypeScript and React, and documents specific TS patterns for each of the RTK APIs.

In addition, the [Redux + TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with RTK already configured to use those TS patterns, and serves as a good example of how this should work.

## Legacy Redux Toolkit Tutorials

We previously had a set of "Basic/Intermediate/Advanced" tutorials directly in the Redux Toolkit docs. They were helpful, but we've removed them in favor of pointing to the "Essentials" and "Fundamentals" tutorials in the Redux core docs.

If you'd like to browse the old tutorials, you can see the content files in our repo's history:

[Redux Toolkit repo: legacy "Basic/Intermediate/Advanced" tutorial files](https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials)
