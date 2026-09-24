import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,r}from"./storyDecorators-CxjbOeQx.js";import{n as i,r as a,t as o}from"./storyHelpers-DodvrARx.js";import{n as s,t as c}from"./Badge-BmIrkUMe.js";var l,u=e((()=>{l=[`filled-neutral`,`filled-volt`,`filled-green`,`filled-red`,`tint-neutral`,`tint-volt`,`tint-blue`,`tint-orange`,`tint-green`,`tint-red`,`outline-neutral`]})),d,f,p,m,h;e((()=>{s(),u(),a(),r(),d=t(),f={title:`Components/Badge`,component:c,args:{children:`MVP`,variant:`filled-neutral`,dot:!1},argTypes:{variant:{control:`select`,options:l,description:`Figma Style + Tone. 존재하는 11개 조합`},dot:{control:`boolean`,description:`Figma Show dot`},children:{control:`text`,description:`Figma Label`}},parameters:{docs:{description:{component:`[Figma 110:1034](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=110-1034). Style 3 x Tone 6 중 존재하는 11 변형. 높이 24, caption/strong 12 600, radius 4, 좌우 패딩 8.

**규칙.** Filled는 ink 바탕 + 흰 글자(Green은 status/success, Red는 status/danger 바탕, Volt는 ink 바탕 + volt 글자). Tint는 옅은 배경 + ink 글자이되 Volt만 원색(영상 문맥 표식), Red는 danger-tint + danger 글자. Outline은 hairline 선. 점은 status/success 6.

**용도 예.** MVP와 홈은 Filled Neutral, MOM은 Filled Volt, 기록은 Tint Blue, 클립은 Tint Volt, 포지션은 Tint Neutral, 1위는 Tint Orange, 참석은 Tint Green, 참석 확정은 Filled Green, 어웨이는 Outline, 트래킹 중은 Outline + 점, 미납은 Tint Red.

### 플랫폼 참고

${n([[`대응 요소`,`Badge는 아이콘 위 6dp 점 또는 16dp 숫자(error 색)뿐. 라벨 태그는 Chip(Assist / Filter / Input / Suggestion, 32dp, radius 8)`,`앱 아이콘과 탭바의 빨간 숫자 뱃지뿐. 라벨 태그는 네이티브 컴포넌트 없음`,`라벨 태그. 24 높이, radius 4. M3 Chip보다 8 낮고 누를 수 없다(누르는 것은 FilterChip 36)`],[`색 체계`,`Chip은 outline 또는 secondary-container 하나`,`해당 없음`,`Tone 6개가 컬러 층(기록 blue, 장면 volt, 상태 green/red, 순위 orange)을 그대로 따른다. 뱃지 색이 곧 문맥이라 층을 섞지 않는다`],[`모양`,`Chip radius 8, Badge 원형`,`원형(캡슐)`,`radius 4. 필 금지`],[`상태 점`,`없음(Badge 자체가 점)`,`없음`,`status/success 6 점. 트래킹 중 표시에만`]])}`}}}},p={},m={name:`11 변형`,parameters:{docs:{description:{story:`2026-09-24 pitch-green과 status/danger를 어둡게 바꿔 Filled Green(5.4:1)과 Tint Red(5.1:1)가 대비를 통과한다.`}}},render:()=>(0,d.jsxs)(o,{children:[(0,d.jsxs)(i,{label:`Filled`,children:[(0,d.jsx)(c,{variant:`filled-neutral`,children:`MVP`}),(0,d.jsx)(c,{variant:`filled-volt`,children:`MOM`}),(0,d.jsx)(c,{variant:`filled-green`,children:`참석 확정`}),(0,d.jsx)(c,{variant:`filled-red`,children:`경고`})]}),(0,d.jsxs)(i,{label:`Tint`,children:[(0,d.jsx)(c,{variant:`tint-neutral`,children:`GK`}),(0,d.jsx)(c,{variant:`tint-volt`,children:`클립 3`}),(0,d.jsx)(c,{variant:`tint-blue`,children:`팀 신기록`}),(0,d.jsx)(c,{variant:`tint-orange`,children:`1위`}),(0,d.jsx)(c,{variant:`tint-green`,children:`참석`}),(0,d.jsx)(c,{variant:`tint-red`,children:`미납`})]}),(0,d.jsxs)(i,{label:`Outline`,children:[(0,d.jsx)(c,{variant:`outline-neutral`,children:`어웨이`}),(0,d.jsx)(c,{variant:`outline-neutral`,dot:!0,children:`트래킹 중`})]})]})},h=[`Playground`,`All`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '11 변형',
  parameters: {
    docs: {
      description: {
        story: '2026-09-24 pitch-green과 status/danger를 어둡게 바꿔 Filled Green(5.4:1)과 Tint Red(5.1:1)가 대비를 통과한다.'
      }
    }
  },
  render: () => <Matrix>
      <MatrixRow label="Filled">
        <Badge variant="filled-neutral">MVP</Badge>
        <Badge variant="filled-volt">MOM</Badge>
        <Badge variant="filled-green">참석 확정</Badge>
        <Badge variant="filled-red">경고</Badge>
      </MatrixRow>
      <MatrixRow label="Tint">
        <Badge variant="tint-neutral">GK</Badge>
        <Badge variant="tint-volt">클립 3</Badge>
        <Badge variant="tint-blue">팀 신기록</Badge>
        <Badge variant="tint-orange">1위</Badge>
        <Badge variant="tint-green">참석</Badge>
        <Badge variant="tint-red">미납</Badge>
      </MatrixRow>
      <MatrixRow label="Outline">
        <Badge variant="outline-neutral">어웨이</Badge>
        <Badge variant="outline-neutral" dot>트래킹 중</Badge>
      </MatrixRow>
    </Matrix>
}`,...m.parameters?.docs?.source}}}}))();export{m as All,p as Playground,h as __namedExportsOrder,f as default};