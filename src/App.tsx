// 동작하지 않음
import { useState } from 'react';

// 버튼을 클릭하면 상위의 State가 변경되고 이를 props로 전달받은 Button1 컴포넌트는
// 버튼을 클릭 시 리랜더링이 된다.
const Button1 = ({ index, handleClick }) => {
    return (
        <>
            {index} <button onClick={handleClick}>++</button>
        </>
    );
};

// props로 상위의 State를 전달받지 않은 Text 컴포넌트는 State가 변경이 되더라도
// 리랜더링이 되지 않는다.
const Text = () => {
    return <p>'Hi, LEE!'</p>;
};

export default function App() {
    const [index, setIndex] = useState(0);
    const handleClick = () => {
        setIndex(index + 1);
    };
    return (
        <>
            <Button1 index={index} handleClick={handleClick} />
            <Text />
        </>
    );
}
