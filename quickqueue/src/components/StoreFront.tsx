import React, { SyntheticEvent, useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";
import { NavBar } from "./NavBar";
import { SearchItem } from "./SearchItem";

export const StoreFront: React.FunctionComponent<any> = (props) => {
  let currentUser = useContext(UserContext);
  console.log(currentUser);

  return currentUser ? (<>
  <NavBar /> 
  <SearchItem />
  </>)
  : <Redirect to="/login" />;
};
