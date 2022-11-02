import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './AppContext.jsx';

const TodoItem = ({value, itemID}) => {

    const {store, actions} = useContext(AppContext);
    const {removeTodo, updateListLen} = actions;
    const todoList = store.todos;
    const listLen = store.itemID;

    const [hovered, setHovered] = useState(false);

    function deleteHandler(id) {
        removeTodo(id);
    }

    // Resets listKey to 0 if all items deleted
    // useEffect(() => {
    //     if (!listLen) updateListLen(0);
    // });
    
    return (
        <>
            <li 
                className="list-group-item d-flex justify-content-between fs-3 text-black-50"
                onMouseOver={() => listLen ? setHovered(true) : null}
                onMouseLeave={() => setHovered(false)}
            >
                <span>{value}</span>
                <span className="text-danger" onClick={() => deleteHandler(itemID)}>{hovered ? 'X' : ''}</span>
            </li>
        </>
    );
};

export default TodoItem;