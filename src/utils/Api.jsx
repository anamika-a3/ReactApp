import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/'

const create = (baseURL = BASE_URL) => {
  // Login
  const Login = body => {
    return axios.post(baseURL + 'login', body)
  }
  // Register
  const Register = body => {
    return axios.post(baseURL + 'register', body)
  }
  // Get all users
  const getAllUser = () => {
    return axios.get(baseURL + 'users?page=2')
  }
  // Get single user
  const getSingleUser = () => {
    return axios.get(baseURL + 'users/2')
  }

  return {
    // Exporting the list of api functions for use in other modules
    Login,
    Register,
    getAllUser,
    getSingleUser
  }
}

export default create()
