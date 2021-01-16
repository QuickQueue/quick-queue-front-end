import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory, Redirect } from "react-router-dom";
import { ProfileNavBar } from './ProfileNavBar';

export const Profile: React.FunctionComponent<any> = () => {

  let currentUser = useContext(UserContext)

  //add nav bar
  // create onclick links for log out and store and redirect
  //style nav bar
  //create subheading for history
  //dropdown for active orders first


  return currentUser ? (
    <>
    <ProfileNavBar/>

    <h1>THIS YOUR PROFILE HOMIEEE</h1>
    </>

  ) : (

    <Redirect to="/login" />
    
  );

}