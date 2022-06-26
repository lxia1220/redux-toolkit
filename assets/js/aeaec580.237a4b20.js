"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5778],{7066:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var n=i(5773),a=i(808),o=(i(7378),i(5318)),l=(i(517),i(7637),["components"]),r={id:"conditional-fetching",title:"Conditional Fetching",sidebar_label:"Conditional Fetching",hide_title:!0,description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed"},d=void 0,s={unversionedId:"rtk-query/usage/conditional-fetching",id:"rtk-query/usage/conditional-fetching",isDocsHomePage:!1,title:"Conditional Fetching",description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed",source:"@site/../docs/rtk-query/usage/conditional-fetching.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/conditional-fetching",permalink:"/rtk-query/usage/conditional-fetching",tags:[],version:"current",lastUpdatedAt:1656208204,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"conditional-fetching",title:"Conditional Fetching",sidebar_label:"Conditional Fetching",hide_title:!0,description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed"},sidebar:"docs",previous:{title:"Manual Cache Updates",permalink:"/rtk-query/usage/manual-cache-updates"},next:{title:"Error Handling",permalink:"/rtk-query/usage/error-handling"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Conditional Fetching Example",id:"conditional-fetching-example",children:[],level:2}],c={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-fetching"},"Conditional Fetching"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Query hooks\ub294 component\uac00 mounted\ub418\uba74 \uc790\ub3d9\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc635\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uba87\uba87\uc758 \uacbd\uc6b0 \ud2b9\uc815 \uc870\uac74\uc774 \ub9cc\uc871\ud558\uc600\uc744\ub54c\uae4c\uc9c0 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\ub97c \uc9c0\uc5f0\ud574\uc57c\ub418\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. RTK Query\ub294 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc704\ud574 conditional fetching\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"Query\uac00 \uc790\ub3d9\uc73c\ub85c \uc2e4\ud589\ub418\ub294\uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574, hook\uc758 parameter\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"skip"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Skip example"',title:'"Skip','example"':!0},"const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {\n  const { data, error, status } = useGetPokemonByNameQuery(name, {\n    skip,\n  });\n\n  return (\n    <div>\n      {name} - {status}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"skip")," is true (or ",(0,o.kt)("inlineCode",{parentName:"p"},"skipToken")," is passed in as ",(0,o.kt)("inlineCode",{parentName:"p"},"arg"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"If the query has cached data:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The cached data ",(0,o.kt)("strong",{parentName:"li"},"will not be used")," on the initial load, and will ignore updates from any identical query until the ",(0,o.kt)("inlineCode",{parentName:"li"},"skip")," condition is removed"),(0,o.kt)("li",{parentName:"ul"},"The query will have a status of ",(0,o.kt)("inlineCode",{parentName:"li"},"uninitialized")),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"skip: false")," is set after skipping the initial load, the cached result will be used"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"If the query does not have cached data:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The query will have a status of ",(0,o.kt)("inlineCode",{parentName:"li"},"uninitialized")),(0,o.kt)("li",{parentName:"ul"},"The query will not exist in the state when viewed with the dev tools"),(0,o.kt)("li",{parentName:"ul"},"The query will not automatically fetch on mount"),(0,o.kt)("li",{parentName:"ul"},"The query will not automatically run when additional components with the same query are added that do run")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Typescript users may wish to use ",(0,o.kt)("a",{parentName:"p",href:"/rtk-query/api/created-api/hooks#skiptoken"},(0,o.kt)("inlineCode",{parentName:"a"},"skipToken"))," as an alternative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip")," option in order to skip running a query, while still keeping types for the endpoint accurate."))),(0,o.kt)("h2",{id:"conditional-fetching-example"},"Conditional Fetching Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/conditional-fetching?fontsize=12&runonclick=1&hidenavigation=1&module=%2Fsrc%2FPokemon.tsx&moduleview=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Conditional Fetching Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}u.isMDXComponent=!0}}]);