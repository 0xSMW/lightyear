"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70688],{57522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var o=r(29901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),b=n,m=c["".concat(s,".").concat(b)]||c[b]||h[b]||a;return r?o.createElement(m,p(p({ref:t},l),{},{components:r})):o.createElement(m,p({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(14090),n=(r(29901),r(57522));const a={},p=void 0,i={unversionedId:"api/github.github.testpushrepositorywebhook",id:"api/github.github.testpushrepositorywebhook",title:"github.github.testpushrepositorywebhook",description:"Home &gt; @runlightyear/github &gt; GitHub &gt; testPushRepositoryWebhook",source:"@site/docs/api/github.github.testpushrepositorywebhook.md",sourceDirName:"api",slug:"/api/github.github.testpushrepositorywebhook",permalink:"/lightyear/docs/api/github.github.testpushrepositorywebhook",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"GitHub.testPushRepositoryWebhook() method",id:"githubtestpushrepositorywebhook-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:u};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.github"},"GitHub")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.github.testpushrepositorywebhook"},"testPushRepositoryWebhook")),(0,n.kt)("h2",{id:"githubtestpushrepositorywebhook-method"},"GitHub.testPushRepositoryWebhook() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Test the push repository webhook"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"testPushRepositoryWebhook(props: TestPushRepositoryWebhookProps): Promise<HttpProxyResponse>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"props"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.testpushrepositorywebhookprops"},"TestPushRepositoryWebhookProps")),(0,n.kt)("td",{parentName:"tr",align:null},"props")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/lightyear.httpproxyresponse"},"HttpProxyResponse"),">"))}h.isMDXComponent=!0}}]);