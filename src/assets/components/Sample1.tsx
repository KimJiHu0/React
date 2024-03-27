import { useRef } from 'react';
export default function Sample1() {
    const inputRef = useRef(null);

    const onFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} />
            <button
                onClick={() => {
                    onFocus();
                }}
            >
                Focus
            </button>
        </>
    );
}
