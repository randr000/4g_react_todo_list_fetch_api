import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';
import TodoItem from './todo-item.jsx';

const TodoItems = () => {

    const {store} = useContext(AppContext);
    const {todos} = store;

    return (
        <>
            {
                todos.length ?
                todos.map(todo => <TodoItem key={todo.id} value={todo.label} itemID={todo.id} hoverDelete={true} />) :
                <TodoItem key={-1} value='No tasks, add a task' hoverDelete={false} />
            }
        </>
    );
};

export default TodoItems;