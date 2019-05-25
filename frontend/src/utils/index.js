const api = "http://localhost:3001"

let token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}

export const getCategories = () => {
    return fetch(`{api}/categories`, { headers: headers })
            .then(res => res.json())
            .then(data => data.categories)
}

export const getAllPosts = () => {
    return fetch(`${api/posts}`, {headers: headers})
        .then(res => res.json())
        .then(data => data)
}

export const getPostsByCategory = (category) => {
    return fetch(`${api}/${category}/posts`, { headers: headers })
        .then(res => res.json())
        .then(data => data)
}

export const addPost = (title, body, author, category) => {
    return fetch(`${api}/comments`, { 
            method: 'POST', 
            headers: headers, 
            body: JSON.stringify({title, body, author, category, timestamp: Date.now()})
        }).then(res => res.json())
}