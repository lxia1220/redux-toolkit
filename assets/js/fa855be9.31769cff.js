"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4983],{5048:function(e,n,i){i.r(n),i.d(n,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var t=i(5773),a=i(808),o=(i(7378),i(5318)),d=i(517),s=i(7637),r=["components"],p={id:"code-splitting",title:"API Slices: Code Splitting and Generation",sidebar_label:"Code Splitting",hide_title:!0},l=void 0,c={unversionedId:"rtk-query/api/created-api/code-splitting",id:"rtk-query/api/created-api/code-splitting",isDocsHomePage:!1,title:"API Slices: Code Splitting and Generation",description:"&nbsp;",source:"@site/../docs/rtk-query/api/created-api/code-splitting.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/code-splitting",permalink:"/redux-toolkit/rtk-query/api/created-api/code-splitting",tags:[],version:"current",lastUpdatedAt:1656210075,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"code-splitting",title:"API Slices: Code Splitting and Generation",sidebar_label:"Code Splitting",hide_title:!0},sidebar:"docs",previous:{title:"Endpoints",permalink:"/redux-toolkit/rtk-query/api/created-api/endpoints"},next:{title:"API Slice Utilities",permalink:"/redux-toolkit/rtk-query/api/created-api/api-slice-utils"}},u=[{value:"<code>injectEndpoints</code>",id:"injectendpoints",children:[{value:"Signature",id:"signature",children:[],level:4},{value:"Description",id:"description",children:[],level:4}],level:2},{value:"<code>enhanceEndpoints</code>",id:"enhanceendpoints",children:[{value:"Signature",id:"signature-1",children:[],level:4},{value:"Description",id:"description-1",children:[],level:4}],level:2}],g={toc:u};function h(e){var n=e.components,i=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-slices-code-splitting-and-generation"},"API Slices: Code Splitting and Generation"),(0,o.kt)("p",null,"Each API slice allows ",(0,o.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/code-splitting"},"additional endpoint definitions to be injected at runtime")," after the initial API slice has been defined. This can be beneficial for apps that may have ",(0,o.kt)("em",{parentName:"p"},"many")," endpoints."),(0,o.kt)("p",null,"The individual API slice endpoint definitions can also be split across multiple files. This is primarily useful for working with API slices that were ",(0,o.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/usage/code-generation"},"code-generated from an API schema file"),", allowing you to add additional custom behavior and configuration to a set of automatically-generated endpoint definitions."),(0,o.kt)("p",null,"Each API slice object has ",(0,o.kt)("inlineCode",{parentName:"p"},"injectEndpoints")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"enhanceEndpoints")," functions to support these use cases."),(0,o.kt)("h2",{id:"injectendpoints"},(0,o.kt)("inlineCode",{parentName:"h2"},"injectEndpoints")),(0,o.kt)("h4",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const injectEndpoints = (endpointOptions: InjectedEndpointOptions) =>\n  EnhancedApiSlice\n\ninterface InjectedEndpointOptions {\n  endpoints: (build: EndpointBuilder) => NewEndpointDefinitions\n  overrideExisting?: boolean\n}\n")),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Accepts an options object containing the same ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," builder callback you would pass to ",(0,o.kt)("a",{parentName:"p",href:"/redux-toolkit/rtk-query/api/createApi#endpoints"},(0,o.kt)("inlineCode",{parentName:"a"},"createApi.endpoints")),". Any endpoint definitions defined using that builder will be merged into the existing endpoint definitions for this API slice using a shallow merge, so any new endpoint definitions will override existing endpoints with the same name."),(0,o.kt)("p",null,"Returns an updated and enhanced version of the API slice object, containing the combined endpoint definitions."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideExisting")," flag controls a development-only warning that notifies you if there is a name clash between endpoint definitions. When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the warning will not be printed."),(0,o.kt)("p",null,"This method is primarily useful for code splitting and hot reloading."),(0,o.kt)("h2",{id:"enhanceendpoints"},(0,o.kt)("inlineCode",{parentName:"h2"},"enhanceEndpoints")),(0,o.kt)("h4",{id:"signature-1"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const enhanceEndpoints = (endpointOptions: EnhanceEndpointsOptions) =>\n  EnhancedApiSlice\n\ninterface EnhanceEndpointsOptions {\n  addTagTypes?: readonly string[]\n  endpoints?: Record<string, Partial<EndpointDefinition>>\n}\n")),(0,o.kt)("h4",{id:"description-1"},"Description"),(0,o.kt)("p",null,"Any provided tag types or endpoint definitions will be merged into the existing endpoint definitions for this API slice. Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"injectEndpoints"),", the partial endpoint definitions will not ",(0,o.kt)("em",{parentName:"p"},"replace")," existing definitions, but are rather merged together on a per-definition basis (ie, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign(existingEndpoint, newPartialEndpoint)"),")."),(0,o.kt)("p",null,"Returns an updated and enhanced version of the API slice object, containing the combined endpoint definitions."),(0,o.kt)("p",null,"This is primarily useful for taking an API slice object that was code-generated from an API schema file like OpenAPI, and adding additional specific hand-written configuration for cache invalidation management on top of the generated endpoint definitions."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"enhanceEndpoints")," can be used to modify caching behavior by changing the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"providesTags"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidatesTags"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"keepUnusedDataFor"),":"),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { api } from './api'\n\nconst enhancedApi = api.enhanceEndpoints({\n  addTagTypes: ['User'],\n  endpoints: {\n    getUserByUserId: {\n      providesTags: ['User'],\n    },\n    patchUserByUserId: {\n      invalidatesTags: ['User'],\n    },\n    // alternatively, define a function which is called with the endpoint definition as an argument\n    getUsers(endpoint) {\n      endpoint.providesTags = ['User']\n      endpoint.keepUnusedDataFor = 120\n    },\n  },\n})\n"))),(0,o.kt)(d.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { api } from './api'\n\nconst enhancedApi = api.enhanceEndpoints({\n  addTagTypes: ['User'],\n  endpoints: {\n    getUserByUserId: {\n      providesTags: ['User'],\n    },\n    patchUserByUserId: {\n      invalidatesTags: ['User'],\n    },\n    // alternatively, define a function which is called with the endpoint definition as an argument\n    getUsers(endpoint) {\n      endpoint.providesTags = ['User']\n      endpoint.keepUnusedDataFor = 120\n    },\n  },\n})\n")))))}h.isMDXComponent=!0}}]);