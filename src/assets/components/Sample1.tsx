import { useState } from 'react';
export default function Sample1() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const [toggle, setToggle] = useState(false);

    // 1. 객체 내부의 값을 바꿨을 때에는 객체의 값은 바뀌었지만 State가 변경을 감지하지 못하여
    // 랜더링이 되지 않아서 동작하지 않는다.
    // 만일 다른 State인 toggle가 변경되어 감지된다면, 랜더링하며 변경된 값 position도
    // 같이 랜더링 되어 클릭했을 때 해당 위치에 포인터가 찍힌다.
    const pointerMove1 = (e) => {
        setPosition((prev) => {
            prev.x = e.clientX;
            prev.y = e.clientY;
            return prev;
        });
    };

    // 2. 객체 자체를 변경하여 React는 이를 감지하고 랜더링을 계속 진행하며 포인터의
    // 위치가 동적으로 변경된다.
    const pointerMove2 = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            onPointerMove={(e) => pointerMove2(e)}
            onClick={() => setToggle(!toggle)}
            style={{
                position: 'relative',
                width: '50vw',
                height: '50vw',
            }}
        >
            <h1>객체 변경하는 방법</h1>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            />
        </div>
    );
}
