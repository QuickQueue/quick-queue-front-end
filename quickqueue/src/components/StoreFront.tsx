import React, { SyntheticEvent, useState, useContext, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { UserContext } from "../App";
import { Product } from "../models/Product";
import {
  getAllProduct,
  getProductByCategory,
} from "../services/product-functions";
import { NavBar } from "./NavBar";
import { ProductContainer } from "./products/ProductContainer";

export const ProductListContext = React.createContext<any>(undefined);

export const StoreFront: React.FunctionComponent<any> = (props) => {
  let currentUser = useContext(UserContext);
  //console.log(currentUser);
  const [productList, setProductList] = useState<Product[]>();

  useEffect(() => {
    let getProducts = async () => {
      let listProducts = await getProductByCategory();
      setProductList(listProducts);
    };
    setTimeout(async () => await getProducts(), 5000);
  }, []);

  return currentUser ? (
    <ProductListContext.Provider value={productList}>
      <NavBar />
      <ProductContainer
        currentProductList={productList}
        setCurrentProductList={setProductList}
      />
    </ProductListContext.Provider>
  ) : (
    <Redirect to="/login" />
  );
};
