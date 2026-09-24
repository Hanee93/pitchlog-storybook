import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{n as o,t as s}from"./Icon-B0WhaZnM.js";import{a as c,r as l,t as u}from"./storyDecorators-CxjbOeQx.js";function d({value:e,onChange:t,placeholder:n=`검색`,label:r=`검색`,disabled:i,focused:o,className:c}){let l=(0,f.useId)();return(0,p.jsxs)(`div`,{"data-focused":o||void 0,className:a(`flex h-12 w-full items-center gap-2 rounded-sm border border-transparent bg-court-white px-4 transition-colors focus-within:border-ink data-[focused]:border-ink`,c),children:[(0,p.jsx)(s,{name:`search`,size:20,className:`text-slate`}),(0,p.jsx)(`input`,{id:l,type:`search`,role:`searchbox`,"aria-label":r,value:e,placeholder:n,disabled:i,onChange:e=>t(e.target.value),className:`h-full min-w-0 flex-1 bg-transparent text-body text-ink caret-ink outline-none placeholder:text-mist disabled:text-mist [&::-webkit-search-cancel-button]:hidden`}),e.length>0&&!i&&(0,p.jsx)(`button`,{type:`button`,"aria-label":`지우기`,onClick:()=>t(``),className:`-mr-2 flex size-8 shrink-0 items-center justify-center rounded-sm text-slate hover:text-ink`,children:(0,p.jsx)(s,{name:`x`,size:16})})]})}var f,p,m=e((()=>{f=t(n(),1),i(),o(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`SearchField`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'검색'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`스크린 리더가 읽는 이름. 기본 '검색'`,defaultValue:{value:`'검색'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},focused:{required:!1,tsType:{name:`boolean`},description:`문서와 시각 회귀용 포커스 상태`},className:{required:!1,tsType:{name:`string`},description:``}}}})),h,g,_,v,y,b,x;e((()=>{m(),l(),h=r(),{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/SearchField`,component:d,decorators:[u],args:{value:``,placeholder:`선수 이름`,onChange:_()},argTypes:{value:{control:`text`,description:`Figma Value`},focused:{control:`boolean`,description:`Figma State = Focused 고정`},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[Figma 126:1208](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=126-1208). 354x48 bg/subtle radius 4. 검색 아이콘 20 text/secondary, 플레이스홀더 text/tertiary. Focused만 border/strong 1px, Filled는 지우기 아이콘 16.

**코드.** input[type=search]에 role="searchbox". 브라우저 기본 지우기 버튼은 숨기고 시스템의 x 아이콘을 쓴다.

### 플랫폼 참고

${c([[`형태`,`Search bar 56dp, 필(full radius), surface-container-high`,`UISearchBar 36pt, radius 10, tertiarySystemFill`,`48, radius 4, bg/subtle. 높이는 FormRow 값 칸과 같은 48로 통일`],[`아이콘`,`앞 24dp 검색, 뒤 아바타나 마이크`,`앞 검색(회색), 뒤 지우기(회색 원 x)`,`앞 20 검색 text/secondary, 뒤 16 x. 원 배경 없음`],[`포커스`,`검색 뷰(전체 화면)로 확장`,`취소 버튼이 오른쪽에 나타남`,`선만 ink 1px. 확장도 취소 버튼도 없다. 목록 위 인라인 필터 용도라 화면을 바꾸지 않는다`],[`플레이스홀더`,`on-surface-variant`,`placeholderText`,`text/tertiary(mist). 4.5:1 미만이라 읽어야 하는 정보는 넣지 않는다`]])}`}}}},y={render:function(e){let[,t]=g();return(0,h.jsx)(d,{...e,onChange:n=>{e.onChange(n),t({value:n})}})}},b={name:`Empty / Focused / Filled`,render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(d,{value:``,onChange:()=>{},placeholder:`선수 이름`}),(0,h.jsx)(d,{value:``,onChange:()=>{},placeholder:`선수 이름`,focused:!0}),(0,h.jsx)(d,{value:`김민`,onChange:()=>{},placeholder:`선수 이름`}),(0,h.jsx)(d,{value:``,onChange:()=>{},placeholder:`선수 이름`,disabled:!0})]})},x=[`Playground`,`States`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <SearchField {...args} onChange={value => {
      args.onChange(value);
      setArgs({
        value
      });
    }} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Empty / Focused / Filled',
  render: () => <div className="flex flex-col gap-4">
      <SearchField value="" onChange={() => {}} placeholder="선수 이름" />
      <SearchField value="" onChange={() => {}} placeholder="선수 이름" focused />
      <SearchField value="김민" onChange={() => {}} placeholder="선수 이름" />
      <SearchField value="" onChange={() => {}} placeholder="선수 이름" disabled />
    </div>
}`,...b.parameters?.docs?.source}}}}))();export{y as Playground,b as States,x as __namedExportsOrder,v as default};