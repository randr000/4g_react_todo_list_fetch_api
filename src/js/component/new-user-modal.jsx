import React, { useContext } from 'react';
import { createUser } from '../async-functions.js';
import { AppContext } from './AppContext.jsx';

const NewUserModal = () => {

    const {store, dispatch} = useContext(AppContext);
    const {username} = store;

    function addUserToggleModal(addUser) {
        dispatch({type: 'showNewUserModal', payload: false});
        
        if (addUser) createUser(username);
        else dispatch({type: 'resetState'});
    }

    return (
       
        <div onClick={e => addUserToggleModal(false)} style={{backgroundColor: "rgb(0, 0, 0, .5)", width: "100%", height: "100%", zIndex: 1, position: "fixed"}}>
            <div onClick={e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create User Todo List</h5>
                        <button type="button" onClick={e => addUserToggleModal(false)} className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{`A todo list for user "${username}" does not exist. Would you like to create one?`}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => addUserToggleModal(true)} className="btn btn-success">Yes</button>
                        <button onClick={e => addUserToggleModal(false)} className="btn btn-danger">No</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewUserModal;