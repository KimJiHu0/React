export default function Items({ items }) {
    return (
        <>
            <ul>
                {items.map((element, index) => {
                    return (
                        <li key={index}>
                            {/* {element.name} {element.isPacked ? '✔' : null} */}
                            {/* {element.name} {element.isPacked && '✔'} */}
                            {element.name} {!!1 && '✔'}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
