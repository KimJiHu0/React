import { useState, useRef } from 'react';
export default function Sample1() {
    const [toggle, setToggle] = useState(false);
    const ref = useRef(0);
    return (
        <>
            {ref.current}{' '}
            <button
                onClick={() => {
                    setToggle(!toggle);
                    ref.current = ref.current + 1;
                }}
            >
                더하기
            </button>
        </>
    );
}
