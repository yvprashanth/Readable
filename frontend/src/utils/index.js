let token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
}

export const getAllCategories = () => {
    return fetch('/categories', { headers: headers })
        .then(res => res.json)
        .then(data => data.categories)
}

export const getAllPosts = () => {
    return fetch('/posts', { headers: headers })
        .then(res => res.json)
        .then(data => data.categories)
}

export const getPostsByCategory = (category) => {
    return fetch('/${category}/posts', {headers: headers})
        .then(res => res.json())
        .then(data => data)
}
