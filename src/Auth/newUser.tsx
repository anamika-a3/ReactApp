import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../utils/Api'

interface Props extends RouteComponentProps {}

export const NewUser: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  async function handleRegistration (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await api.Register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      console.log(response)
      alert('Registration Successful')
      history.push('/login')
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }

  return (
    <div className='login'>
      <div className='card-content'>
        <h1>Register Page</h1>
        <form onSubmit={handleRegistration} className='formLayout'>
          <TextField
            id='outlined-basic'
            label='Enter First Name'
            variant='outlined'
            type='text'
            placeholder='Required'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className='inputup'
            required
          />
          <TextField
            id='outlined-basic'
            label='Enter Last Name'
            variant='outlined'
            type='text'
            placeholder='Required'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='inputup'
            required
          />
          <TextField
            id='outlined-basic'
            label='Enter Email'
            variant='outlined'
            type='email'
            placeholder='Required'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='inputup'
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
            className='inputup'
            required
          />
          <Button
            className='inputButton'
            variant='outlined'
            color='primary'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
