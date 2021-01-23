import React, { useState } from 'react'
import api from '../utils/Api'
import Button from '@material-ui/core/Button'
import { RouteComponentProps } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import './Login.css'

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await api.Login({ email: email, password: password })
      console.log(response)
      alert('Login Successful')
      history.push('dashboard')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('Wrong Credentials')
      history.push('/')
    }
  }

  return (
    <div className='login'>
      <div className='card-content'>
        <h1>Login page</h1>
        <form onSubmit={handleLogin} className='formLayout'>
          <TextField
            id='outlined-basic'
            label='Enter Email'
            variant='outlined'
            type='email'
            placeholder='Required'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='input'
            required
          />

          <TextField
            id='outlined-basic'
            label='Enter password'
            variant='outlined'
            type='password'
            placeholder='Required'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='input'
            required
          />
          <Button variant='outlined' color='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
