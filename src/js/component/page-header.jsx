import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const PageHeader = () => {

    const {store} = useContext(AppContext);
    const {phUsername} = store;
    
    return (
        <h1 className="display-1 text-center" style={{color: '#C19A6B'}}>
            {`${phUsername} todos`}
        </h1>
    );
};

export default PageHeader;