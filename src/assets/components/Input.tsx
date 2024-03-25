export default function Input({ dispatch }) {
    return (
        <div>
            <input id="product" />
            <button
                onClick={(e) => {
                    dispatch({
                        type: 'add',
                        product: document.getElementById('product').value,
                    });
                }}
            >
                추가
            </button>
        </div>
    );
}
