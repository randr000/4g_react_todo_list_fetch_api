import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const ClearTaskButton = () => {

    const {dispatch} = useContext(AppContext);

    return (
        <button className="btn btn-secondary" onClick={e => dispatch({type: 'noTodos'})}>Clear Tasks</button>
    );
};

export default ClearTaskButton;