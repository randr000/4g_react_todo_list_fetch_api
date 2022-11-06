import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const DeleteUserButton = () => {

    const {store, dispatch} = useContext(AppContext);

    return (
        <button 
            className="btn btn-danger" 
            onClick={e => store.username ? dispatch({type: 'showDeleteUserModal', payload: true}) : null}
        >
            Delete User
        </button>
    );
};

export default DeleteUserButton;