import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const NewUserModal = () => {

    const {dispatch} = useContext(AppContext);

    function removeModal() {
        dispatch({type: 'removeModal'});
    }

    return (
       
        <div onClick={removeModal} style={{backgroundColor: "rgb(0, 0, 0, .5)", width: "100%", height: "100%", zIndex: 1, position: "fixed"}}>
            <div onClick={e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create User Todo List</h5>
                        <button type="button" onClick={removeModal} className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>A todo list for user &lt;username&gt; does not exist. Would you like to create one?</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={removeModal} className="btn btn-success">Yes</button>
                        <button onClick={removeModal} className="btn btn-danger">No</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewUserModal;