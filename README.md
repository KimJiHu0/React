## Component

> 컴포넌트란 JSX, CSS, JS로 이루어진 UI요소의 사용자 정의 마크업을 의미한다. 이는 재사용할 때 용이하다.

```
function Profile(){
    return <img src="url..."/>
}

export default function App() {
    return <>
        <Profile/>
        <Profile/>
        <Profile/>
    </>
}
```

> 컴포넌트를 내보낼 때에는 `export default function App() {}` 형태로 사용한다. 이 외에 `const`를 사용할 수 있지만 다음에 제대로 알아볼 수 있도록 하자.

> 만일 Component에서 여러 줄의 태그를 return해야할 경우 괄호로 묶어야 한다. 만일 여러줄을 return해야할 때 괄호로 묶지 않는다면 return에서 끝나서 그 밑 마크업 부분은 랜더링 되지 않는다.

```
// 한줄일 경우
return <button>버튼</button>
// 여러줄일 경우
return (
    <div>
        <button>버튼</button>
    </div>
)
// 괄호 안하게 되면 return에서 세미콜론이 찍히며 무시된다.
return;
// 아래 부분은 무시됨.
<div>
    <button>버튼</button>
</div>
```

> Component 안에 Component를 생성하는 방법은 동작하지만 매우 느리며 버그를 유발할 수 있기 때문에 지양해야 한다. 그 이유는 Gallery의 State가 변경될 때마다 랜더링이 다시 되는데 그 안에 선언한 Profile 역시 다시 동작하며 성능을 느리게 만들기 때문이다.

```
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
--------------------------------------------------------------
export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}
```

---

## import & export
