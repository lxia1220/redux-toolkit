"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5168],{8242:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var n=i(5773),a=i(808),r=(i(7378),i(5318)),o=(i(517),i(7637),["components"]),l={id:"prefetching",title:"Prefetching",sidebar_label:"Prefetching",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Prefetching: fetching before user interaction"},s=void 0,p={unversionedId:"rtk-query/usage/prefetching",id:"rtk-query/usage/prefetching",isDocsHomePage:!1,title:"Prefetching",description:"RTK Query > \uc0ac\uc6a9\ubc95 > Prefetching: fetching before user interaction",source:"@site/../docs/rtk-query/usage/prefetching.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/prefetching",permalink:"/redux-toolkit/rtk-query/usage/prefetching",tags:[],version:"current",lastUpdatedAt:1656211135,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"prefetching",title:"Prefetching",sidebar_label:"Prefetching",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Prefetching: fetching before user interaction"},sidebar:"docs",previous:{title:"Pagination",permalink:"/redux-toolkit/rtk-query/usage/pagination"},next:{title:"Polling",permalink:"/redux-toolkit/rtk-query/usage/polling"}},h=[{value:"Prefetching with React Hooks",id:"prefetching-with-react-hooks",children:[{value:"Customizing the Hook Behavior",id:"customizing-the-hook-behavior",children:[],level:3},{value:"Trigger Function Behavior",id:"trigger-function-behavior",children:[],level:3},{value:"Recipe: Prefetch Immediately",id:"recipe-prefetch-immediately",children:[],level:3}],level:2},{value:"Prefetching Without Hooks",id:"prefetching-without-hooks",children:[],level:2},{value:"Prefetching Examples",id:"prefetching-examples",children:[{value:"Basic Prefetching",id:"basic-prefetching",children:[],level:3},{value:"Automatic Prefetching",id:"automatic-prefetching",children:[],level:3},{value:"Prefetching All Known Pages",id:"prefetching-all-known-pages",children:[],level:3}],level:2}],c={toc:h};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prefetching"},"Prefetching"),(0,r.kt)("p",null,"Prefetching\uc758 \ubaa9\ud45c\ub294 \uc0ac\uc6a9\uc790\uac00 \ud398\uc774\uc9c0\ub97c \ud0d0\uc0c9\ud558\uac70\ub098 \uc54c\ub824\uc9c4 \ucf58\ud150\uce20\ub97c \ub85c\ub4dc\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uae30 ",(0,r.kt)("em",{parentName:"p"},"\uc804\uc5d0")," \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uc0c1\ud669\uc774 \uc788\uc9c0\ub9cc \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User hovers over a navigation element"),(0,r.kt)("li",{parentName:"ol"},"User hovers over a list element that is a link"),(0,r.kt)("li",{parentName:"ol"},"User hovers over a next pagination button"),(0,r.kt)("li",{parentName:"ol"},"User navigates to a page and you know that some components down the tree will require said data. This way, you can prevent fetching waterfalls.")),(0,r.kt)("h2",{id:"prefetching-with-react-hooks"},"Prefetching with React Hooks"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./mutations"},(0,r.kt)("inlineCode",{parentName:"a"},"useMutation"))," hook\uacfc \uc720\uc0ac\ud558\uac8c, ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefetch"),' hook\uc740 \uc790\ub3d9\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4 \u2014 \uadf8\uac83\uc740 \ub3d9\uc791\uc744 \uc2dc\uc791\ud558\ub294 \ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 "trigger function"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.'),(0,r.kt)("p",null,"It accepts two arguments: the first is the key of a query action that you ",(0,r.kt)("a",{parentName:"p",href:"../api/createApi#endpoints"},"defined in your API service"),", and the second is an object of two optional parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="usePrefetch Signature" no-transpile',title:'"usePrefetch','Signature"':!0,"no-transpile":!0},"export type PrefetchOptions =\n  | { force?: boolean }\n  | {\n      ifOlderThan?: false | number;\n    };\n\nusePrefetch<EndpointName extends QueryKeys<Definitions>>(\n    endpointName: EndpointName,\n    options?: PrefetchOptions\n  ): (arg: QueryArgFrom<Definitions[EndpointName]>, options?: PrefetchOptions) => void;\n")),(0,r.kt)("h3",{id:"customizing-the-hook-behavior"},"Customizing the Hook Behavior"),(0,r.kt)("p",null,"You can specify these prefetch options when declaring the hook or at the call site. The call site will take priority over the defaults."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ifOlderThan")," - (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),") - ",(0,r.kt)("em",{parentName:"li"},"number is value in seconds"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If specified, it will only run the query if the difference between ",(0,r.kt)("inlineCode",{parentName:"li"},"new Date()")," and the last ",(0,r.kt)("inlineCode",{parentName:"li"},"fulfilledTimeStamp")," is greater than the given value"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"force"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"force: true"),", it will ignore the ",(0,r.kt)("inlineCode",{parentName:"li"},"ifOlderThan")," value if it is set and the query will be run even if it exists in the cache.")))),(0,r.kt)("h3",{id:"trigger-function-behavior"},"Trigger Function Behavior"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The trigger function ",(0,r.kt)("em",{parentName:"li"},"always")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"void"),"."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"force: true")," is set during the declaration or at the call site, the query will be run no matter what. The one exception to that is if the same query is already in-flight."),(0,r.kt)("li",{parentName:"ol"},"If no options are specified and the query exists in the cache, the query will not be performed."),(0,r.kt)("li",{parentName:"ol"},"If no options are specified and the query ",(0,r.kt)("em",{parentName:"li"},"does not exist")," in the cache, the query will be performed.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assuming")," you have a ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuery")," hook in the tree that is subscribed to the same query that you are prefetching:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useQuery")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"{isLoading: true, isFetching: true, ...rest"),"}"))))),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"ifOlderThan")," is specified but evaluates to false and the query is in the cache, the query will not be performed."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"ifOlderThan")," is specified and evaluates to true, the query will be performed even if there is an existing cache entry.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assuming")," you have a ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuery")," hook in the tree that is subscribed to the same query that you are prefetching:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useQuery")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"{isLoading: false, isFetching: true, ...rest"),"}")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="usePrefetch Example"',title:'"usePrefetch','Example"':!0},"function User() {\n  const prefetchUser = usePrefetch('getUser')\n\n  // Low priority hover will not fire unless the last request happened more than 35s ago\n  // High priority hover will _always_ fire\n  return (\n    <div>\n      <button onMouseEnter={() => prefetchUser(4, { ifOlderThan: 35 })}>\n        Low priority\n      </button>\n      <button onMouseEnter={() => prefetchUser(4, { force: true })}>\n        High priority\n      </button>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"recipe-prefetch-immediately"},"Recipe: Prefetch Immediately"),(0,r.kt)("p",null,"In some cases, you may want to prefetch a resource immediately. You can implement this in just a few lines of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/usePrefetchImmediately.ts" no-transpile',title:'"hooks/usePrefetchImmediately.ts"',"no-transpile":!0},"type EndpointNames = keyof typeof api.endpoints\n\nexport function usePrefetchImmediately<T extends EndpointNames>(\n  endpoint: T,\n  arg: Parameters<typeof api.endpoints[T]['initiate']>[0],\n  options: PrefetchOptions = {}\n) {\n  const dispatch = useAppDispatch()\n  useEffect(() => {\n    dispatch(api.util.prefetch(endpoint, arg as any, options))\n  }, [])\n}\n\n// In a component\nusePrefetchImmediately('getUser', 5)\n")),(0,r.kt)("h2",{id:"prefetching-without-hooks"},"Prefetching Without Hooks"),(0,r.kt)("p",null,"If you're not using the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefetch")," hook, you can recreate the same behavior on your own in any framework."),(0,r.kt)("p",null,"When dispatching the ",(0,r.kt)("inlineCode",{parentName:"p"},"prefetch")," thunk as shown below you will see the same exact behavior as ",(0,r.kt)("a",{parentName:"p",href:"#trigger-function-behavior"},"described here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Non-hook prefetching example" no-transpile',title:'"Non-hook',prefetching:!0,'example"':!0,"no-transpile":!0},"store.dispatch(\n  api.util.prefetch(endpointName, arg, { force: false, ifOlderThan: 10 })\n)\n")),(0,r.kt)("p",null,"You can also dispatch the query action, but you would be responsible for implementing any additional logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Alternate method of manual prefetching" no-transpile',title:'"Alternate',method:!0,of:!0,manual:!0,'prefetching"':!0,"no-transpile":!0},"dispatch(api.endpoints[endpointName].initiate(arg, { forceRefetch: true }))\n")),(0,r.kt)("h2",{id:"prefetching-examples"},"Prefetching Examples"),(0,r.kt)("h3",{id:"basic-prefetching"},"Basic Prefetching"),(0,r.kt)("p",null,"This is a very basic example that shows how you can prefetch when a user hovers over the next arrow. This is probably not the optimal solution, because if they hover, click, then change pages without moving their mouse, we wouldn't know to prefetch the next page because we wouldn't see the next ",(0,r.kt)("inlineCode",{parentName:"p"},"onMouseEnter")," event. In this case, you would need to handle this on your own. You could also consider automatically prefetching the next page..."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Prefetching Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h3",{id:"automatic-prefetching"},"Automatic Prefetching"),(0,r.kt)("p",null,"Picking up on our last example, we automatically ",(0,r.kt)("inlineCode",{parentName:"p"},"prefetch")," the next page, giving the appearance of no network delay."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching-automatic?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Automatic Prefetching Example (on hover)",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h3",{id:"prefetching-all-known-pages"},"Prefetching All Known Pages"),(0,r.kt)("p",null,"After the first query initialized by ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," runs, we automatically fetch all remaining pages."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching-automatic-waterfall?fontsize=12&runonclick=1&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Fposts%2FPostsManager.tsx",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Automatic Prefetching Waterfall Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}u.isMDXComponent=!0}}]);