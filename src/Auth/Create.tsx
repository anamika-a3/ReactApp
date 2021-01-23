import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { onSignUp } from './auth.api'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

interface Props extends RouteComponentProps {}

export const Create: React.FC<Props> = ({ history }) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  async function handleCreate (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const response = await onSignUp({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
    // if (response && Response.error) {
    //   setError(response.error)
    // }
  }

  // let islogin: boolean

  async function handleRegistration (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await axios.get(`https://reqres.in/api/users`)
      console.log(response)
      alert('User Created')
      history.push('/profiles')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('Something went Wrong')
      history.push('/')
    }

    // // if ((await response).statusText === 'OK') {
    // //   const data = await response
    // //   alert('Login Successful')
    // //   console.log(data)
    // // } else {
    // //   console.log(response)
    // }
  }

  // async function handleRegistarion () {
  //   var response = api.Register({ email: email, password: password })
  //   if ((await response).statusText === 'OK') {
  //     const data = await response
  //     alert('User Registered Successfully!!')
  //     console.log(data)
  //   } else {
  //     console.log(response)
  //     alert(response)
  //   }
  //   handleLogin()
  // }
  //   const postId = 5
  const classes = useStyles()
  return (
    <div className='login'>
      <div className='card-content'>
        <h1>Create Page</h1>
        <form onSubmit={handleCreate} className='formLayout'>
          <TextField
            id='outlined-basic'
            label='Enter New Name'
            variant='outlined'
            type='text'
            placeholder='Required'
            value={name}
            onChange={e => setName(e.target.value)}
            className='input'
            required
          />

          <TextField
            id='outlined-basic'
            label='Enter New Job'
            variant='outlined'
            type='text'
            placeholder='Required'
            value={job}
            onChange={e => setJob(e.target.value)}
            className='input'
            required
          />
          <Button variant='outlined' color='primary' type='submit'>
            CREATE
          </Button>
        </form>
      </div>
    </div>
  )
}
