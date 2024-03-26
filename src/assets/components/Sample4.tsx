import { useState, useRef } from 'react';
export default function Sample1() {
    const ref = useRef(0);

    const handleSend = () => {
        setTimeout(() => {
            alert('Sending: ' + ref.current.value);
        }, 3000);
    };

    return (
        <>
            <input ref={ref} />
            <button
                onClick={() => {
                    handleSend();
                }}
            >
                보내기
            </button>
        </>
    );
}
