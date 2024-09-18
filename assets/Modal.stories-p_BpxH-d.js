import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{M as g,H as c,T as a,a as q}from"./index-IuHiE457.js";import{r as f}from"./index-uCp2LrAq.js";import"./index-DLtrBsm9.js";import"./index-DKghJPm2.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";const D={title:"Components/Modal",component:g,tags:["autodocs"],parameters:{layout:"centered"},args:{variant:"default",modalOpen:!1,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{size:"4xlarge",children:"Lorem ipsum dolor"}),e.jsx(a,{size:"medium",style:{maxWidth:"60ch"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt ab temporibus, quis modi eum architecto neque amet similique odit? Quasi magnam veniam ullam quas tempore blanditiis amet magni odit?"})]})},argTypes:{variant:{options:["default","withHeader"],control:{type:"inline-radio"}},modalOpen:{control:"boolean"},children:{description:"Conteúdo do modal",control:{type:"text"}},childrenHeader:{description:"Título do modal",control:"text"}},decorators:[(p,{args:o})=>{const[h,r]=f.useState(o.modalOpen||!1),x=()=>r(!1);return e.jsxs(e.Fragment,{children:[e.jsx(q,{onClick:()=>{r(!0)},children:"Ativar modal"}),e.jsx(p,{args:{...o,modalOpen:h,closeModal:x}})]})}]},i={},t={args:{variant:"withHeader",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{style:{maxWidth:"60ch"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt ab temporibus, quis modi eum architecto neque amet similique odit? Quasi magnam veniam ullam quas tempore blanditiis amet magni odit."}),e.jsx(a,{style:{maxWidth:"60ch"},children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatem qui repellat praesentium distinctio placeat numquam laboriosam. Libero quia sequi, esse consequuntur, dolorum dolor adipisci fugiat amet reprehenderit enim voluptatum!"})]}),childrenHeader:e.jsx(c,{size:"4xlarge",children:"Lorem ipsum dolor sit amet"})}};var s,n,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'withHeader',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Text style={{
        maxWidth: '60ch'
      }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt
          ab temporibus, quis modi eum architecto neque amet similique odit?
          Quasi magnam veniam ullam quas tempore blanditiis amet magni odit.
        </Text>
        <Text style={{
        maxWidth: '60ch'
      }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          voluptatem qui repellat praesentium distinctio placeat numquam
          laboriosam. Libero quia sequi, esse consequuntur, dolorum dolor
          adipisci fugiat amet reprehenderit enim voluptatum!
        </Text>
      </div>,
    childrenHeader: <Heading size={'4xlarge'}>Lorem ipsum dolor sit amet</Heading>
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["ModalDefault","ModalWithHeader"];export{i as ModalDefault,t as ModalWithHeader,T as __namedExportsOrder,D as default};
