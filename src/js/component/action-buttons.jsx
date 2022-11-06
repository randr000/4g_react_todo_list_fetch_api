import React from 'react';
import ClearTaskButton from './clear-task-btn.jsx';
import DeleteUserButton from './delete-user-btn.jsx';

const ActionButtons = () => {

    return (
        <div className="my-3 d-flex justify-content-around">
            <ClearTaskButton />
            <DeleteUserButton />
        </div>
    );
};

export default ActionButtons;