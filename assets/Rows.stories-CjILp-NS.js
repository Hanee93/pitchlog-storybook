import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./cx-B8S8_Vys.js";import{n as i,t as a}from"./Button-_q-8eFly.js";import{a as o,r as s,t as c}from"./storyDecorators-DI9SAnnw.js";import{n as l,t as u}from"./Avatar-2j8OJrFN.js";import{n as d,r as f,t as p}from"./storyHelpers-DodvrARx.js";import{n as m,t as h}from"./Badge-BmIrkUMe.js";import{n as g,t as _}from"./Metric-YIAQCY8q.js";import{n as v,t as y}from"./ItemRow-CEbZ4FvE.js";import{n as b,t as x}from"./KeyValueRow-DOu_AhJv.js";function S({names:e,max:t=4,className:n}){let i=e.slice(0,t),a=e.length-i.length;return(0,C.jsxs)(`div`,{className:r(`flex items-center`,n),"aria-label":`${e.length}명`,role:`img`,children:[i.map((e,t)=>(0,C.jsx)(`span`,{className:r(`flex size-8 shrink-0 items-center justify-center rounded-full bg-pure-white`,t>0&&`-ml-2`),children:(0,C.jsx)(u,{name:e,size:`xs`})},e+t)),a>0&&(0,C.jsxs)(`span`,{className:`ml-1 text-caption font-semibold text-slate`,children:[`+`,a]})]})}var C,w=e((()=>{l(),n(),C=t(),S.__docgenInfo={description:``,methods:[],displayName:`AvatarStack`,props:{names:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),T,E,D,O,k,A,j;e((()=>{v(),b(),w(),m(),i(),g(),f(),s(),T=t(),E={title:`Patterns/Rows`,component:y,decorators:[c],args:{title:`박지훈`,badge:(0,T.jsx)(h,{variant:`filled-neutral`,children:`관리자`}),sub:`2024년 3월 12일 가입, 40경기 참석`,avatar:{name:`박지훈`},size:`md`},argTypes:{size:{control:`inline-radio`,options:[`md`,`lg`],description:`md 78(아바타 40, 제목 16) / lg 58(아바타 56, 제목 24)`},badge:{control:!1},trailing:{control:!1,description:`문자열 값, Button, Metric, AvatarStack`},avatar:{control:!1},divider:{control:`boolean`},onClick:{action:`click`}},parameters:{docs:{description:{component:`[Figma 디자인 시스템 페이지 05 패턴](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72). 항목 행 세 가지.

- **ItemRow.** 사람, 달, 경기처럼 '무엇'이 주어인 행. 아바타(선택) + 제목 heading/sm 16 + Badge + 부제 body/sm + 오른쪽(값 body/label, Button Small, Metric, AvatarStack). md 78, lg 58(상세 화면 머리). 앱 페이지에서 '박지훈' 354x78 19번, '카드2026년9월' 354x81 18번, '행김민수' 354x74, '프로필' 354x58로 손으로 그려진 것을 하나로 묶었다. 제목만 있는 설정 목록은 ListRow(56/64).
- **KeyValueRow.** 이름표 + 값, 높이 44. 선수 기록 상세의 지표 목록. 값 강조는 accent(화면당 하나 이하).
- **AvatarStack.** Avatar xs 24를 흰 링 4로 8씩 겹친다. 최대 4, 넘치면 +N. 누구인지보다 몇 명인지가 중요할 때.

**구분선.** 행 사이는 기본으로 선이 없다(멤버 목록). 값이 서로 비교되는 목록(회비, 경기 기록)만 divider.

### 플랫폼 참고

${o([[`행 높이`,`List item 1줄 56 / 2줄 72 / 3줄 88dp`,`44 기본, 부제 포함 60~68`,`ItemRow 78(16 + 46 + 16). 아바타 40과 부제를 넣고도 숨 쉴 자리. 설정류는 ListRow 56/64`],[`왼쪽 요소`,`Leading avatar 40 또는 icon 24`,`Image 또는 SF Symbol`,`Avatar sm 32 / md 40만. 아이콘 행은 두지 않는다(아이콘이 뜻을 보태지 않는다는 판단)`],[`오른쪽 요소`,`Trailing supporting text 또는 icon`,`Detail text, disclosure indicator`,`값 텍스트, Button Small 1~2개, Metric, AvatarStack. 쉐브론은 MoreRow와 ListRow에만`],[`구분선`,`Divider inset 16 선택`,`Separator inset(기본 켜짐)`,`기본 없음. 행 간격만으로 읽히면 선을 긋지 않는다`],[`키-값`,`List item + trailing text`,`Value1 cell 스타일`,`KeyValueRow 44. 라벨 text/secondary, 값 600 text/primary. 표처럼 읽히게 세로 간격을 좁게`]])}`}}}},D={},O={name:`ItemRow 변형`,render:()=>(0,T.jsxs)(p,{children:[(0,T.jsx)(y,{title:`김민수`,badge:(0,T.jsx)(h,{variant:`tint-neutral`,children:`나`}),sub:`2024년 3월 12일 가입, 40경기 참석`,avatar:{name:`김민수`,highlight:!0}}),(0,T.jsx)(y,{title:`박지훈`,sub:`8월 3일 납부`,avatar:{name:`박지훈`,size:`sm`},trailing:`총 420,000원`,divider:!0}),(0,T.jsx)(y,{title:`전민재`,avatar:{name:`전민재`,size:`sm`},trailing:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{variant:`outline`,size:`sm`,children:`납부 처리`}),(0,T.jsx)(a,{variant:`secondary`,size:`sm`,children:`알림 보내기`})]}),divider:!0}),(0,T.jsx)(y,{title:`vs 강남 유나이티드`,badge:(0,T.jsx)(h,{variant:`tint-green`,children:`승 4:2`}),sub:`8월 30일, 92분, 1골 1도움`,trailing:(0,T.jsx)(_,{size:`sm`,value:`8.2`,upright:!0}),divider:!0}),(0,T.jsx)(y,{title:`2026년 9월`,badge:(0,T.jsx)(h,{variant:`tint-red`,children:`미납`}),sub:`30,000원, 마감 9월 10일`,trailing:(0,T.jsx)(a,{variant:`outline`,size:`sm`,children:`납부 처리`})}),(0,T.jsx)(y,{title:`참여 9명`,sub:`HOME 5, AWAY 4`,trailing:(0,T.jsx)(S,{names:[`임하준`,`최우진`,`박지훈`,`이도윤`]})}),(0,T.jsx)(y,{size:`lg`,title:`김민수`,avatar:{name:`김민수`},badge:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{variant:`tint-blue`,children:`나`}),(0,T.jsx)(h,{variant:`filled-neutral`,children:`홈`}),(0,T.jsx)(h,{variant:`tint-neutral`,children:`MF`})]}),sub:`2024년 5월 5기 입단, 32경기 출전`})]})},k={name:`KeyValueRow`,render:()=>(0,T.jsxs)(`div`,{className:`flex flex-col`,children:[(0,T.jsx)(x,{label:`출전 시간`,value:`92분`}),(0,T.jsx)(x,{label:`골 / 도움`,value:`1 / 1`}),(0,T.jsx)(x,{label:`이동 거리`,value:`4.8km`}),(0,T.jsx)(x,{label:`최고 속도`,value:`28.4km/h`,accent:!0})]})},A={name:`AvatarStack`,render:()=>(0,T.jsxs)(p,{children:[(0,T.jsx)(d,{label:`4명`,children:(0,T.jsx)(S,{names:[`임하준`,`최우진`,`박지훈`,`이도윤`]})}),(0,T.jsx)(d,{label:`9명`,children:(0,T.jsx)(S,{names:[`임하준`,`최우진`,`박지훈`,`이도윤`,`정서준`,`강태양`,`윤재원`,`오시우`,`서준혁`]})})]})},j=[`Playground`,`Variants`,`KeyValues`,`Stack`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'ItemRow 변형',
  render: () => <Matrix>
      <ItemRow title="김민수" badge={<Badge variant="tint-neutral">나</Badge>} sub="2024년 3월 12일 가입, 40경기 참석" avatar={{
      name: '김민수',
      highlight: true
    }} />
      <ItemRow title="박지훈" sub="8월 3일 납부" avatar={{
      name: '박지훈',
      size: 'sm'
    }} trailing="총 420,000원" divider />
      <ItemRow title="전민재" avatar={{
      name: '전민재',
      size: 'sm'
    }} trailing={<>
            <Button variant="outline" size="sm">
              납부 처리
            </Button>
            <Button variant="secondary" size="sm">
              알림 보내기
            </Button>
          </>} divider />
      <ItemRow title="vs 강남 유나이티드" badge={<Badge variant="tint-green">승 4:2</Badge>} sub="8월 30일, 92분, 1골 1도움" trailing={<Metric size="sm" value="8.2" upright />} divider />
      <ItemRow title="2026년 9월" badge={<Badge variant="tint-red">미납</Badge>} sub="30,000원, 마감 9월 10일" trailing={<Button variant="outline" size="sm">납부 처리</Button>} />
      <ItemRow title="참여 9명" sub="HOME 5, AWAY 4" trailing={<AvatarStack names={['임하준', '최우진', '박지훈', '이도윤']} />} />
      <ItemRow size="lg" title="김민수" avatar={{
      name: '김민수'
    }} badge={<>
            <Badge variant="tint-blue">나</Badge>
            <Badge variant="filled-neutral">홈</Badge>
            <Badge variant="tint-neutral">MF</Badge>
          </>} sub="2024년 5월 5기 입단, 32경기 출전" />
    </Matrix>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'KeyValueRow',
  render: () => <div className="flex flex-col">
      <KeyValueRow label="출전 시간" value="92분" />
      <KeyValueRow label="골 / 도움" value="1 / 1" />
      <KeyValueRow label="이동 거리" value="4.8km" />
      <KeyValueRow label="최고 속도" value="28.4km/h" accent />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'AvatarStack',
  render: () => <Matrix>
      <MatrixRow label="4명">
        <AvatarStack names={['임하준', '최우진', '박지훈', '이도윤']} />
      </MatrixRow>
      <MatrixRow label="9명">
        <AvatarStack names={['임하준', '최우진', '박지훈', '이도윤', '정서준', '강태양', '윤재원', '오시우', '서준혁']} />
      </MatrixRow>
    </Matrix>
}`,...A.parameters?.docs?.source}}}}))();export{k as KeyValues,D as Playground,A as Stack,O as Variants,j as __namedExportsOrder,E as default};