"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8482],{5500:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var i=t(5773),s=t(808),o=(t(7378),t(5318)),a=(t(517),t(7637),["components"]),r={id:"setupListeners",title:"setupListeners",sidebar_label:"setupListeners",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: setupListeners reference"},l=void 0,d={unversionedId:"rtk-query/api/setupListeners",id:"rtk-query/api/setupListeners",isDocsHomePage:!1,title:"setupListeners",description:"RTK Query > API: setupListeners reference",source:"@site/../docs/rtk-query/api/setupListeners.mdx",sourceDirName:"rtk-query/api",slug:"/rtk-query/api/setupListeners",permalink:"/redux-toolkit/rtk-query/api/setupListeners",tags:[],version:"current",lastUpdatedAt:1656210075,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"setupListeners",title:"setupListeners",sidebar_label:"setupListeners",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: setupListeners reference"},sidebar:"docs",previous:{title:"ApiProvider",permalink:"/redux-toolkit/rtk-query/api/ApiProvider"},next:{title:"API Slice Overview",permalink:"/redux-toolkit/rtk-query/api/created-api/overview"}},u=[],c={toc:u};function p(e){var n=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setuplisteners"},(0,o.kt)("inlineCode",{parentName:"h1"},"setupListeners")),(0,o.kt)("p",null,"A utility used to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"refetchOnFocus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refetchOnReconnect")," behaviors. It requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method from your store. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setupListeners(store.dispatch)")," will configure listeners with the recommended defaults, but you have the option of providing a callback for more granular control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="setupListeners default configuration" no-transpile',title:'"setupListeners',default:!0,'configuration"':!0,"no-transpile":!0},"let initialized = false\nexport function setupListeners(\n  dispatch: ThunkDispatch<any, any, any>,\n  customHandler?: (\n    dispatch: ThunkDispatch<any, any, any>,\n    actions: {\n      onFocus: typeof onFocus\n      onFocusLost: typeof onFocusLost\n      onOnline: typeof onOnline\n      onOffline: typeof onOffline\n    }\n  ) => () => void\n) {\n  function defaultHandler() {\n    const handleFocus = () => dispatch(onFocus())\n    const handleFocusLost = () => dispatch(onFocusLost())\n    const handleOnline = () => dispatch(onOnline())\n    const handleOffline = () => dispatch(onOffline())\n    const handleVisibilityChange = () => {\n      if (window.document.visibilityState === 'visible') {\n        handleFocus()\n      } else {\n        handleFocusLost()\n      }\n    }\n\n    if (!initialized) {\n      if (typeof window !== 'undefined' && window.addEventListener) {\n        // Handle focus events\n        window.addEventListener(\n          'visibilitychange',\n          handleVisibilityChange,\n          false\n        )\n        window.addEventListener('focus', handleFocus, false)\n\n        // Handle connection events\n        window.addEventListener('online', handleOnline, false)\n        window.addEventListener('offline', handleOffline, false)\n        initialized = true\n      }\n    }\n    const unsubscribe = () => {\n      window.removeEventListener('focus', handleFocus)\n      window.removeEventListener('visibilitychange', handleVisibilityChange)\n      window.removeEventListener('online', handleOnline)\n      window.removeEventListener('offline', handleOffline)\n      initialized = false\n    }\n    return unsubscribe\n  }\n\n  return customHandler\n    ? customHandler(dispatch, { onFocus, onFocusLost, onOffline, onOnline })\n    : defaultHandler()\n}\n")),(0,o.kt)("p",null,"If you notice, ",(0,o.kt)("inlineCode",{parentName:"p"},"onFocus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onFocusLost"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOffline"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOnline")," are all actions that are provided to the callback. Additionally, these actions are made available to ",(0,o.kt)("inlineCode",{parentName:"p"},"api.internalActions")," and are able to be used by dispatching them like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Manual onFocus event" no-transpile',title:'"Manual',onFocus:!0,'event"':!0,"no-transpile":!0},"dispatch(api.internalActions.onFocus())\n")))}p.isMDXComponent=!0}}]);