import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,r}from"./storyDecorators-CxjbOeQx.js";import{n as i,r as a,t as o}from"./storyHelpers-DodvrARx.js";import{n as s,t as c}from"./Toggle-Bbhxr1Gj.js";var l,u,d,f,p,m;e((()=>{s(),a(),r(),l=t(),{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:`Components/Toggle`,component:c,args:{checked:!1,label:`알림`},argTypes:{checked:{control:`boolean`,description:`Figma State`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`],description:`Figma Interaction`},disabled:{control:`boolean`},label:{control:`text`,description:`스크린 리더 이름`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[Figma 128:1649](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=128-1649). 트랙 44x24 radius 4, 노브 20 radius 2 흰색. Off 트랙은 hairline 색, On은 ink. Pressed에서 노브가 24로 늘어난다.

**용도.** 설정을 켜고 끄는 자리. 즉시 반영되는 값에만 쓰고, 저장 버튼이 따로 있는 폼에서는 Checkbox.

**코드.** role="switch" + aria-checked. 라벨은 label prop 또는 바깥 텍스트의 aria-labelledby.

### 플랫폼 참고

${n([[`트랙`,`52x32dp 필, 선 2dp(Off)`,`51x31pt 캡슐`,`44x24 radius 4. 필 금지 규칙을 스위치에도 적용. 두 플랫폼 모두 캡슐이라 가장 눈에 띄는 이탈이고, 그래서 트랙 색 대비(hairline vs ink)를 강하게 둔다`],[`노브`,`Off 16 → On 24 → Pressed 28. On에서 체크 아이콘 선택`,`27, 그림자`,`20, Pressed 24. 그림자 없음, 아이콘 없음`],[`On 색`,`primary`,`systemGreen`,`action/secondary(ink). 그린은 텍스트 전용 규칙, 블루는 CTA 전용 규칙`],[`터치 영역`,`48dp`,`44pt`,`트랙 자체는 24. 항상 FormRow(48) 같은 행 안에 두고 행 전체를 탭 영역으로`],[`모션`,`노브 이동 + 크기 변화, 표준 easing`,`스프링`,`너비와 이동만 transition. reduced motion에서 0`]])}`}}}},f={render:function(e){let[,t]=u();return(0,l.jsx)(c,{...e,onChange:n=>{e.onChange?.(n),t({checked:n})}})}},p={name:`State x Interaction`,render:()=>(0,l.jsxs)(o,{children:[(0,l.jsxs)(i,{label:`Off`,children:[(0,l.jsx)(c,{checked:!1,label:`Off`}),(0,l.jsx)(c,{checked:!1,label:`Off hover`,interaction:`hover`}),(0,l.jsx)(c,{checked:!1,label:`Off pressed`,interaction:`pressed`})]}),(0,l.jsxs)(i,{label:`On`,children:[(0,l.jsx)(c,{checked:!0,label:`On`}),(0,l.jsx)(c,{checked:!0,label:`On hover`,interaction:`hover`}),(0,l.jsx)(c,{checked:!0,label:`On pressed`,interaction:`pressed`})]}),(0,l.jsxs)(i,{label:`Disabled`,children:[(0,l.jsx)(c,{checked:!1,label:`Off disabled`,disabled:!0}),(0,l.jsx)(c,{checked:!0,label:`On disabled`,disabled:!0})]})]})},m=[`Playground`,`States`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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