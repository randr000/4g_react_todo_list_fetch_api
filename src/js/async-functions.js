import apiEndpoint from "./api-endpoint.js";

export async function doesUserExist(username) {

    try {
        
        const res = await fetch(`${apiEndpoint}${username}`);
        return res.status === 200 ? true : false;
    }

    catch {
        throw new Error('Something went wrong when checking if a user exists');
    }
}

export async function fetchTodos(username) {
    const res = await fetch(`${apiEndpoint}${username}`)
    const data = await res.json();
    
    if (data.length === 1 && Object.keys(data[0]).length === 2) return false;
    return data;
}

export async function createUser(username) {
    
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify([])
        };

        const res = await fetch(`${apiEndpoint}${username}`, requestOptions);
        
        if (res.ok) console.log(`User ${username} created successfully`);

    } catch(err) {
        throw new Error('Something went wrong adding a new user');
    }
}

export async function updateTodos(username, todoList) {
    
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(todoList)
        }

        const res = await fetch(`${apiEndpoint}${username}`, requestOptions);

        if (res.ok) console.log(`Todo list for user ${username} updated successfully`);

    } catch (err) {
        throw new Error('Something went wrong updating the user\'s todo list');
    }
}

export async function deleteUser(username) {
    return;
}