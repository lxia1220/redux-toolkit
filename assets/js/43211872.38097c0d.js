"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9494],{1966:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return p}});var i=a(5773),o=a(808),r=(a(7378),a(5318)),s=(a(517),a(7637),["components"]),n={id:"examples",title:"RTK Query Examples",sidebar_label:"Examples",hide_title:!0,description:"RTK Query > Usage > Examples: sandboxes with runnable apps"},l=void 0,d={unversionedId:"rtk-query/usage/examples",id:"rtk-query/usage/examples",isDocsHomePage:!1,title:"RTK Query Examples",description:"RTK Query > Usage > Examples: sandboxes with runnable apps",source:"@site/../docs/rtk-query/usage/examples.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/examples",permalink:"/redux-toolkit/rtk-query/usage/examples",tags:[],version:"current",lastUpdatedAt:1656209250,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"examples",title:"RTK Query Examples",sidebar_label:"Examples",hide_title:!0,description:"RTK Query > Usage > Examples: sandboxes with runnable apps"},sidebar:"docs",previous:{title:"Comparison with Other Tools",permalink:"/redux-toolkit/rtk-query/comparison"},next:{title:"Usage With TypeScript",permalink:"/redux-toolkit/rtk-query/usage-with-typescript"}},p=[{value:"Examples Overview",id:"examples-overview",children:[],level:2},{value:"Kitchen Sink",id:"kitchen-sink",children:[],level:2},{value:"React Optimistic Updates",id:"react-optimistic-updates",children:[],level:2},{value:"React with GraphQL",id:"react-with-graphql",children:[],level:2},{value:"Authentication",id:"authentication",children:[{value:"Dispatching an action to set the user state",id:"dispatching-an-action-to-set-the-user-state",children:[],level:3},{value:"<code>extraReducers</code> \uc0ac\uc6a9\ud558\uae30",id:"extrareducers-\uc0ac\uc6a9\ud558\uae30",children:[],level:3}],level:2},{value:"React Class Components",id:"react-class-components",children:[],level:2},{value:"Svelte",id:"svelte",children:[],level:2}],m={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rtk-query-examples"},"RTK Query Examples"),(0,r.kt)("h2",{id:"examples-overview"},"Examples Overview"),(0,r.kt)("p",null,"RTK Query \uc0ac\uc6a9\uc758 \ub2e4\uc591\ud55c \uce21\uba74\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc608\uc2dc\uac00 \uba87\uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc608\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae30\ubc18\uc774 \ub418\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2e4\uc81c\ub85c \uc6d0\ud558\uc9c0 \uc54a\uac70\ub098 \ud544\uc694\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub294 ",(0,r.kt)("em",{parentName:"p"},"\ub9e4\uc6b0 \uad6c\uccb4\uc801\uc778")," \ub3d9\uc791\uc744 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 \uc874\uc7ac\ud569\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uc0ac\uc6a9\uc790\ub294 ",(0,r.kt)("a",{parentName:"p",href:"./queries"},"Queries")," \ubc0f ",(0,r.kt)("a",{parentName:"p",href:"./mutations"},"Mutations")," \uc139\uc158\uc758 \uae30\ubcf8 \uc608\uc81c\ub97c \ud1b5\ud574 \ud544\uc694\ud55c \ub300\ubd80\ubd84\uc758 \uc608\uc2dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CodeSandbox\uc5d0\uc11c \uc608\uc81c\ub97c \ud655\uc778\ud560 \ub54c, \ud2b9\ud788 \uc608\uc81c\ub97c fork\ud558\uace0 \ud30c\uc77c \ud3b8\uc9d1\uc744 \uc2dc\uc791\ud558\ub294 \uacbd\uc6b0 \uc774\uc0c1\ud55c \ub3d9\uc791\uc744 \uacbd\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud56b \ub9ac\ub85c\ub529\uacfc CSB \uc11c\ube44\uc2a4 \uc791\uc5c5\uc790 \ubc0f ",(0,r.kt)("a",{parentName:"p",href:"https://mswjs.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"msw"))," \uc5d0 \ubb38\uc81c\uac00 \uc788\uc744 \uc218 \uc788\uc73c\uba70 \uc62c\ubc14\ub978 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\ub294 \ub370 \ubb38\uc81c\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 CSB \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc5d0\uc11c \uc0c8\ub85c\uace0\uce68\ud558\uc5ec \ud574\uacb0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"kitchen-sink"},"Kitchen Sink"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/kitchen-sink?fontsize=12&hidenavigation=1&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Kitchen Sink Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"react-optimistic-updates"},"React Optimistic Updates"),(0,r.kt)("p",null,"\uc544\ub798 \uc608\uc5d0\uc11c \uba87 \uac00\uc9c0 \uc0ac\ud56d\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc774\ub4dc\ubc14\uc5d0 2\uac1c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uac8c\uc2dc\ubb3c")," \ubaa9\ub85d\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub9e8 \uc704\ub294 \uc131\uacf5\uc801\uc778 mutation\ub97c \uc5c5\ub370\uc774\ud2b8 \ud55c ",(0,r.kt)("em",{parentName:"p"},"\ub4a4")," \uc11c\ubc84\uc640 \ub2e4\uc2dc \ub3d9\uae30\ud654\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"\uad6c\ub3c5 \ub41c")," \ud558\ub098\ub294 optimistic update\ub85c \uc778\ud574 \uc989\uc2dc \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4. \uc9c4\ud589 \ub3c4\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uba74 \uc774\uac83\uc774 \ub864\ubc31\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc774 \uc608\uc81c\uc5d0\ub294 \uc758\ub3c4\uc801\uc73c\ub85c \uc774\uc0c1\ud55c \ub3d9\uc791\uc774 \uc788\uc2b5\ub2c8\ub2e4... \uac8c\uc2dc\ubb3c \uc774\ub984\uc744 \ud3b8\uc9d1\ud560 \ub54c \uc784\uc758\uc758 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/optimistic-update?fontsize=12&hidenavigation=1&module=%2Fsrc%2Fapp%2Fservices%2Fposts.ts&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Optimistic Update Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"react-with-graphql"},"React with GraphQL"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/graphql?fontsize=12&hidenavigation=1&theme=dark&module=%2Fsrc%2Fapi.js&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query GraphQL Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"RTK Query\ub97c \ud1b5\ud574 \uc778\uc99d\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ub9e4\uc6b0 \uae30\ubcf8\uc801\uc778 \uc608\uc2dc\ub85c, login mutation\uc744 \ud1b5\ud574 JWT\ub97c \uac00\uc838\uc640 store\uc5d0 \uc124\uc815\ud569\ub2c8\ub2e4. \uc774\ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," \ub97c \uc0ac\uc6a9\ud558\uc5ec \ud6c4\uc18d \uc694\uccad\uc5d0 authentication headers\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"dispatching-an-action-to-set-the-user-state"},"Dispatching an action to set the user state"),(0,r.kt)("p",null,"\uc774 \uc608\ub294 \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ubc0f \ud1a0\ud070 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"setCredentials")," action\uc744 dispatch\ud569\ub2c8\ub2e4."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/authentication?fontsize=12&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fauth%2FauthSlice.tsx&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Authentication Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h3",{id:"extrareducers-\uc0ac\uc6a9\ud558\uae30"},(0,r.kt)("inlineCode",{parentName:"h3"},"extraReducers")," \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\ub294 endpoint\uc758 matcher\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"authSlice"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"extraReducers"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/authentication-with-extrareducers?fontsize=12&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fauth%2FauthSlice.tsx&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Authentication Example - extraReducers",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"react-class-components"},"React Class Components"),(0,r.kt)("p",null,"\ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0ac\uc6a9 \uc608\uc2dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"PostDetail")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/react-class-component-example-48hyq?fontsize=12&hidenavigation=1&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query React Class Components Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"svelte"},"Svelte"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/svelte-app-rtk-simplequery-demo-f1ueb?fontsize=12&hidenavigation=1&theme=dark&runonclick=1",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Svelte Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}c.isMDXComponent=!0}}]);