import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,n as r,r as i}from"./storyDecorators-FL8HJpQ6.js";import{n as a,t as o}from"./Button-k3Kf7t_z.js";import{n as s,t as c}from"./Header-CP8p8QrJ.js";import{n as l,t as u}from"./IconButton-CTAY__f9.js";import{r as d,t as f}from"./SectionTitle-DsELPfcA.js";import{n as p,t as m}from"./Screen-BNtSZkdn.js";import{i as h,n as g,r as _,t as v}from"./Card-C_kzdY0N.js";import{n as y,t as b}from"./Section-Kia2mQNb.js";import{n as x,t as S}from"./TabBar-B7DFoteN.js";import{n as C,r as w,t as T}from"./BottomDock-DlQNs6Jd.js";import{n as E,t as D}from"./KeyValueRow-DOu_AhJv.js";var O,k,A,j,M,N,P,F,I;e((()=>{p(),h(),w(),g(),y(),d(),s(),l(),a(),x(),E(),i(),O=t(),k={title:`Patterns/Screen`,component:m,decorators:[r],globals:{backgrounds:{value:`canvas`}},parameters:{layout:`padded`,docs:{description:{component:`[Figma 디자인 시스템 페이지 05 패턴](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72) (figma-plugin/screen-kit로 생성). 앱 페이지 40화면의 공통 뼈대를 컴포넌트 여섯 개로 나눈 것: Screen, Band, Section, Card, BottomDock, ButtonGroup.

**뼈대.** 폭 402. 상태바 56(상세, 작업) 또는 64(탭 화면) 아래 머리(Header 44 / ScreenTitle 68 / ClubHeader 144), 본문, 바닥(TabBar 79 / BottomDock 92). 작업 화면은 852 고정에 CTA가 바닥에서 72 위(24 + 홈 인디케이터 48).

**구역 나누기.** 흰 Section(좌우·위아래 24) 사이에 Band 16(bg/canvas). 카드 외곽선과 그림자는 없다. 홈만 예외로 bg/canvas 위에 Card(radius 16, 패딩 16, 좌우 16)를 쌓는다.

**바닥.** 탭 화면은 TabBar, 대기방처럼 결정이 하나인 화면은 BottomDock(Button Large 하나 또는 ButtonGroup). 둘을 같이 두지 않는다.

### 플랫폼 참고

${n([[`화면 폭`,`Compact 0~600dp, 좌우 마진 16`,`iPhone 393~430pt, 레이아웃 마진 16~20`,`402 고정 프레임(iPhone 16 Pro), 좌우 24. 콘텐츠 354. 마진을 HIG보다 넓게 둔 것은 Divider만으로 구역을 나누기 때문`],[`구역 구분`,`Divider 또는 surface-container 색 차이`,`그룹 사이 여백, Inset grouped 리스트 배경 차이`,`Band 16(bg/canvas) + Section 흰색. 카드와 외곽선 금지 규칙의 결과`],[`카드`,`Elevated / Filled / Outlined 세 종류`,`카드 개념 없음. 그룹 리스트`,`홈만 Card(16 radius, 그림자 없음). 나머지 화면은 Section`],[`바닥 CTA`,`FAB 또는 하단 버튼 영역`,`하단 툴바 또는 시트 안 버튼`,`BottomDock 92(8 + 52 + 32). 선 없이 흰 바탕. 작업 화면은 폼 아래 흐르는 CTA`],[`안전 영역`,`System bars, gesture nav 48dp`,`Safe area, 홈 인디케이터 34pt`,`상태바 56/64, 홈 인디케이터 34(TabBar는 24 + 10 상단 여백). Figma 프레임 값을 그대로 따른다`]])}`}}}},A=[{value:`home`,label:`홈`,icon:`house`},{value:`matches`,label:`경기`,icon:`flag`},{value:`club`,label:`동호회`,icon:`user-group`},{value:`my`,label:`MY`,icon:`circle-user-round`}],j={name:`상세 화면 뼈대`,args:{children:null},render:()=>(0,O.jsxs)(m,{header:(0,O.jsx)(c,{title:`제목`,left:(0,O.jsx)(u,{icon:`chevron-left`,label:`뒤로`})}),children:[(0,O.jsxs)(b,{title:`구역 하나`,action:(0,O.jsx)(f,{children:`전체보기`}),children:[(0,O.jsx)(D,{label:`항목`,value:`값`}),(0,O.jsx)(D,{label:`항목`,value:`값`})]}),(0,O.jsx)(_,{}),(0,O.jsx)(b,{title:`구역 둘`,children:(0,O.jsx)(D,{label:`항목`,value:`값`})})]})},M={name:`탭 화면 뼈대`,args:{children:null},render:()=>(0,O.jsxs)(m,{statusBar:64,bottom:(0,O.jsx)(S,{items:A,value:`club`}),children:[(0,O.jsx)(b,{title:`구역`,children:(0,O.jsx)(D,{label:`항목`,value:`값`})}),(0,O.jsx)(_,{})]})},N={name:`작업 화면 뼈대 (852 고정, CTA)`,args:{children:null},render:()=>(0,O.jsx)(m,{fixedHeight:!0,header:(0,O.jsx)(c,{title:`작업`,left:(0,O.jsx)(u,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,O.jsx)(`div`,{className:`px-6 pt-6 pb-[72px]`,children:(0,O.jsx)(o,{variant:`primary`,size:`lg`,children:`완료`})}),children:(0,O.jsx)(b,{children:(0,O.jsx)(D,{label:`폼 내용`,value:``})})})},P={name:`BottomDock, ButtonGroup`,args:{children:null},render:()=>(0,O.jsx)(m,{fixedHeight:!0,header:(0,O.jsx)(c,{title:`경기 대기방`,left:(0,O.jsx)(u,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,O.jsx)(T,{children:(0,O.jsxs)(C,{children:[(0,O.jsx)(o,{variant:`outline`,size:`lg`,children:`팀원 데려오기`}),(0,O.jsx)(o,{variant:`primary`,size:`lg`,children:`참여하기`})]})}),children:(0,O.jsx)(b,{children:(0,O.jsx)(D,{label:`본문`,value:``})})})},F={name:`Card (홈)`,args:{children:null},render:()=>(0,O.jsx)(m,{background:`canvas`,statusBar:64,children:(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 px-4`,children:[(0,O.jsx)(v,{title:`카드 제목`,action:(0,O.jsx)(f,{children:`전체보기`}),children:(0,O.jsx)(D,{label:`항목`,value:`값`})}),(0,O.jsx)(v,{children:(0,O.jsx)(D,{label:`제목 없는 카드`,value:`값`})})]})})},I=[`Detail`,`Tab`,`Task`,`Dock`,`Cards`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}}))();export{F as Cards,j as Detail,P as Dock,M as Tab,N as Task,I as __namedExportsOrder,k as default};