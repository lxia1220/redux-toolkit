"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9206],{309:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var o=n(5773),r=n(808),i=(n(7378),n(5318)),l=(n(517),n(7637),["components"]),a={id:"polling",title:"Polling",sidebar_label:"Polling",hide_title:!0,description:"RTK Query > Usage > Polling: re-fetching data on a timer"},s=void 0,p={unversionedId:"rtk-query/usage/polling",id:"rtk-query/usage/polling",isDocsHomePage:!1,title:"Polling",description:"RTK Query > Usage > Polling: re-fetching data on a timer",source:"@site/../docs/rtk-query/usage/polling.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/polling",permalink:"/redux-toolkit/rtk-query/usage/polling",tags:[],version:"current",lastUpdatedAt:1656210075,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"polling",title:"Polling",sidebar_label:"Polling",hide_title:!0,description:"RTK Query > Usage > Polling: re-fetching data on a timer"},sidebar:"docs",previous:{title:"Prefetching",permalink:"/redux-toolkit/rtk-query/usage/prefetching"},next:{title:"Streaming Updates",permalink:"/redux-toolkit/rtk-query/usage/streaming-updates"}},u=[{value:"Polling Overview",id:"polling-overview",children:[],level:2},{value:"React Hooks \uc5c6\uc774 Polling",id:"react-hooks-\uc5c6\uc774-polling",children:[],level:2},{value:"Polling \uc608\uc2dc",id:"polling-\uc608\uc2dc",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polling"},"Polling"),(0,i.kt)("h2",{id:"polling-overview"},"Polling Overview"),(0,i.kt)("p",null,"Polling\uc740 \ucffc\ub9ac\uac00 \uc9c0\uc815\ub41c \uac04\uaca9\uc73c\ub85c \uc2e4\ud589\ub418\ub3c4\ub85d \ud558\uc5ec '\uc2e4\uc2dc\uac04' \ud6a8\uacfc\ub97c \ub0bc \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ucffc\ub9ac\uc5d0 \ub300\ud55c \ud3f4\ub9c1\uc744 \ud65c\uc131\ud654\ud558\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"pollingInterval"),"\uc744 \ubc00\ub9ac\ucd08 \ub2e8\uc704\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook \ub610\ub294 action creator \uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Pokemon.tsx" no-transpile',title:'"src/Pokemon.tsx"',"no-transpile":!0},"import * as React from 'react'\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport const Pokemon = ({ name }: { name: string }) => {\n  // Automatically refetch every 3s\n  const { data, status, error, refetch } = useGetPokemonByNameQuery(name, {\n    pollingInterval: 3000,\n  })\n\n  return <div>{data}</div>\n}\n")),(0,i.kt)("p",null,"React Hooks\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 action creator\uc5d0\uc11c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const { data, status, error, refetch } = store.dispatch(\n  endpoints.getCountById.initiate(id, {\n    subscriptionOptions: { pollingInterval: 3000 },\n  })\n)\n")),(0,i.kt)("h2",{id:"react-hooks-\uc5c6\uc774-polling"},"React Hooks \uc5c6\uc774 Polling"),(0,i.kt)("p",null,"React Hooks\uc758 \ud3b8\ub9ac\ud568 \uc5c6\uc774 \ud3f4\ub9c1\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \uac04\uaca9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 promise ref\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"updateSubscriptionOptions"),"\ub97c \uc218\ub3d9\uc73c\ub85c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \ub530\ub77c \ub2e4\ub974\uc9c0\ub9cc \uc5b4\ub514\uc5d0\uc11c\ub098 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud55c \uac00\uc9c0 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\uc790\uba74 ",(0,i.kt)("a",{parentName:"p",href:"./examples#svelte"},"Svelte \uc608\uc81c"),"\ub97c \ucc38\uc870\ud558\uace0, \uc218\ub3d9\uc73c\ub85c \uad6c\ub3c5 \uc791\uc5c5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/usage-without-react-hooks"},"React Hooks \uc5c6\uc774 \uc0ac\uc6a9")," \ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"queryRef.updateSubscriptionOptions({ pollingInterval: 0 })\n")),(0,i.kt)("h2",{id:"polling-\uc608\uc2dc"},"Polling \uc608\uc2dc"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/polling?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-react-hooks-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}d.isMDXComponent=!0}}]);