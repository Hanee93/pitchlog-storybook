import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{a as o,r as s,t as c}from"./storyDecorators-CxjbOeQx.js";import{n as l,r as u,t as d}from"./storyHelpers-DodvrARx.js";function f({checked:e=!1,indeterminate:t=!1,onChange:n,label:r,showLabel:i=!0,interaction:o,className:s,id:c,disabled:l,...u}){let d=(0,p.useId)(),f=c??d,h=(0,p.useRef)(null);(0,p.useEffect)(()=>{h.current&&(h.current.indeterminate=t)},[t]);let g=e||t;return(0,m.jsxs)(`label`,{htmlFor:f,"data-interaction":o,className:a(`group inline-flex items-center gap-3 select-none`,l?`pointer-events-none`:`cursor-pointer`,s),children:[(0,m.jsx)(`input`,{ref:h,id:f,type:`checkbox`,className:`peer sr-only`,checked:e,disabled:l,"aria-label":i?void 0:r,onChange:e=>n?.(e.target.checked),...u}),(0,m.jsx)(`span`,{"aria-hidden":`true`,className:a(`flex size-5 shrink-0 items-center justify-center rounded-sm border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink`,g?`border-ink bg-ink text-pure-white group-hover:border-ink-dark group-hover:bg-ink-dark group-active:border-pure-black group-active:bg-pure-black group-data-[interaction=hover]:border-ink-dark group-data-[interaction=hover]:bg-ink-dark group-data-[interaction=pressed]:border-pure-black group-data-[interaction=pressed]:bg-pure-black`:`border-line-gray bg-pure-white group-hover:border-mist group-active:border-slate group-active:bg-court-white group-data-[interaction=hover]:border-mist group-data-[interaction=pressed]:border-slate group-data-[interaction=pressed]:bg-court-white`,l&&`border-transparent bg-court-white text-mist`),children:t?(0,m.jsx)(`span`,{className:`h-0.5 w-2.5 rounded-bar bg-current`}):e?(0,m.jsx)(`svg`,{width:`12`,height:`10`,viewBox:`0 0 12 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,m.jsx)(`path`,{d:`M1.5 5.2 4.4 8 10.5 2`})}):null}),i&&(0,m.jsx)(`span`,{className:a(`text-body`,l?`text-mist`:`text-ink`),children:r})]})}var p,m,h=e((()=>{p=t(n(),1),i(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{checked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},label:{required:!0,tsType:{name:`string`},description:`접근성 이름. Show label이 꺼져도 aria-label로 읽힌다`},showLabel:{required:!1,tsType:{name:`boolean`},description:`Figma Show label. 끄면 20x20 상자만 남는다`,defaultValue:{value:`true`,computed:!1}},interaction:{required:!1,tsType:{name:`union`,raw:`'hover' | 'pressed'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'pressed'`}]},description:``}}}}));function g({className:e,...t}){return(0,_.jsx)(f,{...t,className:a(`flex h-(--size-button-md) w-full items-center`,e)})}var _,v=e((()=>{h(),i(),_=r(),g.__docgenInfo={description:``,methods:[],displayName:`CheckboxRow`}}));function y(){let[e,t]=(0,b.useState)({약관:!0,개인정보:!1,마케팅:!1}),n=Object.values(e),r=n.every(Boolean);return(0,x.jsxs)(`div`,{className:`flex flex-col`,children:[(0,x.jsx)(g,{label:`전체 동의`,checked:r,indeterminate:n.some(Boolean)&&!r,onChange:n=>t(Object.fromEntries(Object.keys(e).map(e=>[e,n])))}),(0,x.jsx)(`div`,{className:`h-px w-full bg-line-gray`}),Object.entries(e).map(([n,r])=>(0,x.jsx)(g,{label:`${n} 동의`,checked:r,onChange:r=>t({...e,[n]:r})},n))]})}var b,x,S,C,w,T,E,D;e((()=>{b=t(n(),1),h(),v(),u(),s(),x=r(),{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:`Components/Checkbox`,component:f,args:{checked:!1,label:`이용약관에 동의합니다`,showLabel:!0},argTypes:{checked:{control:`boolean`,description:`Figma State = On`},indeterminate:{control:`boolean`,description:`Figma State = Indeterminate`},label:{control:`text`,description:`Figma Label. 숨겨도 aria-label로 읽힌다`},showLabel:{control:`boolean`,description:`Figma Show label`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`]},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[Checkbox 182:835](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=182-835), [CheckboxRow 182:843](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=182-843). 20x20 radius 4. Off는 hairline 선, On은 ink 채움 + 흰 체크. Indeterminate는 10x2 대시, 부분 선택된 묶음의 머리 행에만.

**용도.** 여러 개를 고를 때. 설정을 켜고 끄는 자리는 Toggle, 시트 단일 선택은 FilterOption. 터치 영역 44가 필요한 목록에는 CheckboxRow(행 전체가 탭 영역).

**코드.** 네이티브 input[type=checkbox]를 시각적으로 숨기고 label로 감싼다. 키보드 Space, 포커스 링, 폼 제출이 그대로 동작한다.

### 플랫폼 참고

${o([[`상자`,`18dp, radius 2, 선 2dp`,`iOS에 없음. 목록 체크마크 액세서리. macOS 14pt`,`20, radius 4, 선 1px. 본문 16과 나란히 놓았을 때 x-height에 맞춘 크기`],[`터치 영역`,`48dp 컨테이너`,`44pt`,`상자 단독은 20(인라인 문맥 전용), 목록은 CheckboxRow 44`],[`선택 색`,`primary`,`tintColor`,`action/secondary(ink). 선택은 강조가 아니라 상태라서 블루를 쓰지 않는다`],[`부분 선택`,`Indeterminate 대시`,`없음`,`Indeterminate 대시. 묶음의 머리 행에만`],[`오류 상태`,`error 색 상자`,`없음`,`없음. 오류는 행 아래 status/danger 메시지로`]])}`}}}},w={render:function(e){let[,t]=S();return(0,x.jsx)(f,{...e,onChange:n=>{e.onChange?.(n),t({checked:n,indeterminate:!1})}})}},T={name:`State x Interaction`,render:()=>(0,x.jsxs)(d,{children:[(0,x.jsxs)(l,{label:`Off`,children:[(0,x.jsx)(f,{label:`Off`,showLabel:!1}),(0,x.jsx)(f,{label:`Off hover`,showLabel:!1,interaction:`hover`}),(0,x.jsx)(f,{label:`Off pressed`,showLabel:!1,interaction:`pressed`})]}),(0,x.jsxs)(l,{label:`On`,children:[(0,x.jsx)(f,{label:`On`,showLabel:!1,checked:!0}),(0,x.jsx)(f,{label:`On hover`,showLabel:!1,checked:!0,interaction:`hover`}),(0,x.jsx)(f,{label:`On pressed`,showLabel:!1,checked:!0,interaction:`pressed`})]}),(0,x.jsxs)(l,{label:`Indeterminate`,children:[(0,x.jsx)(f,{label:`일부 선택`,showLabel:!1,indeterminate:!0}),(0,x.jsx)(f,{label:`일부 선택 hover`,showLabel:!1,indeterminate:!0,interaction:`hover`}),(0,x.jsx)(f,{label:`일부 선택 pressed`,showLabel:!1,indeterminate:!0,interaction:`pressed`})]}),(0,x.jsxs)(l,{label:`Disabled`,children:[(0,x.jsx)(f,{label:`비활성`,showLabel:!1,disabled:!0}),(0,x.jsx)(f,{label:`비활성 선택`,showLabel:!1,disabled:!0,checked:!0})]}),(0,x.jsxs)(l,{label:`Show label`,children:[(0,x.jsx)(f,{label:`라벨`}),(0,x.jsx)(f,{label:`라벨`,checked:!0})]})]})},E={name:`CheckboxRow 묶음`,decorators:[c],parameters:{docs:{description:{story:`머리 행이 Indeterminate를 쓰는 유일한 자리. 행 높이 44, 행 전체가 탭 영역.`}}},render:()=>(0,x.jsx)(y,{})},D=[`Playground`,`States`,`Rows`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <Checkbox {...args} onChange={checked => {
      args.onChange?.(checked);
      setArgs({
        checked,
        indeterminate: false
      });
    }} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'State x Interaction',
  render: () => <Matrix>
      <MatrixRow label="Off">
        <Checkbox label="Off" showLabel={false} />
        <Checkbox label="Off hover" showLabel={false} interaction="hover" />
        <Checkbox label="Off pressed" showLabel={false} interaction="pressed" />
      </MatrixRow>
      <MatrixRow label="On">
        <Checkbox label="On" showLabel={false} checked />
        <Checkbox label="On hover" showLabel={false} checked interaction="hover" />
        <Checkbox label="On pressed" showLabel={false} checked interaction="pressed" />
      </MatrixRow>
      <MatrixRow label="Indeterminate">
        <Checkbox label="일부 선택" showLabel={false} indeterminate />
        <Checkbox label="일부 선택 hover" showLabel={false} indeterminate interaction="hover" />
        <Checkbox label="일부 선택 pressed" showLabel={false} indeterminate interaction="pressed" />
      </MatrixRow>
      <MatrixRow label="Disabled">
        <Checkbox label="비활성" showLabel={false} disabled />
        <Checkbox label="비활성 선택" showLabel={false} disabled checked />
      </MatrixRow>
      <MatrixRow label="Show label">
        <Checkbox label="라벨" />
        <Checkbox label="라벨" checked />
      </MatrixRow>
    </Matrix>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'CheckboxRow 묶음',
  decorators: [contentWidth],
  parameters: {
    docs: {
      description: {
        story: '머리 행이 Indeterminate를 쓰는 유일한 자리. 행 높이 44, 행 전체가 탭 영역.'
      }
    }
  },
  render: () => <RowsDemo />
}`,...E.parameters?.docs?.source}}}}))();export{w as Playground,E as Rows,T as States,D as __namedExportsOrder,C as default};