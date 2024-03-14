// 이벤트 응답하기
export default function Button(props) {
    console.log(props);
    // 내부 함수로 이벤트 응답하기

    // fn1() 으로 호출할 시 return 을 해주는 함수가 필요하다.
    // onClick는 함수를 넣어줘야 하기 때문이다.
    function fn1(data) {
        return () => {
            console.log(data);
        };
    }
    // fn2는 자체가 함수이며 return은 void이다. onClick은 함수를 넣어줘야하기 때문에 fn2 자체를 넣어준다.
    function fn2() {
        console.log('Click2');
    }
    // 괄호는 무조건 빼고 사용해야한다.
    return (
        <>
            <button onClick={fn1(props.data)}>Click1</button>
            <button onClick={fn2}>Click2</button>
        </>
    );
}
