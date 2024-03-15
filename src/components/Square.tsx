import '../assets/css/style.css';
import { useState } from 'react';

export default function Square({ value, buttonClick }) {
    return (
        <button className="square" onClick={buttonClick}>
            {value ? value : '-'}
        </button>
    );
}
