import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

export const LoginForm: React.FunctionComponent<any> = (props) => {


  const [username, changeUsername] = useState("")
  const [password, changePassword] = useState("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value)
  }

  const submitLogin = async (e: SyntheticEvent) => {

    e.preventDefault()

    let user = {

      password : password,
      username : username
  
    }

    //send username and password to a remote location to get the user info/auth token
    try {
      console.log(user)
      axios.post('http://localhost:8080/customers/login', JSON.stringify(user), { 
        headers: {
        'Content-Type': 'application/json'
      }})
        .then(res => {

          console.log(res)
          console.log(res.data)

        })
      
    } catch (e) {
      changePassword("")

    }

  }

  return (

    <form onSubmit={submitLogin}>

      <div className='loginWrapper'>

        <label htmlFor='inputUsername'></label>
        <input
          type="text"
          id='inputUsername'
          name='inputUsername'
          placeholder="Enter Username"
          value={username}
          onChange={handleUsernameChange}
        />

      </div>

      <div className='passwordWrapper'>

        <label htmlFor="inputPassword"></label>
        <input
          type="password"
          id='inputPassword'
          name='inputPassword'
          placeholder="Enter Your Password"
          value={password}
          onChange={handlePasswordChange}
        />

      </div>

      <div className='buttonWrapper'>

        <button
          className='loginButton'
          type="submit">
          Login
            </button>

      </div>

    </form>

  )

}