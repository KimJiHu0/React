import '../assets/css/style.css';
import { useState } from 'react';

export default function Square() {
    const [value, setValue] = useState(' ');

    function squareClick() {
        setValue('X');
    }

    return (
        <button className="square" onClick={squareClick}>
            {value}
        </button>
    );
}
