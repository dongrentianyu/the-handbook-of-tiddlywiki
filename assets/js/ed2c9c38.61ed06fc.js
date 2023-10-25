"use strict";(self.webpackChunkthe_handbook_of_tiddlywiki=self.webpackChunkthe_handbook_of_tiddlywiki||[]).push([[481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:i,c[1]=a;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>D,frontMatter:()=>w,metadata:()=>O,toc:()=>E});var r=n(7462),i=n(7294),o=n(3905),c=n(6010),a=n(2802),l=n(9960),d=n(3919),s=n(5999);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return i.createElement(l.Z,{href:t,className:(0,c.Z)("card padding--lg",m.cardContainer)},n)}function p(e){let{href:t,icon:n,title:r,description:o}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,c.Z)("text--truncate",m.cardTitle),title:r},n," ",r),o&&i.createElement("p",{className:(0,c.Z)("text--truncate",m.cardDescription),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,d.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(y,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(b,e);const r=(0,a.MN)(t);return i.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}const w={title:"1-\u8ba4\u8bc6\u592a\u5fae",slug:"/1-meet-tiddlywiki","en-name":"1-meet-tiddlywiki"},g=void 0,O={unversionedId:"meet-tiddlywiki/index",id:"meet-tiddlywiki/index",title:"1-\u8ba4\u8bc6\u592a\u5fae",description:"\u5f88\u591a\u4eba\u65e0\u6cd5\u771f\u6b63\u4f7f\u7528\u592a\u5fae\uff0c\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u539f\u56e0\u662f\uff0c\u6ca1\u6709\u5b8c\u6574\u4e86\u89e3\u592a\u5fae\u3002\u8fd9\u91cc\u7684\u5b8c\u6574\u5e76\u975e\u662f\u6307\u6e90\u7801\u5c42\u6b21\u7684\u5b8c\u6574\uff0c\u6216\u8005\u7528\u6cd5\u4e0a\u7684\u5b8c\u6574\uff0c\u800c\u662f\u8fde\u57fa\u672c\u8bbe\u7f6e\u7684\u90fd\u6ca1\u6709\u5b8c\u6574\u4e86\u89e3\u5b8c\u3002",source:"@site/docs/1-meet-tiddlywiki/index.md",sourceDirName:"1-meet-tiddlywiki",slug:"/1-meet-tiddlywiki",permalink:"/the-handbook-of-tiddlywiki/docs/1-meet-tiddlywiki",draft:!1,editUrl:"https://github.com/dongrentianyu/the-handbook-of-tiddlywiki/blob/main/docs/1-meet-tiddlywiki/index.md",tags:[],version:"current",frontMatter:{title:"1-\u8ba4\u8bc6\u592a\u5fae",slug:"/1-meet-tiddlywiki","en-name":"1-meet-tiddlywiki"},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u8a00",permalink:"/the-handbook-of-tiddlywiki/docs/intro"},next:{title:"1.1\u5b89\u88c5\u4e0e\u5907\u4efd",permalink:"/the-handbook-of-tiddlywiki/docs/1-meet-tiddlywiki/1.1installation-and-backup"}},v={},E=[],x={toc:E},j="wrapper";function D(e){let{components:t,...n}=e;return(0,o.kt)(j,(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f88\u591a\u4eba\u65e0\u6cd5\u771f\u6b63\u4f7f\u7528\u592a\u5fae\uff0c\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u539f\u56e0\u662f\uff0c\u6ca1\u6709\u5b8c\u6574\u4e86\u89e3\u592a\u5fae\u3002\u8fd9\u91cc\u7684\u5b8c\u6574\u5e76\u975e\u662f\u6307\u6e90\u7801\u5c42\u6b21\u7684\u5b8c\u6574\uff0c\u6216\u8005\u7528\u6cd5\u4e0a\u7684\u5b8c\u6574\uff0c\u800c\u662f\u8fde\u57fa\u672c\u8bbe\u7f6e\u7684\u90fd\u6ca1\u6709\u5b8c\u6574\u4e86\u89e3\u5b8c\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u4ece\u57fa\u672c\u7684\u9875\u9762\u5e03\u5c40\u5230\u5177\u4f53\u7684\u8bbe\u7f6e\uff0c\u8fd9\u4e9b\u662f\u672c\u7ae0\u8282\u8981\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,o.kt)(k,{mdxType:"DocCardList"}))}D.isMDXComponent=!0}}]);