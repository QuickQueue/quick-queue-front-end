import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory, Redirect } from "react-router-dom";

export const Profile: React.FunctionComponent<any> = () => {

  let currentUser = useContext(UserContext)


  return currentUser ? (

    <h1>THIS YOUR PROFILE HOMIEEE</h1>

  ) : (

    <Redirect to="/login" />
    
  );

}