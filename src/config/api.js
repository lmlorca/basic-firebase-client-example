import axios from 'axios'

const url = {
  local: 'http://localhost:5000/basic-cda28/us-central1/api/',
  firebase: '',
}

export const api = axios.create({
  baseURL: url.local,
})

export const addAuthorizationHeaders = () => {
  const token = JSON.parse(localStorage.getItem('user'))?.accessToken
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

export const removeAuthorizationHeaders = () => {
  delete api.defaults.headers.common['Authorization']
}
