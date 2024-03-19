export default function SearchBar({ searchText, setSearchText, stock, setStock }) {
    return (
        <form>
            <input
                type="text"
                value={searchText}
                placeholder="Search..."
                onChange={(e) => {
                    setSearchText(e.target.value || '');
                }}
            />
            <label>
                <input
                    checked={stock}
                    type="checkbox"
                    onChange={(e) => {
                        setStock(e.target.checked);
                    }}
                />{' '}
                Only show products in stock
            </label>
        </form>
    );
}
