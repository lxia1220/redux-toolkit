"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7854],{1528:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(5773),i=n(808),o=(n(7378),n(5318)),r=["components"],s={id:"typescript",title:"TypeScript Quick Start",sidebar_label:"TypeScript Quick Start",hide_title:!0},p=void 0,l={unversionedId:"tutorials/typescript",id:"tutorials/typescript",isDocsHomePage:!1,title:"TypeScript Quick Start",description:"&nbsp;",source:"@site/../docs/tutorials/typescript.md",sourceDirName:"tutorials",slug:"/tutorials/typescript",permalink:"/tutorials/typescript",tags:[],version:"current",lastUpdatedAt:1656208204,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"typescript",title:"TypeScript Quick Start",sidebar_label:"TypeScript Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"Quick Start",permalink:"/tutorials/quick-start"},next:{title:"RTK Query Quick Start",permalink:"/tutorials/rtk-query"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Project Setup",id:"project-setup",children:[{value:"Define Root State and Dispatch Types",id:"define-root-state-and-dispatch-types",children:[],level:3},{value:"Define Typed Hooks",id:"define-typed-hooks",children:[],level:3}],level:2},{value:"Application Usage",id:"application-usage",children:[{value:"Define Slice State and Action Types",id:"define-slice-state-and-action-types",children:[],level:3},{value:"Use Typed Hooks in Components",id:"use-typed-hooks-in-components",children:[],level:3}],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-toolkit-typescript-quick-start"},"Redux Toolkit TypeScript Quick Start"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ubc30\uc6b8 \ub0b4\uc6a9")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"TypeScript\uc640 \ud568\uaed8 Redux Toolkit \ubc0f React-Redux\ub97c \uc124\uc815\ud558\uace0 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"React ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")," \uc5d0 \ub300\ud55c \uc9c0\uc2dd "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux\uc758 \uc6a9\uc5b4 \ubc0f \uac1c\ub150")," \uc5d0 \ub300\ud55c \uc774\ud574"),(0,o.kt)("li",{parentName:"ul"},"TypeScript\uc758 \uad6c\ubb38 \ubc0f \uac1c\ub150\uc5d0 \ub300\ud55c \uc774\ud574")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Redux Toolkit Typescript Quick Start \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4! ",(0,o.kt)("strong",{parentName:"p"},"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 Redux Toolkit\uacfc \ud568\uaed8 TypeScript\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uac04\ub7b5\ud558\uac8c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4"),"."),(0,o.kt)("p",null,"\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 TypeScript\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \uc911\uc810\uc744 \ub461\ub2c8\ub2e4. Redux\uac00 \ubb34\uc5c7\uc778\uc9c0, \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0, Redux Toolkit\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc804\uccb4 \uc608\uc81c\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/overview"},'"Tutorials Overview" \ud398\uc774\uc9c0\uc5d0 \ub9c1\ud06c\ub41c \ud29c\ud1a0\ub9ac\uc5bc'),"\uc744 \ucc38\uc870\ud558\uc138\uc694."),(0,o.kt)("p",null,"Redux Toolkit\uc740 TypeScript\ub85c \uc791\uc131\ub418\uc5c8\uc73c\ubbc0\ub85c TS type \uc815\uc758\uac00 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org"},"React Redux")," has its type definitions in a separate ",(0,o.kt)("a",{parentName:"p",href:"https://npm.im/@types/react-redux"},(0,o.kt)("inlineCode",{parentName:"a"},"@types/react-redux")," typedefs package")," on NPM. In addition to typing the library functions, the types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components."),(0,o.kt)("p",null,"As of React Redux v7.2.3, the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux")," package has a dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/react-redux"),", so the type definitions will be automatically installed with the library. Otherwise, you'll need to manually install them yourself (typically ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @types/react-redux")," )."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux-typescript"},"Redux+TS template for Create-React-App")," comes with a working example of these patterns already configured."),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("h3",{id:"define-root-state-and-dispatch-types"},"Define Root State and Dispatch Types"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"/api/configureStore"},"configureStore")," should not need any additional typings. You will, however, want to extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootState")," type and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dispatch")," type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings."),(0,o.kt)("p",null,"Since those are types, it's safe to export them directly from your store setup file such as ",(0,o.kt)("inlineCode",{parentName:"p"},"app/store.ts")," and import them directly into other files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/store.ts"',title:'"app/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\n// ...\n\nexport const store = configureStore({\n  reducer: {\n    posts: postsReducer,\n    comments: commentsReducer,\n    users: usersReducer,\n  },\n})\n\n// highlight-start\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<typeof store.getState>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch\n// highlight-end\n")),(0,o.kt)("h3",{id:"define-typed-hooks"},"Define Typed Hooks"),(0,o.kt)("p",null,"While it's possible to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDispatch")," types into each component, it's ",(0,o.kt)("strong",{parentName:"p"},"better to create typed versions of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"useDispatch")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"useSelector")," hooks for usage in your application"),". This is important for a couple reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"useSelector"),", it saves you the need to type ",(0,o.kt)("inlineCode",{parentName:"li"},"(state: RootState)")," every time"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch"),", the default ",(0,o.kt)("inlineCode",{parentName:"li"},"Dispatch")," type does not know about thunks. In order to correctly dispatch thunks, you need to use the specific customized ",(0,o.kt)("inlineCode",{parentName:"li"},"AppDispatch")," type from the store that includes the thunk middleware types, and use that with ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch"),". Adding a pre-typed ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch")," hook keeps you from forgetting to import ",(0,o.kt)("inlineCode",{parentName:"li"},"AppDispatch")," where it's needed.")),(0,o.kt)("p",null,"Since these are actual variables, not types, it's important to define them in a separate file such as ",(0,o.kt)("inlineCode",{parentName:"p"},"app/hooks.ts"),", not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/hooks.ts"',title:'"app/hooks.ts"'},"import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'\nimport type { RootState, AppDispatch } from './store'\n\n// highlight-start\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nexport const useAppDispatch: () => AppDispatch = useDispatch\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector\n// highlight-end\n")),(0,o.kt)("h2",{id:"application-usage"},"Application Usage"),(0,o.kt)("h3",{id:"define-slice-state-and-action-types"},"Define Slice State and Action Types"),(0,o.kt)("p",null,"Each slice file should define a type for its initial state value, so that ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," can correctly infer the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," in each case reducer."),(0,o.kt)("p",null,"All generated actions should be defined using the ",(0,o.kt)("inlineCode",{parentName:"p"},"PayloadAction<T>")," type from Redux Toolkit, which takes the type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"action.payload")," field as its generic argument."),(0,o.kt)("p",null,"You can safely import the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootState")," type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="features/counter/counterSlice.ts"',title:'"features/counter/counterSlice.ts"'},"import { createSlice, PayloadAction } from '@reduxjs/toolkit'\nimport type { RootState } from '../../app/store'\n\n// highlight-start\n// Define a type for the slice state\ninterface CounterState {\n  value: number\n}\n\n// Define the initial state using that type\nconst initialState: CounterState = {\n  value: 0,\n}\n// highlight-end\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  // `createSlice` will infer the state type from the `initialState` argument\n  initialState,\n  reducers: {\n    increment: (state) => {\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    // highlight-start\n    // Use the PayloadAction type to declare the contents of `action.payload`\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      // highlight-end\n      state.value += action.payload\n    },\n  },\n})\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\n// Other code such as selectors can use the imported `RootState` type\nexport const selectCount = (state: RootState) => state.counter.value\n\nexport default counterSlice.reducer\n")),(0,o.kt)("p",null,"The generated action creators will be correctly typed to accept a ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," argument based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"PayloadAction<T>")," type you provided for the reducer. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementByAmount")," requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," as its argument."),(0,o.kt)("p",null,"In some cases, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-toolkit/pull/827"},"TypeScript may unnecessarily tighten the type of the initial state"),". If that happens, you can work around it by casting the initial state using ",(0,o.kt)("inlineCode",{parentName:"p"},"as"),", instead of declaring the type of the variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Workaround: cast state instead of declaring variable type\nconst initialState = {\n  value: 0,\n} as CounterState\n")),(0,o.kt)("h3",{id:"use-typed-hooks-in-components"},"Use Typed Hooks in Components"),(0,o.kt)("p",null,"In component files, import the pre-typed hooks instead of the standard hooks from React-Redux."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="features/counter/Counter.tsx"',title:'"features/counter/Counter.tsx"'},"import React, { useState } from 'react'\n\n// highlight-next-line\nimport { useAppSelector, useAppDispatch } from 'app/hooks'\n\nimport { decrement, increment } from './counterSlice'\n\nexport function Counter() {\n  // highlight-start\n  // The `state` arg is correctly typed as `RootState` already\n  const count = useAppSelector((state) => state.counter.value)\n  const dispatch = useAppDispatch()\n  // highlight-end\n\n  // omit rendering logic\n}\n")),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/usage/usage-with-typescript"},'the "Usage with TypeScript" page')," for extended details on how to use Redux Toolkit's APIs with TypeScript."))}u.isMDXComponent=!0}}]);