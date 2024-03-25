// State 모순 피하기
import { useState } from 'react';
export default function Sample2() {
    // checked와 unChecked는 동시에 true가 될 수 없는 구조이다.
    // 이럴 경우에는 하나의 State만 사용하는 것이 좋다.
    /*
    const [isChecked, setIsChecked] = useState(false);
    const [isUnChecked, setIsUnChecked] = useState(true);

    const onChecked = (e) => {
        setIsChecked(!isChecked);
        setIsUnChecked(!isUnChecked);
    };
    return (
        <>
            <p>체크됐니? : {isChecked ? '네' : '아니요'}</p>
            <p>체크안됐니? : {isUnChecked ? '네' : '아니요'}</p>
            <label id="check">
                체크여부
                <input id="check" type="checkbox" onChange={onChecked} />
            </label>
        </>
    );
    */
    const [isChecked, setIsChecked] = useState(false);
    const onChecked = (e) => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <p>체크됐니? : {isChecked ? '네' : '아니요'}</p>
            <label htmlFor="check">
                체크여부
                <input id="check" type="checkbox" onChange={onChecked} />
            </label>
        </>
    );
}
