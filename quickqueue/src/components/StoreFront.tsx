import React, { SyntheticEvent, useState, useContext } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../App';

export const StoreFront: React.FunctionComponent<any> = (props) => {

  let currentUser = useContext(UserContext);
  console.log(currentUser)

  return (

      (currentUser) ?
      <h1>MAIN STORE PAGE</h1>
      :
      <Redirect to='/login'/>


  )

}