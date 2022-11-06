import React, { useEffect, useContext } from 'react';
import { AppContext } from './AppContext.jsx';
import { doesUserExist, fetchTodos } from '../async-functions.js';

const UsernameInput = () => {

    const {store, dispatch} = useContext(AppContext);
    const { username } = store;

    useEffect(() => {

        // Will update username global state one second after last change
        const timeOutId = setTimeout(() => {
            dispatch({type: 'updatePageHeaderUsername', payload: username});
        
            // Check if username exists and fetch their todos if they do
            if (username) {

                doesUserExist(username).then(res => {
                    if (res) fetchTodos(username).then(
                        data => 
                        data ? 
                        dispatch({type: 'downloadTodoList', payload: data}) : 
                        dispatch({type: 'noTodos'}));

                    else dispatch({type: 'showModal', payload: !res});
                });
                
            }

        }, 1000);
        
        return () => clearTimeout(timeOutId);

    }, [username]);
    
    return (
        <div className="form-group d-flex my-3">
            <label htmlFor="username" className="form-label fw-bold fs-3 align-self-end">Username:</label>
            <input 
                type="text" 
                id="username"
                className="form-control fs-3 text-black-50 ms-2 me-5"
                onChange={e => dispatch({type: 'changeUsername', payload: e.target.value})}
                value={username}
            />
        </div>
    );
};

export default UsernameInput;