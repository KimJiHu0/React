import { useState, useReducer } from 'react';
import Input from './assets/components/Input.js';
import List from './assets/components/List';

import { TasksContext, TasksDispatchContext } from './assets/js/Context.js';

function productReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default function App() {
    const [tasks, dispatch] = useReducer(productReducer, []);

    // function handleAddTask(text) {
    //     dispatch({
    //         type: 'added',
    //         id: nextId++,
    //         text: text,
    //     });
    // }

    // function handleChangeTask(task) {
    //     dispatch({
    //         type: 'changed',
    //         task: task,
    //     });
    // }

    // function handleDeleteTask(taskId) {
    //     dispatch({
    //         type: 'deleted',
    //         id: taskId,
    //     });
    // }

    return (
        <>
            <h1>Prague itinerary</h1>
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    <Input />
                    <List />
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    );
}

// let nextId = 3;
// const initialTasks = [
//     { id: 0, text: 'Visit Kafka Museum', done: true },
//     { id: 1, text: 'Watch a puppet show', done: false },
//     { id: 2, text: 'Lennon Wall pic', done: false },
// ];
