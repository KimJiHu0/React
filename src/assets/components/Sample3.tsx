import { useRef } from 'react';

export default function Sample3() {
    // 클릭한 HTML이 담길 REF
    const itemsRef = useRef(null);

    const getMap = () => {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    };

    // 버튼 클릭 시
    const scrollToId = (itemId) => {
        // Map으로 Ref의 현재값 가져옴.
        const map = getMap();
        // 클릭한 id를 찾아서 node에 담아준다음에
        const node = map.get(itemId);
        // 해당 이미지로 이동하는 함수 호출
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };

    return (
        <>
            <nav>
                {personList.map((el) => (
                    <button onClick={() => scrollToId(el.id)}>{el.name}</button>
                ))}
            </nav>
            <div>
                <ul>
                    {personList.map((person) => (
                        <li
                            key={person.id}
                            ref={(node) => {
                                // node : 현재 노드
                                // map은 현재 ref의 값
                                const map = getMap();
                                // 현재 노드가 있을 경우에는
                                if (node) {
                                    // map에 담아주고
                                    map.set(person.id, node);
                                } else {
                                    // 없을 경우에는 삭제
                                    map.delete(person.id);
                                }
                            }}
                        >
                            <img src={person.imageUrl} alt={'person #' + person.id} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const personList = [
    {
        id: 0,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM0',
    },
    {
        id: 1,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM1',
    },
    {
        id: 2,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM2',
    },
    {
        id: 3,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM3',
    },
    {
        id: 4,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM4',
    },
    {
        id: 5,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM5',
    },
    {
        id: 6,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM6',
    },
    {
        id: 7,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM7',
    },
    {
        id: 8,
        imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
        name: 'KIM8',
    },
];
