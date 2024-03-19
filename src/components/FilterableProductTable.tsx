import SearchBar from './SearchBar/SearchBar';
import ProductTable from './Product/ProductTable';

import { useState, useEffect } from 'react';

export default function FilterableProductTable({ products }) {
    const [searchText, setSearchText] = useState('');
    const [stock, setStock] = useState(false);

    // ProductTable에서 searchText, stock를 전달하지 않고 바로 filter를 처리해서 던져줘도 되지만
    // 전달받은 ProductTable에서 해도 됨.
    return (
        <div>
            <SearchBar searchText={searchText} setSearchText={setSearchText} stock={stock} setStock={setStock} />
            <ProductTable products={products} searchText={searchText} stock={stock} />
        </div>
    );
}
