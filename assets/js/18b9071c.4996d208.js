"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7676],{9544:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=r(5773),a=r(808),i=(r(7378),r(5318)),o=r(3245),s=r(1478),d=["components"],p={id:"server-side-rendering",title:"Server Side Rendering",sidebar_label:"Server Side Rendering",hide_title:!0,description:"RTK Query > Usage > Server Side Rendering"},l=void 0,u={unversionedId:"rtk-query/usage/server-side-rendering",id:"rtk-query/usage/server-side-rendering",isDocsHomePage:!1,title:"Server Side Rendering",description:"RTK Query > Usage > Server Side Rendering",source:"@site/../docs/rtk-query/usage/server-side-rendering.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/server-side-rendering",permalink:"/redux-toolkit/rtk-query/usage/server-side-rendering",tags:[],version:"current",lastUpdatedAt:1656209359,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"server-side-rendering",title:"Server Side Rendering",sidebar_label:"Server Side Rendering",hide_title:!0,description:"RTK Query > Usage > Server Side Rendering"},sidebar:"docs",previous:{title:"Code Generation",permalink:"/redux-toolkit/rtk-query/usage/code-generation"},next:{title:"Persistence and Rehydration",permalink:"/redux-toolkit/rtk-query/usage/persistence-and-rehydration"}},c=[{value:"Server Side Rendering with Next.js",id:"server-side-rendering-with-nextjs",children:[],level:2},{value:"Server Side Rendering elsewhere",id:"server-side-rendering-elsewhere",children:[],level:2}],m={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-side-rendering"},"Server Side Rendering"),(0,i.kt)("h2",{id:"server-side-rendering-with-nextjs"},"Server Side Rendering with Next.js"),(0,i.kt)("p",null,"RTK Query\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kirill-konshin/next-redux-wrapper"},"next-redux-wrapper")," \uc640 ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/persistence-and-rehydration"},"rehydration")," \ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," \ub97c \ud1b5\ud55c Server Side Rendering(SSR)\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"The workflow is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set up ",(0,i.kt)("inlineCode",{parentName:"p"},"next-redux-wrapper"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pre-fetch all queries via the ",(0,i.kt)("inlineCode",{parentName:"li"},"initiate")," actions, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"store.dispatch(api.endpoints.getPokemonByName.initiate(name))")),(0,i.kt)("li",{parentName:"ul"},"Wait for each query to finish using ",(0,i.kt)("inlineCode",{parentName:"li"},"await Promise.all(api.util.getRunningOperationPromises())")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi")," call, configure rehydration using the ",(0,i.kt)("inlineCode",{parentName:"p"},"extractRehydrationInfo")," option:"),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="next-redux-wrapper rehydration example"',title:'"next-redux-wrapper',rehydration:!0,'example"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { HYDRATE } from 'next-redux-wrapper'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  extractRehydrationInfo(action, { reducerPath }) {\n    if (action.type === HYDRATE) {\n      return action.payload[reducerPath]\n    }\n  },\n  // highlight-end\n  endpoints: (build) => ({\n    // omitted\n  }),\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="next-redux-wrapper rehydration example"',title:'"next-redux-wrapper',rehydration:!0,'example"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { HYDRATE } from 'next-redux-wrapper'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  extractRehydrationInfo(action, { reducerPath }) {\n    if (action.type === HYDRATE) {\n      return action.payload[reducerPath]\n    }\n  },\n  // highlight-end\n  endpoints: (build) => ({\n    // omitted\n  }),\n})\n")))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog"},"\uc5ec\uae30")," \uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"next.js")," \ub97c \uc0ac\uc6a9\ud55c \uc608\uc2dc repo\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While memory leaks are not anticipated, once a render is sent to the client and the store is being\nremoved from memory, you may wish to also call ",(0,i.kt)("inlineCode",{parentName:"p"},"store.dispatch(api.util.resetApiState())")," to\nensure that no rogue timers are left running."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to avoid providing stale data with Static Site Generation (SSG), you may wish to set\n",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/createApi#refetchonmountorargchange"},(0,i.kt)("inlineCode",{parentName:"a"},"refetchOnMountOrArgChange"))," to a reasonable value\nsuch as 900 (seconds) in order to allow data to be re-fetched when accessed if it has been that\nlong since the page was generated."))),(0,i.kt)("h2",{id:"server-side-rendering-elsewhere"},"Server Side Rendering elsewhere"),(0,i.kt)("p",null,"If you are not using ",(0,i.kt)("inlineCode",{parentName:"p"},"next.js"),", and the example above cannot be adapted to your SSR framework,\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"unstable__")," marked approach is available to support SSR scenarios where you need to execute\nasync code during render and not safely in an effect.\nThis is a similar approach to using ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/performance/server-side-rendering/#executing-queries-with-getdatafromtree"},(0,i.kt)("inlineCode",{parentName:"a"},"getDataFromTree")),"\nwith ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/"},"Apollo"),"."),(0,i.kt)("p",null,"The workflow is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a version of ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi")," that performs asynchronous work during render:"),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst createApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({ unstable__sideEffectsInRender: true })\n)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst createApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({ unstable__sideEffectsInRender: true })\n)\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi")," when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"const api = createApi({...})"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wait for all queries to finish using ",(0,i.kt)("inlineCode",{parentName:"p"},"await Promise.all(api.util.getRunningOperationPromises())")," before performing the next render cycle"))))}h.isMDXComponent=!0}}]);