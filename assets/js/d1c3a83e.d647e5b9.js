"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4543],{1390:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(5773),i=a(808),r=(a(7378),a(5318)),o=a(517),s=a(7637),l=["components"],u={id:"queries",title:"Queries",sidebar_label:"Queries",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Queries: fetching data from a server"},d=void 0,p={unversionedId:"rtk-query/usage/queries",id:"rtk-query/usage/queries",isDocsHomePage:!1,title:"Queries",description:"RTK Query > \uc0ac\uc6a9\ubc95 > Queries: fetching data from a server",source:"@site/../docs/rtk-query/usage/queries.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/queries",permalink:"/redux-toolkit/rtk-query/usage/queries",tags:[],version:"current",lastUpdatedAt:1656242962,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Queries: fetching data from a server"},sidebar:"docs",previous:{title:"Usage With TypeScript",permalink:"/redux-toolkit/rtk-query/usage-with-typescript"},next:{title:"Mutations",permalink:"/redux-toolkit/rtk-query/usage/mutations"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Defining Query Endpoints",id:"defining-query-endpoints",children:[],level:2},{value:"Performing Queries with React Hooks",id:"performing-queries-with-react-hooks",children:[{value:"Hook types",id:"hook-types",children:[],level:3},{value:"Query Hook Options",id:"query-hook-options",children:[],level:3},{value:"\uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 Query Hook \ubc18\ud658 \uac12",id:"\uc790\uc8fc-\uc0ac\uc6a9\ub418\ub294-query-hook-\ubc18\ud658-\uac12",children:[],level:3},{value:"Query Hook Usage Example",id:"query-hook-usage-example",children:[],level:3},{value:"Query \ub85c\ub529 \uc0c1\ud0dc",id:"query-\ub85c\ub529-\uc0c1\ud0dc",children:[],level:3},{value:"Query Cache Keys",id:"query-cache-keys",children:[],level:3},{value:"Selecting data from a query result",id:"selecting-data-from-a-query-result",children:[],level:3},{value:"Avoiding unnecessary requests",id:"avoiding-unnecessary-requests",children:[],level:3}],level:2},{value:"Example: Observing caching behavior",id:"example-observing-caching-behavior",children:[],level:2}],h={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"queries"},"Queries"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"\uc774\uac83\uc740 RTK \ucffc\ub9ac\uc758 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840\uc785\ub2c8\ub2e4. A query operation can be performed with any data fetching library of your choice, but the general recommendation is that you only use queries for requests that retrieve data. For anything that alters data on the server or will possibly invalidate the cache, you should use a ",(0,r.kt)("a",{parentName:"p",href:"./mutations"},"Mutation"),"."),(0,r.kt)("p",null,"By default, RTK Query ships with ",(0,r.kt)("a",{parentName:"p",href:"../api/fetchBaseQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"fetchBaseQuery")),", which is a lightweight ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,r.kt)("inlineCode",{parentName:"a"},"fetch"))," wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),". See ",(0,r.kt)("a",{parentName:"p",href:"./customizing-queries"},"Customizing Queries")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," does not handle your requirements."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Depending on your environment, you may need to polyfill ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"node-fetch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cross-fetch")," if you choose to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," on its own."))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/created-api/hooks#usequery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery"))," for the hook signature and additional details."),(0,r.kt)("h2",{id:"defining-query-endpoints"},"Defining Query Endpoints"),(0,r.kt)("p",null,"Query endpoint\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"createApi"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," \uc139\uc158\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.query()")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Query endpoint\ub294 URL (URL \ucffc\ub9ac \ud30c\ub77c\ubbf8\ud130 \ud3ec\ud568)\uc744 \ubc18\ud658\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," \ucf5c\ubc31\uc774\ub098 \uc784\uc758\uc758 \ube44\ub3d9\uae30 \ub85c\uc9c1\uc744 \uc218\ud589\ud558\uace0 \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/customizing-queries#customizing-queries-with-queryfn"},(0,r.kt)("inlineCode",{parentName:"a"},"queryFn")," \ucf5c\ubc31")," \uc744 \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),' callback needs additional data to generate the URL, it should be written to take a single argument. If you need to pass in multiple parameters, pass them formatted as a single "options object".'),(0,r.kt)("p",null,'Query endpoints may also modify the response contents before the result is cached, define "tags" to identify cache invalidation, and provide cache entry lifecycle callbacks to run additional logic as cache entries are added and removed.'),(0,r.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example of all query endpoint options"',title:'"Example',of:!0,all:!0,query:!0,endpoint:!0,'options"':!0},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\nimport type { Post } from './types'\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({\n    baseUrl: '/',\n  }),\n  tagTypes: ['Post'],\n  endpoints: (build) => ({\n    getPost: build.query<Post, number>({\n      // highlight-start\n      // note: `queryFn`\uc744 `query`\uc790\ub9ac\uc5d0 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n      query: (id) => ({ url: `post/${id}` }),\n      // Pick out data and prevent nested properties in a hook or selector\n      transformResponse: (response: { data: Post }, meta, arg) => response.data,\n      providesTags: (result, error, id) => [{ type: 'Post', id }],\n      // 2\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 \uad6c\uc870\ubd84\ud574\ub41c `QueryLifecycleApi`\uc785\ub2c8\ub2e4.\n      async onQueryStarted(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          queryFulfilled,\n          getCacheEntry,\n          updateCachedData,\n        }\n      ) {},\n      // 2\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 \uad6c\uc870\ubd84\ud574\ub41c `QueryCacheLifecycleApi`\uc785\ub2c8\ub2e4.\n      async onCacheEntryAdded(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          cacheEntryRemoved,\n          cacheDataLoaded,\n          getCacheEntry,\n          updateCachedData,\n        }\n      ) {},\n      // highlight-end\n    }),\n  }),\n})\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example of all query endpoint options"',title:'"Example',of:!0,all:!0,query:!0,endpoint:!0,'options"':!0},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({\n    baseUrl: '/',\n  }),\n  tagTypes: ['Post'],\n  endpoints: (build) => ({\n    getPost: build.query({\n      // highlight-start\n      // note: `queryFn`\uc744 `query`\uc790\ub9ac\uc5d0 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n      query: (id) => ({ url: `post/${id}` }),\n      // Pick out data and prevent nested properties in a hook or selector\n      transformResponse: (response, meta, arg) => response.data,\n      providesTags: (result, error, id) => [{ type: 'Post', id }],\n      // 2\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 \uad6c\uc870\ubd84\ud574\ub41c `QueryLifecycleApi`\uc785\ub2c8\ub2e4.\n      async onQueryStarted(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          queryFulfilled,\n          getCacheEntry,\n          updateCachedData,\n        }\n      ) {},\n      // 2\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 \uad6c\uc870\ubd84\ud574\ub41c `QueryCacheLifecycleApi`\uc785\ub2c8\ub2e4.\n      async onCacheEntryAdded(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          cacheEntryRemoved,\n          cacheDataLoaded,\n          getCacheEntry,\n          updateCachedData,\n        }\n      ) {},\n      // highlight-end\n    }),\n  }),\n})\n")))),(0,r.kt)("h2",{id:"performing-queries-with-react-hooks"},"Performing Queries with React Hooks"),(0,r.kt)("p",null,"If you're using React Hooks, RTK Query does a few additional things for you. The primary benefit is that you get a render-optimized hook that allows you to have 'background fetching' as well as ",(0,r.kt)("a",{parentName:"p",href:"#frequently-used-query-hook-return-values"},"derived booleans")," for convenience."),(0,r.kt)("p",null,"Hooks are automatically generated based on the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," in the service definition. An endpoint field with ",(0,r.kt)("inlineCode",{parentName:"p"},"getPost: builder.query()")," will generate a hook named ",(0,r.kt)("inlineCode",{parentName:"p"},"useGetPostQuery"),"."),(0,r.kt)("h3",{id:"hook-types"},"Hook types"),(0,r.kt)("p",null,"query\uc640 \uad00\ub828\ub41c 5\uac00\uc9c0 hooks\uc774 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/redux-toolkit/rtk-query/api/created-api/hooks#usequery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Composes ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuerySubscription")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"useQueryState")," and is the primary hook. Automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/redux-toolkit/rtk-query/api/created-api/hooks#usequerysubscription"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuerySubscription")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"refetch")," function and accepts all hook options. Automatically triggers fetches of data from an endpoint, and 'subscribes' the component to the cached data."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/redux-toolkit/rtk-query/api/created-api/hooks#usequerystate"},(0,r.kt)("inlineCode",{parentName:"a"},"useQueryState")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns the query state and accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"skip")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"selectFromResult"),". Reads the request status and cached data from the Redux store."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/redux-toolkit/rtk-query/api/created-api/hooks#uselazyquery"},(0,r.kt)("inlineCode",{parentName:"a"},"useLazyQuery")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a tuple with a ",(0,r.kt)("inlineCode",{parentName:"li"},"trigger")," function, the query result, and last promise info. Similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuery"),", but with manual control over when the data fetching occurs. ",(0,r.kt)("strong",{parentName:"li"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"strong"},"trigger")," function takes a second argument of ",(0,r.kt)("inlineCode",{parentName:"strong"},"preferCacheValue?: boolean")," in the event you want to skip making a request if cached data already exists.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/redux-toolkit/rtk-query/api/created-api/hooks#uselazyquerysubscription"},(0,r.kt)("inlineCode",{parentName:"a"},"useLazyQuerySubscription")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a tuple with a ",(0,r.kt)("inlineCode",{parentName:"li"},"trigger")," function, and last promise info. Similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuerySubscription"),", but with manual control over when the data fetching occurs. ",(0,r.kt)("strong",{parentName:"li"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"strong"},"trigger")," function takes a second argument of ",(0,r.kt)("inlineCode",{parentName:"strong"},"preferCacheValue?: boolean")," in the event you want to skip making a request if cached data already exists."))))),(0,r.kt)("p",null,"In practice, the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),"-based hooks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"useGetPostQuery")," will be the primary hooks used in your application, but the other hooks are available for specific use cases."),(0,r.kt)("h3",{id:"query-hook-options"},"Query Hook Options"),(0,r.kt)("p",null,"Query hooks\ub294 \ub450 \uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc785\ub825\ubc1b\uc2b5\ub2c8\ub2e4: ",(0,r.kt)("inlineCode",{parentName:"p"},"(queryArg?, queryOptions?)"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"queryArg")," param will be passed through to the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," callback to generate the URL."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," object accepts several additional parameters that can be used to control the behavior of the data fetching:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./conditional-fetching"},"skip")," - Allows a query to 'skip' running for that render. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./polling"},"pollingInterval")," - Allows a query to automatically refetch on a provided interval, specified in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," ",(0,r.kt)("em",{parentName:"li"},"(off)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selecting-data-from-a-query-result"},"selectFromResult")," - Allows altering the returned value of the hook to obtain a subset of the result, render-optimized for the returned subset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/createApi#refetchonmountorargchange"},"refetchOnMountOrArgChange")," - Allows forcing the query to always refetch on mount (when ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," is provided). Allows forcing the query to refetch if enough time (in seconds) has passed since the last query for the same cache (when a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," is provided). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/createApi#refetchonfocus"},"refetchOnFocus")," - Allows forcing the query to refetch when the browser window regains focus. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/createApi#refetchonreconnect"},"refetchOnReconnect")," - Allows forcing the query to refetch when regaining a network connection. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch"),"-related options will override the defaults you may have set in ",(0,r.kt)("a",{parentName:"p",href:"../api/createApi"},"createApi")))),(0,r.kt)("h3",{id:"\uc790\uc8fc-\uc0ac\uc6a9\ub418\ub294-query-hook-\ubc18\ud658-\uac12"},"\uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 Query Hook \ubc18\ud658 \uac12"),(0,r.kt)("p",null,"The query hook returns an object containing properties such as the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," for the query request, as well as status booleans for the current request lifecycle state. Below are some of the most frequently used properties. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/created-api/hooks#usequery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery"))," for an extensive list of all returned properties."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - The latest returned result regardless of hook arg, if present."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentData")," - The latest returned result for the current hook arg, if present."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - \uc624\ub958 \uacb0\uacfc\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 \uc774\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isUninitialized")," - True\ub77c\uba74, Query\uac00 \uc544\uc9c1 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc558\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for the first request fired off, but ",(0,r.kt)("em",{parentName:"li"},"not")," for subsequent requests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetching")," - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for both the first request fired off, as well as subsequent requests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isSuccess")," - When true, indicates that the query has data from a successful request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isError")," - When true, indicates that the query is in an ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refetch")," - query\uac00 \uac15\uc81c\ub85c \ub2e4\uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uac8c \ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),"\ub97c \uc77d\uc5b4\ub4e4\uc5ec UI\ub97c \ub80c\ub354\ub9c1\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"query-hook-usage-example"},"Query Hook Usage Example"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"PostDetail")," \ucef4\ud3ec\ub10c\ud2b8 \uc608\uc2dc\uc785\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\uc608\uc2dc"',title:'"\uc608\uc2dc"'},"export const PostDetail = ({ id }: { id: string }) => {\n  const {\n    data: post,\n    isFetching,\n    isLoading,\n  } = useGetPostQuery(id, {\n    pollingInterval: 3000,\n    refetchOnMountOrArgChange: true,\n    skip: false,\n  })\n\n  if (isLoading) return <div>Loading...</div>\n  if (!post) return <div>Missing post!</div>\n\n  return (\n    <div>\n      {post.name} {isFetching ? '...refetching' : ''}\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"The way that this component is setup would have some nice traits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\ucd08\uae30 \ub85c\ub4dc")," \uc2dc\uc5d0\ub294 'Loading...' \ub9cc \ud45c\uc2dc\ud569\ub2c8\ub2e4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ucd08\uae30 \ub85c\ub4dc")," \ub294 query\uac00 pending \uc0c1\ud0dc\uc774\uba70 \uce90\uc2dc\uc5d0 \ub370\uc774\ud130\uac00 \uc5c6\ub294 \uacbd\uc6b0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4"))),(0,r.kt)("li",{parentName:"ol"},"polling interval\uc5d0 \uc758\ud574 \uc7ac\uc694\uccad \ubc1c\uc0dd \uc2dc, post name\uc5d0 '...refetching' \uc774 \ucd94\uac00\ub429\ub2c8\ub2e4"),(0,r.kt)("li",{parentName:"ol"},"If a user closed this ",(0,r.kt)("inlineCode",{parentName:"li"},"PostDetail"),", but then re-opened it within ",(0,r.kt)("a",{parentName:"li",href:"../api/createApi#keepunuseddatafor"},"the allowed time"),", they would immediately be served a cached result and polling would resume with the previous behavior.")),(0,r.kt)("h3",{id:"query-\ub85c\ub529-\uc0c1\ud0dc"},"Query \ub85c\ub529 \uc0c1\ud0dc"),(0,r.kt)("p",null,"React \uc804\uc6a9 \ubc84\uc804\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"createApi"),"\uc5d0\uc11c \uc790\ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c React hook\ub294 \uc8fc\uc5b4\uc9c4 \ucffc\ub9ac\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\uc601\ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"#frequently-used-query-hook-return-values"},"derived booleans"),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Derived booleans are preferred for the generated React hooks as opposed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," flag, as the derived booleans are able to provide a greater amount of detail which would not be possible with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," flag, as multiple statuses may be true at a given time (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess"),")."),(0,r.kt)("p",null,"\ucffc\ub9ac \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0\uc11c RTK Query\ub294 \uc880 \ub354 \uc720\uc5f0\ud558\uac8c \uc815\ubcf4\ub4e4\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),"\uc744 \uad6c\ubd84\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," \uc740 ",(0,r.kt)("em",{parentName:"li"},"\ucc98\uc74c\uc73c\ub85c")," \ucffc\ub9ac\uac00 \uc2e4\ud589\uc911\uc778\uc9c0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \uc2dc\uac04\ub3d9\uc548\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetching")," \uc740 \uc8fc\uc5b4\uc9c4 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 + \ucffc\ub9ac \ub9e4\uac1c\ubcc0\uc218\ub85c \uc2e4\ud589\uc911\uc778 \ucffc\ub9ac\ub97c \uc758\ubbf8\ud558\uc9c0\ub9cc, \ubc18\ub4dc\uc2dc \ucc98\uc74c\uc73c\ub85c \uc2e4\ud589\uc911\uc778 \ucffc\ub9ac\ub97c \ub098\ud0c0\ub0b4\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. Data may be available from an earlier request done by this hook, maybe with the previous query param.")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uad6c\ubd84\uc744 \ud1b5\ud574\uc11c UI\uc5d0 \ub354 \ub9ce\uc740 \uc81c\uc5b4\uad8c\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading"),"\uc744 \ud1b5\ud574 \ucc98\uc74c \ub85c\ub529\ud558\ub294 \ub3d9\uc548\uc5d0 \uc2a4\ucf08\ub808\ud1a4\uc744 \ubcf4\uc5ec\uc904 \uc218 \uc788\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),"\uc744 \ud1b5\ud574 1\ud398\uc774\uc9c0\uc5d0\uc11c 2\ud398\uc774\uc9c0\ub85c \ud398\uc774\uc9c0\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \ub370\uc774\ud130\ub97c \ubb34\ud6a8\ud654\ud558\uc5ec \ub2e4\uc2dc \uac00\uc838\uc624\uace0 \uc788\uc744 \uacbd\uc6b0 \uc774\uc804 \ub370\uc774\ud130\ub97c \ud68c\uc0c9\uc73c\ub85c \ubcf4\uc5ec\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Managing UI behavior with Query Loading States"',title:'"Managing',UI:!0,behavior:!0,with:!0,Query:!0,Loading:!0,'States"':!0},"import { Skeleton } from './Skeleton'\nimport { useGetPostsQuery } from './api'\n\nfunction App() {\n  const { data = [], isLoading, isFetching, isError } = useGetPostsQuery()\n\n  if (isError) return <div>An error has occurred!</div>\n\n  if (isLoading) return <Skeleton />\n\n  return (\n    <div className={isFetching ? 'posts--disabled' : ''}>\n      {data.map((post) => (\n        <Post\n          key={post.id}\n          id={post.id}\n          name={post.name}\n          disabled={isFetching}\n        />\n      ))}\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is expected to used in the majority of situations, ",(0,r.kt)("inlineCode",{parentName:"p"},"currentData")," is also provided,\nwhich allows for a further level of granularity. For example, if you wanted to show data in the UI\nas translucent to represent a re-fetching state, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),"\nto achieve this. However, if you also wish to ",(0,r.kt)("em",{parentName:"p"},"only")," show data corresponding to the current arg,\nyou can instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"currentData")," to achieve this."),(0,r.kt)("p",null,"In the example below, if posts are being fetched for the first time, a loading skeleton will be\nshown. If posts for the current user have previously been fetched, and are re-fetching (e.g. as a\nresult of a mutation), the UI will show the previous data, but will grey out the data. If the user\nchanges, it will instead show the skeleton again as opposed to greying out data for the previous user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Managing UI behavior with currentData"',title:'"Managing',UI:!0,behavior:!0,with:!0,'currentData"':!0},"import { Skeleton } from './Skeleton'\nimport { useGetPostsByUserQuery } from './api'\n\nfunction PostsList({ userName }: { userName: string }) {\n  const { currentData, isFetching, isError } = useGetPostsByUserQuery(userName)\n\n  if (isError) return <div>An error has occurred!</div>\n\n  if (isFetching && !currentData) return <Skeleton />\n\n  return (\n    <div className={isFetching ? 'posts--disabled' : ''}>\n      {currentData\n        ? currentData.map((post) => (\n            <Post\n              key={post.id}\n              id={post.id}\n              name={post.name}\n              disabled={isFetching}\n            />\n          ))\n        : 'No data available'}\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"query-cache-keys"},"Query Cache Keys"),(0,r.kt)("p",null,"Query\ub97c \uc218\ud589\ud560 \ub54c RTK Query\ub294 \uc694\uccad \ud30c\ub77c\ubbf8\ud130\ub97c \uc790\ub3d9\uc73c\ub85c \uc9c1\ub82c\ud654\ud558\uace0 \uc694\uccad\uc5d0 \ub300\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"queryCacheKey")," \ub97c \ub0b4\ubd80\uc801\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4. Any future request that produces the same ",(0,r.kt)("inlineCode",{parentName:"p"},"queryCacheKey")," will be de-duped against the original, and will share updates if a ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch")," is trigged on the query from any subscribed component. \uc774\ud6c4 \ub3d9\uc77c\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"queryCacheKey")," \ub97c \uac00\uc9c0\ub294 \ubaa8\ub4e0 \uc694\uccad\ub4e4\uc740 \uc6d0\ubcf8 \ub370\uc774\ud130\uc5d0 \uc758\ud574\uc11c \uc911\ubcf5 \uc81c\uac70\ub418\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch"),"\uac00 \ubc1c\uc0dd\ud588\uc744 \uacbd\uc6b0 \uc774\ub97c \uad6c\ub3c5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uac04 \uc5c5\ub370\uc774\ud2b8\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"selecting-data-from-a-query-result"},"Selecting data from a query result"),(0,r.kt)("p",null,"Sometimes you may have a parent component that is subscribed to a query, and then in a child component you want to pick an item from that query. In most cases you don't want to perform an additional request for a ",(0,r.kt)("inlineCode",{parentName:"p"},"getItemById"),"-type query when you know that you already have the result."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"selectFromResult")," allows you to get a specific segment from a query result in a performant manner. When using this feature, the component will not rerender unless the underlying data of the selected item has changed. If the selected item is one element in a larger collection, it will disregard changes to elements in the same collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Using selectFromResult to extract a single result"',title:'"Using',selectFromResult:!0,to:!0,extract:!0,a:!0,single:!0,'result"':!0},"function PostsList() {\n  const { data: posts } = api.useGetPostsQuery()\n\n  return (\n    <ul>\n      {posts?.data?.map((post) => (\n        <PostById key={post.id} id={post.id} />\n      ))}\n    </ul>\n  )\n}\n\nfunction PostById({ id }: { id: number }) {\n  // Will select the post with the given id, and will only rerender if the given posts data changes\n  const { post } = api.useGetPostsQuery(undefined, {\n    selectFromResult: ({ data }) => ({\n      post: data?.find((post) => post.id === id),\n    }),\n  })\n\n  return <li>{post?.name}</li>\n}\n")),(0,r.kt)("p",null,"Note that a shallow equality check is performed on the overall return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"selectFromResult")," to determine whether to force a rerender. i.e. it will trigger a rerender if any of the returned object values change reference. If a new array/object is created and used as a return value within the callback, it will hinder the performance benefits due to being identified as a new item each time the callback is run. When intentionally providing an empty array/object, in order to avoid re-creating it each time the callback runs, you can declare an empty array/object outside of the component in order to maintain a stable reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Using selectFromResult with a stable empty array"',title:'"Using',selectFromResult:!0,with:!0,a:!0,stable:!0,empty:!0,'array"':!0},"// An array declared here will maintain a stable reference rather than be re-created again\nconst emptyArray: Post[] = []\n\nfunction PostsList() {\n  // This call will result in an initial render returning an empty array for `posts`,\n  // and a second render when the data is received.\n  // It will trigger additional rerenders only if the `posts` data changes\n  const { posts } = api.useGetPostsQuery(undefined, {\n    selectFromResult: ({ data }) => ({\n      posts: data ?? emptyArray,\n    }),\n  })\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <PostById key={post.id} id={post.id} />\n      ))}\n    </ul>\n  )\n}\n")),(0,r.kt)("p",null,"To summarize the above behaviour - the returned values must be correctly memoized. See also ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"Deriving Data with Selectors")," and ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#selecting-values-from-results"},"Redux Essentials - RTK Query Advanced Patterns")," for additional information."),(0,r.kt)("h3",{id:"avoiding-unnecessary-requests"},"Avoiding unnecessary requests"),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \uae30\uc874 \ucffc\ub9ac\uc640 \ub3d9\uc77c\ud55c \ucffc\ub9ac\ub97c \ub9cc\ub4dc\ub294 component\ub97c \ucd94\uac00\ud558\uba74 \ub370\uc774\ud130 \uc694\uccad\uc774 \uc218\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub54c\ub54c\ub85c\ub294 \ud574\ub2f9 \uae30\ub2a5\uc744 \ubb34\uc2dc\ud55c \ucc44 \uac15\uc81c\ub85c refetch\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4 - \uc774 \uacbd\uc6b0, hook\uc5d0\uc11c \ubc18\ud658\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch"),"\ub97c \ud1b5\ud574 \ud574\uacb0\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ub9cc\uc57d React Hooks\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0 \uc54a\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch"),"\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const { status, data, error, refetch } = dispatch(\n  pokemonApi.endpoints.getPokemon.initiate('bulbasaur')\n)\n")))),(0,r.kt)("h2",{id:"example-observing-caching-behavior"},"Example: Observing caching behavior"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \uc911\ubcf5 \uc694\uccad \uc81c\uac70 \ubc0f \uce90\uc2f1 \ub3d9\uc791\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uccab 'bulbasaur' \uc720\ud615\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"Pokemon")," component \uac00 \ucd94\uac00\ub418\uace0, 'bulbasaur' \ub370\uc774\ud130\ub97c \uc694\uccad\uc744 \ud1b5\ud574 \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uadf8 \ub4a4, \ub2e4\ub978 'bulbasaur' \uc720\ud615\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"Pokemon")," \ucef4\ud3ec\ub10c\ud2b8\uac00 \ucd94\uac00 \ub429\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 'Loading...' \uc774 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uace0 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub098\uc694? \uc5ec\uae30\uc11c \uce90\uc2dc\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\uc7a0\uc2dc \ud6c4, 'pikachu' \uc720\ud615\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"Pokemon")," \ucef4\ud3ec\ub10c\ud2b8 \uac00 \ucd94\uac00\ub418\uace0, 'pikachu' \ub370\uc774\ud130\ub97c \uc694\uccad\uc744 \ud1b5\ud574 \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \ud3ec\ucf13\ubaac \uc720\ud615\uc758 'Refetch' \ub97c \ub204\ub97c \uacbd\uc6b0, \ud55c\ubc88\uc758 \uc694\uccad\uc73c\ub85c \ud574\ub2f9 \ud3ec\ucf13\ubaac \uc720\ud615\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Try it out")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"'Add bulbasaur' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc694\uc18c\uc911 \ud558\ub098\uc5d0\uc11c 'refetch' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uae30 \uc804\uae4c\uc9c0 \uc704\uc5d0\uc11c \uc124\uba85\ud55c \uac83\uacfc \ub3d9\uc77c\ud55c \ub3d9\uc791\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/deduping-queries?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Basic query deduplication example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}m.isMDXComponent=!0}}]);