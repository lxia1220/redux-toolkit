"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6091],{1753:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p}});var n=a(5773),i=a(808),l=(a(7378),a(5318)),r=a(517),d=a(7637),o=["components"],m={id:"immutabilityMiddleware",title:"Immutability Middleware",sidebar_label:"Immutability Middleware",hide_title:!0},u=void 0,s={unversionedId:"api/immutabilityMiddleware",id:"api/immutabilityMiddleware",isDocsHomePage:!1,title:"Immutability Middleware",description:"&nbsp;",source:"@site/../docs/api/immutabilityMiddleware.mdx",sourceDirName:"api",slug:"/api/immutabilityMiddleware",permalink:"/api/immutabilityMiddleware",tags:[],version:"current",lastUpdatedAt:1656208204,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"immutabilityMiddleware",title:"Immutability Middleware",sidebar_label:"Immutability Middleware",hide_title:!0},sidebar:"docs",previous:{title:"getDefaultMiddleware",permalink:"/api/getDefaultMiddleware"},next:{title:"Serializability Middleware",permalink:"/api/serializabilityMiddleware"}},p=[{value:"Options",id:"options",children:[],level:2},{value:"Exports",id:"exports",children:[{value:"<code>createImmutableStateInvariantMiddleware</code>",id:"createimmutablestateinvariantmiddleware",children:[],level:3},{value:"<code>isImmutableDefault</code>",id:"isimmutabledefault",children:[],level:3}],level:2}],c={toc:p};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"immutability-middleware"},"Immutability Middleware"),(0,l.kt)("p",null,"A port of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/leoasis/redux-immutable-state-invariant"},(0,l.kt)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant"))," middleware, customized for use with Redux Toolkit. Any detected mutations will be thrown as errors."),(0,l.kt)("p",null,"\uc774 \ubbf8\ub4e4\uc6e8\uc5b4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/api/configureStore"},(0,l.kt)("inlineCode",{parentName:"a"},"configureStore"))," \uc758 ",(0,l.kt)("a",{parentName:"p",href:"/api/getDefaultMiddleware"},(0,l.kt)("inlineCode",{parentName:"a"},"getDefaultMiddleware"))," \uc5d0 \uc758\ud574 \uae30\ubcf8\uc801\uc73c\ub85c store\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," \uc5d0 \uc804\ub2ec\ub418\ub294 \uc635\uc158 \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"immutableCheck")," \uac12\uc744 \ud1b5\ud574 \uc774 \ubbf8\ub4e4\uc6e8\uc5b4\uc758 \ub3d9\uc791\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"type IsImmutableFunc = (value: any) => boolean\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  /**\n    Callback function to check if a value is considered to be immutable.\n    This function is applied recursively to every value contained in the state.\n    The default implementation will return true for primitive types \n    (like numbers, strings, booleans, null and undefined).\n   */\n  isImmutable?: IsImmutableFunc\n  /** \n    An array of dot-separated path strings that match named nodes from \n    the root state to ignore when checking for immutability.\n    Defaults to undefined\n   */\n  ignoredPaths?: string[]\n  /** Print a warning if checks take longer than N ms. Default: 32ms */\n  warnAfter?: number\n  // @deprecated. Use ignoredPaths\n  ignore?: string[]\n}\n")),(0,l.kt)("h2",{id:"exports"},"Exports"),(0,l.kt)("h3",{id:"createimmutablestateinvariantmiddleware"},(0,l.kt)("inlineCode",{parentName:"h3"},"createImmutableStateInvariantMiddleware")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc635\uc158\uc73c\ub85c immutability check middleware\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"You will most likely not need to call this yourself, as ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," already does so."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(d.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// file: exampleSlice.ts\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.ts\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: [immutableInvariantMiddleware],\n})\n"))),(0,l.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// file: exampleSlice.ts\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.ts\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: [immutableInvariantMiddleware],\n})\n")))),(0,l.kt)("p",null,"doing the same without removing all other middlewares, using ",(0,l.kt)("a",{parentName:"p",href:"./getDefaultMiddleware"},"getDetfaultMiddleware"),":"),(0,l.kt)(d.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // This replaces the original default middleware with the customized versions\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n"))),(0,l.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // This replaces the original default middleware with the customized versions\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n")))),(0,l.kt)("h3",{id:"isimmutabledefault"},(0,l.kt)("inlineCode",{parentName:"h3"},"isImmutableDefault")),(0,l.kt)("p",null,'Default implementation of the "is this value immutable?" check. Currently implemented as:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"return (\n  typeof value !== 'object' || value === null || typeof value === 'undefined'\n)\n")),(0,l.kt)("p",null,"This will return true for primitive types (like numbers, strings, booleans, null and undefined)"))}f.isMDXComponent=!0}}]);