import React, { SyntheticEvent, useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { UserContext } from "../App";
import { NavBar } from "./NavBar";
import { ProductContainer } from "./products/ProductContainer";

export const StoreFront: React.FunctionComponent<any> = (props) => {
  let currentUser = useContext(UserContext);
  console.log(currentUser);

  return currentUser ? (
    <>
      <NavBar />
      <ProductContainer />
    </>
  ) : (
    <Redirect to="/login" />
  );
};
