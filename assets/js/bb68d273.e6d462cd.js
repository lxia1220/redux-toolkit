"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3509],{4995:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=a(5773),r=a(808),i=(a(7378),a(5318)),o=a(517),s=a(7637),l=["components"],p={id:"rtk-query",title:"RTK Query",sidebar_label:"RTK Query Quick Start",hide_title:!0},d=void 0,u={unversionedId:"tutorials/rtk-query",id:"tutorials/rtk-query",isDocsHomePage:!1,title:"RTK Query",description:"&nbsp;",source:"@site/../docs/tutorials/rtk-query.mdx",sourceDirName:"tutorials",slug:"/tutorials/rtk-query",permalink:"/redux-toolkit/tutorials/rtk-query",tags:[],version:"current",lastUpdatedAt:1656245190,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"rtk-query",title:"RTK Query",sidebar_label:"RTK Query Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"TypeScript Quick Start",permalink:"/redux-toolkit/tutorials/typescript"},next:{title:"Usage Guide",permalink:"/redux-toolkit/usage/usage-guide"}},c=[{value:"Introduction",id:"introduction",children:[{value:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc77d\ub294 \ubc29\ubc95",id:"\uc774-\ud29c\ud1a0\ub9ac\uc5bc\uc744-\uc77d\ub294-\ubc29\ubc95",children:[],level:3}],level:2},{value:"Setting up your store and API service",id:"setting-up-your-store-and-api-service",children:[{value:"Create an API service",id:"create-an-api-service",children:[],level:3},{value:"Add the service to your store",id:"add-the-service-to-your-store",children:[],level:3},{value:"Wrap your application with the <code>Provider</code>",id:"wrap-your-application-with-the-provider",children:[],level:3}],level:2},{value:"Use the query in a component",id:"use-the-query-in-a-component",children:[{value:"Basic Example",id:"basic-example",children:[],level:4},{value:"Advanced example",id:"advanced-example",children:[],level:4}],level:2}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rtk-query-quick-start"},"RTK Query Quick Start"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ubc30\uc6b8 \ub0b4\uc6a9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'How to set up and use Redux Toolkit\'s "RTK Query" data fetching functionality')))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux \uc6a9\uc5b4 \ubc0f \uac1c\ub150")," \uc5d0 \ub300\ud55c \uc774\ud574")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Redux Toolkit Query \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4! ",(0,i.kt)("strong",{parentName:"p"},'\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 Redux Toolkit\uc758 "RTK Query" \ub97c \ud1b5\ud55c data fetching \uae30\ub2a5\uc744 \uac04\ub7b5\ud558\uac8c \uc18c\uac1c\ud558\uace0 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\ub824\uc90d\ub2c8\ub2e4'),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RTK Query\uc5d0 \ub300\ud55c \ub354 \uc0c1\uc138\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc774 \ud544\uc694\ud558\ub2e4\uba74, Redux core \ubb38\uc11c\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics"},'"Redux Essentials" tutorial')," \ub97c \ucc38\uc870\ud558\uc138\uc694."))),(0,i.kt)("p",null,"RTK Query is an advanced data fetching and caching tool, designed to simplify common cases for loading data in a web application. RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/api/createSlice"},(0,i.kt)("inlineCode",{parentName:"a"},"createSlice"))," and ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/api/createAsyncThunk"},(0,i.kt)("inlineCode",{parentName:"a"},"createAsyncThunk"))," to implement its capabilities."),(0,i.kt)("p",null,"RTK \ucffc\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"@reduxjs/toolkit")," \ud328\ud0a4\uc9c0\uc5d0 \ucd94\uac00 \uc560\ub4dc\uc628\uc73c\ub85c \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. Redux Toolkit\uc744 \uc0ac\uc6a9\ud560 \ub54c \uaf2d RTK Query API\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc9c0\ub9cc, \ub9ce\uc740 \uc0ac\uc6a9\uc790\uac00 RTK Query\uc758 data fetching \ubc0f caching\uc758 \uc774\uc810\uc744 \uc5bb\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc774-\ud29c\ud1a0\ub9ac\uc5bc\uc744-\uc77d\ub294-\ubc29\ubc95"},"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc77d\ub294 \ubc29\ubc95"),(0,i.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 React\uc640 \ud568\uaed8 Redux Toolkit\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uc9c0\ub9cc \ub2e4\ub978 UI \ub808\uc774\uc5b4\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The examples are based on ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"a typical Create-React-App folder structure")," where all the application code is in a ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", but the patterns can be adapted to whatever project or folder setup you're using."),(0,i.kt)("h2",{id:"setting-up-your-store-and-api-service"},"Setting up your store and API service"),(0,i.kt)("p",null,"RTK Query\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ubcf4\uae30 \uc704\ud574 \uae30\ubcf8 \uc0ac\uc6a9 \uc608\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc5d0\uc11c\ub294 React\ub97c \uc0ac\uc6a9 \uc911\uc774\uace0 RTK Query\ub85c \uc790\ub3d9 \uc0dd\uc131\ub41c React hooks\ub97c \uc0ac\uc6a9\ud558\ub824\uace0 \ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"create-an-api-service"},"Create an API service"),(0,i.kt)("p",null,"\uba3c\uc800 \uacf5\uac1c\uc801\uc73c\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c ",(0,i.kt)("a",{parentName:"p",href:"https://pokeapi.co/"},"PokeAPI"),"\ub97c \ucffc\ub9ac\ud558\ub294 service definition\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Need to use the React-specific entry point to import createApi\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Pokemon } from './types'\n\n// highlight-start\n// Define a service using a base URL and expected endpoints\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n//highlight-end\n\n// highlight-start\n// Export hooks for usage in functional components, which are\n// auto-generated based on the defined endpoints\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Need to use the React-specific entry point to import createApi\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\n// highlight-start\n// Define a service using a base URL and expected endpoints\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n//highlight-end\n\n// highlight-start\n// Export hooks for usage in functional components, which are\n// auto-generated based on the defined endpoints\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n")))),(0,i.kt)("p",null,"With RTK Query, you usually define your entire API definition in one place. This is most likely different from what you see with other libraries such as ",(0,i.kt)("inlineCode",{parentName:"p"},"swr")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),", and there are several reasons for that. Our perspective is that it's ",(0,i.kt)("em",{parentName:"p"},"much")," easier to keep track of how requests, cache invalidation, and general app configuration behave when they're all in one central location in comparison to having X number of custom hooks in different files throughout your application."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Typically, you should only have one API slice per base URL that your application needs to communicate with. For example, if your site fetches data from both ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/posts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/users"),", you would have a single API slice with ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/")," as the base URL, and separate endpoint definitions for ",(0,i.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),". This allows you to effectively take advantage of ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/automated-refetching"},"automated re-fetching")," by defining ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/automated-refetching#tags"},"tag")," relationships across endpoints."),(0,i.kt)("p",{parentName:"div"},"For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints. See ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/code-splitting"},"code splitting")," for how you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"injectEndpoints")," property to inject API endpoints from other files into a single API slice definition."))),(0,i.kt)("h3",{id:"add-the-service-to-your-store"},"Add the service to your store"),(0,i.kt)("p",null,'RTKQ \uc11c\ube44\uc2a4\ub294 Redux root reducer\uc5d0 \ud3ec\ud568\ub418\uc5b4\uc57c \ud558\ub294 "slice reducer"\uc640 data fetching\uc744 \ucc98\ub9ac\ud558\ub294 custom middleware\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \ub458 \ub2e4 Redux store\uc5d0 \ucd94\uac00\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.'),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\n// Or from '@reduxjs/toolkit/query/react'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n  // highlight-end\n})\n\n// optional, but required for refetchOnFocus/refetchOnReconnect behaviors\n// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization\nsetupListeners(store.dispatch)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\n// Or from '@reduxjs/toolkit/query/react'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n  // highlight-end\n})\n\n// optional, but required for refetchOnFocus/refetchOnReconnect behaviors\n// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization\nsetupListeners(store.dispatch)\n")))),(0,i.kt)("h3",{id:"wrap-your-application-with-the-provider"},"Wrap your application with the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Provider")),(0,i.kt)("p",null,"\ub9cc\uc57d \uc774 \uc791\uc5c5\uc744 \ud574\ub450\uc9c0 \uc54a\uc558\ub2e4\uba74, \ub098\uba38\uc9c0 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc131 \uc694\uc18c \ud2b8\ub9ac\uc5d0 Redux \uc800\uc7a5\uc18c\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud55c \ud45c\uc900 \ud328\ud134\uc744 \ub530\ub974\uc138\uc694."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import * as React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\n\nimport App from './App'\nimport { store } from './app/store'\n\nconst rootElement = document.getElementById('root')\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import * as React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\n\nimport App from './App'\nimport { store } from './app/store'\n\nconst rootElement = document.getElementById('root')\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n")))),(0,i.kt)("h2",{id:"use-the-query-in-a-component"},"Use the query in a component"),(0,i.kt)("p",null,"\uc11c\ube44\uc2a4\uac00 \uc815\uc758\ub418\uc5c8\ub2e4\uba74, hooks\ub97c \uac00\uc838\uc640\uc11c request\ub97c \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import * as React from 'react'\n// highlight-next-line\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport default function App() {\n  // highlight-start\n  // Using a query hook automatically fetches data and returns query values\n  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // Individual hooks are also accessible under the generated endpoints:\n  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {error ? (\n        <>Oh no, there was an error</>\n      ) : isLoading ? (\n        <>Loading...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import * as React from 'react'\n// highlight-next-line\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport default function App() {\n  // highlight-start\n  // Using a query hook automatically fetches data and returns query values\n  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // Individual hooks are also accessible under the generated endpoints:\n  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {error ? (\n        <>Oh no, there was an error</>\n      ) : isLoading ? (\n        <>Loading...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n")))),(0,i.kt)("p",null,"\ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \ub54c \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95\uc744 \ud1b5\ud574 state\ub97c \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc81c\uacf5\ub418\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"\ub97c \ud1b5\ud574 \ub80c\ub354\ub9c1\ud560 \uc62c\ubc14\ub978 UI\ub97c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\ub294 \ucd5c\uadfc \uc694\uccad\uc5d0 \ub300\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),"\uc640 \uac19\uc740 utility booleans\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"basic-example"},"Basic Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-basic",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,i.kt)("p",null,"\uc88b\uc544\uc694, \ud765\ubbf8\ub86d\ub124\uc694... \ud558\uc9c0\ub9cc \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \ud3ec\ucf13\ubaac\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\ub2e4\uba74? \uc5ec\ub7ec components\uac00 \ub3d9\uc77c\ud55c \ud3ec\ucf13\ubaac\uc744 \ub85c\ub4dc\ud558\uba74 \uc5b4\ub5bb\uac8c \ub429\ub2c8\uae4c?"),(0,i.kt)("h4",{id:"advanced-example"},"Advanced example"),(0,i.kt)("p",null,"RTK Query\ub294 \ub3d9\uc77c\ud55c \ucffc\ub9ac\ub97c \uad6c\ub3c5\ud558\ub294 \ubaa8\ub4e0 \uad6c\uc131 \uc694\uc18c\uac00 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. RTK Query\ub294 \ub370\uc774\ud130 \uc694\uccad\uc758 \uc911\ubcf5\uc744 \uc790\ub3d9\uc73c\ub85c \uc81c\uac70\ud558\ubbc0\ub85c \uc9c4\ud589 \uc911\uc778 \ub370\uc774\ud130 \uc694\uccad \ubc0f \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ucd5c\uc885\uc801\uc73c\ub85c \ud655\uc778\ud558\ub294 \uac83\uc5d0 \ub300\ud574 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 sandbox \ub97c \uc2e4\ud589 \ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. - \ube0c\ub77c\uc6b0\uc800\uc758 dev tools\uc5d0\uc11c Network \ud328\ub110\uc744 \ud655\uc778\ud558\uc138\uc694. 4\uac1c\uc758 subscribed components\uac00 \uc788\uc73c\ub098, 3\uac1c\uc758 \uc694\uccad\ub9cc \uc9c4\ud589\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc744\uac83\uc785\ub2c8\ub2e4. - ",(0,i.kt)("inlineCode",{parentName:"p"},"bulbasaur")," only makes one request, and the loading state is synchronized between the two components. For fun, try changing the value of the dropdown from ",(0,i.kt)("inlineCode",{parentName:"p"},"Off")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1s")," to see this behavior continue when a query is re-ran."),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/advanced?file=/src/App.tsx?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-advanced",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}h.isMDXComponent=!0}}]);