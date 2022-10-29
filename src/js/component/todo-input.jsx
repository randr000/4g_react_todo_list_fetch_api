import React, { useState } from 'react'

const TodoInput = ({todoList, setTodoList, listKey, setListKey}) => {

    const [inputValue, setIntputValue] = useState('');

    function enterKeyHandler(event) {
        if (inputValue && event.key === 'Enter') {

            // Add item to todo list
            setTodoList([...todoList, {id: listKey + 1, value: inputValue}]);

            // Increases the listKey value by one so each todo list item has a unique key to work correctly with React
            setListKey(listKey + 1);

            // Resets input value
            setIntputValue('');
        }
    }
    
    return (
        <>
            <input
                className="list-group-item fs-3"
                type="text"
                onChange={e => setIntputValue(e.target.value)}
                onKeyPress={enterKeyHandler}
                value={inputValue}
            />
        </>
    );
};

export default TodoInput;