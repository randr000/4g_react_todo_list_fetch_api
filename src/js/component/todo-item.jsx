import React, { useState } from 'react'

const TodoItem = () => {

    const [hovered, setHovered] = useState(false);
    
    return (
        <>
            <li 
                className="list-group-item d-flex justify-content-between fs-3"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span>Vestibulum at eros</span>
                <span className="text-danger">{hovered ? 'X' : ''}</span>
            </li>
        </>
    );
};

export default TodoItem;