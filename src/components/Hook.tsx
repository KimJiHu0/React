import { useEffect, useState, useId } from 'react';
export default function Hook() {
    const [count, setCount] = useState(0);
    const id = useId();

    function plus() {
        // Error
        // console.log(useId());
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(id, count);
    }, [count]);

    return (
        <>
            <button onClick={plus}>+</button>
            {count}
        </>
    );
}
