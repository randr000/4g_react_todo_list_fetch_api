import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';
import TodoItem from './todo-item.jsx';

const TodoItems = () => {

    const {store} = useContext(AppContext);
    const {itemID, todos} = store;
    console.log(store)

    return (
        <>
            {
                itemID ?
                todos.map(todo => <TodoItem key={todo.id} value={todo.value} itemID={todo.id} />) :
                <TodoItem key={-1} value='No tasks, add a task' />
            }
        </>
    );
};

export default TodoItems;