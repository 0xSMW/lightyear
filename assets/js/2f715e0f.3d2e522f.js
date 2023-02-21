"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89516],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(14090),r=(n(29901),n(57522));const l={},o=void 0,p={unversionedId:"api/openai.createcompletionprops",id:"api/openai.createcompletionprops",title:"openai.createcompletionprops",description:"Home &gt; @runlightyear/openai &gt; CreateCompletionProps",source:"@site/docs/api/openai.createcompletionprops.md",sourceDirName:"api",slug:"/api/openai.createcompletionprops",permalink:"/lightyear/docs/api/openai.createcompletionprops",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[{value:"CreateCompletionProps interface",id:"createcompletionprops-interface",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Optional Properties",id:"optional-properties",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/openai"},"@runlightyear/openai")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/openai.createcompletionprops"},"CreateCompletionProps")),(0,r.kt)("h2",{id:"createcompletionprops-interface"},"CreateCompletionProps interface"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CreateCompletionProps \n")),(0,r.kt)("h2",{id:"required-properties"},"Required Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.model"},"model")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them.")))),(0,r.kt)("h2",{id:"optional-properties"},"Optional Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.bestof"},"bestOf?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)")),' Defaults to 1 Generates bestOf completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.'),(0,r.kt)("p",null,"When used with n, bestOf controls the number of candidate completions and n specifies how many to return \u2013 bestOf must be greater than n."),(0,r.kt)("p",null,"Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for maxTokens and stop."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.echo"},"echo?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to false Echo back the prompt in addition to the completion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.frequencypenalty"},"frequencyPenalty?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 0 Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim."),(0,r.kt)("p",null,"See more information about frequency and presence penalties."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.logitbias"},"logitBias?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to null Modify the likelihood of specified tokens appearing in the completion."),(0,r.kt)("p",null,"Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this tokenizer tool (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token."),(0,r.kt)("p",null,"As an example, you can pass {",'"50256": -100',"} to prevent the ","<","|","endoftext","|",">"," token from being generated."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.logprobs"},"logprobs?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to null Include the log probabilities on the logprobs most likely tokens, as well the chosen tokens. For example, if logprobs is 5, the API will return a list of the 5 most likely tokens. The API will always return the logprob of the sampled token, so there may be up to logprobs+1 elements in the response."),(0,r.kt)("p",null,"The maximum value for logprobs is 5. If you need more than this, please contact us through our Help center and describe your use case."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.maxtokens"},"maxTokens?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 16 The maximum number of tokens to generate in the completion."),(0,r.kt)("p",null,"The token count of your prompt plus maxTokens cannot exceed the model's context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096)."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.n"},"n?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 1 How many completions to generate for each prompt."),(0,r.kt)("p",null,"Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for maxTokens and stop."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.presencepenalty"},"presencePenalty?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 0 Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics."),(0,r.kt)("p",null,"See more information about frequency and presence penalties."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.prompt"},"prompt?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to ","<","|","endoftext","|",">"," The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays."),(0,r.kt)("p",null,"Note that ","<","|","endoftext","|",">"," is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.stop"},"stop?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," string","[","]"," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to null Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.stream"},"stream?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to false Whether to stream back partial progress. If set, tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: ","[","DONE","]"," message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.suffix"},"suffix?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to null The suffix that comes after a completion of inserted text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.temperature"},"temperature?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 1 What sampling temperature to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer."),(0,r.kt)("p",null,"We generally recommend altering this or topP but not both."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.topp"},"topP?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," Defaults to 1 An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with topP probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."),(0,r.kt)("p",null,"We generally recommend altering this or temperature but not both."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/openai.createcompletionprops.user"},"user?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.")))))}m.isMDXComponent=!0}}]);