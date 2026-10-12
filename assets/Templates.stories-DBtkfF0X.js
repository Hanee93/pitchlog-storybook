import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-iUPssvWC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./Button-_q-8eFly.js";import{n as o,r as ee}from"./storyDecorators-DI9SAnnw.js";import{n as s,t as c}from"./Badge-BmIrkUMe.js";import{n as l,t as u}from"./EmptyState-DIXAsuhA.js";import{n as d,t as f}from"./FilterButton-C2-jF2tR.js";import{n as p,t as m}from"./Header-DYHa86wx.js";import{n as h,t as g}from"./IconButton-Cdat5TiX.js";import{n as te,t as _}from"./FormRow-BTl9RgHI.js";import{a as v,c as ne,i as re,l as ie,n as ae,o as oe,r as y,s as b,t as se,u as ce}from"./MoreRow-DmTdvOzQ.js";import{r as x,t as S}from"./SectionTitle-TRw2ZEAz.js";import{n as le,t as C}from"./SegmentedControl-C9H2evbz.js";import{n as ue,t as de}from"./Delta-DD__YVFe.js";import{n as fe,t as w}from"./Metric-YIAQCY8q.js";import{n as pe,t as T}from"./ItemRow-CEbZ4FvE.js";import{r as E,t as D}from"./ClipThumbnail-CMej1wjA.js";import{a as O,c as k,i as A,n as j,o as M,r as N,s as P,t as F}from"./Section-B-4YTdr7.js";import{n as I,t as L}from"./TabBar-BW4rWHKQ.js";import{n as R,t as z}from"./TileGroup-ikuGLWES.js";import{n as me,t as he}from"./Vote-BRVzFD6v.js";function B({tab:e}){let[t,n]=(0,V.useState)(e);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(b,{name:`FC 토요일`,description:`매주 토요일 밤, 서초에서 뜁니다`,badge:(0,H.jsx)(c,{variant:`outline-neutral`,children:`멤버`}),meta:`회원 14명, 2024년 3월 창단`,onSwitch:()=>{}}),(0,H.jsx)(`div`,{className:`px-6`,children:(0,H.jsx)(C,{size:`md`,label:`동호회 메뉴`,options:K,value:t,onChange:n})})]})}function ge(){let[e,t]=(0,V.useState)(`경기`),[n,r]=(0,V.useState)(``),[i,o]=(0,V.useState)(``);return(0,H.jsx)(P,{fixedHeight:!0,header:(0,H.jsx)(m,{title:`일정 추가하기`,left:(0,H.jsx)(g,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,H.jsx)(`div`,{className:`px-6 pt-6 pb-[72px]`,children:(0,H.jsx)(a,{variant:`primary`,size:`lg`,disabled:!n,children:`완료`})}),children:(0,H.jsxs)(F,{children:[(0,H.jsx)(C,{size:`md`,label:`일정 종류`,options:[`경기`,`훈련`],value:e,onChange:t}),(0,H.jsxs)(`div`,{className:`flex flex-col`,children:[(0,H.jsx)(_,{label:`제목`,value:n,onChange:r,placeholder:`강남 유나이티드`}),(0,H.jsx)(_,{type:`select`,label:`날짜와 시간`,value:``,placeholder:`선택하세요`}),(0,H.jsx)(_,{label:`장소`,value:i,onChange:o,placeholder:`서초 풋살파크 A코트`,divider:!1})]})]})})}function _e(){let[e,t]=(0,V.useState)(`yes`);return(0,H.jsx)(he,{label:`참석 투표`,me:`김민수`,value:e,onChange:t,options:[{value:`yes`,label:`참석`,count:9},{value:`no`,label:`불참`,count:3},{value:`maybe`,label:`미정`,count:3}],summary:`참석 9명, 미정 5명`,deadline:`투표 마감 금 18:00`})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{V=t(n(),1),k(),M(),j(),x(),A(),ce(),ne(),oe(),re(),pe(),R(),ae(),l(),p(),h(),i(),s(),I(),le(),d(),te(),fe(),ue(),me(),E(),ee(),H=r(),U=`https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=`,W={title:`Templates/화면`,component:P,decorators:[o],globals:{backgrounds:{value:`canvas`}},parameters:{layout:`padded`,docs:{description:{component:`앱 페이지의 대표 화면 다섯 개를 **디자인 시스템 컴포넌트와 패턴만으로** 다시 조립한 것. 손으로 그린 프레임이 없다. 새 화면은 이 다섯 뼈대 중 하나에서 시작한다.

| 템플릿 | 원본 | 뼈대 |
|---|---|---|
| 탭 화면 | [동호회 멤버 101:6302](${U}101-6302) | Screen 64 + ClubHeader + SegmentedControl + Section(GroupLabel, ItemRow) + Band + TabBar |
| 상세 화면 | [멤버 상세 355:19069](${U}355-19069) | Screen 56 + Header + Section(ItemRow lg, TileGroup) + Band + Section(SectionTitle, ItemRow) + MoreRow |
| 작업 화면 | [일정 추가하기 270:13680](${U}270-13680) | Screen 852 고정 + Header + SegmentedControl + FormRow + Button Primary Large(바닥 72) |
| 빈 상태 | [회비 없음 101:6725](${U}101-6725) | 탭 화면 + MonthNav + EmptyState |
| 홈 | [홈 64:8](${U}64-8) | Screen canvas + ScreenTitle compact + Card(Metric, Delta, TileGroup / Vote / ClipThumbnail / ItemRow) + TabBar |

데이터는 Figma 샘플 값이다. 원본과 다른 점은 handoff 문서 design/HANDOFF-screen-kit.md 6절.`}}}},G=[{value:`home`,label:`홈`,icon:`house`},{value:`matches`,label:`경기`,icon:`flag`},{value:`club`,label:`동호회`,icon:`user-group`},{value:`my`,label:`MY`,icon:`circle-user-round`}],K=[`일정`,`멤버`,`회비`,`관리`],q=[{name:`김민수`,badge:(0,H.jsx)(c,{variant:`tint-neutral`,children:`나`}),sub:`2024년 3월 12일 가입, 40경기 참석`,me:!0},{name:`박지훈`,badge:(0,H.jsx)(c,{variant:`filled-neutral`,children:`관리자`}),sub:`2024년 3월 12일 가입, 40경기 참석`},{name:`이도윤`,sub:`2024년 3월 12일 가입, 40경기 참석`},{name:`김소연`,sub:`2023년 10월 5일 가입, 30경기 참석`},{name:`박지민`,sub:`2023년 11월 20일 가입, 25경기 참석`},{name:`최민수`,sub:`2024년 1월 15일 가입, 35경기 참석`},{name:`이하늘`,sub:`2023년 9월 30일 가입, 20경기 참석`}],J={name:`탭 화면 (동호회 멤버)`,args:{children:null},render:()=>(0,H.jsxs)(P,{statusBar:64,header:(0,H.jsx)(B,{tab:`멤버`}),bottom:(0,H.jsx)(L,{items:G,value:`club`}),children:[(0,H.jsx)(`div`,{className:`px-6 pt-6`,children:(0,H.jsx)(a,{variant:`primary`,size:`md`,icon:`plus`,children:`멤버 초대하기`})}),(0,H.jsxs)(F,{children:[(0,H.jsx)(v,{children:`14명`}),q.map(e=>(0,H.jsx)(T,{title:e.name,badge:e.badge,sub:e.sub,avatar:{name:e.name,highlight:e.me},onClick:()=>{}},e.name))]}),(0,H.jsx)(O,{})]})},Y={name:`상세 화면 (멤버 상세)`,args:{children:null},render:()=>(0,H.jsxs)(P,{header:(0,H.jsx)(m,{title:`김민수`,left:(0,H.jsx)(g,{icon:`chevron-left`,label:`뒤로`})}),children:[(0,H.jsxs)(F,{children:[(0,H.jsx)(T,{size:`lg`,title:`김민수`,avatar:{name:`김민수`},badge:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{variant:`tint-blue`,children:`나`}),(0,H.jsx)(c,{variant:`filled-neutral`,children:`홈`}),(0,H.jsx)(c,{variant:`tint-neutral`,children:`MF`})]}),sub:`2024년 5월 5기 입단, 32경기 출전`}),(0,H.jsx)(z,{items:[{label:`출석`,value:`12`},{label:`골`,value:`7`},{label:`평균 평점`,value:`7.4`}]}),(0,H.jsx)(`p`,{className:`text-caption text-slate`,children:`2026년, 16경기 기준`})]}),(0,H.jsx)(O,{}),(0,H.jsxs)(F,{title:`시즌 최고 기록`,children:[(0,H.jsx)(T,{title:`최고 속도`,badge:(0,H.jsx)(c,{variant:`tint-volt`,children:`팀 2위`}),trailing:(0,H.jsx)(w,{size:`sm`,value:`28.4`,unit:`km/h`}),onClick:()=>{},divider:!0}),(0,H.jsx)(T,{title:`최장 이동 거리`,badge:(0,H.jsx)(c,{variant:`filled-volt`,children:`팀 1위`}),trailing:(0,H.jsx)(w,{size:`sm`,value:`5.6`,unit:`km`,upright:!0}),onClick:()=>{},divider:!0}),(0,H.jsx)(T,{title:`최다 스프린트`,badge:(0,H.jsx)(c,{variant:`tint-volt`,children:`팀 3위`}),trailing:(0,H.jsx)(w,{size:`sm`,value:`21`,unit:`회`,upright:!0}),onClick:()=>{}})]}),(0,H.jsx)(O,{}),(0,H.jsxs)(F,{title:`경기 기록`,action:(0,H.jsx)(f,{children:`전체 기간`}),children:[(0,H.jsx)(T,{title:`vs 강남 유나이티드`,badge:(0,H.jsx)(c,{variant:`tint-green`,children:`승 4:2`}),sub:`8월 30일, 92분, 1골 1도움`,trailing:(0,H.jsx)(w,{size:`sm`,value:`8.2`,upright:!0}),divider:!0}),(0,H.jsx)(T,{title:`vs 반포 FC`,badge:(0,H.jsx)(c,{variant:`tint-red`,children:`패 2:3`}),sub:`8월 16일, 88분, 0골 1도움`,trailing:(0,H.jsx)(w,{size:`sm`,value:`6.9`,upright:!0}),divider:!0}),(0,H.jsx)(T,{title:`vs 서초 킥오프`,badge:(0,H.jsx)(c,{variant:`tint-green`,children:`승 4:2`}),sub:`8월 2일, 90분, 2골 0도움`,trailing:(0,H.jsx)(w,{size:`sm`,value:`8.7`,upright:!0})})]}),(0,H.jsx)(O,{}),(0,H.jsxs)(F,{title:`회비`,children:[(0,H.jsx)(T,{title:`2026년 9월`,badge:(0,H.jsx)(c,{variant:`tint-red`,children:`미납`}),sub:`30,000원, 마감 9월 10일`,trailing:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(a,{variant:`outline`,size:`sm`,children:`납부 처리`}),(0,H.jsx)(a,{variant:`secondary`,size:`sm`,children:`알림 보내기`})]}),divider:!0}),(0,H.jsx)(T,{title:`2026년 8월`,sub:`30,000원, 8월 4일 납부`,divider:!0}),(0,H.jsx)(T,{title:`2026년 7월`,sub:`30,000원, 7월 4일 납부`}),(0,H.jsx)(se,{children:`더보기`})]})]})},X={name:`작업 화면 (일정 추가하기)`,args:{children:null},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,H.jsx)(ge,{})},Z={name:`빈 상태 (회비 없음)`,args:{children:null},render:()=>(0,H.jsx)(P,{statusBar:64,fixedHeight:!0,header:(0,H.jsx)(B,{tab:`회비`}),bottom:(0,H.jsx)(L,{items:G,value:`club`}),children:(0,H.jsxs)(F,{children:[(0,H.jsx)(y,{label:`2026년 9월`,nextDisabled:!0}),(0,H.jsx)(u,{title:`2026년 9월 회비가 아직 없습니다`,description:`회비를 만들면 멤버 14명에게 알림이 갑니다`,action:(0,H.jsx)(a,{variant:`primary`,size:`lg`,children:`2026년 9월 회비 만들기`})})]})})},Q={name:`홈 (카드)`,args:{children:null},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,H.jsx)(P,{background:`canvas`,statusBar:64,header:(0,H.jsx)(ie,{title:`FC 원샷`,onSwitch:()=>{},inset:16,compact:!0}),bottom:(0,H.jsx)(L,{items:G,value:`home`}),children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-4 px-4 pt-4 pb-4`,children:[(0,H.jsxs)(N,{title:`지난 경기 최고 속도`,action:(0,H.jsx)(S,{children:`경기 보기`}),children:[(0,H.jsx)(`p`,{className:`text-body-sm text-slate`,children:`8월 30일 (토)`}),(0,H.jsxs)(`div`,{className:`flex items-baseline gap-2`,children:[(0,H.jsx)(w,{value:`28.4`,unit:`km/h`}),(0,H.jsx)(de,{trend:`up`,children:`+2.1km/h`})]}),(0,H.jsx)(`div`,{children:(0,H.jsx)(c,{variant:`tint-volt`,children:`팀 내 1위`})}),(0,H.jsx)(z,{items:[{label:`뛴 거리`,value:`4.8`,unit:`km`},{label:`스프린트`,value:`18`,unit:`회`},{label:`활동 시간`,value:`92`,unit:`분`}]})]}),(0,H.jsxs)(N,{title:`9월 6일 (토) 20:00`,action:(0,H.jsx)(c,{variant:`tint-neutral`,children:`D-2`}),children:[(0,H.jsx)(`p`,{className:`-mt-2 text-body-sm text-slate`,children:`서초 풋살파크 A코트`}),(0,H.jsx)(_e,{})]}),(0,H.jsx)(N,{title:`내 하이라이트`,action:(0,H.jsx)(S,{children:`클립 3개 보기`}),children:(0,H.jsxs)(`div`,{className:`-mr-4 flex gap-2 overflow-hidden`,children:[(0,H.jsx)(D,{size:`half`,title:`득점, 세 번째 게임`,meta:`22'`,duration:`0:08`,type:`골`}),(0,H.jsx)(D,{size:`half`,title:`왼발 마무리`,meta:`41', 세 번째 게임`,duration:`0:08`,type:`골`}),(0,H.jsx)(D,{size:`half`,title:`원터치 패스`,meta:`55'`,duration:`0:06`,type:`도움`})]})}),(0,H.jsxs)(N,{title:`팀 소식`,action:(0,H.jsx)(S,{children:`전체보기`}),children:[(0,H.jsx)(v,{children:`어제`}),(0,H.jsx)(T,{title:`최고속도 팀 신기록`,sub:`29.1km/h, 8월 30일 경기`,avatar:{name:`김민수`,size:`sm`},trailing:(0,H.jsx)(c,{variant:`filled-volt`,children:`km/h`})}),(0,H.jsx)(T,{title:`이번 주 MVP`,sub:`뛴 거리와 스프린트 모두 1위`,avatar:{name:`김민수`,size:`sm`},trailing:(0,H.jsx)(c,{variant:`filled-volt`,children:`MVP`})}),(0,H.jsx)(v,{children:`2일 전`}),(0,H.jsx)(T,{title:`9월 회비 납부 마감 D-2`,sub:`아직 4명이 납부하지 않았습니다`})]})]})})},$=[`TabScreen`,`DetailScreen`,`TaskScreen`,`EmptyScreen`,`HomeScreen`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '탭 화면 (동호회 멤버)',
  args: {
    children: null
  },
  render: () => <Screen statusBar={64} header={<ClubHead tab="멤버" />} bottom={<TabBar items={TABS} value="club" />}>
      <div className="px-6 pt-6">
        <Button variant="primary" size="md" icon="plus">
          멤버 초대하기
        </Button>
      </div>
      <Section>
        <GroupLabel>14명</GroupLabel>
        {MEMBERS.map(m => <ItemRow key={m.name} title={m.name} badge={m.badge} sub={m.sub} avatar={{
        name: m.name,
        highlight: m.me
      }} onClick={() => {}} />)}
      </Section>
      <Band />
    </Screen>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '상세 화면 (멤버 상세)',
  args: {
    children: null
  },
  render: () => <Screen header={<Header title="김민수" left={<IconButton icon="chevron-left" label="뒤로" />} />}>
      <Section>
        <ItemRow size="lg" title="김민수" avatar={{
        name: '김민수'
      }} badge={<>
              <Badge variant="tint-blue">나</Badge>
              <Badge variant="filled-neutral">홈</Badge>
              <Badge variant="tint-neutral">MF</Badge>
            </>} sub="2024년 5월 5기 입단, 32경기 출전" />
        <TileGroup items={[{
        label: '출석',
        value: '12'
      }, {
        label: '골',
        value: '7'
      }, {
        label: '평균 평점',
        value: '7.4'
      }]} />
        <p className="text-caption text-slate">2026년, 16경기 기준</p>
      </Section>
      <Band />
      <Section title="시즌 최고 기록">
        <ItemRow title="최고 속도" badge={<Badge variant="tint-volt">팀 2위</Badge>} trailing={<Metric size="sm" value="28.4" unit="km/h" />} onClick={() => {}} divider />
        <ItemRow title="최장 이동 거리" badge={<Badge variant="filled-volt">팀 1위</Badge>} trailing={<Metric size="sm" value="5.6" unit="km" upright />} onClick={() => {}} divider />
        <ItemRow title="최다 스프린트" badge={<Badge variant="tint-volt">팀 3위</Badge>} trailing={<Metric size="sm" value="21" unit="회" upright />} onClick={() => {}} />
      </Section>
      <Band />
      <Section title="경기 기록" action={<FilterButton>전체 기간</FilterButton>}>
        <ItemRow title="vs 강남 유나이티드" badge={<Badge variant="tint-green">승 4:2</Badge>} sub="8월 30일, 92분, 1골 1도움" trailing={<Metric size="sm" value="8.2" upright />} divider />
        <ItemRow title="vs 반포 FC" badge={<Badge variant="tint-red">패 2:3</Badge>} sub="8월 16일, 88분, 0골 1도움" trailing={<Metric size="sm" value="6.9" upright />} divider />
        <ItemRow title="vs 서초 킥오프" badge={<Badge variant="tint-green">승 4:2</Badge>} sub="8월 2일, 90분, 2골 0도움" trailing={<Metric size="sm" value="8.7" upright />} />
      </Section>
      <Band />
      <Section title="회비">
        <ItemRow title="2026년 9월" badge={<Badge variant="tint-red">미납</Badge>} sub="30,000원, 마감 9월 10일" trailing={<>
              <Button variant="outline" size="sm">
                납부 처리
              </Button>
              <Button variant="secondary" size="sm">
                알림 보내기
              </Button>
            </>} divider />
        <ItemRow title="2026년 8월" sub="30,000원, 8월 4일 납부" divider />
        <ItemRow title="2026년 7월" sub="30,000원, 7월 4일 납부" />
        <MoreRow>더보기</MoreRow>
      </Section>
    </Screen>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '작업 화면 (일정 추가하기)',
  args: {
    children: null
  },
  /* FormRow Select 플레이스홀더(text/tertiary)는 시스템의 유일한 대비 예외(FormRow 스토리와 같은 이유) */
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <TaskForm />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '빈 상태 (회비 없음)',
  args: {
    children: null
  },
  render: () => <Screen statusBar={64} fixedHeight header={<ClubHead tab="회비" />} bottom={<TabBar items={TABS} value="club" />}>
      <Section>
        <MonthNav label="2026년 9월" nextDisabled />
        <EmptyState title="2026년 9월 회비가 아직 없습니다" description="회비를 만들면 멤버 14명에게 알림이 갑니다" action={<Button variant="primary" size="lg">
              2026년 9월 회비 만들기
            </Button>} />
      </Section>
    </Screen>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '홈 (카드)',
  args: {
    children: null
  },
  /* ClipThumbnail 메타 줄(text/tertiary)은 Scene 스토리와 같은 이유로 대비 규칙을 끈다. 명세가 tertiary이고 썸네일 아래 보조 정보라 사용자 결정으로 유지 */
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <Screen background="canvas" statusBar={64} header={<ScreenTitle title="FC 원샷" onSwitch={() => {}} inset={16} compact />} bottom={<TabBar items={TABS} value="home" />}>
      <div className="flex flex-col gap-4 px-4 pt-4 pb-4">
        <Card title="지난 경기 최고 속도" action={<SectionLink>경기 보기</SectionLink>}>
          <p className="text-body-sm text-slate">8월 30일 (토)</p>
          <div className="flex items-baseline gap-2">
            <Metric value="28.4" unit="km/h" />
            <Delta trend="up">+2.1km/h</Delta>
          </div>
          <div>
            <Badge variant="tint-volt">팀 내 1위</Badge>
          </div>
          <TileGroup items={[{
          label: '뛴 거리',
          value: '4.8',
          unit: 'km'
        }, {
          label: '스프린트',
          value: '18',
          unit: '회'
        }, {
          label: '활동 시간',
          value: '92',
          unit: '분'
        }]} />
        </Card>
        <Card title="9월 6일 (토) 20:00" action={<Badge variant="tint-neutral">D-2</Badge>}>
          <p className="-mt-2 text-body-sm text-slate">서초 풋살파크 A코트</p>
          <HomeVote />
        </Card>
        <Card title="내 하이라이트" action={<SectionLink>클립 3개 보기</SectionLink>}>
          <div className="-mr-4 flex gap-2 overflow-hidden">
            <ClipThumbnail size="half" title="득점, 세 번째 게임" meta="22'" duration="0:08" type="골" />
            <ClipThumbnail size="half" title="왼발 마무리" meta="41', 세 번째 게임" duration="0:08" type="골" />
            <ClipThumbnail size="half" title="원터치 패스" meta="55'" duration="0:06" type="도움" />
          </div>
        </Card>
        <Card title="팀 소식" action={<SectionLink>전체보기</SectionLink>}>
          <GroupLabel>어제</GroupLabel>
          <ItemRow title="최고속도 팀 신기록" sub="29.1km/h, 8월 30일 경기" avatar={{
          name: '김민수',
          size: 'sm'
        }} trailing={<Badge variant="filled-volt">km/h</Badge>} />
          <ItemRow title="이번 주 MVP" sub="뛴 거리와 스프린트 모두 1위" avatar={{
          name: '김민수',
          size: 'sm'
        }} trailing={<Badge variant="filled-volt">MVP</Badge>} />
          <GroupLabel>2일 전</GroupLabel>
          <ItemRow title="9월 회비 납부 마감 D-2" sub="아직 4명이 납부하지 않았습니다" />
        </Card>
      </div>
    </Screen>
}`,...Q.parameters?.docs?.source}}}}))();export{Y as DetailScreen,Z as EmptyScreen,Q as HomeScreen,J as TabScreen,X as TaskScreen,$ as __namedExportsOrder,W as default};