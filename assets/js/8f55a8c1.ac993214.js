"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7055],{7522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(9901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(4090),o=(r(9901),r(7522));const i={},s=void 0,a={unversionedId:"api/github.updateissueoptions.milestone",id:"api/github.updateissueoptions.milestone",title:"github.updateissueoptions.milestone",description:"Home &gt; @runlightyear/github &gt; UpdateIssueOptions &gt; milestone",source:"@site/docs/api/github.updateissueoptions.milestone.md",sourceDirName:"api",slug:"/api/github.updateissueoptions.milestone",permalink:"/lightyear/docs/api/github.updateissueoptions.milestone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/github.updateissueoptions.milestone.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"UpdateIssueOptions.milestone property",id:"updateissueoptionsmilestone-property",level:2}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.updateissueoptions"},"UpdateIssueOptions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.updateissueoptions.milestone"},"milestone")),(0,o.kt)("h2",{id:"updateissueoptionsmilestone-property"},"UpdateIssueOptions.milestone property"),(0,o.kt)("p",null,"The number of the milestone to associate this issue with or null to remove current."),(0,o.kt)("p",null,"NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"milestone?: string | number | null;\n")))}c.isMDXComponent=!0}}]);