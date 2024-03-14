// 이벤트 응답하기
export default function Button(props) {
    console.log(props);
    // 내부 함수로 이벤트 응답하기
    function clickFunction(data) {
        return () => {
            console.log(data);
        };
    }
    // onClick={(props) => alert(props)}
    // 괄호는 무조건 빼고 사용해야한다.
    return <button onClick={clickFunction(props.data)}>Click</button>;
}
