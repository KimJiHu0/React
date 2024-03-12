### 컴포넌트 생성 시 주의해야할 사항

-   단일태그인 `<input/>`, `<button/>`, `<br/>`과 같은 태그 외 `<div></div>`, `<p></p>` 태그 등등의 경우에는 닫지 않으면 에러가 발생한다.
-   컴포넌트형 함수에서 여러 개의 태그를 return할 경우 꼭 감싸주는 태그가 있어야한다.

```
// 하나의 태그만 return 하는 경우
function A() {
  return <button></button>;
}
// 여러 개의 태그를 return 하는 경우
// Error 상황
function A() {
  return <label></label><input/>
}
// Not Error 상황
function A(){
  return <>
    <label></laebl>
    <input/>
  </>
}
```

---

### Style 적용할 때 주의사항

> React의 JSX 문법과 일반 html에서 사용하는 문법이 다를 수 있기 때문에 문서를 참고하여 작업하는 것을 추천한다.

> Class Attribute를 넣을 때에는 `class=""`가 아닌 `className=""`으로 넣어야한다.

```
// Error
<div class="">
// Not Error
<div className="">
```

> `<label>` 태그의 for 역시 `for=""`이 아닌 `htmlFor=""`로 지정해야 한다.

```
// Error
<label for=""></label>
// Not Error
<label htmlFor=""></label>
```

---

### 데이터를 Component 뿌려주기

> JSX에서 데이터를 뿌려줄 때에는 {}를 사용한다. 다만 in-line Style인 경우 기본적으로 {}을 사용하는데, 데이터를 그 안에 넣고 싶을 경우에는 {{}} 로 사용한다. 또한 in-line Style의 경우 `background-color`처럼 하이폰을 사용해선 안되고 `backgroundColor` 처럼 카멜케이스를 사용한다.

```
<input value={10 + 20}/>

const style = {
  size: 10,
  background: 'black'
}
<div style={{width: style.size, height: style.size, backgroundColor: style.background}}></div>
```
