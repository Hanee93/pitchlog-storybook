import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{a as o,r as s,t as c}from"./storyDecorators-CxjbOeQx.js";import{n as l,r as u,t as d}from"./storyHelpers-DodvrARx.js";function f({size:e=`md`,selected:t=!1,interaction:n,className:r,type:i=`button`,...o}){return(0,p.jsx)(`button`,{type:i,role:`radio`,"aria-checked":t,"data-interaction":n,className:a(`inline-flex shrink-0 items-center justify-center rounded-sm border font-semibold transition-colors select-none disabled:pointer-events-none`,e===`md`?`h-(--size-button-md) min-w-[52px] px-3 text-app-heading-sm`:`h-(--size-button-sm) min-w-11 px-2.5 text-body-sm`,t?`border-ink bg-ink text-pure-white hover:border-ink-dark hover:bg-ink-dark active:border-pure-black active:bg-pure-black`:`border-line-gray bg-pure-white text-ink hover:border-mist active:border-slate active:bg-court-white`,`disabled:border-transparent disabled:bg-court-white disabled:text-mist`,r),...o})}var p,m=e((()=>{i(),p=r(),f.__docgenInfo={description:``,methods:[],displayName:`RadioCell`,props:{size:{required:!1,tsType:{name:`union`,raw:`'md' | 'sm'`,elements:[{name:`literal`,value:`'md'`},{name:`literal`,value:`'sm'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},interaction:{required:!1,tsType:{name:`union`,raw:`'hover' | 'pressed'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'pressed'`}]},description:``},children:{required:!0,tsType:{name:`string`},description:``},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}}}));function h({options:e,value:t,onChange:n,columns:r,size:i=`md`,label:o,className:s}){let c=e.map(e=>typeof e==`string`?{value:e}:e),l=r??Math.min(c.length,6);return(0,g.jsx)(`div`,{role:`radiogroup`,"aria-label":o,className:a(`grid w-full gap-2`,s),style:{gridTemplateColumns:`repeat(${l}, minmax(0, 1fr))`},children:c.map(e=>(0,g.jsx)(f,{size:i,selected:t===e.value,disabled:e.disabled,tabIndex:t===e.value||t===null&&e===c[0]?0:-1,onClick:()=>n(e.value),onKeyDown:t=>{let r=c.filter(e=>!e.disabled),i=r.findIndex(t=>t.value===e.value);t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),n(r[(i+1)%r.length].value)):(t.key===`ArrowLeft`||t.key===`ArrowUp`)&&(t.preventDefault(),n(r[(i-1+r.length)%r.length].value))},className:`min-w-0`,children:e.label??e.value},e.value))})}var g,_=e((()=>{m(),i(),g=r(),h.__docgenInfo={description:``,methods:[],displayName:`RadioRow`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`RadioOption<T> | T`,elements:[{name:`signature`,type:`object`,raw:`{ value: T; label?: string; disabled?: boolean }`,signature:{properties:[{key:`value`,value:{name:`T`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},{name:`T`}]}],raw:`Array<RadioOption<T> | T>`},description:``},value:{required:!0,tsType:{name:`union`,raw:`T | null`,elements:[{name:`T`},{name:`null`}]},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: T) => void`,signature:{arguments:[{type:{name:`T`},name:`value`}],return:{name:`void`}}},description:``},columns:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`한 줄에 놓을 칸 수. 넘치면 다음 줄. 기본은 한 줄에 전부`},size:{required:!1,tsType:{name:`union`,raw:`'md' | 'sm'`,elements:[{name:`literal`,value:`'md'`},{name:`literal`,value:`'sm'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`스크린 리더가 읽는 그룹 이름`},className:{required:!1,tsType:{name:`string`},description:``}}}}));function v({count:e,size:t}){let[n,r]=(0,b.useState)(`1`),i=Array.from({length:e},(e,t)=>String(t+1));return(0,x.jsx)(h,{label:`${e}개 중 하나`,options:i,value:n,onChange:r,size:t})}function y(){let[e,t]=(0,b.useState)(`10`);return(0,x.jsx)(h,{label:`등번호`,options:Array.from({length:24},(e,t)=>({value:String(t+1),disabled:t===3||t===17})),value:e,onChange:t,columns:6})}var b,x,S,C,w,T,E,D,O;e((()=>{b=t(n(),1),m(),_(),u(),s(),x=r(),{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:`Components/RadioCell`,component:f,globals:{backgrounds:{value:`canvas`}},args:{children:`7`,size:`md`,selected:!1},argTypes:{size:{control:`inline-radio`,options:[`md`,`sm`],description:`md 52x44, sm 44x36`},selected:{control:`boolean`,description:`Figma State = Selected`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`],description:`Figma Interaction`},disabled:{control:`boolean`,description:`Figma State = Disabled`},children:{control:`text`,description:`Figma Label`}},parameters:{docs:{description:{component:`[RadioCell 204:1500](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=204-1500), [RadioRow 204:1601](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=204-1601). 택 1 격자 칸과 그 한 줄 묶음.

**용도.** 등번호, 포지션, 인원처럼 짧은 값 여러 개 중 하나를 고를 때. 여러 개를 고르면 Checkbox, 2~4개 화면 전환은 SegmentedControl, 시트 목록 단일 선택은 FilterOption.

**규칙.** Default는 bg/surface + hairline 선, Selected는 ink 채움 + 흰 라벨. Disabled는 bg/subtle 채움에 선 없음. 한 묶음에서 하나만 Selected. 6개를 넘으면 RadioRow를 세로로 쌓는다. 코드에서는 RadioRow가 role="radiogroup"이고 방향키로 이동한다.

### 플랫폼 참고

${o([[`대응 요소`,`Radio button 20dp 원형, 또는 Filter chip / Segmented button`,`없음. 목록의 체크마크 액세서리나 Picker`,`격자 칸. 원형 라디오 대신 값 자체를 누르는 칸. 등번호 24개를 한 화면에 담기 위한 결정`],[`선택 표시`,`원 안의 점, primary 색`,`체크마크, tintColor`,`ink 채움 반전. 체크마크 없이 채움만으로 구분`],[`높이`,`Chip 32dp, Segmented button 40dp`,`Segmented control 32pt`,`md 44(터치 최소), sm 36(인라인)`],[`키보드`,`방향키로 그룹 안 이동, Tab은 그룹 하나`,`해당 없음(터치)`,`방향키 이동, Tab은 그룹 하나. WAI-ARIA radiogroup 패턴`],[`모양`,`Chip radius 8, Segmented 필`,`캡슐`,`radius 4`]])}`}}}},w={render:function(e){let[,t]=S();return(0,x.jsx)(f,{...e,onClick:()=>t({selected:!e.selected})})}},T={name:`State x Interaction`,render:()=>(0,x.jsxs)(d,{children:[(0,x.jsxs)(l,{label:`Default`,children:[(0,x.jsx)(f,{children:`7`}),(0,x.jsx)(f,{interaction:`hover`,children:`7`}),(0,x.jsx)(f,{interaction:`pressed`,children:`7`})]}),(0,x.jsxs)(l,{label:`Selected`,children:[(0,x.jsx)(f,{selected:!0,children:`7`}),(0,x.jsx)(f,{selected:!0,interaction:`hover`,children:`7`}),(0,x.jsx)(f,{selected:!0,interaction:`pressed`,children:`7`})]}),(0,x.jsx)(l,{label:`Disabled`,children:(0,x.jsx)(f,{disabled:!0,children:`7`})}),(0,x.jsxs)(l,{label:`sm`,children:[(0,x.jsx)(f,{size:`sm`,children:`7`}),(0,x.jsx)(f,{size:`sm`,selected:!0,children:`7`}),(0,x.jsx)(f,{size:`sm`,disabled:!0,children:`7`})]})]})},E={name:`RadioRow 2~6`,decorators:[c],render:()=>(0,x.jsx)(`div`,{className:`flex flex-col gap-4`,children:[2,3,4,5,6].map(e=>(0,x.jsx)(v,{count:e,size:`md`},e))})},D={name:`등번호 격자 24`,decorators:[c],parameters:{docs:{description:{story:`RadioCell Example 204:1501. 6칸 행 4개, 이미 쓰는 번호는 Disabled.`}}},render:()=>(0,x.jsx)(y,{})},O=[`Playground`,`States`,`Row`,`Grid`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <RadioCell {...args} onClick={() => setArgs({
      selected: !args.selected
    })} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'State x Interaction',
  render: () => <Matrix>
      <MatrixRow label="Default">
        <RadioCell>7</RadioCell>
        <RadioCell interaction="hover">7</RadioCell>
        <RadioCell interaction="pressed">7</RadioCell>
      </MatrixRow>
      <MatrixRow label="Selected">
        <RadioCell selected>7</RadioCell>
        <RadioCell selected interaction="hover">7</RadioCell>
        <RadioCell selected interaction="pressed">7</RadioCell>
      </MatrixRow>
      <MatrixRow label="Disabled">
        <RadioCell disabled>7</RadioCell>
      </MatrixRow>
      <MatrixRow label="sm">
        <RadioCell size="sm">7</RadioCell>
        <RadioCell size="sm" selected>7</RadioCell>
        <RadioCell size="sm" disabled>7</RadioCell>
      </MatrixRow>
    </Matrix>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'RadioRow 2~6',
  decorators: [contentWidth],
  render: () => <div className="flex flex-col gap-4">
      {[2, 3, 4, 5, 6].map(n => <RowDemo key={n} count={n} size="md" />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '등번호 격자 24',
  decorators: [contentWidth],
  parameters: {
    docs: {
      description: {
        story: 'RadioCell Example 204:1501. 6칸 행 4개, 이미 쓰는 번호는 Disabled.'
      }
    }
  },
  render: () => <GridDemo />
}`,...D.parameters?.docs?.source}}}}))();export{D as Grid,w as Playground,E as Row,T as States,O as __namedExportsOrder,C as default};