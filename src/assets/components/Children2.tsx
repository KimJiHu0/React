import { useContext } from 'react';
import { Context } from '../js/Context.js';

export default function Children2() {
    const data = useContext(Context);
    return (
        <div style={{ border: '1px solid blue' }}>
            <h3>Children2</h3>
            {data}
        </div>
    );
}
