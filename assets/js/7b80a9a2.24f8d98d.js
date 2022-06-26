"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3291],{4886:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=n(5773),i=n(808),r=(n(7378),n(5318)),a=n(517),u=n(7637),s=["components"],c={id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Customizing createApi: adding customized variations"},l=void 0,d={unversionedId:"rtk-query/usage/customizing-create-api",id:"rtk-query/usage/customizing-create-api",isDocsHomePage:!1,title:"Customizing createApi",description:"RTK Query > \uc0ac\uc6a9\ubc95 > Customizing createApi: adding customized variations",source:"@site/../docs/rtk-query/usage/customizing-create-api.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/customizing-create-api",permalink:"/redux-toolkit/rtk-query/usage/customizing-create-api",tags:[],version:"current",lastUpdatedAt:1656211135,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > \uc0ac\uc6a9\ubc95 > Customizing createApi: adding customized variations"},sidebar:"docs",previous:{title:"Persistence and Rehydration",permalink:"/redux-toolkit/rtk-query/usage/persistence-and-rehydration"},next:{title:"Customizing Queries",permalink:"/redux-toolkit/rtk-query/usage/customizing-queries"}},p=[{value:"Customizing the React-Redux Hooks",id:"customizing-the-react-redux-hooks",children:[],level:2},{value:"Creating your own module",id:"creating-your-own-module",children:[],level:2}],m={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customizing-createapi"},"Customizing ",(0,r.kt)("inlineCode",{parentName:"h1"},"createApi")),(0,r.kt)("p",null,"Currently, RTK Query includes two variants of ",(0,r.kt)("inlineCode",{parentName:"p"},"createApi"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createBaseApi"),", which contains only the UI-agnostic Redux logic (the core module)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createApi"),", which contains both the core and React hooks modules")),(0,r.kt)("p",null,"You can create your own versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"createApi")," by either specifying non-default options for the modules or by adding your own modules."),(0,r.kt)("h2",{id:"customizing-the-react-redux-hooks"},"Customizing the React-Redux Hooks"),(0,r.kt)("p",null,"If you want the hooks to use different versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"useDispatch"),", such as if you are using a custom context, you can pass these in at module creation:"),(0,r.kt)(u.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react'\nimport { createDispatchHook, ReactReduxContextValue } from 'react-redux'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst MyContext = React.createContext<ReactReduxContextValue>(null as any)\nconst customCreateApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({ useDispatch: createDispatchHook(MyContext) })\n)\n"))),(0,r.kt)(a.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react'\nimport { createDispatchHook } from 'react-redux'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst MyContext = React.createContext(null)\nconst customCreateApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({ useDispatch: createDispatchHook(MyContext) })\n)\n")))),(0,r.kt)("h2",{id:"creating-your-own-module"},"Creating your own module"),(0,r.kt)("p",null,"If you want to create your own module, you should review ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-toolkit/blob/b74a52935a5840bebca5acdc8e2265e3b6497afa/src/query/react/module.ts"},"the react-hooks module")," to see what an implementation would look like."),(0,r.kt)("p",null,"Here is a very stripped down version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import { CoreModule } from '@internal/core/module'\nimport {\n  BaseQueryFn,\n  EndpointDefinitions,\n  Api,\n  Module,\n  buildCreateApi,\n  coreModule,\n} from '@reduxjs/toolkit/query'\n\nexport const customModuleName = Symbol()\nexport type CustomModule = typeof customModuleName\n\ndeclare module '../apiTypes' {\n  export interface ApiModules<\n    BaseQuery extends BaseQueryFn,\n    Definitions extends EndpointDefinitions,\n    ReducerPath extends string,\n    TagTypes extends string\n  > {\n    [customModuleName]: {\n      endpoints: {\n        [K in keyof Definitions]: {\n          myEndpointProperty: string\n        }\n      }\n    }\n  }\n}\n\nexport const myModule = (): Module<CustomModule> => ({\n  name: customModuleName,\n  init(api, options, context) {\n    // initialize stuff here if you need to\n\n    return {\n      injectEndpoint(endpoint, definition) {\n        const anyApi = (api as any) as Api<\n          any,\n          Record<string, any>,\n          string,\n          string,\n          CustomModule | CoreModule\n        >\n        anyApi.endpoints[endpoint].myEndpointProperty = 'test'\n      },\n    }\n  },\n})\n\nexport const myCreateApi = buildCreateApi(coreModule(), myModule())\n")))}k.isMDXComponent=!0}}]);