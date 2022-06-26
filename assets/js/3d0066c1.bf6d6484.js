"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6849],{4384:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var i=t(5773),n=t(808),l=(t(7378),t(5318)),r=t(517),s=t(7637),o=["components"],d={id:"serializabilityMiddleware",title:"Serializability Middleware",sidebar_label:"Serializability Middleware",hide_title:!0},u=void 0,p={unversionedId:"api/serializabilityMiddleware",id:"api/serializabilityMiddleware",isDocsHomePage:!1,title:"Serializability Middleware",description:"&nbsp;",source:"@site/../docs/api/serializabilityMiddleware.mdx",sourceDirName:"api",slug:"/api/serializabilityMiddleware",permalink:"/redux-toolkit/api/serializabilityMiddleware",tags:[],version:"current",lastUpdatedAt:1656245190,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"serializabilityMiddleware",title:"Serializability Middleware",sidebar_label:"Serializability Middleware",hide_title:!0},sidebar:"docs",previous:{title:"Immutability Middleware",permalink:"/redux-toolkit/api/immutabilityMiddleware"},next:{title:"createListenerMiddleware",permalink:"/redux-toolkit/api/createListenerMiddleware"}},c=[{value:"Options",id:"options",children:[],level:2},{value:"Exports",id:"exports",children:[{value:"<code>createSerializableStateInvariantMiddleware</code>",id:"createserializablestateinvariantmiddleware",children:[],level:3},{value:"<code>isPlain</code>",id:"isplain",children:[],level:3}],level:2}],b={toc:c};function m(e){var a=e.components,t=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"serializability-middleware"},"Serializability Middleware"),(0,l.kt)("p",null,"A custom middleware that detects if any non-serializable values have been included in state or dispatched actions, modeled after ",(0,l.kt)("inlineCode",{parentName:"p"},"redux-immutable-state-invariant"),". Any detected non-serializable values will be logged to the console."),(0,l.kt)("p",null,"This middleware is added to the store by default by ",(0,l.kt)("a",{parentName:"p",href:"/redux-toolkit/api/configureStore"},(0,l.kt)("inlineCode",{parentName:"a"},"configureStore"))," and ",(0,l.kt)("a",{parentName:"p",href:"/redux-toolkit/api/getDefaultMiddleware"},(0,l.kt)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),(0,l.kt)("p",null,"You can customize the behavior of this middleware by passing any of the supported options as the ",(0,l.kt)("inlineCode",{parentName:"p"},"serializableCheck")," value for ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"interface SerializableStateInvariantMiddlewareOptions {\n  /**\n   * The function to check if a value is considered serializable. This\n   * function is applied recursively to every value contained in the\n   * state. Defaults to `isPlain()`.\n   */\n  isSerializable?: (value: any) => boolean\n  /**\n   * The function that will be used to retrieve entries from each\n   * value.  If unspecified, `Object.entries` will be used. Defaults\n   * to `undefined`.\n   */\n  getEntries?: (value: any) => [string, any][]\n\n  /**\n   * An array of action types to ignore when checking for serializability.\n   * Defaults to []\n   */\n  ignoredActions?: string[]\n\n  /**\n   * An array of dot-separated path strings to ignore when checking\n   * for serializability, Defaults to ['meta.arg', 'meta.baseQueryMeta']\n   */\n  ignoredActionPaths?: string[]\n\n  /**\n   * An array of dot-separated path strings to ignore when checking\n   * for serializability, Defaults to []\n   */\n  ignoredPaths?: string[]\n  /**\n   * Execution time warning threshold. If the middleware takes longer\n   * than `warnAfter` ms, a warning will be displayed in the console.\n   * Defaults to 32ms.\n   */\n  warnAfter?: number\n\n  /**\n   * Opt out of checking state. When set to `true`, other state-related params will be ignored.\n   */\n  ignoreState?: boolean\n\n  /**\n   * Opt out of checking actions. When set to `true`, other action-related params will be ignored.\n   */\n  ignoreActions?: boolean\n}\n")),(0,l.kt)("h2",{id:"exports"},"Exports"),(0,l.kt)("h3",{id:"createserializablestateinvariantmiddleware"},(0,l.kt)("inlineCode",{parentName:"h3"},"createSerializableStateInvariantMiddleware")),(0,l.kt)("p",null,"Creates an instance of the serializability check middleware, with the given options."),(0,l.kt)("p",null,"You will most likely not need to call this yourself, as ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," already does so."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Iterable } from 'immutable'\nimport {\n  configureStore,\n  createSerializableStateInvariantMiddleware,\n  isPlain,\n} from '@reduxjs/toolkit'\nimport reducer from './reducer'\n\n// Augment middleware to consider Immutable.JS iterables serializable\nconst isSerializable = (value: any) =>\n  Iterable.isIterable(value) || isPlain(value)\n\nconst getEntries = (value: any) =>\n  Iterable.isIterable(value) ? value.entries() : Object.entries(value)\n\nconst serializableMiddleware = createSerializableStateInvariantMiddleware({\n  isSerializable,\n  getEntries,\n})\n\nconst store = configureStore({\n  reducer,\n  middleware: [serializableMiddleware],\n})\n"))),(0,l.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Iterable } from 'immutable'\nimport {\n  configureStore,\n  createSerializableStateInvariantMiddleware,\n  isPlain,\n} from '@reduxjs/toolkit'\nimport reducer from './reducer'\n\n// Augment middleware to consider Immutable.JS iterables serializable\nconst isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)\n\nconst getEntries = (value) =>\n  Iterable.isIterable(value) ? value.entries() : Object.entries(value)\n\nconst serializableMiddleware = createSerializableStateInvariantMiddleware({\n  isSerializable,\n  getEntries,\n})\n\nconst store = configureStore({\n  reducer,\n  middleware: [serializableMiddleware],\n})\n")))),(0,l.kt)("h3",{id:"isplain"},(0,l.kt)("inlineCode",{parentName:"h3"},"isPlain")),(0,l.kt)("p",null,'Checks whether the given value is considered a "plain value" or not.'),(0,l.kt)("p",null,"Currently implemented as:"),(0,l.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import isPlainObject from './isPlainObject'\n\nexport function isPlain(val: any) {\n  return (\n    typeof val === 'undefined' ||\n    val === null ||\n    typeof val === 'string' ||\n    typeof val === 'boolean' ||\n    typeof val === 'number' ||\n    Array.isArray(val) ||\n    isPlainObject(val)\n  )\n}\n"))),(0,l.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import isPlainObject from './isPlainObject'\n\nexport function isPlain(val) {\n  return (\n    typeof val === 'undefined' ||\n    val === null ||\n    typeof val === 'string' ||\n    typeof val === 'boolean' ||\n    typeof val === 'number' ||\n    Array.isArray(val) ||\n    isPlainObject(val)\n  )\n}\n")))),(0,l.kt)("p",null,"This will accept all standard JS objects, arrays, and primitives, but return false for ",(0,l.kt)("inlineCode",{parentName:"p"},"Date"),"s, ",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"s, and other similar class instances."))}m.isMDXComponent=!0}}]);