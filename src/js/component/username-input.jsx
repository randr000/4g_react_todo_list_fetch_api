import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext.jsx';
import apiEndpoint from '../api-endpoint.js';
import { doesUserExist, fetchTodos } from '../async-functions.js';
import { resolvePath } from 'react-router';

const UsernameInput = () => {

    const [username, setUsername] = useState('');
    const {dispatch} = useContext(AppContext);

    useEffect(() => {

        // Will update username global state one second after last change
        const timeOutId = setTimeout(() => {
            dispatch({type: 'changeUsername', payload: username});
        
            // Check if username exists
            if (username) {
                
                doesUserExist(username).then(res => dispatch({type: 'showModal', payload: !res}));
                
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
                onChange={e => setUsername(e.target.value)}
            />
        </div>
    );
};

export default UsernameInput;