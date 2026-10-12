import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./cx-B8S8_Vys.js";import{n as i,t as a}from"./Button-_q-8eFly.js";import{a as o,n as s,r as c,t as l}from"./storyDecorators-DI9SAnnw.js";import{n as u,r as d,t as f}from"./storyHelpers-DodvrARx.js";import{n as p,t as m}from"./Badge-BmIrkUMe.js";import{n as h,t as g}from"./FilterButton-C2-jF2tR.js";import{n as _,t as v}from"./IconButton-Cdat5TiX.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./MoreRow-DmTdvOzQ.js";import{n as k,r as A,t as j}from"./SectionTitle-TRw2ZEAz.js";function M({label:e,action:t,className:n}){return(0,N.jsxs)(`div`,{className:r(`flex h-9 w-full items-center justify-between gap-4`,n),children:[(0,N.jsx)(`span`,{className:`truncate text-body text-ink`,children:e}),t&&(0,N.jsx)(`div`,{className:`shrink-0`,children:t})]})}var N,P=e((()=>{n(),N=t(),M.__docgenInfo={description:``,methods:[],displayName:`LabelRow`,props:{label:{required:!0,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:`Button size="sm"`},className:{required:!1,tsType:{name:`string`},description:``}}}})),F,I,L,R,z,B,V,H;e((()=>{O(),b(),A(),w(),P(),x(),C(),_(),p(),i(),h(),d(),c(),F=t(),I={title:`Patterns/Headers`,component:k,decorators:[l],args:{title:`시즌 최고 기록`,action:(0,F.jsx)(j,{children:`전체보기`})},argTypes:{title:{control:`text`},action:{control:!1,description:`SectionLink, FilterButton, Badge, 값`}},parameters:{docs:{description:{component:`[Figma 디자인 시스템 페이지 05 패턴](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72). 머리와 제목 행 일곱 가지. 위계는 ScreenTitle(화면) > ClubHeader(탭 머리) > SectionTitle(구역) > GroupLabel(묶음) 순이고, LabelRow·MonthNav·MoreRow는 구역 안의 도구 행이다.

- **ScreenTitle.** 402x68. 왼쪽 24에서 heading/lg 24, 오른쪽 44 슬롯(IconButton). 탭 화면의 머리. 가운데 제목이 필요한 상세 화면은 Header. 홈처럼 전환 버튼이 제목이면 onSwitch.
- **ClubHeader.** 402x144. 엠블럼 56 + 이름 버튼(heading/sub 20 + chevron-down) + 소개, 둘째 줄 역할 Badge + 회원 수. 동호회 탭 세 화면 공통.
- **SectionTitle.** 354x24. heading/sm 16 600 + 오른쪽 출구(SectionLink body/sm text/secondary, FilterButton, 값). Section과 Card가 안에 품는다.
- **GroupLabel.** body/sm 600 text/secondary, 위 12 아래 8. 목록 안의 '8월', '14명'.
- **LabelRow.** 354x36. body 라벨 + Button Small.
- **MonthNav.** 354x44. IconButton 양끝 + heading/sub 20.
- **MoreRow.** 354x56 가운데 body + chevron-right. 목록을 자른 뒤의 출구.

### 플랫폼 참고

${o([[`화면 제목`,`Top app bar: Small 64dp 가운데/왼쪽, Medium 112, Large 152`,`Navigation bar 44 + Large title 52(스크롤하면 작아짐)`,`ScreenTitle 68 왼쪽 정렬 24, 축소 동작 없음. 상세는 Header 44 가운데. 두 가지만 두어 화면 종류와 1:1`],[`구역 제목`,`List subheader 14 Title small, 48dp`,`Section header 13 uppercase 또는 Grouped 17 bold`,`heading/sm 16 600 + 오른쪽 출구. 출구를 제목 행에 두어 Section마다 한 개 이하`],[`묶음 라벨`,`Subheader`,`Section header`,`body/sm 600 text/secondary. 제목보다 한 단계 작고 흐리게`],[`더보기`,`Text button "Show more"`,`"See All" 텍스트 링크(섹션 헤더 오른쪽)`,`제목 행의 SectionLink가 기본. 목록 아래 MoreRow는 잘린 목록에만`],[`달 이동`,`Date picker 헤더 화살표 48dp`,`UICalendarView 화살표 44`,`IconButton 44 + heading/sub 20. 다음이 없으면 disabled(text/tertiary)`]])}`}}}},L={name:`SectionTitle`},R={name:`ScreenTitle`,decorators:[s],render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(S,{title:`경기`,action:(0,F.jsx)(v,{icon:`plus`,label:`새 경기 추가`})}),(0,F.jsx)(S,{title:`FC 원샷`,onSwitch:()=>{},inset:16,compact:!0})]})},z={name:`ClubHeader`,decorators:[s],render:()=>(0,F.jsx)(E,{name:`FC 토요일`,description:`매주 토요일 밤, 서초에서 뜁니다`,badge:(0,F.jsx)(m,{variant:`outline-neutral`,children:`멤버`}),meta:`회원 14명, 2024년 3월 창단`,onSwitch:()=>{}})},B={name:`SectionTitle 변형`,render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(k,{title:`지난 경기 최고 속도`,action:(0,F.jsx)(j,{children:`경기 보기`})}),(0,F.jsx)(k,{title:`경기 기록`,action:(0,F.jsx)(g,{children:`전체 기간`})}),(0,F.jsx)(k,{title:`9월 6일 (토) 20:00`,action:(0,F.jsx)(m,{variant:`tint-neutral`,children:`D-2`})}),(0,F.jsx)(k,{title:`속도 존`,action:(0,F.jsx)(`span`,{className:`text-caption text-slate`,children:`활동 92분`})})]})},V={name:`GroupLabel, LabelRow, MonthNav, MoreRow`,render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(u,{label:`GroupLabel`,children:(0,F.jsx)(y,{children:`8월`})}),(0,F.jsx)(M,{label:`배치 필요 4명`,action:(0,F.jsx)(a,{variant:`outline`,size:`sm`,children:`자리 바꾸기`})}),(0,F.jsx)(T,{label:`2026년 9월`,nextDisabled:!0}),(0,F.jsx)(D,{children:`11명 전체보기`})]})},H=[`Title`,`Screen`,`Club`,`Titles`,`Rows`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'SectionTitle'
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'ScreenTitle',
  decorators: [fullBleed],
  render: () => <Matrix>
      <ScreenTitle title="경기" action={<IconButton icon="plus" label="새 경기 추가" />} />
      <ScreenTitle title="FC 원샷" onSwitch={() => {}} inset={16} compact />
    </Matrix>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'ClubHeader',
  decorators: [fullBleed],
  render: () => <ClubHeader name="FC 토요일" description="매주 토요일 밤, 서초에서 뜁니다" badge={<Badge variant="outline-neutral">멤버</Badge>} meta="회원 14명, 2024년 3월 창단" onSwitch={() => {}} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'SectionTitle 변형',
  render: () => <Matrix>
      <SectionTitle title="지난 경기 최고 속도" action={<SectionLink>경기 보기</SectionLink>} />
      <SectionTitle title="경기 기록" action={<FilterButton>전체 기간</FilterButton>} />
      <SectionTitle title="9월 6일 (토) 20:00" action={<Badge variant="tint-neutral">D-2</Badge>} />
      <SectionTitle title="속도 존" action={<span className="text-caption text-slate">활동 92분</span>} />
    </Matrix>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'GroupLabel, LabelRow, MonthNav, MoreRow',
  render: () => <Matrix>
      <MatrixRow label="GroupLabel">
        <GroupLabel>8월</GroupLabel>
      </MatrixRow>
      <LabelRow label="배치 필요 4명" action={<Button variant="outline" size="sm">
            자리 바꾸기
          </Button>} />
      <MonthNav label="2026년 9월" nextDisabled />
      <MoreRow>11명 전체보기</MoreRow>
    </Matrix>
}`,...V.parameters?.docs?.source}}}}))();export{z as Club,V as Rows,R as Screen,L as Title,B as Titles,H as __namedExportsOrder,I as default};