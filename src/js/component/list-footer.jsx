import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const ListFooter = () => {

    const {store} = useContext(AppContext);
    const itemsLeft = store.listLen;

    return (
        <span className="list-group-item fs-5 text-muted">{`${itemsLeft} item${itemsLeft > 0 ? 's' : ''} left`}</span>
    );
};

export default ListFooter;