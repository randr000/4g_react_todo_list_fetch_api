import apiEndpoint from "./api-endpoint.js";

// Checks if a user exists on the server
export async function doesUserExist(username) {

    try {
        
        const res = await fetch(`${apiEndpoint}${username}`);
        return res.status === 200 ? true : false;
    }

    catch {
        throw new Error('Something went wrong when checking if a user exists');
    }
}

// Fetches the user's todo list from the server
export async function fetchTodos(username) {
    const res = await fetch(`${apiEndpoint}${username}`)
    const data = await res.json();
    
    if (data.length === 1 && Object.keys(data[0]).length === 2) return false;
    return data;
}

// Creates a new user on the server
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

// Updates a user's todo list on the server
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

// Deletes a user from the server
export async function deleteUser(username) {
    
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'},
        }

        const res = await fetch(`${apiEndpoint}${username}`, requestOptions);

        if (res.ok) console.log(`User ${username} has been deleted successfully`);

    } catch (err) {
        throw new Error('Something went wrong when deleting the user');
    }
}