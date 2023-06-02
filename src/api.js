import axios from 'axios'
import Cookies from 'js-cookie';

const AUTH_TOKEN = Cookies.get('token')
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  (request) => {
    console.log(request)
    return request
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

const user = {
  // DUMMY: just setup
  login: (email, password) => axios.post('/login', {email, password}),
  me: () => axios.get('/profile').then((res) => res.data),
}

export { user }
