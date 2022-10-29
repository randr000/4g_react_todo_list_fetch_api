import React, { useState } from 'react'

const TodoItem = ({value}) => {

    const [hovered, setHovered] = useState(false);

    function deleteHandler() {
        // Add logic ro remove list item from DOM
    }
    
    return (
        <>
            <li 
                className="list-group-item d-flex justify-content-between fs-3"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span>{value}</span>
                <span className="text-danger" onClick={deleteHandler}>{hovered ? 'X' : ''}</span>
            </li>
        </>
    );
};

export default TodoItem;