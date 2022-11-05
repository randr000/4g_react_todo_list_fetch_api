import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const NewUserModal = () => {

    const {store, dispatch} = useContext(AppContext);

    function addUserToggleModal(addUser) {
        dispatch({type: 'showModal', payload: false});
        // Do something with addUserToggleModal boolean value here
        //  to add user to api list or not. Reset state if false.
        if (addUser) {
            return;
        } else {
            dispatch({type: 'changeUsername', payload: ''});
        }
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
                        <p>{`A todo list for user "${store.username}" does not exist. Would you like to create one?`}</p>
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