import React, { useState, useEffect } from 'react'

const TodoItem = ({todoList, setTodoList, itemID, value, setListKey}) => {

    const [hovered, setHovered] = useState(false);

    function deleteHandler(id) {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    // Resets listKey to 0 if all items deleted
    useEffect(() => {
        if (!todoList.length) setListKey(0);
    });
    
    return (
        <>
            <li 
                className="list-group-item d-flex justify-content-between fs-3"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span>{value}</span>
                <span className="text-danger" onClick={() => deleteHandler(itemID)}>{hovered ? 'X' : ''}</span>
            </li>
        </>
    );
};

export default TodoItem;