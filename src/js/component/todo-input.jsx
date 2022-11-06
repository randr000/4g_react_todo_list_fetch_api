import React, { useState, useContext } from 'react'
import { AppContext } from './AppContext.jsx';

const TodoInput = () => {

    const [inputValue, setIntputValue] = useState('');

    const {dispatch} = useContext(AppContext);

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