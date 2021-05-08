import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

let getPosts = () => {
    return instance.get('/posts');
}

export {
    getPosts,
}