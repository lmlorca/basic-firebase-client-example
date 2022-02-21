import { api } from '../config/api'

export async function fetchPostAll() {
  const response = await api.get('/posts/all')
  return response.data
}
