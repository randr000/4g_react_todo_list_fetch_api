import React, { useReducer, useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const defaultState = {
        username: '',
        phUsername: '',
        showModal: false,
        prevID: 0,
        todos: []
    }

    const [store, dispatch] = useReducer(reducer, defaultState);

    function reducer(state, action) {
        switch(action.type) {
            case 'addTodo':
                return {...state, prevID: state.prevID + 1, todos: [...state.todos, {done: false, id: state.prevID + 1, label: action.payload}]};
            case 'removeTodo':
                return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
            case 'downloadTodoList':
                return {...state, prevID: action.payload[action.payload.length - 1].id, todos: action.payload}
            case 'resetPrevID':
                return {...state, prevID: 0};
            case 'noTodos':
                return {...state, prevID: 0, todos: []};
            case 'changeUsername':
                return {...state, username: action.payload};
            case 'resetState':
                return defaultState;
            case 'updatePageHeaderUsername':
                return {...state, phUsername: action.payload ? `${action.payload}'${action.payload.charAt(action.payload.length - 1) === 's' ? '' : 's'}` : ''}
            case 'showModal':
                return {...state, showModal: action.payload};
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