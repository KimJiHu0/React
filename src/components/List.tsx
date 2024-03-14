// 목록 List 랜더링
export default function List() {
    const list = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Applt', id: 3 },
    ];

    return (
        <>
            <ul>
                {list.map((element) => (
                    <li key={element.id}>{element.title}</li>
                ))}
            </ul>
        </>
    );
}
