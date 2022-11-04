import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const PageHeader = () => {

    const {store} = useContext(AppContext);
    const {username} = store;
    
    return (
        <h1 className="display-1 text-center" style={{color: '#C19A6B'}}>
            {`${username ? `${username}'${username.charAt(username.length - 1) === 's' ? '' : 's'}` : '' } todos`}
        </h1>
    );
};

export default PageHeader;