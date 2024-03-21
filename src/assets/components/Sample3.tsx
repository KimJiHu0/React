import { useState } from 'react';
export default function Sample3() {
    // 뿌려줄 배열
    const [list, setList] = useState([]);
    // 추가,삭제가 이루어질 State
    const [commandWord, setCommandWord] = useState('');

    // 추가
    const add = () => {
        if (list.includes(commandWord)) {
            return false;
        }
        setList((prev) => {
            const newList = [...list];
            newList.push(commandWord);
            return newList;
        });
        // 에라발생
        // setList(list.push(commandWord));
        setCommandWord('');
    };

    // 제거
    const remove = () => {
        if (!list.includes(commandWord)) {
            return false;
        }
        setList(() => {
            const newList = list.slice();
            const index = list.indexOf(commandWord);
            list.pop(index);
            return newList;
        });
        setCommandWord('');
    };

    // 정렬
    const sorting = () => {
        // sort는 원본배열을 정렬하는거라서 참조형인 배열은 변경감지 불가능(값은 변경됨)
        // setList(list.sort());
        setList(() => {
            const newList = list.slice().sort();
            return newList;
        });
    };

    return (
        <>
            <div>
                <input
                    value={commandWord}
                    onChange={(e) => {
                        setCommandWord(e.target.value);
                    }}
                ></input>
                <button onClick={add}>추가</button>
                <button onClick={remove}>삭제</button>
                <button onClick={sorting}>정렬</button>
            </div>
            <div>
                <h3>목록</h3>
                {list.length == 0 ? (
                    <p>목록이 비어있습니다.</p>
                ) : (
                    <ul>
                        {list.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
