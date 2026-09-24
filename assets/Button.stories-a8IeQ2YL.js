import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{i as n,r}from"./Icon-B0WhaZnM.js";import{n as i,t as a}from"./Button-CD9hxfBo.js";import{a as o,r as s,t as c}from"./storyDecorators-CxjbOeQx.js";import{n as l,r as u,t as d}from"./storyHelpers-DodvrARx.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{i(),n(),u(),s(),f=t(),p={title:`Components/Button`,component:a,decorators:[c],globals:{backgrounds:{value:`canvas`}},args:{children:`저장`,variant:`primary`,size:`lg`},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`secondary`,`outline`,`text`],description:`Figma Style`},size:{control:`inline-radio`,options:[`lg`,`md`,`sm`],description:`Figma Size. Large 52, Medium 44, Small 36`},icon:{control:`select`,options:[void 0,...r],description:`Figma Show icon + Icon`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`],description:`Figma State 중 Hover, Pressed를 고정`},disabled:{control:`boolean`,description:`Figma State = Disabled`},fullWidth:{control:`boolean`},children:{control:`text`,description:`Figma Label`},onClick:{action:`click`}},parameters:{docs:{description:{component:`[Figma 127:1572](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=127-1572). Style 4 x Size 3 x State 4 = 48 변형.

**규칙.** Primary(action/primary, 코발트 블루 + 흰 라벨)는 화면당 한 곳. 알럿 버튼은 항상 Secondary(ink). Outline은 hairline 선, Text는 배경 없이 라벨만. 폭은 Large와 Medium이 354 풀폭, Small은 내용 폭. radius 4, 필 금지.

**상태.** Hover는 한 단계 어둡게(primary-hover 700, secondary-hover ink-dark, Outline은 선을 ink로, Text는 라벨을 ink로), Pressed는 두 단계(800, pure-black, Outline과 Text는 bg/subtle 채움). Disabled는 bg/subtle + text/tertiary.

### 플랫폼 참고

${o([[`기본 높이`,`Common 40dp. Expressive 사이즈 XS 32 / S 40 / M 56 / L 96 / XL 136`,`Filled 50pt(large), Bordered 34pt. iOS 26은 캡슐형 Liquid Glass`,`Large 52 / Medium 44 / Small 36. 한 손 엄지 도달을 위해 주 CTA를 HIG보다 2 크게, 보조는 HIG 최소 터치 44에 맞춤`],[`모양`,`Full(필)이 기본. Expressive는 round와 square 토글`,`캡슐이 기본`,`radius 4 고정. 필 금지 규칙. 데이터 앱의 직선 격자와 맞추기 위한 결정`],[`위계`,`Filled > Tonal > Elevated > Outlined > Text 5단계`,`Filled > Tinted(gray) > Bordered > Plain 4단계`,`Primary > Secondary > Outline > Text 4단계. Tonal(옅은 채움)은 두지 않는다. 컬러 층 규칙(섹션당 유채색 하나)과 충돌`],[`강조 색`,`Primary 컨테이너 색 하나`,`tintColor(systemBlue) 하나`,`CTA 블루는 화면당 하나. 나머지 주요 액션은 ink. 블루가 기록(data/accent)과 겸용이라 남용을 막는다`],[`상태 표현`,`State layer 오버레이 hover 8% / focus 10% / pressed 10%`,`투명도 변화(pressed 0.2 alpha 하이라이트)`,`명시적 hover, pressed 토큰(700, 800). 오버레이 대신 값을 고정해 Figma 변수와 코드가 1:1`],[`아이콘`,`18dp, 라벨 앞 8dp`,`SF Symbol, 라벨 앞`,`20(Small 16), 간격 8, 라벨 앞. Lucide`],[`비활성`,`38% 불투명도 on-surface`,`0.3 알파 tint`,`bg/subtle + text/tertiary 채움. 투명도 대신 토큰 값`]])}`}}}},m={},h=[`primary`,`secondary`,`outline`,`text`],g={primary:`Primary`,secondary:`Secondary`,outline:`Outline`,text:`Text`},_={name:`Style x State`,globals:{backgrounds:{value:`surface`}},decorators:[e=>(0,f.jsx)(`div`,{className:`w-[560px]`,children:(0,f.jsx)(e,{})})],render:()=>(0,f.jsx)(d,{children:h.map(e=>(0,f.jsxs)(l,{label:g[e],children:[(0,f.jsx)(a,{variant:e,size:`md`,fullWidth:!1,children:`Default`}),(0,f.jsx)(a,{variant:e,size:`md`,fullWidth:!1,interaction:`hover`,children:`Hover`}),(0,f.jsx)(a,{variant:e,size:`md`,fullWidth:!1,interaction:`pressed`,children:`Pressed`}),(0,f.jsx)(a,{variant:e,size:`md`,fullWidth:!1,disabled:!0,children:`Disabled`})]},e))})},v={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,f.jsx)(a,{variant:`primary`,size:`lg`,children:`Large 52`}),(0,f.jsx)(a,{variant:`secondary`,size:`md`,children:`Medium 44`}),(0,f.jsx)(a,{variant:`outline`,size:`sm`,children:`Small 36`})]})},y={name:`With icon`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,f.jsx)(a,{variant:`primary`,size:`lg`,icon:`plus`,children:`경기 추가`}),(0,f.jsx)(a,{variant:`outline`,size:`sm`,icon:`share`,children:`공유`})]})},b={name:`알럿 버튼 쌍`,parameters:{docs:{description:{story:`알럿의 확인 버튼은 Secondary(ink). CTA 블루는 알럿에 쓰지 않는다. 취소 Outline + 확인 Secondary, 같은 폭, 간격 16.`}}},render:()=>(0,f.jsxs)(`div`,{className:`flex gap-4`,children:[(0,f.jsx)(a,{variant:`outline`,size:`md`,children:`취소`}),(0,f.jsx)(a,{variant:`secondary`,size:`md`,children:`확인`})]})},x=[`Playground`,`Styles`,`Sizes`,`WithIcon`,`AlertPair`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Style x State',
  globals: {
    backgrounds: {
      value: 'surface'
    }
  },
  decorators: [Story => <div className="w-[560px]"><Story /></div>],
  render: () => <Matrix>
      {variants.map(v => <MatrixRow key={v} label={label[v]}>
          <Button variant={v} size="md" fullWidth={false}>Default</Button>
          <Button variant={v} size="md" fullWidth={false} interaction="hover">Hover</Button>
          <Button variant={v} size="md" fullWidth={false} interaction="pressed">Pressed</Button>
          <Button variant={v} size="md" fullWidth={false} disabled>Disabled</Button>
        </MatrixRow>)}
    </Matrix>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-3">
      <Button variant="primary" size="lg">Large 52</Button>
      <Button variant="secondary" size="md">Medium 44</Button>
      <Button variant="outline" size="sm">Small 36</Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  render: () => <div className="flex flex-col items-start gap-3">
      <Button variant="primary" size="lg" icon="plus">경기 추가</Button>
      <Button variant="outline" size="sm" icon="share">공유</Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '알럿 버튼 쌍',
  parameters: {
    docs: {
      description: {
        story: '알럿의 확인 버튼은 Secondary(ink). CTA 블루는 알럿에 쓰지 않는다. 취소 Outline + 확인 Secondary, 같은 폭, 간격 16.'
      }
    }
  },
  render: () => <div className="flex gap-4">
      <Button variant="outline" size="md">취소</Button>
      <Button variant="secondary" size="md">확인</Button>
    </div>
}`,...b.parameters?.docs?.source}}}}))();export{b as AlertPair,m as Playground,v as Sizes,_ as Styles,y as WithIcon,x as __namedExportsOrder,p as default};