import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as r}from"./index-CRbi4mQH.js";import{M as a}from"./chunk-HLWAVYOI-DE20wlLg.js";import{s as n,r as m}from"./index-1jgyShQc.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-iDI8y9WL.js";import"../sb-preview/runtime.js";import"./react-18-DAjhTQGP.js";import"./index-BOkhicXD.js";import"./index-DKghJPm2.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index-DLtrBsm9.js";const d=n("div",{width:"100%",display:"flex",gap:"$16"}),p=n("div",{display:"flex",flexDirection:"column",gap:"$2"}),c=n("span",{display:"block",height:"$20",width:"$20",backgroundColor:"$gray_700",marginBottom:"$4 !important"}),l=n("strong",{fontFamily:'"Roboto Mono", monospace !important',fontSize:"$2xlarge !important",color:"$gray_600"}),x=n("p",{fontFamily:'"Roboto Mono", monospace !important',fontSize:"$2xlarge !important"});function s({radiis:i}){return o.jsx(d,{children:i.map(t=>o.jsxs(p,{children:[o.jsx(c,{style:{borderRadius:t.pixel}}),o.jsxs(l,{children:["$",t.name]}),o.jsx(x,{children:t.pixel})]},t.name))})}s.__docgenInfo={description:"",methods:[],displayName:"Radiis",props:{radiis:{required:!0,tsType:{name:"Array",elements:[{name:"Radii"}],raw:"Radii[]"},description:""}}};const u=Object.entries(m).map(([i,t])=>({name:i,pixel:t}));function e(i){const t={h1:"h1",p:"p",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Tokens/Radii"}),`
`,o.jsx(t.h1,{id:"border-radius",children:"Border radius"}),`
`,o.jsx(t.p,{children:"Tokens de tamanhos utilizados no arredondamento de bordas do design system do Medap"}),`
`,o.jsx(s,{radiis:u})]})}function F(i={}){const{wrapper:t}={...r(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(e,{...i})}):e(i)}export{F as default};