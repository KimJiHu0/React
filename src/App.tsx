// 동작하지 않음
import { useState } from 'react';

const Button1 = ({ index, handleClick }) => {
    return (
        <p>
            {index} <button onClick={handleClick}>++</button>
        </p>
    );
};

const Button2 = () => {
    const [index, setIndex] = useState(0);
    const handlePlus = () => {
        setIndex(index + 1);
    };

    return (
        <p>
            {index} <button onClick={handlePlus}>++</button>
        </p>
    );
};

// State를 set 후 바로 사용하면 안됨.
const Input = () => {
    const [name, setName] = useState('');
    const onInputClick = () => {
        setName(prompt('이름을 입력해주세요.'));
        console.log(name);
    };
    return (
        <>
            {name}
            <button onClick={onInputClick}>이름 입력하기</button>
        </>
    );
};

export default function App() {
    const [index, setIndex] = useState(0);
    const handleClick = () => {
        setIndex(index + 1);
    };
    return (
        <>
            <h1>State를 공유하는 방법</h1>
            <Button1 index={index} handleClick={handleClick} />
            <Button1 index={index} handleClick={handleClick} />
            <hr />
            <h1>State를 컴포넌트 각각 사용하는 방법</h1>
            <Button2 />
            <Button2 />
            <hr />
            <h1>State후 바로 출력하면 안되는 이유</h1>
            <Input />
        </>
    );
}
