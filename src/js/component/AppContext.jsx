import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const [store, setStore] = useState({listLen: 0, todos: []});

    const [actions, setActions] = useState({

        addTodo: todo => setStore({...store, todos: [...store.todos, todo]}),
        updateListLen: x => setStore({...store, listLen: x})
        
    });

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
};