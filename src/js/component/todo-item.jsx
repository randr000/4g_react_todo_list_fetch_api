import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './AppContext.jsx';

const TodoItem = ({value, itemID, hoverDelete}) => {

    const {store, dispatch} = useContext(AppContext);

    const [hovered, setHovered] = useState(false);

    // Resets prevID to 0 if all items deleted
    useEffect(() => {
        if (!store.todos.length) dispatch({type: 'resetPrevID'});
    }, [store.todos]);
    
    return (
        <>
            <li 
                className="list-group-item d-flex justify-content-between fs-3 text-black-50"
                onMouseOver={() => hoverDelete ? setHovered(true) : null}
                onMouseLeave={() => setHovered(false)}
            >
                <span>{value}</span>
                <span className="text-danger" onClick={() => dispatch({type: 'removeTodo', payload: itemID})}>{hovered ? 'X' : ''}</span>
            </li>
        </>
    );
};

export default TodoItem;