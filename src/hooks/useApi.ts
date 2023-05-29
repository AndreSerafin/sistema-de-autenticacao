import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.google.com/',
})

export function userApi() {
  return {
    validateToken: async (token: string) => {
      return {
        user: {
          id: 3,
          name: 'jose',
          email: 'jose@gmail.com',
        },
      }
      const response = await api.post('/validate', { token })
      return response.data
    },
    signin: async (email: string, password: string) => {
      return {
        user: {
          id: 3,
          name: 'jose',
          email: 'jose@gmail.com',
        },
        token: '23456789',
      }
      const response = await api.post('/signin', { email, password })
      return response.data
    },
    logout: async () => {
      // const response = await api.post('/logout')
      // return response.data
    },
  }
}
