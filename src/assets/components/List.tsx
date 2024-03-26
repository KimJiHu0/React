import Product from './Product';
import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from '../js/Context.js';

export default function List() {
    const tasks = useContext(TasksContext);

    return (
        <ul>
            {tasks.length === 0 ? (
                <p>재고가 없습니다. </p>
            ) : (
                tasks.map((task) => (
                    <li key={task.id}>
                        <Product task={task} />
                    </li>
                ))
            )}
        </ul>
    );
}
