import FilterableProductTable from './components/FilterableProductTable';

export default function App() {
    const PRODUCTS = [
        { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
        { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
        { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
        { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
        { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
        { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
    ];

    return <FilterableProductTable products={PRODUCTS} />;
}

/*
    [State 처리할 목록]
    검색어
    재고있는 품목만 보는 CheckBox

    # 상품목록은 변경이 될 가능성이 있다면 State처리하고, 아니면 안해도 됨.
*/
