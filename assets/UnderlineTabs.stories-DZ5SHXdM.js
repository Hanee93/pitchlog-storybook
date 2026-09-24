import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{a as o,n as s,r as c}from"./storyDecorators-CxjbOeQx.js";function l({tabs:e,value:t,onChange:n,label:r,className:i}){return(0,d.jsx)(`div`,{role:`tablist`,"aria-label":r,className:a(`flex h-(--size-segment-lg) w-full gap-6 border-b border-line-gray bg-pure-white px-6`,i),children:e.map((r,i)=>(0,d.jsx)(u,{active:r.value===t,label:r.label,count:r.count,onClick:()=>n(r.value),onKeyDown:t=>{t.key===`ArrowRight`?(t.preventDefault(),n(e[(i+1)%e.length].value)):t.key===`ArrowLeft`&&(t.preventDefault(),n(e[(i-1+e.length)%e.length].value))}},r.value))})}function u({active:e=!1,label:t,count:n,onClick:r,onKeyDown:i}){return(0,d.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e,tabIndex:e?0:-1,onClick:r,onKeyDown:i,className:a(`-mb-px flex h-full flex-col justify-between pt-3 whitespace-nowrap select-none`,e?`text-app-heading-sm font-semibold text-ink`:`text-body text-slate hover:text-ink`),children:[(0,d.jsxs)(`span`,{className:`flex items-baseline gap-1`,children:[t,n!==void 0&&(0,d.jsx)(`span`,{className:`text-body-sm text-slate`,children:n})]}),(0,d.jsx)(`span`,{"aria-hidden":`true`,className:a(`h-0.5 w-full rounded-none`,e?`bg-ink`:`bg-transparent`)})]})}var d,f=e((()=>{i(),d=r(),l.__docgenInfo={description:``,methods:[],displayName:`UnderlineTabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: T; label: string; count?: number }`,signature:{properties:[{key:`value`,value:{name:`T`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!1}}]}}],raw:`Array<UnderlineTabOption<T>>`},description:``},value:{required:!0,tsType:{name:`T`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: T) => void`,signature:{arguments:[{type:{name:`T`},name:`value`}],return:{name:`void`}}},description:``},label:{required:!0,tsType:{name:`string`},description:`스크린 리더가 읽는 그룹 이름`},className:{required:!1,tsType:{name:`string`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`UnderlineTab`,props:{active:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:``},count:{required:!1,tsType:{name:`number`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onKeyDown:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.KeyboardEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactKeyboardEvent`,raw:`React.KeyboardEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`e`}],return:{name:`void`}}},description:``}}}}));function p(e){let[t,n]=(0,m.useState)(e.tabs[0].value);return(0,h.jsx)(l,{...e,value:t,onChange:n})}var m,h,g,_,v,y,b,x;e((()=>{m=t(n(),1),f(),c(),h=r(),{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/UnderlineTabs`,component:l,decorators:[s],globals:{backgrounds:{value:`canvas`}},args:{tabs:[{value:`schedule`,label:`일정`,count:3},{value:`dues`,label:`회비`},{value:`members`,label:`멤버`,count:14}],value:`schedule`,label:`동호회 섹션`,onChange:_()},argTypes:{onChange:{action:`change`}},parameters:{docs:{description:{component:`[UnderlineTabs 262:799](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=262-799), [UnderlineTab 262:750](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=262-750). 폭 402 풀블리드, 높이 48, 좌우 패딩 24, 탭 사이 24. 바닥 hairline 위를 Active 탭의 2px ink 밑줄이 덮는다. Active는 heading/sm(16, 600) text/primary, Default는 body/regular text/secondary. Count는 4 간격 베이스라인 정렬.

**변경 이력.** 2026-09-24 비활성 라벨을 text/tertiary(mist, 2.8:1)에서 text/secondary(slate, 5.5:1)로 바꿨다. axe 대비 검사 결과.

**용도.** 목록 종류를 바꾸는 상위 탭. 버튼처럼 보여야 하면 SegmentedControl, 화면 하단 이동은 TabBar.

**코드.** role="tablist" / "tab" + aria-selected, 방향키 이동. 패널 연결은 화면에서 aria-controls로.

### 플랫폼 참고

${o([[`원형`,`Tabs. Primary(아이콘 가능, 3dp 인디케이터) / Secondary(텍스트, 2dp 인디케이터). 높이 48dp`,`iOS 네이티브에 없음. 상단 전환은 Segmented control이나 Page control`,`M3 Secondary tabs 계열. 높이 48, 2px 밑줄. 상단 텍스트 탭이 필요해 M3 형식을 빌리되 색은 ink`],[`인디케이터 색`,`primary`,`해당 없음`,`border/strong(ink). 활성 표시는 강조가 아니라 위치라 블루 금지`],[`활성 라벨`,`primary 색, 같은 굵기`,`해당 없음`,`색은 ink, 굵기 600으로 올림. 색 대신 굵기로 구분해 유채색 규칙을 지킨다. 비활성은 slate(5.5:1), M3 on-surface-variant와 같은 4.5:1 이상 기준`],[`정렬`,`고정 폭 균등 또는 스크롤 가능`,`해당 없음`,`내용 폭, 왼쪽 정렬, 간격 24. 4개까지. 스크롤 탭은 두지 않는다`],[`카운트`,`뱃지(원형, 숫자)`,`해당 없음`,`라벨 옆 텍스트 14, 베이스라인 정렬. 뱃지 원형은 라이브 점과 아바타 전용`]])}`}}}},y={render:function(e){let[,t]=g();return(0,h.jsx)(l,{...e,onChange:n=>{e.onChange(n),t({value:n})}})}},b={name:`Count 2~4`,render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,h.jsx)(p,{label:`2`,tabs:[{value:`a`,label:`예정`},{value:`b`,label:`지난`}]}),(0,h.jsx)(p,{label:`3`,tabs:[{value:`a`,label:`일정`,count:3},{value:`b`,label:`회비`},{value:`c`,label:`멤버`,count:14}]}),(0,h.jsx)(p,{label:`4`,tabs:[{value:`a`,label:`전체`},{value:`b`,label:`골`},{value:`c`,label:`스프린트`},{value:`d`,label:`세이브`}]})]})},x=[`Playground`,`Counts`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <UnderlineTabs {...args} onChange={value => {
      args.onChange(value);
      setArgs({
        value
      });
    }} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Count 2~4',
  render: () => <div className="flex flex-col gap-6">
      <Demo label="2" tabs={[{
      value: 'a',
      label: '예정'
    }, {
      value: 'b',
      label: '지난'
    }]} />
      <Demo label="3" tabs={[{
      value: 'a',
      label: '일정',
      count: 3
    }, {
      value: 'b',
      label: '회비'
    }, {
      value: 'c',
      label: '멤버',
      count: 14
    }]} />
      <Demo label="4" tabs={[{
      value: 'a',
      label: '전체'
    }, {
      value: 'b',
      label: '골'
    }, {
      value: 'c',
      label: '스프린트'
    }, {
      value: 'd',
      label: '세이브'
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}}}))();export{b as Counts,y as Playground,x as __namedExportsOrder,v as default};