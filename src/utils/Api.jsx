import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/'

const create = (baseURL = BASE_URL) => {
  const Login = body => {
    return axios.post(baseURL + 'login', body)
  }
  const Register = body => {
    return axios.post(baseURL + 'register', body)
  }
  return {
    Login,
    Register
  }
}

export default create()
