import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({ products, searchText, stock }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        // 대소문자 구분하여 검색어와 맞는게 없다면 return;
        if (!product.name.toLowerCase().includes(searchText.toLowerCase())) return;
        // 재고여부에 대한 조건부
        if (stock && !product.stocked) return;
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
