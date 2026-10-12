import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./cx-B8S8_Vys.js";import{a as i,r as a,t as o}from"./storyDecorators-DI9SAnnw.js";import{r as s,t as c}from"./storyHelpers-DodvrARx.js";import{n as l,t as u}from"./TileGroup-ikuGLWES.js";function d({segments:e,legend:t=!0,className:n}){let i=e.reduce((e,t)=>e+t.value,0)||1,a=e=>Math.round(e/i*100);return(0,f.jsxs)(`div`,{className:r(`flex w-full flex-col gap-4`,n),children:[(0,f.jsx)(`div`,{className:`flex h-3 w-full overflow-hidden rounded-sm`,role:`img`,"aria-label":e.map(e=>`${e.label} ${a(e.value)}%`).join(`, `),children:e.map(e=>(0,f.jsx)(`span`,{className:r(`h-full`,p[e.tone]),style:{flexGrow:e.value,flexBasis:0}},e.label))}),t&&(0,f.jsx)(`dl`,{className:`grid w-full`,style:{gridTemplateColumns:`repeat(${e.length}, minmax(0, 1fr))`},children:e.map(e=>(0,f.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-0.5`,children:[(0,f.jsxs)(`dt`,{className:`flex items-center gap-1.5 text-caption text-slate`,children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,className:r(`size-2 shrink-0 rounded-bar`,p[e.tone])}),(0,f.jsx)(`span`,{className:`truncate`,children:e.label})]}),(0,f.jsx)(`dd`,{className:`font-numeral text-app-subheading font-semibold text-ink`,children:e.display??`${a(e.value)}%`}),e.sub&&(0,f.jsx)(`dd`,{className:`text-caption text-slate`,children:e.sub})]},e.label))})]})}var f,p,m=e((()=>{n(),f=t(),p={ink:`bg-ink`,accent:`bg-signal-blue`,tint:`bg-sky-tint`,mist:`bg-mist`,hairline:`bg-line-gray`},d.__docgenInfo={description:``,methods:[],displayName:`RatioBar`,props:{segments:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  value: number
  /** 값 표시. 없으면 비율 %를 쓴다 */
  display?: string
  sub?: string
  tone: 'ink' | 'accent' | 'tint' | 'mist' | 'hairline'
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}},{key:`display`,value:{name:`string`,required:!1},description:`값 표시. 없으면 비율 %를 쓴다`},{key:`sub`,value:{name:`string`,required:!1}},{key:`tone`,value:{name:`union`,raw:`'ink' | 'accent' | 'tint' | 'mist' | 'hairline'`,elements:[{name:`literal`,value:`'ink'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'tint'`},{name:`literal`,value:`'mist'`},{name:`literal`,value:`'hairline'`}],required:!0}}]}}],raw:`RatioSegment[]`},description:``},legend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),h,g,_,v,y,b;e((()=>{l(),m(),s(),a(),h=t(),g={title:`Patterns/Tiles`,component:u,decorators:[o],args:{items:[{label:`뛴 거리`,value:`4.8`,unit:`km`},{label:`스프린트`,value:`18`,unit:`회`},{label:`활동 시간`,value:`92`,unit:`분`}],split:!1},argTypes:{split:{control:`boolean`,description:`칸마다 상자. 회비 납부 완료 / 미납`},items:{control:!1}},parameters:{docs:{description:{component:`[Figma 디자인 시스템 페이지 05 패턴](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72). 숫자 묶음 두 가지.

- **TileGroup.** 기본은 bg/subtle radius 8 상자 하나에 2~3칸 균등, 가운데 정렬. 값 heading/sub 20 600 Inter 업라이트 + 라벨 caption. 홈 '뛴 거리 | 스프린트 | 활동 시간', 멤버 상세 '출석 | 골 | 평균 평점'. split은 칸마다 상자(간격 8, 왼쪽 정렬, 값 24, 부제)이고 tone으로 status/danger-tint를 쓴다(회비 미납). 지난 경기 대비 비교 줄이 필요하면 StatTile.
- **RatioBar.** 354x12 비율 막대 + 범례. 구간 색은 뉴트럴(ink, mist, hairline)과 기록 층(accent, tint)만. 선수 기록 상세 '속도 존', 경기 상세 전반/후반.

**숫자 서체.** 값은 Inter 업라이트(정지된 총계). 순간값(최고 속도)은 Metric 이탤릭으로 따로 둔다. 한글 단위는 Pretendard.

### 플랫폼 참고

${i([[`숫자 묶음`,`Card 안 Text pairs, 정해진 패턴 없음`,`정해진 패턴 없음. Health의 요약 타일`,`TileGroup. 상자 하나에 균등 칸. 칸마다 상자를 나누는 것은 상태가 다를 때(납부 / 미납)만`],[`비율 막대`,`Linear progress indicator 4dp, 단일 값`,`ProgressView 4pt, 단일 값`,`12 높이 다중 구간. 진행률이 아니라 구성비라 두껍게 그리고 범례를 붙인다`],[`강조 색`,`Primary / tertiary 컨테이너`,`tintColor`,`뉴트럴 3단계 + 기록 블루 2단계. 구간 5개까지. 유채색 한 가지 규칙`],[`정렬`,`왼쪽`,`왼쪽`,`한 상자 안은 가운데(칸이 좁아 라벨과 값이 세로 축을 공유), 상자가 나뉘면 왼쪽`]])}`}}}},_={},v={name:`TileGroup split (회비)`,args:{split:!0,items:[{label:`납부 완료`,value:`11`,unit:`/ 14명`,sub:`330,000원`},{label:`미납`,value:`3`,unit:`명`,sub:`90,000원`,tone:`danger`}]}},y={name:`RatioBar`,render:()=>(0,h.jsxs)(c,{children:[(0,h.jsx)(d,{segments:[{label:`경기`,value:41,tone:`tint`,sub:`38분`},{label:`조깅`,value:28,tone:`accent`,sub:`26분`},{label:`러닝`,value:22,tone:`ink`,sub:`20분`},{label:`스프린트`,value:9,tone:`mist`,sub:`8분`}]}),(0,h.jsx)(d,{segments:[{label:`전반`,value:2.6,display:`2.6km`,tone:`accent`},{label:`후반`,value:2.2,display:`2.2km`,tone:`tint`}]})]})},b=[`Playground`,`Split`,`Ratio`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'TileGroup split (회비)',
  args: {
    split: true,
    items: [{
      label: '납부 완료',
      value: '11',
      unit: '/ 14명',
      sub: '330,000원'
    }, {
      label: '미납',
      value: '3',
      unit: '명',
      sub: '90,000원',
      tone: 'danger'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'RatioBar',
  render: () => <Matrix>
      <RatioBar segments={[{
      label: '경기',
      value: 41,
      tone: 'tint',
      sub: '38분'
    }, {
      label: '조깅',
      value: 28,
      tone: 'accent',
      sub: '26분'
    }, {
      label: '러닝',
      value: 22,
      tone: 'ink',
      sub: '20분'
    }, {
      label: '스프린트',
      value: 9,
      tone: 'mist',
      sub: '8분'
    }]} />
      <RatioBar segments={[{
      label: '전반',
      value: 2.6,
      display: '2.6km',
      tone: 'accent'
    }, {
      label: '후반',
      value: 2.2,
      display: '2.2km',
      tone: 'tint'
    }]} />
    </Matrix>
}`,...y.parameters?.docs?.source}}}}))();export{_ as Playground,y as Ratio,v as Split,b as __namedExportsOrder,g as default};