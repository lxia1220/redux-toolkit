"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1304],{6660:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var n=a(5773),r=a(808),s=(a(7378),a(5318)),i=a(3245),o=a(1478),l=["components"],p={id:"fetchBaseQuery",title:"fetchBaseQuery",sidebar_label:"fetchBaseQuery",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: fetchBaseQuery reference"},u=void 0,d={unversionedId:"rtk-query/api/fetchBaseQuery",id:"rtk-query/api/fetchBaseQuery",isDocsHomePage:!1,title:"fetchBaseQuery",description:"RTK Query > API: fetchBaseQuery reference",source:"@site/../docs/rtk-query/api/fetchBaseQuery.mdx",sourceDirName:"rtk-query/api",slug:"/rtk-query/api/fetchBaseQuery",permalink:"/redux-toolkit/rtk-query/api/fetchBaseQuery",tags:[],version:"current",lastUpdatedAt:1656209359,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"fetchBaseQuery",title:"fetchBaseQuery",sidebar_label:"fetchBaseQuery",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: fetchBaseQuery reference"},sidebar:"docs",previous:{title:"createApi",permalink:"/redux-toolkit/rtk-query/api/createApi"},next:{title:"ApiProvider",permalink:"/redux-toolkit/rtk-query/api/ApiProvider"}},m=[{value:"Using <code>fetchBaseQuery</code>",id:"using-fetchbasequery",children:[],level:3},{value:"Setting default headers on requests",id:"setting-default-headers-on-requests",children:[],level:3},{value:"Individual query options",id:"individual-query-options",children:[],level:3},{value:"Setting the body",id:"setting-the-body",children:[{value:"json",id:"json",children:[],level:4},{value:"text",id:"text",children:[],level:4}],level:3},{value:"Setting the query string",id:"setting-the-query-string",children:[],level:3},{value:"Parsing a Response",id:"parsing-a-response",children:[],level:3},{value:"Handling non-standard Response status codes",id:"handling-non-standard-response-status-codes",children:[],level:3}],c={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fetchbasequery"},(0,s.kt)("inlineCode",{parentName:"h1"},"fetchBaseQuery")),(0,s.kt)("p",null,"This is a very small wrapper around ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,s.kt)("inlineCode",{parentName:"a"},"fetch"))," that aims to simplify requests. It is not a full-blown replacement for ",(0,s.kt)("inlineCode",{parentName:"p"},"axios"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"superagent"),", or any other more heavy-weight library, but it will cover the large majority of your needs."),(0,s.kt)("p",null,"It takes all standard options from fetch's ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},(0,s.kt)("inlineCode",{parentName:"a"},"RequestInit"))," interface, as well as ",(0,s.kt)("inlineCode",{parentName:"p"},"baseUrl"),", a ",(0,s.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," function, an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," function, and a ",(0,s.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," function."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"baseUrl")," ",(0,s.kt)("em",{parentName:"p"},"(required)")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Typically a string like ",(0,s.kt)("inlineCode",{parentName:"li"},"https://api.your-really-great-app.com/v1/"),". If you don't provide a ",(0,s.kt)("inlineCode",{parentName:"li"},"baseUrl"),", it defaults to a relative path from where the request is being made. You should most likely ",(0,s.kt)("em",{parentName:"li"},"always")," specify this."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," ",(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Allows you to inject headers on every request. You can specify headers at the endpoint level, but you'll typically want to set common headers like ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," here. As a convenience mechanism, the second argument allows you to use ",(0,s.kt)("inlineCode",{parentName:"p"},"getState")," to access your redux store in the event you store information you'll need there such as an auth token. Additionally, it provides access to ",(0,s.kt)("inlineCode",{parentName:"p"},"extra"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"type"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"forced")," to unlock more granular conditional behaviors.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="prepareHeaders signature" no-transpile',title:'"prepareHeaders','signature"':!0,"no-transpile":!0},";(\n  headers: Headers,\n  api: {\n    getState: () => unknown\n    extra: unknown\n    endpoint: string\n    type: 'query' | 'mutation'\n    forced: boolean | undefined\n  }\n) => Headers\n"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," ",(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"A function that can be used to apply custom transformations to the data passed into ",(0,s.kt)("a",{parentName:"li",href:"#setting-the-query-string"},(0,s.kt)("inlineCode",{parentName:"a"},"params")),". If you don't provide this, ",(0,s.kt)("inlineCode",{parentName:"li"},"params")," will be given directly to ",(0,s.kt)("inlineCode",{parentName:"li"},"new URLSearchParms()"),". With some API integrations, you may need to leverage this to use something like the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/query-string"},(0,s.kt)("inlineCode",{parentName:"a"},"query-string"))," library to support different array types."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"fetchFn")," ",(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"A fetch function that overrides the default on the window. Can be useful in SSR environments where you may need to leverage ",(0,s.kt)("inlineCode",{parentName:"li"},"isomorphic-fetch")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"cross-fetch"),".")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Return types of fetchBaseQuery" no-transpile',title:'"Return',types:!0,of:!0,'fetchBaseQuery"':!0,"no-transpile":!0},"Promise<{\n    data: any;\n    error?: undefined;\n    meta?: { request: Request; response: Response };\n} | {\n    error: {\n        status: number;\n        data: any;\n    };\n    data?: undefined;\n    meta?: { request: Request; response: Response };\n}>\n")),(0,s.kt)("h3",{id:"using-fetchbasequery"},"Using ",(0,s.kt)("inlineCode",{parentName:"h3"},"fetchBaseQuery")),(0,s.kt)("p",null,"To use it, import it when you are ",(0,s.kt)("a",{parentName:"p",href:"../../tutorials/rtk-query#create-an-api-service"},"creating an API service definition"),"."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const pokemonApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }), // Set the baseUrl for every endpoint below\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name: string) => `pokemon/${name}`, // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur\n    }),\n    updatePokemon: builder.mutation({\n      query: ({ name, patch }) => ({\n        url: `pokemon/${name}`,\n        method: 'PATCH', // When performing a mutation, you typically use a method of PATCH/PUT/POST/DELETE for REST endpoints\n        body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const pokemonApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name) => `pokemon/${name}`, // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur\n    }),\n    updatePokemon: builder.mutation({\n      query: ({ name, patch }) => ({\n        url: `pokemon/${name}`,\n        method: 'PATCH',\n        body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`\n      }),\n    }),\n  }),\n})\n")))),(0,s.kt)("h3",{id:"setting-default-headers-on-requests"},"Setting default headers on requests"),(0,s.kt)("p",null,"The most common use case for ",(0,s.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," would be to automatically include ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," headers for your API requests."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Setting a token from a redux store value',title:'"Setting',a:!0,token:!0,from:!0,redux:!0,store:!0,value:!0},"import { fetchBaseQuery } from '@reduxjs/toolkit/query'\nimport type { RootState } from './store'\n\nconst baseQuery = fetchBaseQuery({\n  baseUrl: '/',\n  prepareHeaders: (headers, { getState }) => {\n    const token = (getState() as RootState).auth.token\n\n    // If we have a token set in state, let's assume that we should be passing it.\n    if (token) {\n      headers.set('authorization', `Bearer ${token}`)\n    }\n\n    return headers\n  },\n})\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Setting a token from a redux store value',title:'"Setting',a:!0,token:!0,from:!0,redux:!0,store:!0,value:!0},"import { fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nconst baseQuery = fetchBaseQuery({\n  baseUrl: '/',\n  prepareHeaders: (headers, { getState }) => {\n    const token = getState().auth.token\n\n    // If we have a token set in state, let's assume that we should be passing it.\n    if (token) {\n      headers.set('authorization', `Bearer ${token}`)\n    }\n\n    return headers\n  },\n})\n")))),(0,s.kt)("h3",{id:"individual-query-options"},"Individual query options"),(0,s.kt)("p",null,"There is more behavior that you can define on a per-request basis that extends the default options available to the ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestInit")," interface."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#setting-the-query-string"},(0,s.kt)("inlineCode",{parentName:"a"},"params"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#setting-the-body"},(0,s.kt)("inlineCode",{parentName:"a"},"body"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#parsing-a-Response"},(0,s.kt)("inlineCode",{parentName:"a"},"responseHandler"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#handling-non-standard-response-status-codes"},(0,s.kt)("inlineCode",{parentName:"a"},"validateStatus")))),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="endpoint request options"',title:'"endpoint',request:!0,'options"':!0},"interface FetchArgs extends RequestInit {\n  url: string\n  params?: Record<string, any>\n  body?: any\n  responseHandler?: 'json' | 'text' | ((response: Response) => Promise<any>)\n  validateStatus?: (response: Response, body: any) => boolean\n}\n\nconst defaultValidateStatus = (response: Response) =>\n  response.status >= 200 && response.status <= 299\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="endpoint request options"',title:'"endpoint',request:!0,'options"':!0},"const defaultValidateStatus = (response) =>\n  response.status >= 200 && response.status <= 299\n")))),(0,s.kt)("h3",{id:"setting-the-body"},"Setting the body"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," assumes that every request you make will be ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),", so in those cases all you have to do is set the ",(0,s.kt)("inlineCode",{parentName:"p"},"url")," and pass a ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," object when appropriate. For other implementations, you can manually set the ",(0,s.kt)("inlineCode",{parentName:"p"},"Headers")," to specify the content type."),(0,s.kt)("h4",{id:"json"},"json"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        method: 'PUT',\n        body: user // Body is automatically converted to json with the correct headers\n      }),\n    }),\n")),(0,s.kt)("h4",{id:"text"},"text"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        method: 'PUT',\n        headers: {\n            'content-type': 'text/plain',\n        },\n        body: user\n      }),\n    }),\n")),(0,s.kt)("h3",{id:"setting-the-query-string"},"Setting the query string"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," provides a simple mechanism that converts an ",(0,s.kt)("inlineCode",{parentName:"p"},"object")," to a serialized query string by passing the object to ",(0,s.kt)("inlineCode",{parentName:"p"},"new URLSearchParms()"),". If this doesn't suit your needs, you have two options:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Pass the ",(0,s.kt)("inlineCode",{parentName:"li"},"paramsSerializer")," option to ",(0,s.kt)("inlineCode",{parentName:"li"},"fetchBaseQuery")," to apply custom transformations"),(0,s.kt)("li",{parentName:"ol"},"Build your own querystring and set it in the ",(0,s.kt)("inlineCode",{parentName:"li"},"url"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        // Assuming no `paramsSerializer` is specified, the user object is automatically converted\n        // and produces a url like /api/users?first_name=test&last_name=example\n        params: user\n      }),\n    }),\n")),(0,s.kt)("h3",{id:"parsing-a-response"},"Parsing a Response"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," assumes that every ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," you get will be parsed as ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),". In the event that you don't want that to happen, you can specify an alternative response handler like ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),", or take complete control and use a custom function that accepts the raw ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," object ","\u2014"," allowing you to use any ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},(0,s.kt)("inlineCode",{parentName:"a"},"Response")," method"),"."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Parse a Response as text"',title:'"Parse',a:!0,Response:!0,as:!0,'text"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        responseHandler: (response) => response.text(), // This is the same as passing 'text'\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Parse a Response as text"',title:'"Parse',a:!0,Response:!0,as:!0,'text"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        responseHandler: (response) => response.text(), // This is the same as passing 'text'\n      }),\n    }),\n  }),\n})\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note about responses that return an undefined body")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you make a ",(0,s.kt)("inlineCode",{parentName:"p"},"json")," request to an API that only returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," with an undefined body, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," will pass that through as ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," and will not try to parse it as ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),". This can be common with some APIs, especially on ",(0,s.kt)("inlineCode",{parentName:"p"},"delete")," requests."))),(0,s.kt)("h3",{id:"handling-non-standard-response-status-codes"},"Handling non-standard Response status codes"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," will ",(0,s.kt)("inlineCode",{parentName:"p"},"reject")," any ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," that does not have a status code of ",(0,s.kt)("inlineCode",{parentName:"p"},"2xx")," and set it to ",(0,s.kt)("inlineCode",{parentName:"p"},"error"),". This is the same behavior you've most likely experienced with ",(0,s.kt)("inlineCode",{parentName:"p"},"axios")," and other popular libraries. In the event that you have a non-standard API you're dealing with, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"validateStatus")," option to customize this behavior."),(0,s.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Using a custom validateStatus"',title:'"Using',a:!0,custom:!0,'validateStatus"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Set the baseUrl for every endpoint below\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        validateStatus: (response, result) =>\n          response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using a custom validateStatus"',title:'"Using',a:!0,custom:!0,'validateStatus"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        validateStatus: (response, result) =>\n          response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.\n      }),\n    }),\n  }),\n})\n")))))}h.isMDXComponent=!0}}]);