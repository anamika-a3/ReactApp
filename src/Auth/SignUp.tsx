import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import api from '../utils/Api'
import { Link, RouteComponentProps } from 'react-router-dom'
import './Login.css'
import { onSignUp } from './auth.api'

// import Button from '@material-ui/core/Button'
// import { ButtonGroup } from '@material-ui/core'
// import { isBigIntLiteral } from 'typescript'

interface Props extends RouteComponentProps {}
const SignUp: React.FC<Props> = ({ history, location, match }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  async function handleRegistration (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await api.Register({ email: email, password: password })
      console.log(response)
      alert('user registered')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('error occured')
    }
  }

  return (
    <div className='login'>
      <div className='card-content'>
        <h1>Login page</h1>
        <form onSubmit={handleRegistration} className='formLayout'>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className='inputup'
            required
          />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='inputup'
            required
          />
          <input
            type='email'
            placeholder='Email ID'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='inputup'
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='inputup'
            required
          />
          <input type='submit' value='Register' className='inputButton' />
          {/* <p className='txt1' onClick={()=>setNewUser(false)}>Already User? Login Here</p> */}

          {error.length > 0 && <p>{error}</p>}
          {/* <ButtonGroup
              variant='contained'
              color='secondary'
              aria-label='outlined primary button group'
              onClick={() => {
                // api call
                // change to the about page
                history.push('/login')
              }}
            >
              <Button>Sign In Portal!</Button>
            </ButtonGroup> */}
        </form>
      </div>
    </div>
  )
}
export default SignUp
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   }
// })

// // in extends RouteComponentProps {}terface Props

// // const Dummy:React.FC<Props>=({props})=>{}

// const SignUp: React.FC<Props> = ({ props }) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [error, setError] = useState('')

//   const Register = async (event: React.FormEvent) => {
//     event.preventDefault()
//     const response = await onSignUp({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     })
//   }
//   async function handleRegistration (
//     event: React.FormEvent<HTMLFormElement>
//   ): Promise<JSX.Element> {
//     event.preventDefault()
//     // try {
//     //   const response = await api.Register({
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //     email: email,
//     //     password: password
//     //   })
//     //   console.log(response)
//     // } catch (error) {
//     //   console.log(error)
//     //   console.log(error.response)
//     // }
//     return (
//       <div className='login'>
//         <div className='card-content'>
//           <h1>Login page</h1>
//           <form onSubmit={handleRegistration} className='formLayout'>
//             <input
//               type='text'
//               placeholder='First Name'
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//               className='input'
//               required
//             />
//             <input
//               type='text'
//               placeholder='Last Name'
//               value={lastName}
//               onChange={e => setLastName(e.target.value)}
//               className='input'
//               required
//             />
//             <input
//               type='email'
//               placeholder='Email ID'
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className='input'
//               required
//             />
//             <input
//               type='password'
//               placeholder='Password'
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               className='input'
//               required
//             />
//             <input type='submit' value='Register' className='inputButton' />
//             {/* <p className='txt1' onClick={()=>setNewUser(false)}>Already User? Login Here</p> */}

//             {error.length > 0 && <p>{error}</p>}
//             {/* <ButtonGroup
//             variant='contained'
//             color='secondary'
//             aria-label='outlined primary button group'
//             onClick={() => {
//               // api call
//               // change to the about page
//               history.push('/login')
//             }}
//           >
//             <Button>Sign In Portal!</Button>
//           </ButtonGroup> */}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
// export default SignUp
