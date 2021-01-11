import React, { SyntheticEvent, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../styles/loginForm.css'
import logo from '../assets/LogoTemp.png'

export const LoginForm: React.FunctionComponent<any> = (props) => {

  const history = useHistory();

  const [username, changeUsername] = useState("")
  const [password, changePassword] = useState("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value)
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const submitLogin = async (e: SyntheticEvent) => {

    e.preventDefault()

    let user = {

      password: password,
      username: username

    }

    //send username and password to a remote location to get the user info/auth token
    try {
      console.log(user)
      axios.post('http://localhost:8080/customers/login', JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {

          history.push("/store")

        })

    } catch (e) {
      changePassword("")

    }

  }

  return (

    <form className='loginForm' onSubmit={submitLogin}>

      <img className='logo' src={logo} alt="Temp Logo" />

      <h2 className='loginHeader'>Welcome Back!</h2>

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
          disabled={!validateForm()}
          className='loginButton'
          type="submit">
          Let's Shop!
        </button>

      </div>

    </form>

  )

}