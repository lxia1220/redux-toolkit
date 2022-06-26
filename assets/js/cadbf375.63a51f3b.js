"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9157],{9408:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(5773),a=r(808),i=(r(7378),r(5318)),s=r(517),o=r(7637),d=["components"],p={id:"persistence-and-rehydration",title:"Persistence and Rehydration",sidebar_label:"Persistence and Rehydration",hide_title:!0,description:"RTK Query > Usage > Persistence and Rehydration"},u=void 0,l={unversionedId:"rtk-query/usage/persistence-and-rehydration",id:"rtk-query/usage/persistence-and-rehydration",isDocsHomePage:!1,title:"Persistence and Rehydration",description:"RTK Query > Usage > Persistence and Rehydration",source:"@site/../docs/rtk-query/usage/persistence-and-rehydration.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/persistence-and-rehydration",permalink:"/redux-toolkit/rtk-query/usage/persistence-and-rehydration",tags:[],version:"current",lastUpdatedAt:1656209250,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"persistence-and-rehydration",title:"Persistence and Rehydration",sidebar_label:"Persistence and Rehydration",hide_title:!0,description:"RTK Query > Usage > Persistence and Rehydration"},sidebar:"docs",previous:{title:"Server Side Rendering",permalink:"/redux-toolkit/rtk-query/usage/server-side-rendering"},next:{title:"Customizing createApi",permalink:"/redux-toolkit/rtk-query/usage/customizing-create-api"}},c=[{value:"Redux Persist",id:"redux-persist",children:[],level:2}],h={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"persistence-and-rehydration"},"Persistence and Rehydration"),(0,i.kt)("p",null,"RTK Query supports rehydration via the ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/createApi#extractrehydrationinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"extractRehydrationInfo")),"\noption on ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/createApi"},(0,i.kt)("inlineCode",{parentName:"a"},"createApi")),". This function is passed every dispatched action,\nand where it returns a value other than ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", that value is used to rehydrate the API state\nfor fulfilled & errored queries."),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/server-side-rendering"},"Server Side Rendering"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Generally, persisting API slices is not recommended and instead, mechanisms like\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},(0,i.kt)("inlineCode",{parentName:"a"},"Cache-Control")," Headers"),"\nshould be used in browsers to define cache behaviour.\nPersisting and rehydrating an api slice might always leave the user with very stale data if the user\nhas not visited the page for some time.\nNonetheless, in environments like Native Apps, where there is no browser cache to take care of this,\npersistance might still be a viable option."))),(0,i.kt)("h2",{id:"redux-persist"},"Redux Persist"),(0,i.kt)("p",null,"API state rehydration can be used in conjunction with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist"},"Redux Persist"),"\nby leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"REHYDRATE")," action type imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"redux-persist"),". This can be used out of the\nbox with the ",(0,i.kt)("inlineCode",{parentName:"p"},"autoMergeLevel1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"autoMergeLevel2")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist#state-reconciler"},"state reconcilers"),"\nwhen persisting the root reducer, or with the ",(0,i.kt)("inlineCode",{parentName:"p"},"autoMergeLevel1")," reconciler when persisting just the api reducer."),(0,i.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="redux-persist rehydration example"',title:'"redux-persist',rehydration:!0,'example"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { REHYDRATE } from 'redux-persist'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  extractRehydrationInfo(action, { reducerPath }) {\n    if (action.type === REHYDRATE) {\n      return action.payload[reducerPath]\n    }\n  },\n  // highlight-end\n  endpoints: (build) => ({\n    // omitted\n  }),\n})\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="redux-persist rehydration example"',title:'"redux-persist',rehydration:!0,'example"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { REHYDRATE } from 'redux-persist'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  extractRehydrationInfo(action, { reducerPath }) {\n    if (action.type === REHYDRATE) {\n      return action.payload[reducerPath]\n    }\n  },\n  // highlight-end\n  endpoints: (build) => ({\n    // omitted\n  }),\n})\n")))))}m.isMDXComponent=!0}}]);