### 컴포넌트 생성 시 주의해야할 사항

> 단일태그인 `<input/>`, `<button/>`, `<br/>`과 같은 태그 외 `<div></div>`, `<p></p>` 태그 등등의 경우에는 닫지 않으면 에러가 발생한다.
> 컴포넌트형 함수에서 여러 개의 태그를 return할 경우 꼭 감싸주는 태그가 있어야한다.

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

### 데이터를 Component 출력 시 주의사항

> JSX에서 데이터를 뿌려줄 때에는 {}를 사용한다. 다만 in-line Style인 경우 기본적으로 {}을 사용하는데, 데이터를 그 안에 넣고 싶을 경우에는 {{}} 로 사용한다. 또한 in-line Style의 경우 `background-color`처럼 하이폰을 사용해선 안되고 `backgroundColor` 처럼 카멜케이스를 사용한다.

```
<input value={10 + 20}/>

const style = {
  size: 10,
  background: 'black'
}
<div style={{width: style.size, height: style.size, backgroundColor: style.background}}></div>
```

---

### 조건부 랜더링

> 조건부 랜더링 시 `&&`연산자를 사용하는 경우가 있는데, 그 때 받는 값이 0일 때에는 `false`라서 조건에 타진 않지만 0이라는 값이 찍히게 된다. 이러한 실수가 많이 발생하기 때문에 조건부 랜더링 시 `if...else`를 사용하거나 `condifion ? true일 경우 : false일 경우` 식을 써주는 것이 좋다.

---

### 목록 LIST 랜더링

> 배열을 순회하며 태그를 만들어 놓은 변수를 `return`해도 되며, `return`안에서 배열을 순회해서 필요한 부분만 만들어도 된다.

> `react_jsx-dev-runtime.js?v=bfbc4c87:62 Warning: Each child in a list should have a unique "key" prop.` 만일 배열을 순회하며 태그를 생성할 때 key Attribute를 넣지 않으면 위와 같은 에러가 발생할 수 있으니 꼭 추가해야한다.

```
export default function Test() {
  const list = [1,2,3];
  return <>
    <ul>
      list.map(el => <li>{el}</li>)
    </ul>
  </>
}
```

---

### 이벤트 응답하기

> onClick에 괄호를 쓴 것과 안쓴 것은 차이가 있다.

-   `clickFunction` 일 경우

    ```
    // 이벤트 응답하기
    export default function Button() {
        // 내부 함수로 이벤트 응답하기
        function clickFunction() {
            alert('Click!');
        }
        return <button onClick={clickFunction}>Click</button>;
    }

    ```

    return이 없는 실행형 함수이다. onClick, onChange 등등 Attribute는 함수를 받아야하는 이벤트로서 clickFunction을 함수로 선언하면 된다.

-   `clickFunction()` 일 경우

    ```
    // 이벤트 응답하기
    export default function Button() {
        // 내부 함수로 이벤트 응답하기
        function clickFunction() {
            return () => {
                alert('Hi')
            }
        }
        return <button onClick={clickFunction()}>Click</button>;
    }

    ```

    만일 위 예제처럼 return이 없는 실행형 함수는 애플리케이션이 실행하자마자 함수가 두 번 실행된다. 이는 main.tsx에서 `<React.StrictMode>` 때문이다. 이 태그는 스크립트가 올바른지 확인하기 위해 두 번 실행하여 발생한다.
    `clickFunction()`으로 선언한 경우 clickFunction 함수는 함수를 return하는 함수여야 한다.
