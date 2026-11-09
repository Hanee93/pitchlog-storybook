import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-ijBa-pNC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{n as o,r as s,t as c}from"./storyHelpers-DodvrARx.js";import{a as l,r as u,t as d}from"./storyDecorators-FL8HJpQ6.js";import{n as f,t as p}from"./Checkbox-X_N6kdb3.js";function m({className:e,...t}){return(0,h.jsx)(p,{...t,className:a(`flex h-(--size-button-md) w-full items-center`,e)})}var h,g=e((()=>{f(),i(),h=r(),m.__docgenInfo={description:``,methods:[],displayName:`CheckboxRow`}}));function _(){let[e,t]=(0,v.useState)({약관:!0,개인정보:!1,마케팅:!1}),n=Object.values(e),r=n.every(Boolean);return(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(m,{label:`전체 동의`,checked:r,indeterminate:n.some(Boolean)&&!r,onChange:n=>t(Object.fromEntries(Object.keys(e).map(e=>[e,n])))}),(0,y.jsx)(`div`,{className:`h-px w-full bg-line-gray`}),Object.entries(e).map(([n,r])=>(0,y.jsx)(m,{label:`${n} 동의`,checked:r,onChange:r=>t({...e,[n]:r})},n))]})}var v,y,b,x,S,C,w,T;e((()=>{v=t(n(),1),f(),g(),s(),u(),y=r(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:`Components/Checkbox`,component:p,args:{checked:!1,label:`이용약관에 동의합니다`,showLabel:!0},argTypes:{checked:{control:`boolean`,description:`Figma State = On`},indeterminate:{control:`boolean`,description:`Figma State = Indeterminate`},label:{control:`text`,description:`Figma Label. 숨겨도 aria-label로 읽힌다`},showLabel:{control:`boolean`,description:`Figma Show label`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`]},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[Checkbox 182:835](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=182-835), [CheckboxRow 182:843](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=182-843). 20x20 radius 4. Off는 hairline 선, On은 ink 채움 + 흰 체크. Indeterminate는 10x2 대시, 부분 선택된 묶음의 머리 행에만.

**용도.** 여러 개를 고를 때. 설정을 켜고 끄는 자리는 Toggle, 시트 단일 선택은 FilterOption. 터치 영역 44가 필요한 목록에는 CheckboxRow(행 전체가 탭 영역).

**코드.** 네이티브 input[type=checkbox]를 시각적으로 숨기고 label로 감싼다. 키보드 Space, 포커스 링, 폼 제출이 그대로 동작한다.

### 플랫폼 참고

${l([[`상자`,`18dp, radius 2, 선 2dp`,`iOS에 없음. 목록 체크마크 액세서리. macOS 14pt`,`20, radius 4, 선 1px. 본문 16과 나란히 놓았을 때 x-height에 맞춘 크기`],[`터치 영역`,`48dp 컨테이너`,`44pt`,`상자 단독은 20(인라인 문맥 전용), 목록은 CheckboxRow 44`],[`선택 색`,`primary`,`tintColor`,`action/secondary(ink). 선택은 강조가 아니라 상태라서 블루를 쓰지 않는다`],[`부분 선택`,`Indeterminate 대시`,`없음`,`Indeterminate 대시. 묶음의 머리 행에만`],[`오류 상태`,`error 색 상자`,`없음`,`없음. 오류는 행 아래 status/danger 메시지로`]])}`}}}},S={render:function(e){let[,t]=b();return(0,y.jsx)(p,{...e,onChange:n=>{e.onChange?.(n),t({checked:n,indeterminate:!1})}})}},C={name:`State x Interaction`,render:()=>(0,y.jsxs)(c,{children:[(0,y.jsxs)(o,{label:`Off`,children:[(0,y.jsx)(p,{label:`Off`,showLabel:!1}),(0,y.jsx)(p,{label:`Off hover`,showLabel:!1,interaction:`hover`}),(0,y.jsx)(p,{label:`Off pressed`,showLabel:!1,interaction:`pressed`})]}),(0,y.jsxs)(o,{label:`On`,children:[(0,y.jsx)(p,{label:`On`,showLabel:!1,checked:!0}),(0,y.jsx)(p,{label:`On hover`,showLabel:!1,checked:!0,interaction:`hover`}),(0,y.jsx)(p,{label:`On pressed`,showLabel:!1,checked:!0,interaction:`pressed`})]}),(0,y.jsxs)(o,{label:`Indeterminate`,children:[(0,y.jsx)(p,{label:`일부 선택`,showLabel:!1,indeterminate:!0}),(0,y.jsx)(p,{label:`일부 선택 hover`,showLabel:!1,indeterminate:!0,interaction:`hover`}),(0,y.jsx)(p,{label:`일부 선택 pressed`,showLabel:!1,indeterminate:!0,interaction:`pressed`})]}),(0,y.jsxs)(o,{label:`Disabled`,children:[(0,y.jsx)(p,{label:`비활성`,showLabel:!1,disabled:!0}),(0,y.jsx)(p,{label:`비활성 선택`,showLabel:!1,disabled:!0,checked:!0})]}),(0,y.jsxs)(o,{label:`Show label`,children:[(0,y.jsx)(p,{label:`라벨`}),(0,y.jsx)(p,{label:`라벨`,checked:!0})]})]})},w={name:`CheckboxRow 묶음`,decorators:[d],parameters:{docs:{description:{story:`머리 행이 Indeterminate를 쓰는 유일한 자리. 행 높이 44, 행 전체가 탭 영역.`}}},render:()=>(0,y.jsx)(_,{})},T=[`Playground`,`States`,`Rows`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}}))();export{S as Playground,w as Rows,C as States,T as __namedExportsOrder,x as default};