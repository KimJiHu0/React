// 버튼 컴포넌트
const Button1 = function () {
    // onClick에서 함수를 호출하는 두 가지 방법.
    function handleClick() {
        alert('Click!');
    }

    function handleClick2() {
        return () => {
            alert('Click2');
        };
    }

    return (
        <>
            <button onClick={handleClick}>Button1</button>
            <button onClick={handleClick2()}>Button2</button>
        </>
    );
};

// 버튼 컴포넌트
const Button2 = ({ handleClick }) => {
    return <button onClick={handleClick}>Button2</button>;
};

const Button3 = ({ handleClick }) => {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                handleClick();
            }}
        >
            Button3
        </button>
    );
};

const Form = ({ handleClick }) => {
    console.log(handleClick);
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleClick();
                }}
            >
                <input />
                <button>Send</button>
            </form>
        </>
    );
};

export default function App() {
    return (
        <>
            <h1>이벤트(함수)를 호출하는 두 가지 방법</h1>
            <Button1 />
            <hr />
            <h1>이벤트 핸들러 props로 던지기</h1>
            <Button2
                handleClick={() => {
                    alert('Props!');
                }}
            />
            <hr />
            <h1>이벤트 전파 및 전파 중지</h1>
            <div
                onClick={() => {
                    alert('Click Div');
                }}
            >
                <Button3
                    handleClick={() => {
                        alert('Click Button');
                    }}
                />
            </div>
            <hr />
            <h1>이벤트 기본 동작 방지</h1>
            <Form
                handleClick={() => {
                    alert('Form Click');
                }}
            />
        </>
    );
}
