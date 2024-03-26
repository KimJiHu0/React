import { useState, useRef } from 'react';
export default function Sample1() {
    const [text, setText] = useState('');
    const ref = useRef(0);

    const handleSend = () => {
        setTimeout(() => {
            alert('Sending: ' + text);
        }, 3000);
    };

    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
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
