"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[127],{428:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var i=n(5773),a=n(808),s=(n(7378),n(5318)),r=n(517),l=n(7637),o=["components"],c={id:"matching-utilities",title:"Matching Utilities",sidebar_label:"Matching Utilities",hide_title:!0},u=void 0,d={unversionedId:"api/matching-utilities",id:"api/matching-utilities",isDocsHomePage:!1,title:"Matching Utilities",description:"&nbsp;",source:"@site/../docs/api/matching-utilities.mdx",sourceDirName:"api",slug:"/api/matching-utilities",permalink:"/redux-toolkit/api/matching-utilities",tags:[],version:"current",lastUpdatedAt:1656242962,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"matching-utilities",title:"Matching Utilities",sidebar_label:"Matching Utilities",hide_title:!0},sidebar:"docs",previous:{title:"createSelector",permalink:"/redux-toolkit/api/createSelector"},next:{title:"Other Exports",permalink:"/redux-toolkit/api/other-exports"}},p=[{value:"General Purpose",id:"general-purpose",children:[],level:3},{value:"<code>createAsyncThunk</code>-specific matchers",id:"createasyncthunk-specific-matchers",children:[],level:3},{value:"<code>isAllOf</code>",id:"isallof",children:[],level:2},{value:"<code>isAnyOf</code>",id:"isanyof",children:[],level:2},{value:"<code>isAsyncThunkAction</code>",id:"isasyncthunkaction",children:[],level:2},{value:"<code>isPending</code>",id:"ispending",children:[],level:2},{value:"<code>isFulfilled</code>",id:"isfulfilled",children:[],level:2},{value:"<code>isRejected</code>",id:"isrejected",children:[],level:2},{value:"<code>isRejectedWithValue</code>",id:"isrejectedwithvalue",children:[],level:2},{value:"Using matchers to reduce code complexity, duplication and boilerplate",id:"using-matchers-to-reduce-code-complexity-duplication-and-boilerplate",children:[],level:2},{value:"Using matchers as a TypeScript Type Guard",id:"using-matchers-as-a-typescript-type-guard",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"matching-utilities"},"Matching Utilities"),(0,s.kt)("p",null,"Redux Toolkit exports several type-safe action matching utilities that you can leverage when checking for specific kinds of actions. These are primarily useful for the ",(0,s.kt)("inlineCode",{parentName:"p"},"builder.addMatcher()")," cases in ",(0,s.kt)("inlineCode",{parentName:"p"},"createSlice")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"createReducer"),", as well as when writing custom middleware."),(0,s.kt)("h3",{id:"general-purpose"},"General Purpose"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isallof"},(0,s.kt)("inlineCode",{parentName:"a"},"isAllOf"))," - returns true when ",(0,s.kt)("strong",{parentName:"li"},"all")," conditions are met"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isanyof"},(0,s.kt)("inlineCode",{parentName:"a"},"isAnyOf"))," - returns true when ",(0,s.kt)("strong",{parentName:"li"},"at least one of")," the conditions are met")),(0,s.kt)("h3",{id:"createasyncthunk-specific-matchers"},(0,s.kt)("inlineCode",{parentName:"h3"},"createAsyncThunk"),"-specific matchers"),(0,s.kt)("p",null,"All these matchers can either be called with one or more thunks as arguments, in which case they will return a matcher function for that condition and thunks, or with one actions, in which case they will match for any thunk action with said condition."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isasyncthunkaction"},(0,s.kt)("inlineCode",{parentName:"a"},"isAsyncThunkAction"))," - accepts one or more action creators and returns true when all match"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#ispending"},(0,s.kt)("inlineCode",{parentName:"a"},"isPending"))," - accepts one or more action creators and returns true when all match"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isfulfilled"},(0,s.kt)("inlineCode",{parentName:"a"},"isFulfilled"))," - accepts one or more action creators and returns true when all match"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isrejected"},(0,s.kt)("inlineCode",{parentName:"a"},"isRejected"))," - accepts one or more action creators and returns true when all match"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#isrejectedwithvalue"},(0,s.kt)("inlineCode",{parentName:"a"},"isRejectedWithValue"))," - accepts one or more action creators and returns true when all match")),(0,s.kt)("h2",{id:"isallof"},(0,s.kt)("inlineCode",{parentName:"h2"},"isAllOf")),(0,s.kt)("p",null,"A higher-order function that accepts one or more of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"redux-toolkit")," action creator functions such as the ones produced by:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./createAction"},(0,s.kt)("inlineCode",{parentName:"a"},"createAction"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./createSlice#return-value"},(0,s.kt)("inlineCode",{parentName:"a"},"createSlice"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./createAsyncThunk#promise-lifecycle-actions"},(0,s.kt)("inlineCode",{parentName:"a"},"createAsyncThunk"))))),(0,s.kt)("li",{parentName:"ul"},"type guard functions"),(0,s.kt)("li",{parentName:"ul"},"custom action creator functions that have a ",(0,s.kt)("inlineCode",{parentName:"li"},".match")," property that is a type guard")),(0,s.kt)("p",null,"It will return a type guard function that returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,s.kt)("em",{parentName:"p"},"all")," of the provided functions match."),(0,s.kt)("h2",{id:"isanyof"},(0,s.kt)("inlineCode",{parentName:"h2"},"isAnyOf")),(0,s.kt)("p",null,"Accepts the same inputs as ",(0,s.kt)("inlineCode",{parentName:"p"},"isAllOf")," and will return a type guard function that returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if at least one of the provided functions match."),(0,s.kt)("h2",{id:"isasyncthunkaction"},(0,s.kt)("inlineCode",{parentName:"h2"},"isAsyncThunkAction")),(0,s.kt)("p",null,"A higher-order function that returns a type guard function that may be used to check whether an action was created by ",(0,s.kt)("a",{parentName:"p",href:"./createAsyncThunk"},(0,s.kt)("inlineCode",{parentName:"a"},"createAsyncThunk")),"."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="isAsyncThunkAction usage"',title:'"isAsyncThunkAction','usage"':!0},"import { isAsyncThunkAction } from '@reduxjs/toolkit'\nimport type { AnyAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARequestAction = isAsyncThunkAction(requestThunk1, requestThunk2)\n\nfunction handleRequestAction(action: AnyAction) {\n  if (isARequestAction(action)) {\n    // action is an action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isAsyncThunkAction usage"',title:'"isAsyncThunkAction','usage"':!0},"import { isAsyncThunkAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARequestAction = isAsyncThunkAction(requestThunk1, requestThunk2)\n\nfunction handleRequestAction(action) {\n  if (isARequestAction(action)) {\n    // action is an action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n")))),(0,s.kt)("h2",{id:"ispending"},(0,s.kt)("inlineCode",{parentName:"h2"},"isPending")),(0,s.kt)("p",null,"A higher-order function that returns a type guard function that may be used to check whether an action is a 'pending' action creator from the ",(0,s.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," promise lifecycle."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="isPending usage"',title:'"isPending','usage"':!0},"import { isPending } from '@reduxjs/toolkit'\nimport type { AnyAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAPendingAction = isPending(requestThunk1, requestThunk2)\n\nfunction handlePendingAction(action: AnyAction) {\n  if (isAPendingAction(action)) {\n    // action is a pending action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isPending usage"',title:'"isPending','usage"':!0},"import { isPending } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAPendingAction = isPending(requestThunk1, requestThunk2)\n\nfunction handlePendingAction(action) {\n  if (isAPendingAction(action)) {\n    // action is a pending action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n")))),(0,s.kt)("h2",{id:"isfulfilled"},(0,s.kt)("inlineCode",{parentName:"h2"},"isFulfilled")),(0,s.kt)("p",null,"A higher-order function that returns a type guard function that may be used to check whether an action is a 'fulfilled'' action creator from the ",(0,s.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," promise lifecycle."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="isFulfilled usage"',title:'"isFulfilled','usage"':!0},"import { isFulfilled } from '@reduxjs/toolkit'\nimport type { AnyAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAFulfilledAction = isFulfilled(requestThunk1, requestThunk2)\n\nfunction handleFulfilledAction(action: AnyAction) {\n  if (isAFulfilledAction(action)) {\n    // action is a fulfilled action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isFulfilled usage"',title:'"isFulfilled','usage"':!0},"import { isFulfilled } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAFulfilledAction = isFulfilled(requestThunk1, requestThunk2)\n\nfunction handleFulfilledAction(action) {\n  if (isAFulfilledAction(action)) {\n    // action is a fulfilled action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n")))),(0,s.kt)("h2",{id:"isrejected"},(0,s.kt)("inlineCode",{parentName:"h2"},"isRejected")),(0,s.kt)("p",null,"A higher-order function that returns a type guard function that may be used to check whether an action is a 'rejected' action creator from the ",(0,s.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," promise lifecycle."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="isRejected usage"',title:'"isRejected','usage"':!0},"import { isRejected } from '@reduxjs/toolkit'\nimport type { AnyAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedAction = isRejected(requestThunk1, requestThunk2)\n\nfunction handleRejectedAction(action: AnyAction) {\n  if (isARejectedAction(action)) {\n    // action is a rejected action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isRejected usage"',title:'"isRejected','usage"':!0},"import { isRejected } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedAction = isRejected(requestThunk1, requestThunk2)\n\nfunction handleRejectedAction(action) {\n  if (isARejectedAction(action)) {\n    // action is a rejected action dispatched by either `requestThunk1` or `requestThunk2`\n  }\n}\n")))),(0,s.kt)("h2",{id:"isrejectedwithvalue"},(0,s.kt)("inlineCode",{parentName:"h2"},"isRejectedWithValue")),(0,s.kt)("p",null,"A higher-order function that returns a type guard function that may be used to check whether an action is a 'rejected' action creator from the ",(0,s.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," promise lifecycle that was created by ",(0,s.kt)("a",{parentName:"p",href:"./createAsyncThunk#handling-thunk-errors"},(0,s.kt)("inlineCode",{parentName:"a"},"rejectWithValue")),"."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="isRejectedWithValue usage"',title:'"isRejectedWithValue','usage"':!0},"import { isRejectedWithValue } from '@reduxjs/toolkit'\nimport type { AnyAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedWithValueAction = isRejectedWithValue(\n  requestThunk1,\n  requestThunk2\n)\n\nfunction handleRejectedWithValueAction(action: AnyAction) {\n  if (isARejectedWithValueAction(action)) {\n    // action is a rejected action dispatched by either `requestThunk1` or `requestThunk2`\n    // where rejectWithValue was used\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isRejectedWithValue usage"',title:'"isRejectedWithValue','usage"':!0},"import { isRejectedWithValue } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedWithValueAction = isRejectedWithValue(\n  requestThunk1,\n  requestThunk2\n)\n\nfunction handleRejectedWithValueAction(action) {\n  if (isARejectedWithValueAction(action)) {\n    // action is a rejected action dispatched by either `requestThunk1` or `requestThunk2`\n    // where rejectWithValue was used\n  }\n}\n")))),(0,s.kt)("h2",{id:"using-matchers-to-reduce-code-complexity-duplication-and-boilerplate"},"Using matchers to reduce code complexity, duplication and boilerplate"),(0,s.kt)("p",null,"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"builder")," pattern to construct a reducer, we add cases or matchers one at a time. However, by using ",(0,s.kt)("inlineCode",{parentName:"p"},"isAnyOf")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"isAllOf"),",\nwe're able to easily use the same matcher for several cases in a type-safe manner."),(0,s.kt)("p",null,"First, let's examine an unnecessarily complex example:"),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example without using a matcher utility"',title:'"Example',without:!0,using:!0,a:!0,matcher:!0,'utility"':!0},"import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\n\ninterface Data {\n  isInteresting: boolean\n  isSpecial: boolean\n}\n\ninterface Special extends Data {\n  isSpecial: true\n}\n\ninterface Interesting extends Data {\n  isInteresting: true\n}\n\nfunction isSpecial(\n  action: PayloadAction<Data>\n): action is PayloadAction<Special> {\n  return action.payload.isSpecial\n}\n\nfunction isInteresting(\n  action: PayloadAction<Data>\n): action is PayloadAction<Interesting> {\n  return action.payload.isInteresting\n}\n\ninterface ExampleState {\n  isSpecial: boolean\n  isInteresting: boolean\n}\n\nconst initialState = {\n  isSpecial: false,\n  isInteresting: false,\n} as ExampleState\n\nexport const isSpecialAndInterestingThunk = createAsyncThunk(\n  'isSpecialAndInterestingThunk',\n  () => {\n    return {\n      isSpecial: true,\n      isInteresting: true,\n    }\n  }\n)\n\n// This has unnecessary complexity\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder.addCase(isSpecialAndInterestingThunk.fulfilled, (state, action) => {\n    if (isSpecial(action)) {\n      state.isSpecial = true\n    }\n    if (isInteresting(action)) {\n      state.isInteresting = true\n    }\n  })\n})\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example without using a matcher utility"',title:'"Example',without:!0,using:!0,a:!0,matcher:!0,'utility"':!0},"import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'\n\nfunction isSpecial(action) {\n  return action.payload.isSpecial\n}\n\nfunction isInteresting(action) {\n  return action.payload.isInteresting\n}\n\nconst initialState = {\n  isSpecial: false,\n  isInteresting: false,\n}\n\nexport const isSpecialAndInterestingThunk = createAsyncThunk(\n  'isSpecialAndInterestingThunk',\n  () => {\n    return {\n      isSpecial: true,\n      isInteresting: true,\n    }\n  }\n)\n\n// This has unnecessary complexity\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder.addCase(isSpecialAndInterestingThunk.fulfilled, (state, action) => {\n    if (isSpecial(action)) {\n      state.isSpecial = true\n    }\n    if (isInteresting(action)) {\n      state.isInteresting = true\n    }\n  })\n})\n")))),(0,s.kt)("p",null,"In this scenario, we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"isAllOf")," to simplify our code and reduce some of the boilerplate."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Refactoring with isAllOf"',title:'"Refactoring',with:!0,'isAllOf"':!0},"import { createReducer, isAllOf } from '@reduxjs/toolkit'\nimport {\n  isSpecialAndInterestingThunk,\n  initialState,\n  isSpecial,\n  isInteresting,\n} from '@virtual/matchers' // This is a fake pkg that provides the types shown above\nimport type { Data } from '@virtual/matchers' // This is a fake pkg that provides the types shown above\n\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isSpecial),\n      (state, action) => {\n        state.isSpecial = true\n      }\n    )\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isInteresting),\n      (state, action) => {\n        state.isInteresting = true\n      }\n    )\n})\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Refactoring with isAllOf"',title:'"Refactoring',with:!0,'isAllOf"':!0},"import { createReducer, isAllOf } from '@reduxjs/toolkit'\nimport {\n  isSpecialAndInterestingThunk,\n  initialState,\n  isSpecial,\n  isInteresting,\n} from '@virtual/matchers' // This is a fake pkg that provides the types shown above\n\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isSpecial),\n      (state, action) => {\n        state.isSpecial = true\n      }\n    )\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isInteresting),\n      (state, action) => {\n        state.isInteresting = true\n      }\n    )\n})\n")))),(0,s.kt)("h2",{id:"using-matchers-as-a-typescript-type-guard"},"Using matchers as a TypeScript Type Guard"),(0,s.kt)("p",null,"The function returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"isAllOf")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"isAnyOf")," can also be used as a TypeScript type guard in other contexts."),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Using isAllOf as a type guard"',title:'"Using',isAllOf:!0,as:!0,a:!0,type:!0,'guard"':!0},"import { isAllOf } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\nimport { isSpecial, isInteresting } from '@virtual/matchers' // This is a fake pkg that provides the types shown above\nimport type { Data } from '@virtual/matchers' // This is a fake pkg that provides the types shown above\n\nconst isSpecialAndInteresting = isAllOf(isSpecial, isInteresting)\n\nfunction someFunction(action: PayloadAction<Data>) {\n  if (isSpecialAndInteresting(action)) {\n    // \"action\" will be correctly typed as:\n    // `PayloadAction<Special> & PayloadAction<Interesting>`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using isAllOf as a type guard"',title:'"Using',isAllOf:!0,as:!0,a:!0,type:!0,'guard"':!0},"import { isAllOf } from '@reduxjs/toolkit'\nimport { isSpecial, isInteresting } from '@virtual/matchers' // This is a fake pkg that provides the types shown above\n\nconst isSpecialAndInteresting = isAllOf(isSpecial, isInteresting)\n\nfunction someFunction(action) {\n  if (isSpecialAndInteresting(action)) {\n    // \"action\" will be correctly typed as:\n    // `PayloadAction<Special> & PayloadAction<Interesting>`\n  }\n}\n")))),(0,s.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Using isAnyOf as a type guard"',title:'"Using',isAnyOf:!0,as:!0,a:!0,type:!0,'guard"':!0},"import { isAnyOf } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\nimport { Data, isSpecial, isInteresting } from '@virtual/matchers' // this is a fake pkg that provides the types shown above\n\nconst isSpecialOrInteresting = isAnyOf(isSpecial, isInteresting)\n\nfunction someFunction(action: PayloadAction<Data>) {\n  if (isSpecialOrInteresting(action)) {\n    // \"action\" will be correctly typed as:\n    // `PayloadAction<Special> | PayloadAction<Interesting>`\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using isAnyOf as a type guard"',title:'"Using',isAnyOf:!0,as:!0,a:!0,type:!0,'guard"':!0},"import { isAnyOf } from '@reduxjs/toolkit'\nimport { isSpecial, isInteresting } from '@virtual/matchers' // this is a fake pkg that provides the types shown above\n\nconst isSpecialOrInteresting = isAnyOf(isSpecial, isInteresting)\n\nfunction someFunction(action) {\n  if (isSpecialOrInteresting(action)) {\n    // \"action\" will be correctly typed as:\n    // `PayloadAction<Special> | PayloadAction<Interesting>`\n  }\n}\n")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("iframe",{src:"https://codesandbox.io/embed/redux-toolkit-matchers-example-e765q?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.ts&theme=dark&runonclick=1",style:{width:"100%",height:"500px",border:0,borderRadius:4,overflow:"hidden"},title:"redux-toolkit-matchers-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);