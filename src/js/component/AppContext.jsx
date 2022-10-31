import React from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const [store, setStore] = useState([]);

    const [actions, setActions] = useState({
        addTask: todo => setStore([...store, todo])
    });

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
};