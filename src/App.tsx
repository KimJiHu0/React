import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    const [index, setIndex] = useState(0);

    return (
        <>
            <h1>컴포넌트 간에 State 공유</h1>
            <label htmlFor="name">
                <button
                    id="name"
                    onClick={(e) => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
                <button
                    id="name"
                    onClick={(e) => {
                        setCount(count - 1);
                    }}
                >
                    -
                </button>
            </label>
            <h4>Component 1</h4>
            <Sample1 count={count} />
            <h4>Component 2</h4>
            <Sample1 count={count} />
            <hr />
            <h1>State의 값 부모에서 관리하기</h1>
            <Sample2 title={'1번 글'} isActive={index === 0} onShow={() => setIndex(0)}>
                1번 글에 대한 설명입니다. 해당 글은 ...
            </Sample2>
            <Sample2 title={'2번 글'} isActive={index === 1} onShow={() => setIndex(1)}>
                2번 글에 대한 설명입니다. 해당 글은 ...
            </Sample2>
            <hr />
            <h1>컴포넌트 간에 State 분리</h1>
            <h6>Component 1</h6>
            <Sample3 />
            <h6>Component 2</h6>
            <Sample3 />
        </>
    );
}
