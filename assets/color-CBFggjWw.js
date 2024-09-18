import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as c}from"./index-CRbi4mQH.js";import{g as j,M as p}from"./chunk-HLWAVYOI-DE20wlLg.js";import{s as g,c as u}from"./index-1jgyShQc.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-iDI8y9WL.js";import"../sb-preview/runtime.js";import"./react-18-DAjhTQGP.js";import"./index-BOkhicXD.js";import"./index-DKghJPm2.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index-DLtrBsm9.js";const d=g("div",{padding:"$6",display:"flex",justifyContent:"space-between",margin:"0 $8","& > *":{fontFamily:'"Roboto Mono", monospace'}});function s({colors:e,isGradient:r}){const i=t=>{const m=/#[0-9A-Fa-f]{6}/g,o=t.match(m);return o!=null?o.reduce((x,h)=>x+j(h,"#FFFFFF"),0)/o.length:0};return e.map(t=>r?n.jsxs(d,{style:{backgroundImage:t.hex,color:i(t.hex)<3.5?"#000":"#FFF",flexDirection:"column",gap:16},children:[n.jsxs("strong",{children:["$",t.name]}),n.jsx("span",{children:t.hex})]},t.name):n.jsxs(d,{style:{backgroundColor:t.hex,color:i(t.hex)<3.5?"#000":"#FFF"},children:[n.jsxs("strong",{children:["$",t.name]}),n.jsx("span",{children:t.hex})]},t.name))}const a=Object.entries(u).map(([e,r])=>({name:e,hex:r})),f=a.filter(e=>e.name.startsWith("brand")),b=a.filter(e=>e.name==="white"||e.name.startsWith("gray")||e.name==="black"),C=a.filter(e=>e.name.startsWith("danger")),F=a.filter(e=>e.name.startsWith("warning")),y=a.filter(e=>e.name.startsWith("gradient"));function l(e){const r={h1:"h1",h2:"h2",p:"p",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Tokens/Colors"}),`
`,n.jsx(r.h1,{id:"paleta-de-cores",children:"Paleta de cores"}),`
`,n.jsx(r.p,{children:"Tokens da paleta de cores do design system do Medap"}),`
`,n.jsx(r.h2,{id:"brand",children:"Brand"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{colors:f,isGradient:!1}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"tons-de-cinza",children:"Tons de cinza"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{colors:b,isGradient:!1}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"danger",children:"Danger"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{colors:C,isGradient:!1}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"warning",children:"Warning"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{colors:F,isGradient:!1}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"gradient",children:"Gradient"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{colors:y,isGradient:!0})]})}function E(e={}){const{wrapper:r}={...c(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(l,{...e})}):l(e)}export{E as default};
