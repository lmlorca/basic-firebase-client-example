import axios from 'axios'

const url = {
    local: 'http://localhost:5000/basic-cda28/us-central1/api/',
    firebase: '',
}

export const api = axios.create({
    baseURL: url.local,
})
