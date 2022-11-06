import React, { useContext } from 'react';
import { deleteUser } from '../async-functions.js';
import { AppContext } from './AppContext.jsx';

const DeleteUserModal = () => {

    const {store, dispatch} = useContext(AppContext);
    const {username} = store;

    function delUserToggleModal(delUser) {
        dispatch({type: 'showDeleteUserModal', payload: false});
        
        if (delUser) {
            dispatch({type: 'resetState'});
            deleteUser(store.username);
        }
    }

    return (
       
        <div onClick={e => delUserToggleModal(false)} style={{backgroundColor: "rgb(0, 0, 0, .5)", width: "100%", height: "100%", zIndex: 1, position: "fixed"}}>
            <div onClick={e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete User</h5>
                        <button type="button" onClick={e => delUserToggleModal(false)} className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{`Are you sure you want to delete user "${username}"?`}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => delUserToggleModal(true)} className="btn btn-success">Yes</button>
                        <button onClick={e => delUserToggleModal(false)} className="btn btn-danger">No</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteUserModal;