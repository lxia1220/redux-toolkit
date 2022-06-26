"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1632],{1464:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=a(5773),n=a(808),o=(a(7378),a(5318)),s=(a(517),a(7637),["components"]),l={id:"createSelector",title:"createSelector",sidebar_label:"createSelector",hide_title:!0},i=void 0,c={unversionedId:"api/createSelector",id:"api/createSelector",isDocsHomePage:!1,title:"createSelector",description:"&nbsp;",source:"@site/../docs/api/createSelector.mdx",sourceDirName:"api",slug:"/api/createSelector",permalink:"/redux-toolkit/api/createSelector",tags:[],version:"current",lastUpdatedAt:1656245190,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"createSelector",title:"createSelector",sidebar_label:"createSelector",hide_title:!0},sidebar:"docs",previous:{title:"createEntityAdapter",permalink:"/redux-toolkit/api/createEntityAdapter"},next:{title:"Matching Utilities",permalink:"/redux-toolkit/api/matching-utilities"}},d=[],u={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createselector"},(0,o.kt)("inlineCode",{parentName:"h1"},"createSelector")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector")," utility from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"Reselect library"),", re-exported for ease of use."),(0,o.kt)("p",null,"For more details on using ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector"),", see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"Reselect API documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-redux.js.org/next/api/hooks#using-memoizing-selectors"},"React-Redux docs: Hooks API - Using memoizing selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"},"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md"},"React/Redux Links: Reducers and Selectors"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Prior to v0.7, RTK re-exported ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/planttheidea/selectorator"},(0,o.kt)("inlineCode",{parentName:"a"},"selectorator")),", which\nallowed using string keypaths as input selectors. This was removed, as it ultimately did not provide enough benefits, and\nthe string keypaths made static typing for selectors difficult.")),(0,o.kt)("h1",{id:"createdraftsafeselector"},(0,o.kt)("inlineCode",{parentName:"h1"},"createDraftSafeSelector")),(0,o.kt)("p",null,"In general, we recommend against using selectors inside of reducers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors typically expect the entire Redux state object as an argument, while slice reducers only have access to a specific subset of the entire Redux state"),(0,o.kt)("li",{parentName:"ul"},"Reselect's ",(0,o.kt)("inlineCode",{parentName:"li"},"createSelector")," relies on reference comparisons to determine if inputs have changed, and if an Immer Proxy-wrapped draft value is passed in to a selector, the selector may see the same reference and think nothing has changed.")),(0,o.kt)("p",null,"However, some users have requested the ability to create selectors that will work correctly inside of Immer-powered reducers. One use case for this might be collecting an ordered set of items when using ",(0,o.kt)("inlineCode",{parentName:"p"},"createEntityAdapter"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"const orderedTodos = todosSelectors.selectAll(todosState)"),", and then using ",(0,o.kt)("inlineCode",{parentName:"p"},"orderedTodos")," in the rest of the reducer logic."),(0,o.kt)("p",null,"Besides re-exporting ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector"),", RTK also exports a wrapped version of ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"createDraftSafeSelector")," that allows you to create selectors that can safely be used inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"createReducer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," reducers with Immer-powered mutable logic. When used with plain state values, the selector will still memoize normally based on the inputs. But, when used with Immer draft values, the selector will err on the side of recalculating the results, just to be safe."),(0,o.kt)("p",null,"All selectors created by ",(0,o.kt)("inlineCode",{parentName:"p"},"entityAdapter.getSelectors"),' are "draft safe" selectors by default.'),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const selectSelf = (state: State) => state\nconst unsafeSelector = createSelector(selectSelf, (state) => state.value)\nconst draftSafeSelector = createDraftSafeSelector(\n  selectSelf,\n  (state) => state.value\n)\n\n// in your reducer:\n\nstate.value = 1\n\nconst unsafe1 = unsafeSelector(state)\nconst safe1 = draftSafeSelector(state)\n\nstate.value = 2\n\nconst unsafe2 = unsafeSelector(state)\nconst safe2 = draftSafeSelector(state)\n")),(0,o.kt)("p",null,"After executing that, ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafe1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafe2")," will be of the same value, because the memoized selector was\nexecuted on the same object - but ",(0,o.kt)("inlineCode",{parentName:"p"},"safe2")," will actually be different from ",(0,o.kt)("inlineCode",{parentName:"p"},"safe1")," (with the updated value of ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"),\nbecause the safe selector detected that it was executed on a Immer draft object and recalculated using the current\nvalue instead of returning a cached value."))}p.isMDXComponent=!0}}]);