import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-iUPssvWC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{n as o,t as s}from"./Icon-Bkl1CWKM.js";import{n as c,t as l}from"./Overlay-Bm-9W3l9.js";import{a as u,r as d}from"./storyDecorators-DI9SAnnw.js";import{n as f,r as p,t as m}from"./storyHelpers-DodvrARx.js";import{i as h,n as g,r as _,t as v}from"./FilterButton-C2-jF2tR.js";import{n as y,t as b}from"./Header-DYHa86wx.js";import{n as x,t as S}from"./IconButton-Cdat5TiX.js";function C({children:e,selected:t=!1,onSelect:n,className:r}){return(0,w.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":t,onClick:n,className:a(`flex h-14 w-full items-center justify-between px-6 text-left text-body transition-colors select-none hover:bg-court-white`,t?`font-semibold text-ink`:`text-slate`,r),children:[e,(0,w.jsx)(s,{name:`check`,size:20,className:t?`text-ink`:`text-line-gray`})]})}var w,T=e((()=>{i(),o(),w=r(),C.__docgenInfo={description:``,methods:[],displayName:`FilterOption`,props:{children:{required:!0,tsType:{name:`string`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));function E({open:e,title:t,options:n,value:r,onChange:i,onClose:a,fixed:o=!0}){let s=(0,D.useId)(),c=n.map(e=>typeof e==`string`?{value:e,label:e}:e);return(0,O.jsx)(l,{open:e,onClose:a,fixed:o,align:`bottom`,children:(0,O.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":s,className:`flex w-[402px] flex-col rounded-t-xl bg-pure-white pb-[34px] shadow-float-sm`,children:[(0,O.jsx)(`div`,{className:`flex h-5 items-center justify-center`,children:(0,O.jsx)(`span`,{"aria-hidden":`true`,className:`h-1 w-9 rounded-bar bg-line-gray`})}),(0,O.jsx)(`h2`,{id:s,className:`px-6 pt-1 pb-2 text-app-heading font-semibold tracking-[-0.02em] text-ink`,children:t}),(0,O.jsx)(`div`,{role:`listbox`,"aria-labelledby":s,className:`flex flex-col`,children:c.map(e=>(0,O.jsx)(C,{selected:e.value===r,onSelect:()=>{i(e.value),a()},children:e.label},e.value))})]})})}var D,O,k=e((()=>{D=t(n(),1),T(),c(),O=r(),E.__docgenInfo={description:``,methods:[],displayName:`FilterSheet`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},title:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`FilterSheetOption<T> | T`,elements:[{name:`signature`,type:`object`,raw:`{ value: T; label: string }`,signature:{properties:[{key:`value`,value:{name:`T`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}},{name:`T`}]}],raw:`Array<FilterSheetOption<T> | T>`},description:``},value:{required:!0,tsType:{name:`T`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: T) => void`,signature:{arguments:[{type:{name:`T`},name:`value`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},fixed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}}));function A(){let[e,t]=(0,M.useState)(!0),[n,r]=(0,M.useState)(`9월`);return(0,N.jsxs)(`div`,{className:`relative h-[640px] w-[402px] overflow-hidden bg-court-white`,children:[(0,N.jsx)(b,{title:`경기`,left:(0,N.jsx)(S,{icon:`chevron-left`,label:`뒤로`})}),(0,N.jsxs)(`div`,{className:`flex gap-2 px-6 py-3`,children:[(0,N.jsx)(_,{open:e,onClick:()=>t(!0),children:n}),(0,N.jsx)(_,{children:`전체`})]}),(0,N.jsx)(E,{open:e,fixed:!1,title:`월 선택`,options:[`전체`,`9월`,`8월`,`7월`],value:n,onChange:r,onClose:()=>t(!1)})]})}function j(){let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(`FC 목요일`);return(0,N.jsxs)(`div`,{className:`relative h-[480px] w-[402px] overflow-hidden bg-court-white`,children:[(0,N.jsx)(b,{right:(0,N.jsx)(S,{icon:`plus`,label:`추가`}),children:(0,N.jsx)(v,{open:e,onClick:()=>t(!0),children:n})}),(0,N.jsx)(E,{open:e,fixed:!1,title:`동호회`,options:[`FC 목요일`,`주말 리그`,`직장인 풋살`],value:n,onChange:r,onClose:()=>t(!1)})]})}var M,N,P,F,I,L,R,z,B,V;e((()=>{M=t(n(),1),h(),g(),T(),k(),y(),x(),p(),d(),N=r(),{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:`Components/Filter`,component:_,args:{children:`9월`,open:!1},argTypes:{open:{control:`boolean`,description:`Figma State = Open. 쉐브론 반전`},children:{control:`text`,description:`Figma Label. 현재 값`},onClick:{action:`click`}},parameters:{docs:{description:{component:`필터 4종. [FilterChip 126:1215](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=126-1215), [FilterButton 112:1120](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=112-1120), [FilterOption 112:1137](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=112-1137), [FilterSheet 112:1138](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=112-1138).

- **FilterChip.** 높이 36 bg/subtle radius 4, 좌우 패딩 12, 라벨 body/label 14 600 + 쉐브론 10x8. 목록 위 필터 바.
- **FilterButton.** 라벨 body/regular 600 16 + 쉐브론 12x9, 높이 44, 배경 없음. 헤더 제목 슬롯.
- **FilterOption.** 높이 56 body/regular. Selected는 ink + 체크 ink, Default는 text/secondary + 체크 hairline 색.
- **FilterSheet.** 폭 402 바텀시트. 핸들 36x4, 제목 heading/lg 24, 옵션 목록, 상단 radius 16, float/sm, 스크림. 단일 선택이라 고르면 닫힌다.

**코드.** 트리거 둘은 aria-expanded + aria-haspopup="listbox", 시트는 role="dialog" 안에 role="listbox" > option.

### 플랫폼 참고

${u([[`트리거(칩)`,`Filter chip 32dp radius 8 outline, 선택 시 체크 + secondary-container. 드롭다운은 trailing arrow`,`칩 없음. Pull-down 메뉴 버튼(라벨 + chevron.down)`,`FilterChip 36, radius 4, bg/subtle, 항상 현재 값 + 쉐브론. 선택 여부가 아니라 현재 값을 보여주는 M3 dropdown chip 계열`],[`트리거(헤더)`,`Exposed dropdown menu 또는 Top app bar의 메뉴`,`iOS 16 내비게이션 바 제목 메뉴(제목 + chevron)`,`FilterButton. 헤더 제목 자리에 현재 값 + 쉐브론. HIG 제목 메뉴 원형`],[`선택 UI`,`Menu(드롭다운, 8dp radius, elevation 2) 또는 Modal bottom sheet`,`Pull-down 메뉴(체크마크로 현재 값 표시) 또는 Sheet`,`바텀시트 하나로 통일. 폰 폭에서 드롭다운 메뉴는 손가락 목표가 작아서`],[`시트 모양`,`Modal bottom sheet radius 28 상단, 드래그 핸들 32x4, 스크림`,`Sheet 디텐트(medium / large), 그래버 36x5, 시스템 모서리`,`상단 radius 16, 핸들 36x4(HIG 크기, M3 두께), 스크림 ink 40%. 디텐트 없음, 내용 높이`],[`옵션 행`,`List item 56 + Radio button`,`메뉴 행 44 + 체크마크`,`56(M3 높이) + 체크마크(HIG 표시). 라디오 원 대신 체크`],[`다중 선택`,`Filter chip 여러 개 토글`,`메뉴 다중 체크`,`없음. 다중은 Checkbox 목록으로`]])}`}}}},I={name:`FilterChip`,render:function(e){let[,t]=P();return(0,N.jsx)(_,{...e,onClick:n=>{e.onClick?.(n),t({open:!e.open})}})}},L={name:`트리거 상태`,render:()=>(0,N.jsxs)(m,{children:[(0,N.jsxs)(f,{label:`FilterChip`,children:[(0,N.jsx)(_,{children:`9월`}),(0,N.jsx)(_,{open:!0,children:`9월`})]}),(0,N.jsxs)(f,{label:`FilterButton`,children:[(0,N.jsx)(v,{children:`FC 목요일`}),(0,N.jsx)(v,{open:!0,children:`FC 목요일`})]})]})},R={name:`FilterOption`,decorators:[e=>(0,N.jsx)(`div`,{className:`w-[402px] bg-pure-white py-2`,children:(0,N.jsx)(e,{})})],render:()=>(0,N.jsxs)(`div`,{role:`listbox`,"aria-label":`예시`,children:[(0,N.jsx)(C,{selected:!0,children:`전체`}),(0,N.jsx)(C,{children:`홈`}),(0,N.jsx)(C,{children:`어웨이`})]})},z={name:`FilterSheet 열기`,render:()=>(0,N.jsx)(A,{})},B={name:`헤더 제목 메뉴`,render:()=>(0,N.jsx)(j,{})},V=[`Chip`,`Triggers`,`Options`,`Sheet`,`InHeader`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'FilterChip',
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <FilterChip {...args} onClick={e => {
      args.onClick?.(e);
      setArgs({
        open: !args.open
      });
    }} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '트리거 상태',
  render: () => <Matrix>
      <MatrixRow label="FilterChip">
        <FilterChip>9월</FilterChip>
        <FilterChip open>9월</FilterChip>
      </MatrixRow>
      <MatrixRow label="FilterButton">
        <FilterButton>FC 목요일</FilterButton>
        <FilterButton open>FC 목요일</FilterButton>
      </MatrixRow>
    </Matrix>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'FilterOption',
  decorators: [Story => <div className="w-[402px] bg-pure-white py-2"><Story /></div>],
  render: () => <div role="listbox" aria-label="예시">
      <FilterOption selected>전체</FilterOption>
      <FilterOption>홈</FilterOption>
      <FilterOption>어웨이</FilterOption>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'FilterSheet 열기',
  render: () => <SheetDemo />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '헤더 제목 메뉴',
  render: () => <HeaderDemo />
}`,...B.parameters?.docs?.source}}}}))();export{I as Chip,B as InHeader,R as Options,z as Sheet,L as Triggers,V as __namedExportsOrder,F as default};