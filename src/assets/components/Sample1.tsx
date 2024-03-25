// State 그룹화
import { useState } from 'react';
export default function Sample1() {
    // 아래처럼 x와 y의 값을 분리할 경우 x,y에 대한 set을 하나하나 해줘야하는 경우가 발생
    // 또한 개발자의 실수로 인해 사이드이펙트가 발생할 수 있음.

    /*
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onChangePosition = (e) => {
        const target = e.target.name;
        const value = e.target.value;

        if (target === 'x') setX(value);
        else setY(value);
    };

    return (
        <>
            <div>
                X좌표값 변경 <input name="x" value={x} onChange={onChangePosition} />
            </div>
            <div>
                Y좌표값 변경 <input name="y" value={y} onChange={onChangePosition} />
            </div>
            <p>X좌표값 : {x}</p>
            <p>Y좌표값 : {y}</p>
        </>
    );
    */

    // 그룹화 진행
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const onChangePosition = (e) => {
        const target = e.target.name;
        const value = e.target.value;
        setPosition((prev) => ({ ...prev, [target]: value }));
    };

    return (
        <>
            <div>
                X좌표값 변경 <input name="x" value={position.x} onChange={onChangePosition} />
            </div>
            <div>
                Y좌표값 변경 <input name="y" value={position.y} onChange={onChangePosition} />
            </div>
            <p>X좌표값 : {position.x}</p>
            <p>Y좌표값 : {position.y}</p>
        </>
    );
}
