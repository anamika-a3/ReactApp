import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { RouteComponentProps } from 'react-router-dom'
import { onSignUp } from './auth.api'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../utils/Api'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

interface Props extends RouteComponentProps {}

export const Create: React.FC<Props> = ({ history, location, match }) => {
  // const fetchUsers = () => {
  //   // Where we're fetching data from
  //   // fetch(`https://reqres.in/login`)
  //   // We get the API response and receive data in JSON format...
  //   // .then(response => response.json())
  //   // ...then we update the users state
  //   // .then(data =>
  //   // this.setState({
  //   //   users: data,
  //   //   isLoading: false,
  //   // })
  //   //)
  //   // Catch any errors we hit and update the app
  //   // .catch(error => this.setState({ error, isLoading: false }));
  // }

  //   const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const create = async (event: React.FormEvent) => {
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
      const response = await api.Register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      console.log(response)
      alert('User Created')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('Something went Wrong')
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
        <form className='formLayout'>
          <TextField
            id='outlined-basic'
            label='Enter New Name'
            variant='outlined'
            type='text'
            placeholder='Required'
            className='input'
            required
          />

          <TextField
            id='outlined-basic'
            label='Enter New Job'
            variant='outlined'
            type='email'
            placeholder='Required'
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
