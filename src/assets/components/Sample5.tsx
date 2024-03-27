import '../css/todo.css';

import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function Sample5() {
    const listRef = useRef(null);
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useState([]);
    return (
        <div>
            <h2>TodoList 만들기</h2>
            <input
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (todoList.includes(text) || text === '' || text === null) return false;
                    // List에 추가
                    // flushSync를 쓰지 않으면 방금 '11'을 추가했어도 추가되지 않은
                    // todoList가 ref에서 감지하여 맨 마지막 항목의 위에 있는 항목으로
                    // 이동하게 되므려 아래 flushSync를 써줘서 처리가 된 다음에 이동할 수 있도록
                    // 설정해야한다.
                    flushSync(() => {
                        setTodoList([...todoList, text]);
                        setText('');
                    });
                    // 최하단으로 이동
                    listRef.current.lastChild.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    });
                }}
            >
                ADD
            </button>
            <div className="layout">
                {todoList.length === 0 ? (
                    <p>할 일이 없습니다.</p>
                ) : (
                    <div ref={listRef}>
                        {todoList.map((el) => (
                            <div className="todo-layout">
                                <div className="dot"></div>
                                <div>{el}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
