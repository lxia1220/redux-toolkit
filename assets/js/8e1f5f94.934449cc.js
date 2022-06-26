"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9489],{4464:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(5773),i=r(808),a=(r(7378),r(5318)),o=r(517),d=r(7637),l=["components"],s={id:"redux-integration",title:"API Slices: Redux Integration",sidebar_label:"Redux Integration",hide_title:!0},u=void 0,c={unversionedId:"rtk-query/api/created-api/redux-integration",id:"rtk-query/api/created-api/redux-integration",isDocsHomePage:!1,title:"API Slices: Redux Integration",description:"&nbsp;",source:"@site/../docs/rtk-query/api/created-api/redux-integration.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/redux-integration",permalink:"/redux-toolkit/rtk-query/api/created-api/redux-integration",tags:[],version:"current",lastUpdatedAt:1656209250,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"redux-integration",title:"API Slices: Redux Integration",sidebar_label:"Redux Integration",hide_title:!0},sidebar:"docs",previous:{title:"API Slice Overview",permalink:"/redux-toolkit/rtk-query/api/created-api/overview"},next:{title:"Endpoints",permalink:"/redux-toolkit/rtk-query/api/created-api/endpoints"}},p=[{value:"<code>reducerPath</code>",id:"reducerpath",children:[],level:2},{value:"<code>reducer</code>",id:"reducer",children:[],level:2},{value:"<code>middleware</code>",id:"middleware",children:[],level:2}],m={toc:p};function g(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-slices-redux-integration"},"API Slices: Redux Integration"),(0,a.kt)("p",null,"Internally, ",(0,a.kt)("inlineCode",{parentName:"p"},"createApi")," will call ",(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createSlice"},"the Redux Toolkit ",(0,a.kt)("inlineCode",{parentName:"a"},"createSlice")," API")," to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data. It also automatically generates a custom Redux middleware that manages subscription counts and cache lifetimes."),(0,a.kt)("p",null,"The generated slice reducer and the middleware both need to be added to your Redux store setup in ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," in order to work correctly:"),(0,a.kt)(d.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n  },\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n})\n\n// configure listeners using the provided defaults\nsetupListeners(store.dispatch)\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n  },\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n})\n\n// configure listeners using the provided defaults\nsetupListeners(store.dispatch)\n")))),(0,a.kt)("h2",{id:"reducerpath"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducerPath")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"reducerPath: string\n")),(0,a.kt)("p",null,"Contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"reducerPath")," option provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"createApi"),". Use this as the root state key when adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," function to the store so that the rest of the generated API logic can find the state correctly."),(0,a.kt)("h2",{id:"reducer"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"reducer: Reducer\n")),(0,a.kt)("p",null,"A standard Redux slice reducer function containing the logic for updating the cached data. Add this to the Redux store using the ",(0,a.kt)("inlineCode",{parentName:"p"},"reducerPath")," you provided as the root state key."),(0,a.kt)("h2",{id:"middleware"},(0,a.kt)("inlineCode",{parentName:"h2"},"middleware")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"middleware: Middleware\n")),(0,a.kt)("p",null,"A custom Redux middleware that contains logic for managing caching, invalidation, subscriptions, polling, and more. Add this to the store setup after other middleware."))}g.isMDXComponent=!0}}]);