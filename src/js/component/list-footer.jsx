import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const ListFooter = () => {

    const {store} = useContext(AppContext);
    const itemsLeft = store.todos.length;

    return (
        <span className="list-group-item fs-5 text-muted">{`${itemsLeft} item${itemsLeft > 1 ? 's' : ''} left`}</span>
    );
};

export default ListFooter;