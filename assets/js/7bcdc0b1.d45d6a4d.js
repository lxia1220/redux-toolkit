"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8408],{6111:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(5773),o=n(808),i=(n(7378),n(5318)),r=n(517),s=n(7637),l=["components"],c={id:"migrating-to-rtk-query",title:"Migrating to RTK Query",sidebar_label:"Migrating to RTK Query",hide_title:!0,description:"RTK Query > Usage > Migrating to RTKQ: how to convert logic to RTKQ"},u=void 0,p={unversionedId:"rtk-query/usage/migrating-to-rtk-query",id:"rtk-query/usage/migrating-to-rtk-query",isDocsHomePage:!1,title:"Migrating to RTK Query",description:"RTK Query > Usage > Migrating to RTKQ: how to convert logic to RTKQ",source:"@site/../docs/rtk-query/usage/migrating-to-rtk-query.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/migrating-to-rtk-query",permalink:"/rtk-query/usage/migrating-to-rtk-query",tags:[],version:"current",lastUpdatedAt:1656208204,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"migrating-to-rtk-query",title:"Migrating to RTK Query",sidebar_label:"Migrating to RTK Query",hide_title:!0,description:"RTK Query > Usage > Migrating to RTKQ: how to convert logic to RTKQ"},sidebar:"docs",previous:{title:"Usage Without React Hooks",permalink:"/rtk-query/usage/usage-without-react-hooks"},next:{title:"createApi",permalink:"/rtk-query/api/createApi"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Example - Migrating data-fetching logic from Redux Toolkit to RTK Query",id:"example---migrating-data-fetching-logic-from-redux-toolkit-to-rtk-query",children:[{value:"Design specifications",id:"design-specifications",children:[],level:3}],level:2},{value:"Implementation using <code>createSlice</code> &amp; <code>createAsyncThunk</code>",id:"implementation-using-createslice--createasyncthunk",children:[{value:"Slice file",id:"slice-file",children:[{value:"Thunk action creator",id:"thunk-action-creator",children:[],level:4},{value:"Slice",id:"slice",children:[],level:4},{value:"Selectors",id:"selectors",children:[],level:4}],level:3},{value:"Store",id:"store",children:[],level:3},{value:"Custom hook",id:"custom-hook",children:[],level:3},{value:"Using the custom hook",id:"using-the-custom-hook",children:[],level:3}],level:2},{value:"Converting to RTK Query",id:"converting-to-rtk-query",children:[{value:"API Slice File",id:"api-slice-file",children:[],level:3},{value:"Connecting the API slice to the store",id:"connecting-the-api-slice-to-the-store",children:[],level:3},{value:"Using our auto-generated hook",id:"using-our-auto-generated-hook",children:[],level:3},{value:"Cleaning up unused code",id:"cleaning-up-unused-code",children:[],level:3}],level:2}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-to-rtk-query"},"Migrating to RTK Query"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ubc30\uc6b8 \ub0b4\uc6a9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\uae30\uc874\uc758 Redux Toolkit + ",(0,i.kt)("inlineCode",{parentName:"li"},"createAsyncThunk")," \ub85c \uad6c\ud604\ub41c data-fetching logic\uc744 Redux Toolkit Query\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ubcc0\ud658\ud558\ub294 \ubc29\ubc95")))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Redux app\ub4e4\uc758 \uc77c\ubc18\uc801\uc778 side effects \uc0ac\ub840\ub294 fetching data \uc785\ub2c8\ub2e4. Redux apps typically use a tool like thunks, sagas, or observables to make an AJAX request, and ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#async-request-status"},"dispatch actions based on the results of the request"),". Reducers then listen for those actions to manage loading state and cache the fetched data."),(0,i.kt)("p",null,"RTK Query\ub294 data fetching\uc744 \uc704\ud574 \ud2b9\ubcc4\ud788 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. While it can't replace all of the situations where you'd use thunks or other side effects approaches, ",(0,i.kt)("strong",{parentName:"p"},"using RTK Query should eliminate the need for most of that hand-written side effects logic"),"."),(0,i.kt)("p",null,"RTK Query is expected to cover a lot of overlapping behaviour that users may have previously used ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," for, including caching purposes, and request lifecycle management (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"isUninitialized"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isError")," states)."),(0,i.kt)("p",null,"In order to migrate data-fetching features from existing Redux tools to RTK Query, the appropriate endpoints should be added to an RTK Query API slice, and the previous feature code deleted. This generally will not include much common code kept between the two, as the tools work differently and one will replace the other."),(0,i.kt)("p",null,"If you're looking to get started with RTK Query from scratch, you may also wish to see ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/rtk-query"},(0,i.kt)("inlineCode",{parentName:"a"},"RTK Query Quick Start")),"."),(0,i.kt)("h2",{id:"example---migrating-data-fetching-logic-from-redux-toolkit-to-rtk-query"},"Example - Migrating data-fetching logic from Redux Toolkit to RTK Query"),(0,i.kt)("p",null,"A common method used to implement simple, cached, data-fetching logic with Redux is to set up a slice using ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice"),", with state containing the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," for a query, using ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," to handle the asynchronous request lifecycles. Below we will explore an example of such an implementation, and how we can later go about migrating that code to use RTK Query instead."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RTK Query also provides many more features than what is created with the thunk example shown below. The example is only intended to demonstrate how the particular implementation could be replaced with RTK Query."))),(0,i.kt)("h3",{id:"design-specifications"},"Design specifications"),(0,i.kt)("p",null,"For our example, the design specifications required for the tool are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide a hook to fetch data for a ",(0,i.kt)("inlineCode",{parentName:"li"},"pokemon")," using the api: ",(0,i.kt)("a",{parentName:"li",href:"https://pokeapi.co/api/v2/pokemon/bulbasaur"},"https://pokeapi.co/api/v2/pokemon/bulbasaur"),", where bulbasaur can be any pokemon name"),(0,i.kt)("li",{parentName:"ul"},"A request for any given name should only be sent if it hasn't already done so for the session"),(0,i.kt)("li",{parentName:"ul"},"The hook should provide us with the current status of the request for the supplied pokemon name; whether it is in an 'uninitialized', 'pending', 'fulfilled', or 'rejected' state"),(0,i.kt)("li",{parentName:"ul"},"The hook should provide us with the current data for the supplied pokemon name")),(0,i.kt)("p",null,"With the above specifications in mind, lets first look at an overview of how this could be implemented traditionally using ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice"),"."),(0,i.kt)("h2",{id:"implementation-using-createslice--createasyncthunk"},"Implementation using ",(0,i.kt)("inlineCode",{parentName:"h2"},"createSlice")," & ",(0,i.kt)("inlineCode",{parentName:"h2"},"createAsyncThunk")),(0,i.kt)("h3",{id:"slice-file"},"Slice file"),(0,i.kt)("p",null,"The three snippets below make up our slice file. This file is concerned with managing our asynchronous request lifecycles, as well as storing our data & request statuses for a given pokemon name."),(0,i.kt)("h4",{id:"thunk-action-creator"},"Thunk action creator"),(0,i.kt)("p",null,"Below we create a thunk action creator using ",(0,i.kt)("a",{parentName:"p",href:"/api/createAsyncThunk"},(0,i.kt)("inlineCode",{parentName:"a"},"createAsyncThunk"))," in order to manage asynchronous request lifecycles. This will be accessible within components & hooks to be dispatched, in order to fire off a request for some pokemon data. ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," itself will handle dispatching lifecycle methods for our request: ",(0,i.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fulfilled"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"rejected"),", which we will handle within our slice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemonSlice.ts - Thunk Action Creator" no-transpile',title:'"src/services/pokemonSlice.ts',"-":!0,Thunk:!0,Action:!0,'Creator"':!0,"no-transpile":!0},"import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'\nimport { Pokemon } from './types'\nimport { RootState } from '../store'\n\n// highlight-start\nexport const fetchPokemonByName = createAsyncThunk<Pokemon, string>(\n  'pokemon/fetchByName',\n  async (name, { rejectWithValue }) => {\n    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)\n    const data = await response.json()\n    if (response.status < 200 || response.status >= 300) {\n      return rejectWithValue(data)\n    }\n    return data\n  }\n)\n// highlight-end\n\n// slice & selectors omitted\n")),(0,i.kt)("h4",{id:"slice"},"Slice"),(0,i.kt)("p",null,"Below we have our ",(0,i.kt)("inlineCode",{parentName:"p"},"slice")," created with ",(0,i.kt)("a",{parentName:"p",href:"/api/createSlice"},(0,i.kt)("inlineCode",{parentName:"a"},"createSlice")),". We have our reducers containing our request handling logic defined here, storing the appropriate 'status' and 'data' in our state based on the name we search with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemonSlice.ts - slice logic" no-transpile',title:'"src/services/pokemonSlice.ts',"-":!0,slice:!0,'logic"':!0,"no-transpile":!0},"// imports & thunk action creator omitted\n\n// highlight-start\ntype RequestState = 'pending' | 'fulfilled' | 'rejected'\n// highlight-end\n\nexport const pokemonSlice = createSlice({\n  name: 'pokemon',\n  initialState: {\n    // highlight-start\n    dataByName: {} as Record<string, Pokemon | undefined>,\n    statusByName: {} as Record<string, RequestState | undefined>,\n    // highlight-end\n  },\n  reducers: {},\n  extraReducers: (builder) => {\n    // highlight-start\n    // When our request is pending:\n    // - store the 'pending' state as the status for the corresponding pokemon name\n    builder.addCase(fetchPokemonByName.pending, (state, action) => {\n      state.statusByName[action.meta.arg] = 'pending'\n    })\n    // When our request is fulfilled:\n    // - store the 'fulfilled' state as the status for the corresponding pokemon name\n    // - and store the received payload as the data for the corresponding pokemon name\n    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {\n      state.statusByName[action.meta.arg] = 'fulfilled'\n      state.dataByName[action.meta.arg] = action.payload\n    })\n    // When our request is rejected:\n    // - store the 'rejected' state as the status for the corresponding pokemon name\n    builder.addCase(fetchPokemonByName.rejected, (state, action) => {\n      state.statusByName[action.meta.arg] = 'rejected'\n    })\n    // highlight-end\n  },\n})\n\n// selectors omitted\n")),(0,i.kt)("h4",{id:"selectors"},"Selectors"),(0,i.kt)("p",null,"\uc544\ub798\uc758 \uc815\uc758\ud55c selectors\ub97c \ud1b5\ud574, \uc8fc\uc5b4\uc9c4 pokemon name\uc5d0 \ub300\ud55c status & data\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemonSlice.ts - selectors" no-transpile',title:'"src/services/pokemonSlice.ts',"-":!0,'selectors"':!0,"no-transpile":!0},"// imports, thunk action creator & slice omitted\n\n// highlight-start\nexport const selectStatusByName = (state: RootState, name: string) =>\n  state.pokemon.statusByName[name]\nexport const selectDataByName = (state: RootState, name: string) =>\n  state.pokemon.dataByName[name]\n// highlight-end\n")),(0,i.kt)("h3",{id:"store"},"Store"),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," for our app, we include the corresponding reducer from our slice under the ",(0,i.kt)("inlineCode",{parentName:"p"},"pokemon")," branch in our state tree. This lets our store handle the appropriate actions for our requests we will dispatch when running the app, using the logic defined previously."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/store.ts"',title:'"src/services/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { pokemonSlice } from './services/pokemonSlice'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    pokemon: pokemonSlice.reducer,\n    // highlight-end\n  },\n})\n\nexport type RootState = ReturnType<typeof store.getState>\n"))),(0,i.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/store.ts"',title:'"src/services/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { pokemonSlice } from './services/pokemonSlice'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    pokemon: pokemonSlice.reducer,\n    // highlight-end\n  },\n})\n")))),(0,i.kt)("p",null,"In order to have the store accessible within our app, we will wrap our ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component with a ",(0,i.kt)("a",{parentName:"p",href:"https://react-redux.js.org/api/provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider"))," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-redux"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"import { render } from 'react-dom'\n// highlight-start\nimport { Provider } from 'react-redux'\n// highlight-end\n\nimport App from './App'\n// highlight-start\nimport { store } from './store'\n// highlight-end\n\nconst rootElement = document.getElementById('root')\nrender(\n  // highlight-start\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  // highlight-end\n  rootElement\n)\n")),(0,i.kt)("h3",{id:"custom-hook"},"Custom hook"),(0,i.kt)("p",null,"Below we create a hook to manage sending our request at the appropriate time, as well as obtaining the appropriate data & status from the store. ",(0,i.kt)("a",{parentName:"p",href:"https://react-redux.js.org/api/hooks#usedispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"useDispatch"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://react-redux.js.org/api/hooks#useselector"},(0,i.kt)("inlineCode",{parentName:"a"},"useSelector"))," are used from ",(0,i.kt)("a",{parentName:"p",href:"https://react-redux.js.org/introduction/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"react-redux"))," in order to communicate with the Redux store. At the end of our hook, we return the information in a neat, packaged object to be accessed in components."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.ts"',title:'"src/hooks.ts"'},"import { useEffect } from 'react'\nimport { useSelector } from 'react-redux'\nimport { RootState, useAppDispatch } from './store'\nimport {\n  fetchPokemonByName,\n  selectStatusByName,\n  selectDataByName,\n} from './services/pokemonSlice'\n\n// highlight-start\nexport function useGetPokemonByNameQuery(name: string) {\n  const dispatch = useAppDispatch()\n  // select the current status from the store state for the provided name\n  const status = useSelector((state: RootState) =>\n    selectStatusByName(state, name)\n  )\n  // select the current data from the store state for the provided name\n  const data = useSelector((state: RootState) => selectDataByName(state, name))\n  useEffect(() => {\n    // upon mount or name change, if status is uninitialized, send a request\n    // for the pokemon name\n    if (status === undefined) {\n      dispatch(fetchPokemonByName(name))\n    }\n  }, [status, name, dispatch])\n\n  // derive status booleans for ease of use\n  const isUninitialized = status === undefined\n  const isLoading = status === 'pending' || status === undefined\n  const isError = status === 'rejected'\n  const isSuccess = status === 'fulfilled'\n\n  // return the import data for the caller of the hook to use\n  return { data, isUninitialized, isLoading, isError, isSuccess }\n}\n// highlight-end\n"))),(0,i.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/hooks.ts"',title:'"src/hooks.ts"'},"import { useEffect } from 'react'\nimport { useSelector } from 'react-redux'\nimport { useAppDispatch } from './store'\nimport {\n  fetchPokemonByName,\n  selectStatusByName,\n  selectDataByName,\n} from './services/pokemonSlice'\n\n// highlight-start\nexport function useGetPokemonByNameQuery(name) {\n  const dispatch = useAppDispatch()\n  // select the current status from the store state for the provided name\n  const status = useSelector((state) => selectStatusByName(state, name))\n  // select the current data from the store state for the provided name\n  const data = useSelector((state) => selectDataByName(state, name))\n  useEffect(() => {\n    // upon mount or name change, if status is uninitialized, send a request\n    // for the pokemon name\n    if (status === undefined) {\n      dispatch(fetchPokemonByName(name))\n    }\n  }, [status, name, dispatch])\n\n  // derive status booleans for ease of use\n  const isUninitialized = status === undefined\n  const isLoading = status === 'pending' || status === undefined\n  const isError = status === 'rejected'\n  const isSuccess = status === 'fulfilled'\n\n  // return the import data for the caller of the hook to use\n  return { data, isUninitialized, isLoading, isError, isSuccess }\n}\n// highlight-end\n")))),(0,i.kt)("h3",{id:"using-the-custom-hook"},"Using the custom hook"),(0,i.kt)("p",null,"Our code above meets all of the design specifications, so let's use it! Below we can see how the hook can be called in a component, and return the relevant data & status booleans."),(0,i.kt)("p",null,"Our implementation below provides the following behaviour in the component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When our component is mounted, if a request for the provided pokemon name has not already been sent for the session, send the request off"),(0,i.kt)("li",{parentName:"ul"},"The hook always provides the latest received ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," when available, as well as the request status booleans ",(0,i.kt)("inlineCode",{parentName:"li"},"isUninitialized"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isPending"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isFulfilled")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"isRejected")," in order to determine the current UI at any given moment as a function of our state.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import * as React from 'react'\n// highlight-start\nimport { useGetPokemonByNameQuery } from './hooks'\n// highlight-end\n\nexport default function App() {\n  // highlight-start\n  const { data, isError, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {isError ? (\n        <>Oh no, there was an error</>\n      ) : isLoading ? (\n        <>Loading...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n")),(0,i.kt)("p",null,"A runnable example of the above code can be seen below:"),(0,i.kt)("iframe",{src:"https://codesandbox.io/s/data-fetchingcaching-example-rtk-with-thunks-5kf80?fontsize=12&runonclick=1&hidenavigation=1&module=%2Fsrc%2Fservices/pokemonSlice.ts&theme=dark&view=preview",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Data Fetching Example - RTK with Thunks",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,i.kt)("h2",{id:"converting-to-rtk-query"},"Converting to RTK Query"),(0,i.kt)("p",null,"Our implementation above ",(0,i.kt)("em",{parentName:"p"},"does")," work perfectly fine for the requirements specified, however, extending the code to include further endpoints could involve a lot of repetition. It also has some certain limitations that may not be immediately obvious. For example, multiple components rendering simultaneously calling our hook would each send off a request for bulbasaur at the same time!"),(0,i.kt)("p",null,"Below we will walk through how a lot of the boilerplate can be avoided by migrating the above code to use RTK Query instead. RTK Query will also handle many other situations for us, including de-duping requests on a more granular level to prevent sending unnecessary duplicate requests like that brought up above."),(0,i.kt)("h3",{id:"api-slice-file"},"API Slice File"),(0,i.kt)("p",null,"Our code below is for our API slice definition. This acts as our network API interface layer, and is created using ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/api/createApi"},(0,i.kt)("inlineCode",{parentName:"a"},"createApi")),". This file will contain our endpoint definition, and ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi")," will provide us with an auto-generated hook which manages firing our request only when necessary, as well as providing us with request status lifecycle booleans."),(0,i.kt)("p",null,"This will completely cover our logic implemented above for the entire slice file, including the thunk, slice definition, selectors, ",(0,i.kt)("em",{parentName:"p"},"and")," our custom hook!"),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/api.ts"',title:'"src/services/api.ts"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { Pokemon } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  reducerPath: 'pokemonApi',\n  endpoints: (build) => ({\n    // highlight-start\n    getPokemonByName: build.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n    // highlight-end\n  }),\n})\n\n// highlight-start\nexport const { useGetPokemonByNameQuery } = api\n// highlight-end\n"))),(0,i.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/api.ts"',title:'"src/services/api.ts"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  reducerPath: 'pokemonApi',\n  endpoints: (build) => ({\n    // highlight-start\n    getPokemonByName: build.query({\n      query: (name) => `pokemon/${name}`,\n    }),\n    // highlight-end\n  }),\n})\n\n// highlight-start\nexport const { useGetPokemonByNameQuery } = api\n// highlight-end\n")))),(0,i.kt)("h3",{id:"connecting-the-api-slice-to-the-store"},"Connecting the API slice to the store"),(0,i.kt)("p",null,"Now that we have our API definition created, we need to hook it up to our store. In order to do that, we will need to use the ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/api/created-api/redux-integration#reducerpath"},(0,i.kt)("inlineCode",{parentName:"a"},"reducerPath"))," and ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/api/created-api/redux-integration#middleware"},(0,i.kt)("inlineCode",{parentName:"a"},"middleware"))," properties from our created ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),". This will allow the store to process the internal actions that the generated hook uses, allows the generated API logic to find the state correctly, and adds the logic for managing caching, invalidation, subscriptions, polling, and more."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { pokemonSlice } from './services/pokemonSlice'\n// highlight-start\nimport { api } from './services/api'\n// highlight-end\n\nexport const store = configureStore({\n  reducer: {\n    pokemon: pokemonSlice.reducer,\n    // highlight-start\n    [api.reducerPath]: api.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  middleware: (gDM) => gDM().concat(api.middleware),\n  // highlight-end\n})\n\nexport type RootState = ReturnType<typeof store.getState>\n"))),(0,i.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { pokemonSlice } from './services/pokemonSlice'\n// highlight-start\nimport { api } from './services/api'\n// highlight-end\n\nexport const store = configureStore({\n  reducer: {\n    pokemon: pokemonSlice.reducer,\n    // highlight-start\n    [api.reducerPath]: api.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  middleware: (gDM) => gDM().concat(api.middleware),\n  // highlight-end\n})\n")))),(0,i.kt)("h3",{id:"using-our-auto-generated-hook"},"Using our auto-generated hook"),(0,i.kt)("p",null,"At this basic level, the usage of the auto-generated hook is identical to our custom hook! All we need to do is change our import path and we're good to go!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"  import * as React from 'react'\n- import { useGetPokemonByNameQuery } from './hooks'\n+ import { useGetPokemonByNameQuery } from './services/api'\n\n  export default function App() {\n    const { data, isError, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n\n\n    return (\n      <div className=\"App\">\n        {isError ? (\n          <>Oh no, there was an error</>\n        ) : isLoading ? (\n          <>Loading...</>\n        ) : data ? (\n          <>\n            <h3>{data.species.name}</h3>\n            <img src={data.sprites.front_shiny} alt={data.species.name} />\n          </>\n        ) : null}\n      </div>\n    )\n  }\n")),(0,i.kt)("h3",{id:"cleaning-up-unused-code"},"Cleaning up unused code"),(0,i.kt)("p",null,"As mentioned previously, our ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," definition has replaced all of the logic that we implemented previously using ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice"),", and our custom hook definition."),(0,i.kt)("p",null,"Given that we're no longer using that slice any longer, we can remove the import and reducer from our store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"  import { configureStore } from '@reduxjs/toolkit'\n- import { pokemonSlice } from './services/pokemonSlice'\n  import { api } from './services/api'\n\n\n  export const store = configureStore({\n    reducer: {\n-     pokemon: pokemonSlice.reducer,\n      [api.reducerPath]: api.reducer,\n    },\n    middleware: (gDM) => gDM().concat(api.middleware),\n  })\n\n  export type RootState = ReturnType<typeof store.getState>\n")),(0,i.kt)("p",null,"We can also remove the ",(0,i.kt)("em",{parentName:"p"},"entire slice and hook files")," completely!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- src/services/pokemonSlice.ts (-51 lines)\n- src/hooks.ts (-34 lines)\n")),(0,i.kt)("p",null,"We've now re-implemented the full set of design specifications (and more!) in less than 20 lines of code, with room to easily expand by adding additional endpoints onto our api definition."),(0,i.kt)("p",null,"A runnable example of our re-factored implementation using RTK Query can be seen below:"),(0,i.kt)("iframe",{src:"https://codesandbox.io/s/data-fetchingcaching-example-rtk-query-ndmwo?fontsize=12&runonclick=1&hidenavigation=1&module=%2Fsrc%2Fservices/api.ts&theme=dark&view=preview",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Data Fetching Example - RTK with Thunks",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}m.isMDXComponent=!0}}]);