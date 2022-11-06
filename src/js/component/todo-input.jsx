import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './AppContext.jsx';
import { updateTodos } from '../async-functions.js';

const TodoInput = () => {

    const [inputValue, setIntputValue] = useState('');

    const {store, dispatch} = useContext(AppContext);

    useEffect(() => {

        // Update todo list for current user on the server
        if (store.todos.length) updateTodos(store.username, store.todos);

    }, [store.todos]);

    function enterKeyHandler(event) {
        if (inputValue && event.key === 'Enter') {

            // Add item to todo list and increment prevID
            dispatch({type: 'addTodo', payload: inputValue});

            // Resets input value
            setIntputValue('');

        }
    }
    
    return (

        <input
            className="list-group-item fs-3 text-black-50"
            type="text"
            onChange={e => setIntputValue(e.target.value)}
            onKeyPress={enterKeyHandler}
            value={inputValue}
        />

    );
};

export default TodoInput;