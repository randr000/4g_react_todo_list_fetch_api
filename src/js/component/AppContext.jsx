import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const [store, setStore] = useState({nextID: 0, todos: []});

    const [actions, setActions] = useState({

        addTodo: todo => setStore({...store, listLen: store.listLen + 1, todos: [...store.todos, todo]}),
        removeTodo: id => setStore({...store, todos: store.todos.filter(item => item.id !== id)}),
        updateListLen: x => setStore({...store, listLen: x})

    });

    return (
        <AppContext.Provider value={{store, actions, setStore}}>
            {children}
        </AppContext.Provider>
    );
};