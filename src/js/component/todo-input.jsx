import React, { useState, useContext } from 'react'
import { AppContext } from './AppContext.jsx';

const TodoInput = () => {

    const [inputValue, setIntputValue] = useState('');

    const {store, actions, setStore} = useContext(AppContext);
    const {addTodo, updateListLen} = actions;

    function enterKeyHandler(event) {
        if (inputValue && event.key === 'Enter') {
            
            // Add item to todo list
            // addTodo({id: store.listLen + 1, value: inputValue});
            setStore({listLen: store.listLen + 1, todos: [...store.todos, {id: store.listLen + 1, value: inputValue}]});
            // console.log({id: store.listLen + 1, value: inputValue})
            // Increases the listKey value by one so each todo list item has a unique key to work correctly with React
            // updateListLen(store.listLen + 1);

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