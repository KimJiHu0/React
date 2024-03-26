import { useRef } from 'react';
export default function Sample1() {
    const ref = useRef(0);
    return (
        <>
            {ref.current}{' '}
            <button
                onClick={() => {
                    ref.current = ref.current + 1;
                }}
            >
                더하기
            </button>
        </>
    );
}
