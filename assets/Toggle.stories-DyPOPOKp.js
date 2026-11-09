import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,r,t as i}from"./storyHelpers-DodvrARx.js";import{a,r as o}from"./storyDecorators-FL8HJpQ6.js";import{n as s,t as c}from"./Toggle-BzwH6lZq.js";var l,u,d,f,p,m;e((()=>{s(),r(),o(),l=t(),{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:`Components/Toggle`,component:c,args:{checked:!1,label:`알림`},argTypes:{checked:{control:`boolean`,description:`Figma State`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`],description:`Figma Interaction`},disabled:{control:`boolean`},label:{control:`text`,description:`스크린 리더 이름`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[Figma 128:1649](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=128-1649). 트랙 44x24 알약(radius/full), 노브 20 원형 흰색, 안쪽 여백 2. Off 트랙은 hairline 색, On은 ink. Pressed에서 노브가 24x20 알약으로 늘어난다.

**변경 이력.** 2026-11-09 트랙과 노브를 radius 4에서 알약과 원형으로 바꿨다. Figma 컴포넌트가 먼저 바뀌었고 코드가 따라갔다. 필 금지 규칙에서 Toggle만 예외다. 켜짐과 꺼짐을 한눈에 구분하는 데 스위치의 알약 형태가 플랫폼 관용구라서다.

**용도.** 설정을 켜고 끄는 자리. 즉시 반영되는 값에만 쓰고, 저장 버튼이 따로 있는 폼에서는 Checkbox.

**코드.** role="switch" + aria-checked. 라벨은 label prop 또는 바깥 텍스트의 aria-labelledby.

### 플랫폼 참고

${a([[`트랙`,`52x32dp 필, 선 2dp(Off)`,`51x31pt 캡슐`,`44x24 알약. 두 플랫폼과 같은 관용구를 따른다. 시스템의 필 금지 규칙에서 유일한 인터랙티브 예외(2026-11-09). 트랙 색 대비(hairline vs ink)로 상태를 구분하고 선은 없다`],[`노브`,`Off 16 → On 24 → Pressed 28. On에서 체크 아이콘 선택`,`27, 그림자`,`20 원형, Pressed 24x20 알약. 그림자 없음, 아이콘 없음`],[`On 색`,`primary`,`systemGreen`,`action/secondary(ink). 그린은 텍스트 전용 규칙, 블루는 CTA 전용 규칙`],[`터치 영역`,`48dp`,`44pt`,`트랙 자체는 24. 항상 FormRow(48) 같은 행 안에 두고 행 전체를 탭 영역으로`],[`모션`,`노브 이동 + 크기 변화, 표준 easing`,`스프링`,`너비와 이동만 transition. reduced motion에서 0`]])}`}}}},f={render:function(e){let[,t]=u();return(0,l.jsx)(c,{...e,onChange:n=>{e.onChange?.(n),t({checked:n})}})}},p={name:`State x Interaction`,render:()=>(0,l.jsxs)(i,{children:[(0,l.jsxs)(n,{label:`Off`,children:[(0,l.jsx)(c,{checked:!1,label:`Off`}),(0,l.jsx)(c,{checked:!1,label:`Off hover`,interaction:`hover`}),(0,l.jsx)(c,{checked:!1,label:`Off pressed`,interaction:`pressed`})]}),(0,l.jsxs)(n,{label:`On`,children:[(0,l.jsx)(c,{checked:!0,label:`On`}),(0,l.jsx)(c,{checked:!0,label:`On hover`,interaction:`hover`}),(0,l.jsx)(c,{checked:!0,label:`On pressed`,interaction:`pressed`})]}),(0,l.jsxs)(n,{label:`Disabled`,children:[(0,l.jsx)(c,{checked:!1,label:`Off disabled`,disabled:!0}),(0,l.jsx)(c,{checked:!0,label:`On disabled`,disabled:!0})]})]})},m=[`Playground`,`States`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <Toggle {...args} onChange={checked => {
      args.onChange?.(checked);
      setArgs({
        checked
      });
    }} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'State x Interaction',
  render: () => <Matrix>
      <MatrixRow label="Off">
        <Toggle checked={false} label="Off" />
        <Toggle checked={false} label="Off hover" interaction="hover" />
        <Toggle checked={false} label="Off pressed" interaction="pressed" />
      </MatrixRow>
      <MatrixRow label="On">
        <Toggle checked label="On" />
        <Toggle checked label="On hover" interaction="hover" />
        <Toggle checked label="On pressed" interaction="pressed" />
      </MatrixRow>
      <MatrixRow label="Disabled">
        <Toggle checked={false} label="Off disabled" disabled />
        <Toggle checked label="On disabled" disabled />
      </MatrixRow>
    </Matrix>
}`,...p.parameters?.docs?.source}}}}))();export{f as Playground,p as States,m as __namedExportsOrder,d as default};