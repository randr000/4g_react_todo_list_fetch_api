import React, { useReducer, useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const [store, dispatch] = useReducer(reducer, 
        {
            username: '',
            showModal: true,
            prevID: 0,
            todos: []
    
        });

    function reducer(state, action) {
        switch(action.type) {
            case 'addTodo':
                return {...state, prevID: state.prevID + 1, todos: [...state.todos, {id: state.prevID + 1, value: action.payload}]};
            case 'removeTodo':
                return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
            case 'resetPrevID':
                return {...state, prevID: 0};
            case 'changeUsername':
                return {...state, username: action.payload};
            default:
                throw new Error();
        }
    }

    return (
        <AppContext.Provider value={{store, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};