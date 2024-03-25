import { useReducer } from 'react';

import Input from './assets/components/Input';
import List from './assets/components/List';
// 외부에서 선언한 Reducer Import
import { customReducer } from './assets/js/customReducer.js';

export default function App() {
    // state와 dispatch 선언
    const [products, dispatch] = useReducer(customReducer, []);
    return (
        <>
            <h1>재고 목록</h1>
            <Input dispatch={dispatch} />
            <List products={products} dispatch={dispatch} />
        </>
    );
}
