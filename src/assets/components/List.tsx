export default function List({ products, dispatch }) {
    return (
        <div>
            {products.length == 0 ? (
                <p>재고가 없습니다.</p>
            ) : (
                <ul>
                    {products.map((el, index) => (
                        <li key={el}>
                            {el}
                            <button
                                onClick={(e) => {
                                    dispatch({
                                        type: 'delete',
                                        index: index,
                                    });
                                }}
                            >
                                제거
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
