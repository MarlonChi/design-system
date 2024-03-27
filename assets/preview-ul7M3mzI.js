function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-Byks1piC.js","assets/chunk-HLWAVYOI-DhZ0UCmM.js","assets/iframe-D4RKtGIW.js","assets/index-BLgStI3F.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-dx9qDk38.js","assets/index-B99Sp-t6.js","assets/index-DJ16OMBT.js","assets/index-JYYDrx1V.js","assets/index-Czp0IYB_.js","assets/index-B_J8iUie.js","assets/index-k_s-dmML.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-D4RKtGIW.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-Byks1piC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
