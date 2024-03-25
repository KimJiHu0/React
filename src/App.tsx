import Children1 from './assets/components/Children1.js';
import Children2 from './assets/components/Children2.js';

import { useState } from 'react';
import { Context } from './assets/js/Context.js';

export default function App() {
    const [value, setValue] = useState(false);
    const text = value ? '참' : '거짓';
    return (
        <Context.Provider value={text}>
            <div style={{ border: '1px solid black' }}>
                <h1>Parent</h1>
                <button
                    onClick={(e) => {
                        setValue(!value);
                    }}
                >
                    변경
                </button>
                <Children1>
                    <Children2></Children2>
                </Children1>
            </div>
        </Context.Provider>
    );
}
