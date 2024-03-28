import { useState, useEffect } from 'react';
export default function Sample2() {
    useEffect(() => {
        console.log('Connection...');
        // 클린업
        return () => {
            console.log('Disconnection...');
        };
    }, []);

    return (
        <div>
            <h2>채팅방</h2>
            <div style={{ width: 200, height: 300, border: '1px solid black' }}></div>
        </div>
    );
}
