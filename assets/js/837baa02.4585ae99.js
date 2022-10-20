"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[688],{7522:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>b});var o=r(9901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),c=u(r),b=n,y=c["".concat(s,".").concat(b)]||c[b]||l[b]||a;return r?o.createElement(y,i(i({ref:t},h),{},{components:r})):o.createElement(y,i({ref:t},h))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=r(4090),n=(r(9901),r(7522));const a={},i=void 0,p={unversionedId:"api/github.github.testpushrepositorywebhook",id:"api/github.github.testpushrepositorywebhook",title:"github.github.testpushrepositorywebhook",description:"Home &gt; @runlightyear/github &gt; Github &gt; testPushRepositoryWebhook",source:"@site/docs/api/github.github.testpushrepositorywebhook.md",sourceDirName:"api",slug:"/api/github.github.testpushrepositorywebhook",permalink:"/lightyear/docs/api/github.github.testpushrepositorywebhook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/github.github.testpushrepositorywebhook.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Github.testPushRepositoryWebhook() method",id:"githubtestpushrepositorywebhook-method",level:2},{value:"Parameters",id:"parameters",level:2}],h={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.github"},"Github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.github.testpushrepositorywebhook"},"testPushRepositoryWebhook")),(0,n.kt)("h2",{id:"githubtestpushrepositorywebhook-method"},"Github.testPushRepositoryWebhook() method"),(0,n.kt)("p",null,"Test the push repository webhook"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"testPushRepositoryWebhook(options: TestPushRepositoryWebhookOptions): Promise<HttpProxyResponse>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/lightyear/docs/api/github.testpushrepositorywebhookoptions"},"TestPushRepositoryWebhookOptions")),(0,n.kt)("td",{parentName:"tr",align:null},"options")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/lightyear.httpproxyresponse"},"HttpProxyResponse"),">"))}l.isMDXComponent=!0}}]);