import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,r as a,t as o}from"./storyDecorators-CxjbOeQx.js";import{n as s,t as c}from"./FormRow-DKC_aJUG.js";function l({unit:e,placeholder:t,initial:n=``}){let[r,i]=(0,f.useState)(n);return(0,p.jsx)(c,{label:`경기 이름`,value:r,onChange:i,placeholder:t,unit:e,inputMode:e?`numeric`:void 0})}function u(){let[e,t]=(0,f.useState)(!0);return(0,p.jsx)(c,{type:`toggle`,label:`투표 마감 알림`,checked:e,onChange:t,divider:!1})}function d(){let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(``),[i,a]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`flex flex-col bg-pure-white`,children:[(0,p.jsx)(c,{label:`경기 이름`,value:e,onChange:t,placeholder:`예: 목요일 정기전`}),(0,p.jsx)(c,{type:`select`,label:`경기장`,value:``,placeholder:`경기장을 고르세요`}),(0,p.jsx)(c,{label:`회비`,value:n,onChange:r,unit:`원`,inputMode:`numeric`,placeholder:`0`}),(0,p.jsx)(c,{type:`toggle`,label:`투표 마감 알림`,checked:i,onChange:a,divider:!1})]})}var f,p,m,h,g,_,v,y,b;e((()=>{f=t(n(),1),s(),a(),p=r(),m={title:`Components/FormRow`,component:c,decorators:[o],args:{label:`경기 이름`,value:``},parameters:{docs:{description:{component:`[FormRow 107:774](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=107-774), [Form 107:775](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=107-775). Type Text | Select | Toggle.

**구조.** 폭 354. 라벨(body/regular, text/secondary)이 위, 값 칸 48이 아래. 좌우 패딩 16. 행 사이는 hairline 하나. 외곽선 박스 금지. 숫자 입력은 unit으로 단위를 오른쪽 60 폭에 붙인다. Select는 오른쪽 쉐브론 24, Toggle은 라벨 왼쪽 토글 오른쪽 한 줄.

**용도.** 여러 값을 받는 폼. 화면의 주인공 값 하나는 LargeField.

### 플랫폼 참고

${i([[`형태`,`Filled(56dp, 상단 radius 4, 밑줄) 또는 Outlined. 라벨이 떠오르는 floating label`,`테두리 없는 행. Inset grouped list 안에 라벨 왼쪽 값 오른쪽, 또는 플레이스홀더만`,`라벨 위 값 아래 2단, hairline 구분. 박스 없음. HIG 그룹 목록 계열이되 라벨을 위에 두어 값 폭 354를 다 쓴다`],[`라벨`,`컨테이너 안, 포커스 시 위로 이동(애니메이션)`,`행 왼쪽 고정`,`값 위 고정. 움직이지 않아 레이아웃이 흔들리지 않고, Figma 변형 수가 준다`],[`포커스`,`밑줄 2dp primary + 라벨 primary`,`캐럿만, 키보드 등장`,`캐럿 ink + 키보드 포커스 링(2px ink, 안쪽). 밑줄과 라벨 색 변화 없음`],[`단위와 접미사`,`Suffix text, 컨테이너 안 오른쪽`,`없음(라벨에 포함)`,`오른쪽 60 폭 text/tertiary. Text 타입에만`],[`오류`,`error 색 밑줄 + supporting text`,`없음(알럿)`,`행 아래 status/danger 메시지(별도 컴포넌트). 입력 선을 빨갛게 바꾸지 않는다`],[`높이`,`56dp`,`44pt`,`값 칸 48 + 라벨 행. 48은 HIG 44보다 4 커서 한 손 입력 오타를 줄인다`]])}`}}}},h={render:()=>(0,p.jsx)(l,{placeholder:`예: 목요일 정기전`})},g={name:`Text Empty / Filled / Unit`,render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col`,children:[(0,p.jsx)(c,{label:`경기 이름`,value:``,placeholder:`예: 목요일 정기전`}),(0,p.jsx)(c,{label:`경기 이름`,value:`목요일 정기전`}),(0,p.jsx)(c,{label:`회비`,value:`15,000`,unit:`원`,inputMode:`numeric`,divider:!1})]})},_={parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:`플레이스홀더(text/tertiary 2.8:1)는 대비 검사에서 제외한다. 읽어야 하는 정보를 넣지 않는 규칙으로 보완하고, 값이 없을 때는 라벨이 정보를 대신한다.`}}},render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col`,children:[(0,p.jsx)(c,{type:`select`,label:`경기장`,value:``,placeholder:`경기장을 고르세요`}),(0,p.jsx)(c,{type:`select`,label:`경기장`,value:`잠실 풋살장 A`,divider:!1})]})},v={name:`Toggle`,render:()=>(0,p.jsx)(u,{})},y={name:`Form 묶음`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:`Form 107:775. 행 간격 0, hairline으로만 구분. 마지막 행은 divider를 끈다. Select 플레이스홀더 때문에 대비 검사 제외.`}}},render:()=>(0,p.jsx)(d,{})},b=[`Text`,`TextStates`,`Select`,`ToggleRow`,`Form`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <TextDemo placeholder="예: 목요일 정기전" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Text Empty / Filled / Unit',
  render: () => <div className="flex flex-col">
      <FormRow label="경기 이름" value="" placeholder="예: 목요일 정기전" />
      <FormRow label="경기 이름" value="목요일 정기전" />
      <FormRow label="회비" value="15,000" unit="원" inputMode="numeric" divider={false} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      description: {
        story: '플레이스홀더(text/tertiary 2.8:1)는 대비 검사에서 제외한다. 읽어야 하는 정보를 넣지 않는 규칙으로 보완하고, 값이 없을 때는 라벨이 정보를 대신한다.'
      }
    }
  },
  render: () => <div className="flex flex-col">
      <FormRow type="select" label="경기장" value="" placeholder="경기장을 고르세요" />
      <FormRow type="select" label="경기장" value="잠실 풋살장 A" divider={false} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Toggle',
  render: () => <ToggleDemo />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Form 묶음',
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      description: {
        story: 'Form 107:775. 행 간격 0, hairline으로만 구분. 마지막 행은 divider를 끈다. Select 플레이스홀더 때문에 대비 검사 제외.'
      }
    }
  },
  render: () => <FormDemo />
}`,...y.parameters?.docs?.source}}}}))();export{y as Form,_ as Select,h as Text,g as TextStates,v as ToggleRow,b as __namedExportsOrder,m as default};