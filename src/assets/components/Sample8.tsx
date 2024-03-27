import { useRef, forwardRef } from 'react';

const SearchInput = forwardRef((props, ref) => {
    return <input ref={ref} placeholder="Looking for something?" />;
});

const SearchButton = ({ onButton }) => {
    return <button onClick={onButton}>Search</button>;
};

export default function Sample8() {
    const inputRef = useRef(null);

    return (
        <>
            <nav>
                <SearchInput ref={inputRef} />
                <SearchButton
                    onButton={() => {
                        inputRef.current.focus();
                    }}
                />
            </nav>
        </>
    );
}
