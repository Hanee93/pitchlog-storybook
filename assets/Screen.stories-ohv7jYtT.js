import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./cx-B8S8_Vys.js";import{n as i,t as a}from"./Button-_q-8eFly.js";import{a as o,n as s,r as c}from"./storyDecorators-DI9SAnnw.js";import{n as l,t as u}from"./Header-DYHa86wx.js";import{n as d,t as f}from"./IconButton-Cdat5TiX.js";import{r as p,t as m}from"./SectionTitle-TRw2ZEAz.js";import{n as h,t as g}from"./KeyValueRow-DOu_AhJv.js";import{a as _,c as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./Section-B-4YTdr7.js";import{n as T,t as E}from"./TabBar-BW4rWHKQ.js";function D({children:e,className:t}){return(0,k.jsx)(`div`,{className:r(`w-full shrink-0 bg-pure-white px-6 pt-2 pb-8`,t),children:e})}function O({children:e,className:t}){return(0,k.jsx)(`div`,{className:r(`flex w-full gap-2 *:min-w-0 *:flex-1`,t),children:e})}var k,A=e((()=>{n(),k=t(),D.__docgenInfo={description:``,methods:[],displayName:`BottomDock`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},O.__docgenInfo={description:``,methods:[],displayName:`ButtonGroup`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),j,M,N,P,F,I,L,R,z;e((()=>{v(),x(),A(),y(),b(),p(),l(),d(),i(),T(),h(),c(),j=t(),M={title:`Patterns/Screen`,component:C,decorators:[s],globals:{backgrounds:{value:`canvas`}},parameters:{layout:`padded`,docs:{description:{component:`[Figma 디자인 시스템 페이지 05 패턴](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72) (figma-plugin/screen-kit로 생성). 앱 페이지 40화면의 공통 뼈대를 컴포넌트 여섯 개로 나눈 것: Screen, Band, Section, Card, BottomDock, ButtonGroup.

**뼈대.** 폭 402. 상태바 56(상세, 작업) 또는 64(탭 화면) 아래 머리(Header 44 / ScreenTitle 68 / ClubHeader 144), 본문, 바닥(TabBar 79 / BottomDock 92). 작업 화면은 852 고정에 CTA가 바닥에서 72 위(24 + 홈 인디케이터 48).

**구역 나누기.** 흰 Section(좌우·위아래 24) 사이에 Band 16(bg/canvas). 카드 외곽선과 그림자는 없다. 홈만 예외로 bg/canvas 위에 Card(radius 16, 패딩 16, 좌우 16)를 쌓는다.

**바닥.** 탭 화면은 TabBar, 대기방처럼 결정이 하나인 화면은 BottomDock(Button Large 하나 또는 ButtonGroup). 둘을 같이 두지 않는다.

### 플랫폼 참고

${o([[`화면 폭`,`Compact 0~600dp, 좌우 마진 16`,`iPhone 393~430pt, 레이아웃 마진 16~20`,`402 고정 프레임(iPhone 16 Pro), 좌우 24. 콘텐츠 354. 마진을 HIG보다 넓게 둔 것은 Divider만으로 구역을 나누기 때문`],[`구역 구분`,`Divider 또는 surface-container 색 차이`,`그룹 사이 여백, Inset grouped 리스트 배경 차이`,`Band 16(bg/canvas) + Section 흰색. 카드와 외곽선 금지 규칙의 결과`],[`카드`,`Elevated / Filled / Outlined 세 종류`,`카드 개념 없음. 그룹 리스트`,`홈만 Card(16 radius, 그림자 없음). 나머지 화면은 Section`],[`바닥 CTA`,`FAB 또는 하단 버튼 영역`,`하단 툴바 또는 시트 안 버튼`,`BottomDock 92(8 + 52 + 32). 선 없이 흰 바탕. 작업 화면은 폼 아래 흐르는 CTA`],[`안전 영역`,`System bars, gesture nav 48dp`,`Safe area, 홈 인디케이터 34pt`,`상태바 56/64, 홈 인디케이터 34(TabBar는 24 + 10 상단 여백). Figma 프레임 값을 그대로 따른다`]])}`}}}},N=[{value:`home`,label:`홈`,icon:`house`},{value:`matches`,label:`경기`,icon:`flag`},{value:`club`,label:`동호회`,icon:`user-group`},{value:`my`,label:`MY`,icon:`circle-user-round`}],P={name:`상세 화면 뼈대`,args:{children:null},render:()=>(0,j.jsxs)(C,{header:(0,j.jsx)(u,{title:`제목`,left:(0,j.jsx)(f,{icon:`chevron-left`,label:`뒤로`})}),children:[(0,j.jsxs)(w,{title:`구역 하나`,action:(0,j.jsx)(m,{children:`전체보기`}),children:[(0,j.jsx)(g,{label:`항목`,value:`값`}),(0,j.jsx)(g,{label:`항목`,value:`값`})]}),(0,j.jsx)(_,{}),(0,j.jsx)(w,{title:`구역 둘`,children:(0,j.jsx)(g,{label:`항목`,value:`값`})})]})},F={name:`탭 화면 뼈대`,args:{children:null},render:()=>(0,j.jsxs)(C,{statusBar:64,bottom:(0,j.jsx)(E,{items:N,value:`club`}),children:[(0,j.jsx)(w,{title:`구역`,children:(0,j.jsx)(g,{label:`항목`,value:`값`})}),(0,j.jsx)(_,{})]})},I={name:`작업 화면 뼈대 (852 고정, CTA)`,args:{children:null},render:()=>(0,j.jsx)(C,{fixedHeight:!0,header:(0,j.jsx)(u,{title:`작업`,left:(0,j.jsx)(f,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,j.jsx)(`div`,{className:`px-6 pt-6 pb-[72px]`,children:(0,j.jsx)(a,{variant:`primary`,size:`lg`,children:`완료`})}),children:(0,j.jsx)(w,{children:(0,j.jsx)(g,{label:`폼 내용`,value:``})})})},L={name:`BottomDock, ButtonGroup`,args:{children:null},render:()=>(0,j.jsx)(C,{fixedHeight:!0,header:(0,j.jsx)(u,{title:`경기 대기방`,left:(0,j.jsx)(f,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,j.jsx)(D,{children:(0,j.jsxs)(O,{children:[(0,j.jsx)(a,{variant:`outline`,size:`lg`,children:`팀원 데려오기`}),(0,j.jsx)(a,{variant:`primary`,size:`lg`,children:`참여하기`})]})}),children:(0,j.jsx)(w,{children:(0,j.jsx)(g,{label:`본문`,value:``})})})},R={name:`Card (홈)`,args:{children:null},render:()=>(0,j.jsx)(C,{background:`canvas`,statusBar:64,children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-4 px-4`,children:[(0,j.jsx)(S,{title:`카드 제목`,action:(0,j.jsx)(m,{children:`전체보기`}),children:(0,j.jsx)(g,{label:`항목`,value:`값`})}),(0,j.jsx)(S,{children:(0,j.jsx)(g,{label:`제목 없는 카드`,value:`값`})})]})})},z=[`Detail`,`Tab`,`Task`,`Dock`,`Cards`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '상세 화면 뼈대',
  args: {
    children: null
  },
  render: () => <Screen header={<Header title="제목" left={<IconButton icon="chevron-left" label="뒤로" />} />}>
      <Section title="구역 하나" action={<SectionLink>전체보기</SectionLink>}>
        <KeyValueRow label="항목" value="값" />
        <KeyValueRow label="항목" value="값" />
      </Section>
      <Band />
      <Section title="구역 둘">
        <KeyValueRow label="항목" value="값" />
      </Section>
    </Screen>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '탭 화면 뼈대',
  args: {
    children: null
  },
  render: () => <Screen statusBar={64} bottom={<TabBar items={DETAIL_TABS} value="club" />}>
      <Section title="구역">
        <KeyValueRow label="항목" value="값" />
      </Section>
      <Band />
    </Screen>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '작업 화면 뼈대 (852 고정, CTA)',
  args: {
    children: null
  },
  render: () => <Screen fixedHeight header={<Header title="작업" left={<IconButton icon="chevron-left" label="뒤로" />} />} bottom={<div className="px-6 pt-6 pb-[72px]">
          <Button variant="primary" size="lg">
            완료
          </Button>
        </div>}>
      <Section>
        <KeyValueRow label="폼 내용" value="" />
      </Section>
    </Screen>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'BottomDock, ButtonGroup',
  args: {
    children: null
  },
  render: () => <Screen fixedHeight header={<Header title="경기 대기방" left={<IconButton icon="chevron-left" label="뒤로" />} />} bottom={<BottomDock>
          <ButtonGroup>
            <Button variant="outline" size="lg">
              팀원 데려오기
            </Button>
            <Button variant="primary" size="lg">
              참여하기
            </Button>
          </ButtonGroup>
        </BottomDock>}>
      <Section>
        <KeyValueRow label="본문" value="" />
      </Section>
    </Screen>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Card (홈)',
  args: {
    children: null
  },
  render: () => <Screen background="canvas" statusBar={64}>
      <div className="flex flex-col gap-4 px-4">
        <Card title="카드 제목" action={<SectionLink>전체보기</SectionLink>}>
          <KeyValueRow label="항목" value="값" />
        </Card>
        <Card>
          <KeyValueRow label="제목 없는 카드" value="값" />
        </Card>
      </div>
    </Screen>
}`,...R.parameters?.docs?.source}}}}))();export{R as Cards,P as Detail,L as Dock,F as Tab,I as Task,z as __namedExportsOrder,M as default};