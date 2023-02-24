"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8123],{57522:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(29901);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),s=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=s(r),m=n,h=k["".concat(l,".").concat(m)]||k[m]||d[m]||o;return r?a.createElement(h,p(p({ref:e},u),{},{components:r})):a.createElement(h,p({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,p=new Array(o);p[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},67955:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(14090),n=(r(29901),r(57522));const o={},p=void 0,i={unversionedId:"api/github.updaterepositorywebhookprops",id:"api/github.updaterepositorywebhookprops",title:"github.updaterepositorywebhookprops",description:"Home &gt; @runlightyear/github &gt; UpdateRepositoryWebhookProps",source:"@site/docs/api/github.updaterepositorywebhookprops.md",sourceDirName:"api",slug:"/api/github.updaterepositorywebhookprops",permalink:"/docs/api/github.updaterepositorywebhookprops",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"UpdateRepositoryWebhookProps interface",id:"updaterepositorywebhookprops-interface",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Optional Properties",id:"optional-properties",level:2}],u={toc:s};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.updaterepositorywebhookprops"},"UpdateRepositoryWebhookProps")),(0,n.kt)("h2",{id:"updaterepositorywebhookprops-interface"},"UpdateRepositoryWebhookProps interface"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface UpdateRepositoryWebhookProps \n")),(0,n.kt)("h2",{id:"required-properties"},"Required Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.hookid"},"hookId")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The unique identifier of the hook.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.owner"},"owner")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The account owner of the repository. The name is not case sensitive.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.repo"},"repo")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the repository. The name is not case sensitive.")))),(0,n.kt)("h2",{id:"optional-properties"},"Optional Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.active"},"active?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Determines if notifications are sent when the webhook is triggered. Set to true to send notifications."),(0,n.kt)("p",null,"Default: true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.addevents"},"addEvents?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Array","<","string",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Determines a list of events to be added to the list of events that the Hook triggers for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.config"},"config?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.webhookconfig"},"WebhookConfig")),(0,n.kt)("td",{parentName:"tr",align:null},"Key/value pairs to provide settings for this webhook.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.events"},"events?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Array","<","string",">"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Determines what events the hook is triggered for. This replaces the entire array of events."),(0,n.kt)("p",null,"Default: push"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.updaterepositorywebhookprops.removeevents"},"removeEvents?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Array","<","string",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Determines a list of events to be removed from the list of events that the Hook triggers for.")))))}d.isMDXComponent=!0}}]);