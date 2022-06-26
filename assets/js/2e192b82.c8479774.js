"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4519],{2851:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(5773),r=n(808),a=(n(7378),n(5318)),i=n(3245),l=n(1478),d=["components"],s={id:"configureStore",title:"configureStore",sidebar_label:"configureStore",hide_title:!0},u=void 0,c={unversionedId:"api/configureStore",id:"api/configureStore",isDocsHomePage:!1,title:"configureStore",description:"&nbsp;",source:"@site/../docs/api/configureStore.mdx",sourceDirName:"api",slug:"/api/configureStore",permalink:"/redux-toolkit/api/configureStore",tags:[],version:"current",lastUpdatedAt:1656209359,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"configureStore",title:"configureStore",sidebar_label:"configureStore",hide_title:!0},sidebar:"docs",previous:{title:"Writing Reducers with Immer",permalink:"/redux-toolkit/usage/immer-reducers"},next:{title:"getDefaultMiddleware",permalink:"/redux-toolkit/api/getDefaultMiddleware"}},p=[{value:"Parameters",id:"parameters",children:[{value:"<code>reducer</code>",id:"reducer",children:[],level:3},{value:"<code>middleware</code>",id:"middleware",children:[],level:3},{value:"<code>devTools</code>",id:"devtools",children:[],level:3},{value:"<code>preloadedState</code>",id:"preloadedstate",children:[],level:3},{value:"<code>enhancers</code>",id:"enhancers",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Basic Example",id:"basic-example",children:[],level:3},{value:"Full Example",id:"full-example",children:[],level:3}],level:2}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurestore"},(0,a.kt)("inlineCode",{parentName:"h1"},"configureStore")),(0,a.kt)("p",null,"A friendly abstraction over the standard Redux ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," function that adds good defaults\nto the store setup for a better development experience."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," accepts a single configuration object parameter, with the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"type ConfigureEnhancersCallback = (\n  defaultEnhancers: StoreEnhancer[]\n) => StoreEnhancer[]\n\ninterface ConfigureStoreOptions<\n  S = any,\n  A extends Action = AnyAction,\n  M extends Middlewares<S> = Middlewares<S>\n> {\n  /**\n   * A single reducer function that will be used as the root reducer, or an\n   * object of slice reducers that will be passed to `combineReducers()`.\n   */\n  reducer: Reducer<S, A> | ReducersMapObject<S, A>\n\n  /**\n   * An array of Redux middleware to install. If not supplied, defaults to\n   * the set of middleware returned by `getDefaultMiddleware()`.\n   */\n  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M\n\n  /**\n   * Whether to enable Redux DevTools integration. Defaults to `true`.\n   *\n   * Additional configuration can be done by passing Redux DevTools options\n   */\n  devTools?: boolean | DevToolsOptions\n\n  /**\n   * The initial state, same as Redux's createStore.\n   * You may optionally specify it to hydrate the state\n   * from the server in universal apps, or to restore a previously serialized\n   * user session. If you use `combineReducers()` to produce the root reducer\n   * function (either directly or indirectly by passing an object as `reducer`),\n   * this must be an object with the same shape as the reducer map keys.\n   */\n  preloadedState?: DeepPartial<S extends any ? S : S>\n\n  /**\n   * The store enhancers to apply. See Redux's `createStore()`.\n   * All enhancers will be included before the DevTools Extension enhancer.\n   * If you need to customize the order of enhancers, supply a callback\n   * function that will receive the original array (ie, `[applyMiddleware]`),\n   * and should return a new array (such as `[applyMiddleware, offline]`).\n   * If you only need to add middleware, you can use the `middleware` parameter instead.\n   */\n  enhancers?: StoreEnhancer[] | ConfigureEnhancersCallback\n}\n\nfunction configureStore<S = any, A extends Action = AnyAction>(\n  options: ConfigureStoreOptions<S, A>\n): EnhancedStore<S, A>\n")),(0,a.kt)("h3",{id:"reducer"},(0,a.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,a.kt)("p",null,"If this is a single function, it will be directly used as the root reducer for the store."),(0,a.kt)("p",null,"If it is an object of slice reducers, like ",(0,a.kt)("inlineCode",{parentName:"p"},"{users : usersReducer, posts : postsReducer}"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," will automatically create the root reducer by passing this object to the\n",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/api/combinereducers"},"Redux ",(0,a.kt)("inlineCode",{parentName:"a"},"combineReducers")," utility"),"."),(0,a.kt)("h3",{id:"middleware"},(0,a.kt)("inlineCode",{parentName:"h3"},"middleware")),(0,a.kt)("p",null,"An optional array of Redux middleware functions"),(0,a.kt)("p",null,"If this option is provided, it should contain all the middleware functions you\nwant added to the store. ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," will automatically pass those to ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),"."),(0,a.kt)("p",null,"If not provided, ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," will call ",(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," and use the\narray of middleware functions it returns."),(0,a.kt)("p",null,"Where you wish to add onto or customize the default middleware,\nyou may pass a callback function that will receive ",(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," as its argument,\nand should return a middleware array."),(0,a.kt)("p",null,"For more details on how the ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," parameter works and the list of middleware that are added by default, see the\n",(0,a.kt)("a",{parentName:"p",href:"/redux-toolkit/api/getDefaultMiddleware"},(0,a.kt)("inlineCode",{parentName:"a"},"getDefaultMiddleware")," docs page"),"."),(0,a.kt)("h3",{id:"devtools"},(0,a.kt)("inlineCode",{parentName:"h3"},"devTools")),(0,a.kt)("p",null,"If this is a boolean, it will be used to indicate whether ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," should automatically enable support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"the Redux DevTools browser extension"),"."),(0,a.kt)("p",null,"If it is an object, then the DevTools Extension will be enabled, and the options object will be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"composeWithDevtools()"),". See\nthe DevTools Extension docs for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"EnhancerOptions"))," for\na list of the specific options that are available."),(0,a.kt)("p",null,"\uae30\ubcf8 \uac12\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"The Redux DevTools Extension recently added ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/d4ef75691ad294646f74bca38b973b19850a37cf/docs/Features/Trace.md"},"support for showing action stack traces")," that show exactly where each action was dispatched. Capturing the traces can add a bit of overhead, so the DevTools Extension allows users to configure whether action stack traces are captured."),(0,a.kt)("p",null,"If the DevTools are enabled by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or an object, then ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," will default to enabling capturing action stack traces in development mode only."),(0,a.kt)("h3",{id:"preloadedstate"},(0,a.kt)("inlineCode",{parentName:"h3"},"preloadedState")),(0,a.kt)("p",null,"An optional initial state value to be passed to the Redux ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," function."),(0,a.kt)("h3",{id:"enhancers"},(0,a.kt)("inlineCode",{parentName:"h3"},"enhancers")),(0,a.kt)("p",null,"An optional array of Redux store enhancers, or a callback function to customize the array of enhancers."),(0,a.kt)("p",null,"If defined as an array, these will be passed to ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/api/compose"},"the Redux ",(0,a.kt)("inlineCode",{parentName:"a"},"compose")," function"),", and the combined enhancer will be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore"),"."),(0,a.kt)("p",null,"This should ",(0,a.kt)("em",{parentName:"p"},"not")," include ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," or the Redux DevTools Extension ",(0,a.kt)("inlineCode",{parentName:"p"},"composeWithDevTools"),", as those are already handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"enhancers: [offline]")," will result in a final setup of ",(0,a.kt)("inlineCode",{parentName:"p"},"[applyMiddleware, offline, devToolsExtension]"),"."),(0,a.kt)("p",null,"If defined as a callback function, it will be called with the existing array of enhancers ",(0,a.kt)("em",{parentName:"p"},"without")," the DevTools Extension (currently ",(0,a.kt)("inlineCode",{parentName:"p"},"[applyMiddleware]"),"),\nand should return a new array of enhancers. This is primarily useful for cases where a store enhancer needs to be added\nin front of ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-first-router")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-offline"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"enhancers: (defaultEnhancers) => [offline, ...defaultEnhancers]")," will result in a final setup\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"[offline, applyMiddleware, devToolsExtension]"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport rootReducer from './reducers'\n\nconst store = configureStore({ reducer: rootReducer })\n// The store now has redux-thunk added and the Redux DevTools Extension is turned on\n"))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport rootReducer from './reducers'\n\nconst store = configureStore({ reducer: rootReducer })\n// The store now has redux-thunk added and the Redux DevTools Extension is turned on\n")))),(0,a.kt)("h3",{id:"full-example"},"Full Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"// file: todos/todosReducer.ts noEmit\nimport { Reducer } from '@reduxjs/toolkit'\ndeclare const reducer: Reducer<{}>\nexport default reducer\n\n// file: visibility/visibilityReducer.ts noEmit\nimport { Reducer } from '@reduxjs/toolkit'\ndeclare const reducer: Reducer<{}>\nexport default reducer\n\n// file: store.ts\nimport { configureStore } from '@reduxjs/toolkit'\n\n// We'll use redux-logger just as an example of adding another middleware\nimport logger from 'redux-logger'\n\n// And use redux-batched-subscribe as an example of adding enhancers\nimport { batchedSubscribe } from 'redux-batched-subscribe'\n\nimport todosReducer from './todos/todosReducer'\nimport visibilityReducer from './visibility/visibilityReducer'\n\nconst reducer = {\n  todos: todosReducer,\n  visibility: visibilityReducer,\n}\n\nconst preloadedState = {\n  todos: [\n    {\n      text: 'Eat food',\n      completed: true,\n    },\n    {\n      text: 'Exercise',\n      completed: false,\n    },\n  ],\n  visibilityFilter: 'SHOW_COMPLETED',\n}\n\nconst debounceNotify = _.debounce(notify => notify());\n\nconst store = configureStore({\n  reducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n  devTools: process.env.NODE_ENV !== 'production',\n  preloadedState,\n  enhancers: [batchedSubscribe(debounceNotify)],\n})\n\n// The store has been created with these options:\n// - The slice reducers were automatically passed to combineReducers()\n// - redux-thunk and redux-logger were added as middleware\n// - The Redux DevTools Extension is disabled for production\n// - The middleware, batched subscribe, and devtools enhancers were composed together\n")))}m.isMDXComponent=!0}}]);