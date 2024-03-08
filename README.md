## 컴포넌트 생성 시 주의해야할 사항
- 단일태그인 `<input/>`, `<button/>`, `<br/>`과 같은 태그 외 `<div></div>`, `<p></p>` 태그 등등의 경우에는 닫지 않으면 에러가 발생한다.
- App.jsx처럼 Render가 되어야하는 jsx에서 `return` 시 부모 요소 안에 포함되어 있어야한다.
  만일 `<div></div>`로 감싸지 않을거라면 `<></>`를 사용해도 무방하다. `<></>` == `<Fragment></Fragment>`
  ```
  import Button from './commponents/Button';
  function App() {
      // return <Button></Button>; Error
      // return <><Button></Button></>; 혹은 return <Fragment><Button></Button></Fragment>;
      return <div><Button></Button></div>;
  }
  ```
