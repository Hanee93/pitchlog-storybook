import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,r}from"./storyDecorators-CxjbOeQx.js";import{n as i,t as a}from"./Avatar-DLxaH0rS.js";import{n as o,r as s,t as c}from"./storyHelpers-DodvrARx.js";var l,u,d,f,p,m;e((()=>{i(),s(),r(),l=t(),u=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22%23077a45%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2230%22%20r%3D%2214%22%20fill%3D%22%23e4ff4d%22%2F%3E%3Crect%20x%3D%2216%22%20y%3D%2250%22%20width%3D%2248%22%20height%3D%2230%22%20rx%3D%2212%22%20fill%3D%22%23e4ff4d%22%2F%3E%3C%2Fsvg%3E`,d={title:`Components/Avatar`,component:a,args:{name:`김민수`,size:`md`,showLabel:!1},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`24 / 32 / 40 / 56 / 80`},src:{control:`text`,description:`Figma Type = Photo`},showLabel:{control:`boolean`,description:`Figma Show label`},onEdit:{action:`edit`,description:`Figma Show edit. 있으면 수정 버튼`}},parameters:{docs:{description:{component:`[Figma 77:698](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=77-698). Type 2 x Size 5 = 10 변형. xs 24, sm 32, md 40, lg 56, xl 80. 원형이 허용되는 세 자리(아바타, 라이브 점, 순위 마커) 중 하나.

**규칙.** Initial은 ink 바탕에 흰 글자 한 자, Photo는 이미지 채움. 라벨은 아래 caption text/secondary. 수정 버튼은 내 프로필(md 이상)에만, ink 원형에 흰 테두리.

### 플랫폼 참고

${n([[`대응 요소`,`전용 컴포넌트 없음. List item의 leading avatar 40dp, Navigation drawer 등`,`전용 컴포넌트 없음. 연락처의 이니셜 원형(monogram)`,`전용 컴포넌트. 5단계 크기를 size 토큰으로 고정`],[`모양`,`원형`,`원형`,`원형. 시스템에서 원형이 허용되는 예외 자리`],[`이니셜`,`Tonal(primary-container) 배경에 한 글자`,`회색 그라데이션 배경에 이니셜`,`ink 배경 + 흰 글자. 색 배경을 두지 않아 유채색 규칙과 충돌하지 않는다`],[`크기`,`40dp(리스트), 24dp(칩), 자유`,`자유`,`24 / 32 / 40 / 56 / 80. 리스트 메타, 리스트 행, 헤더, 상세 상단, MY 프로필`],[`편집 배지`,`없음`,`없음`,`우하단 ink 원형 + Edit 아이콘, 내 프로필에만`]])}`}}}},f={},p={render:()=>(0,l.jsxs)(c,{children:[(0,l.jsxs)(o,{label:`Initial`,children:[(0,l.jsx)(a,{name:`김민수`,size:`xs`}),(0,l.jsx)(a,{name:`김민수`,size:`sm`}),(0,l.jsx)(a,{name:`김민수`,size:`md`}),(0,l.jsx)(a,{name:`김민수`,size:`lg`}),(0,l.jsx)(a,{name:`김민수`,size:`xl`})]}),(0,l.jsxs)(o,{label:`Photo`,children:[(0,l.jsx)(a,{name:`박지훈`,src:u,size:`xs`}),(0,l.jsx)(a,{name:`박지훈`,src:u,size:`sm`}),(0,l.jsx)(a,{name:`박지훈`,src:u,size:`md`}),(0,l.jsx)(a,{name:`박지훈`,src:u,size:`lg`}),(0,l.jsx)(a,{name:`박지훈`,src:u,size:`xl`})]}),(0,l.jsxs)(o,{label:`Label, Edit`,children:[(0,l.jsx)(a,{name:`김민수`,size:`md`,showLabel:!0}),(0,l.jsx)(a,{name:`김민수`,size:`xl`,showLabel:!0,onEdit:()=>{}})]})]})},m=[`Playground`,`Sizes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix>
      <MatrixRow label="Initial">
        <Avatar name="김민수" size="xs" />
        <Avatar name="김민수" size="sm" />
        <Avatar name="김민수" size="md" />
        <Avatar name="김민수" size="lg" />
        <Avatar name="김민수" size="xl" />
      </MatrixRow>
      <MatrixRow label="Photo">
        <Avatar name="박지훈" src={photo} size="xs" />
        <Avatar name="박지훈" src={photo} size="sm" />
        <Avatar name="박지훈" src={photo} size="md" />
        <Avatar name="박지훈" src={photo} size="lg" />
        <Avatar name="박지훈" src={photo} size="xl" />
      </MatrixRow>
      <MatrixRow label="Label, Edit">
        <Avatar name="김민수" size="md" showLabel />
        <Avatar name="김민수" size="xl" showLabel onEdit={() => {}} />
      </MatrixRow>
    </Matrix>
}`,...p.parameters?.docs?.source}}}}))();export{f as Playground,p as Sizes,m as __namedExportsOrder,d as default};