이번 Branch는 State를 유지하고 재설정하는 방법에 대해서 작성합니다.

### 목차

1. State의 위치
    > State는 각각의 Component 내부에 위치한다고 생각할 수 있습니다. 하지만 React 내부에 별도로 존재하고 있습니다. 랜더링 트리에서 해당 컴포넌트의 위치에 따라 보유하고 있는 각 State를 올바른 컴포넌트와 연결해줍니다.
2. State 변경에 따른 랜더링
    > 동일한 Component를 호출하지만 해당 컴포넌트가 Boolean 값에 따라 호출되거나, `null`이 호출되도록 하면 State가 변경됨에 따라 랜더링이 다시 되면서 `false`인 경우 랜더링을 하지 않고, `true`인 경우 랜더링을 하며 State가 초기화 됩니다.
3. 동일한 위치의 동일 컴포넌트는 State 유지
    ```
    {isFancy ? <Sample1 isFancy={true} /> : <Sample1 isFancy={false} />}
    ```
    > 로직을 살펴보면 동일한 위치에 동일한 컴포넌트를 호출하고 있기 때문에 State는 유지됩니다.
4. 동일한 위치의 다른 컴포넌트를 랜더링하면 초기화
    ```
    {isPaused ? <p>See you later!</p> : <Sample1 isFancy={false} />}
    ```
    > 동일한 위치에 Sample1 컴포넌트와 p태그가 랜더링 되게끔 구현했는데, 같은 위치에 다른 컴포넌트를 호출하여 랜더링하면 초기화 됩니다.
5. 동일한 위치에서 State 유지
    ```
    {isPlayerA ? <Sample2 person="Taylor" /> : <Sample2 person="Sarah" />}
    ```
    > 삼항연산자를 통해 같은 위치에 같은 컴포넌트를 랜더링하면 유지할 수 있습니다.
6. 동일한 위치에서 State 재설정
    ```
    {isPlayerA && <Sample2 person="Taylor" />}
    {!isPlayerA && <Sample2 person="Sarah" />}
    ```
    > 위치는 같을 수 있지만 별개의 컴포넌트로서 랜더링 시 재설정 됩니다.
7. key로 State 재설정하기
    ```
    {isPlayerA ? <Sample2 key="Taylor" person="Taylor" /> : <Sample2 key="Sarah" person="Sarah" />}
    ```
    > 이는 동일한 위치에 있더라도 재설정합니다.
    > Key는 Loop문에서만 사용하는게 아닙니다. React는 key로 컴포넌트를 구분합니다. 같은 위치에 같은 컴포넌트를 사용했지만 key를 다르게 부여했기 때문에 재설정이 이뤄집니다.

위 내용에 대한 자세한 설명은 Notions에 정리해두었습니다.

> https://www.notion.so/kimjihu-history/12-State-afc4f524ffba45fa805906f7a60b4a7a
