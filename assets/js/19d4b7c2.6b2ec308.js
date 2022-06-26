"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5],{8197:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var a=n(5773),i=n(808),s=(n(7378),n(5318)),r=n(517),o=n(7637),p=["components"],l={id:"pagination",title:"Pagination",sidebar_label:"Pagination",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Pagination: suggestions for handling paginated data"},d=void 0,u={unversionedId:"rtk-query/usage/pagination",id:"rtk-query/usage/pagination",isDocsHomePage:!1,title:"Pagination",description:"RTK Query > \uc0ac\uc6a9\ubc95 > Pagination: suggestions for handling paginated data",source:"@site/../docs/rtk-query/usage/pagination.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/pagination",permalink:"/redux-toolkit/rtk-query/usage/pagination",tags:[],version:"current",lastUpdatedAt:1656245190,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"pagination",title:"Pagination",sidebar_label:"Pagination",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Pagination: suggestions for handling paginated data"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/redux-toolkit/rtk-query/usage/error-handling"},next:{title:"Prefetching",permalink:"/redux-toolkit/rtk-query/usage/prefetching"}},g=[{value:"Pagination Recipes",id:"pagination-recipes",children:[{value:"Endpoint\uc5d0\uc11c arg\ub85c page\ub97c \ubc1b\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4.",id:"endpoint\uc5d0\uc11c-arg\ub85c-page\ub97c-\ubc1b\ub3c4\ub85d-\uc124\uc815\ud569\ub2c8\ub2e4",children:[],level:3},{value:"<code>page</code> state \ubcc0\uc218\ub97c \uc99d\uac00\uc2dc\ucf1c \ub2e4\uc74c \ud398\uc774\uc9c0\ub97c \ud2b8\ub9ac\uac70\ud569\ub2c8\ub2e4.",id:"page-state-\ubcc0\uc218\ub97c-\uc99d\uac00\uc2dc\ucf1c-\ub2e4\uc74c-\ud398\uc774\uc9c0\ub97c-\ud2b8\ub9ac\uac70\ud569\ub2c8\ub2e4",children:[],level:3},{value:"Automated Re-fetching of Paginated Queries",id:"automated-re-fetching-of-paginated-queries",children:[],level:3}],level:2},{value:"General Pagination Example",id:"general-pagination-example",children:[],level:2}],c={toc:g};function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pagination"},"Pagination"),(0,s.kt)("p",null,"RTK Query\uc5d0\ub294 Pagination \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 RTK Query\ub97c \ud1b5\ud574 \ud45c\uc900 \uc778\ub371\uc2a4 \uae30\ubc18 pagination API\uc640 \uc27d\uac8c \ud1b5\ud569\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \uad6c\ud604\ud574\uc57c \ud558\ub294 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 pagination \ud615\uc2dd\uc785\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"pagination-recipes"},"Pagination Recipes"),(0,s.kt)("h3",{id:"endpoint\uc5d0\uc11c-arg\ub85c-page\ub97c-\ubc1b\ub3c4\ub85d-\uc124\uc815\ud569\ub2c8\ub2e4"},"Endpoint\uc5d0\uc11c arg\ub85c page\ub97c \ubc1b\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/services/posts.ts"',title:'"src/app/services/posts.ts"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\ninterface ListResponse<T> {\n  page: number\n  per_page: number\n  total: number\n  total_pages: number\n  data: T[]\n}\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (builder) => ({\n    listPosts: builder.query<ListResponse<Post>, number | void>({\n      query: (page = 1) => `posts?page=${page}`,\n    }),\n  }),\n})\n\nexport const { useListPostsQuery } = api\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/services/posts.ts"',title:'"src/app/services/posts.ts"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (builder) => ({\n    listPosts: builder.query({\n      query: (page = 1) => `posts?page=${page}`,\n    }),\n  }),\n})\n\nexport const { useListPostsQuery } = api\n")))),(0,s.kt)("h3",{id:"page-state-\ubcc0\uc218\ub97c-\uc99d\uac00\uc2dc\ucf1c-\ub2e4\uc74c-\ud398\uc774\uc9c0\ub97c-\ud2b8\ub9ac\uac70\ud569\ub2c8\ub2e4"},(0,s.kt)("inlineCode",{parentName:"h3"},"page")," state \ubcc0\uc218\ub97c \uc99d\uac00\uc2dc\ucf1c \ub2e4\uc74c \ud398\uc774\uc9c0\ub97c \ud2b8\ub9ac\uac70\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/features/posts/PostsManager.tsx"',title:'"src/features/posts/PostsManager.tsx"'},"const PostList = () => {\n  const [page, setPage] = useState(1);\n  const { data: posts, isLoading, isFetching } = useListPostsQuery(page);\n\n  if (isLoading) {\n    return <div>Loading</div>;\n  }\n\n  if (!posts?.data) {\n    return <div>No posts :(</div>;\n  }\n\n  return (\n    <div>\n        {posts.data.map(({ id, title, status }) => (\n          <div key={id}>{title} - {status}</div>\n        ))}\n        <button onClick={() => setPage(page - 1)} isLoading={isFetching}>\n          Previous\n        </button>\n        <button\n          onClick={() => setPage(page + 1)}\n          isLoading={isFetching}\n        >\n         Next\n        </button>\n    </div>\n  );\n};\n")),(0,s.kt)("h3",{id:"automated-re-fetching-of-paginated-queries"},"Automated Re-fetching of Paginated Queries"),(0,s.kt)("p",null,"It is a common use-case to utilize tag invalidation to perform\n",(0,s.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/automated-refetching"},"automated re-fetching")," with RTK Query."),(0,s.kt)("p",null,"A potential pitfall when combining this with pagination is that your paginated query may only\nprovide a ",(0,s.kt)("em",{parentName:"p"},"partial")," list at any given time, and hence not ",(0,s.kt)("inlineCode",{parentName:"p"},"provide")," tags for entity IDs that\nfall on pages which aren't currently shown. If a specific entity is deleted that falls on an\nearlier page, the paginated query will not be providing a tag for that specific ID, and will\nnot be invalidated to trigger re-fetching data. As a result, items on the current page that\nshould shift one item up will not have done so, and the total count of items and/or pages\nmay be incorrect."),(0,s.kt)("p",null,"A strategy to overcome this is to ensure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"delete")," mutation always ",(0,s.kt)("inlineCode",{parentName:"p"},"invalidates")," the\npaginated query, even if the deleted item is not ",(0,s.kt)("em",{parentName:"p"},"currently")," provided on that page. We can\nleverage the concept of\n",(0,s.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/automated-refetching#advanced-invalidation-with-abstract-tag-ids"},"advanced invalidation with abstract tag ids"),"\nto do this by ",(0,s.kt)("inlineCode",{parentName:"p"},"providing")," a ",(0,s.kt)("inlineCode",{parentName:"p"},"'Posts'")," tag with the ",(0,s.kt)("inlineCode",{parentName:"p"},"'PARTIAL-LIST'")," ID in our paginated query,\nand ",(0,s.kt)("inlineCode",{parentName:"p"},"invalidating")," that corresponding tag for any mutation that should affect it."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example of invalidating cache for paginated queries"',title:'"Example',of:!0,invalidating:!0,cache:!0,for:!0,paginated:!0,'queries"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\ninterface ListResponse<T> {\n  page: number\n  per_page: number\n  total: number\n  total_pages: number\n  data: T[]\n}\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    listPosts: build.query<ListResponse<Post>, number | void>({\n      query: (page = 1) => `posts?page=${page}`,\n      // highlight-start\n      providesTags: (result, error, page) =>\n        result\n          ? [\n              // Provides a tag for each post in the current page,\n              // as well as the 'PARTIAL-LIST' tag.\n              ...result.data.map(({ id }) => ({ type: 'Posts' as const, id })),\n              { type: 'Posts', id: 'PARTIAL-LIST' },\n            ]\n          : [{ type: 'Posts', id: 'PARTIAL-LIST' }],\n      // highlight-end\n    }),\n    deletePost: build.mutation<{ success: boolean; id: number }, number>({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,\n      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.\n      // highlight-start\n      invalidatesTags: (result, error, id) => [\n        { type: 'Posts', id },\n        { type: 'Posts', id: 'PARTIAL-LIST' },\n      ],\n      // highlight-end\n    }),\n  }),\n})\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example of invalidating cache for paginated queries"',title:'"Example',of:!0,invalidating:!0,cache:!0,for:!0,paginated:!0,'queries"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    listPosts: build.query({\n      query: (page = 1) => `posts?page=${page}`,\n      // highlight-start\n      providesTags: (result, error, page) =>\n        result\n          ? [\n              // Provides a tag for each post in the current page,\n              // as well as the 'PARTIAL-LIST' tag.\n              ...result.data.map(({ id }) => ({ type: 'Posts', id })),\n              { type: 'Posts', id: 'PARTIAL-LIST' },\n            ]\n          : [{ type: 'Posts', id: 'PARTIAL-LIST' }],\n      // highlight-end\n    }),\n    deletePost: build.mutation({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,\n      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.\n      // highlight-start\n      invalidatesTags: (result, error, id) => [\n        { type: 'Posts', id },\n        { type: 'Posts', id: 'PARTIAL-LIST' },\n      ],\n      // highlight-end\n    }),\n  }),\n})\n")))),(0,s.kt)("h2",{id:"general-pagination-example"},"General Pagination Example"),(0,s.kt)("p",null,"In the following example, you'll see ",(0,s.kt)("inlineCode",{parentName:"p"},"Loading")," on the initial query, but then as you move forward we'll use the next/previous buttons as a ",(0,s.kt)("em",{parentName:"p"},"fetching")," indicator while any non-cached query is performed. When you go back, the cached data will be served instantaneously."),(0,s.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/pagination?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Pagination Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}h.isMDXComponent=!0}}]);