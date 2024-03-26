import { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from '../js/Context.js';

export default function Input() {
    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    const [text, setText] = useState('');
    let nextId = tasks.length;
    return (
        <>
            <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            <button
                onClick={() => {
                    setText('');
                    dispatch({
                        type: 'added',
                        id: nextId++,
                        text: text,
                    });
                }}
            >
                Add
            </button>
        </>
    );
}
