import { useState } from 'react';
export default function View() {
    const [count, setCount] = useState(0);

    function minus() {
        setCount(count - 1);
    }

    function plus() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={minus}>-</button>
            {count}
            <button onClick={plus}>+</button>
        </>
    );
}
