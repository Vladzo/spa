import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama/',
});

let getCharacters = () => {
    return instance.get('/characters');
}

let getInventory = () => {
    return instance.get('/inventory');
}

export {
    getCharacters, getInventory
}