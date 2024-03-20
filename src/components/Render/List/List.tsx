List.Map = function () {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist',
    ];

    return (
        <>
            <h3>Map 사용</h3>
            <ul>
                {people.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </>
    );
};

List.Filter = function () {
    const people = [
        {
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        },
        {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        },
        {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        },
        {
            name: 'Percy Lavon Julian',
            profession: 'chemist',
        },
        {
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        },
    ].filter((el) => el.profession === 'chemist');

    return (
        <>
            <h3>Filter 사용</h3>
            <ul>
                {people.map((el, index) => (
                    <li key={index}>
                        {el.name} / {el.profession}
                    </li>
                ))}
            </ul>
        </>
    );
};

export function List() {
    return (
        <>
            <List.Map></List.Map>
            <List.Filter></List.Filter>
        </>
    );
}
