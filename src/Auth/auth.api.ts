import axios, { AxiosRequestConfig } from 'axios'
// import { SignUp } from './Sign-up'

export interface Credentials {
  //   firstName: string
  //   lastName: string
  email: string
  password: string
}

export interface CredentialsSignUp {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface CredentialsListUsers {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: process.env.REACT_APP_API_BASE_URL + '/login',
    data
  }
  try {
    const { data: response } = await axios.request(requestConfig)
  } catch (e) {
    console.error(e.response)
    return { error: e.response.data.message }
  }
  const { data: response } = await axios.request(requestConfig)
  console.log(response)
}

export const onSignUp = async (data: CredentialsSignUp) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: process.env.REACT_APP_API_BASE_URL + '/register',
    data
  }
  try {
    const { data: response } = await axios.request(requestConfig)
  } catch (e) {
    console.error(e.response)
    return { error: e.response.data.message }
  }
  const { data: response } = await axios.request(requestConfig)
  console.log(response)
}

export const listUsers = async (data: CredentialsListUsers) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: process.env.REACT_APP_API_BASE_URL + '/users?page=2',
    data
  }
  try {
    const { data: response } = await axios.request(requestConfig)
  } catch (e) {
    console.error(e.response)
    return { error: e.response.data.message }
  }
  const { data: response } = await axios.request(requestConfig)
  console.log(response)
}
