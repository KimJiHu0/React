import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import Sample4 from './assets/components/Sample4';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

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
            <h1>컴포넌트 간에 State 분리</h1>
            <h6>Component 1</h6>
            <Sample2 />
            <h6>Component 2</h6>
            <Sample2 />
        </>
    );
}
