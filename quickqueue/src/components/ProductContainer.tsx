import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ProductCard } from "./ProductCard";
import { getAllProduct } from "../services/product-functions";

export const ProductContainer: React.FunctionComponent<any> = (props) => {
  const [products, setProducts] = useState<Product[]>();

  //load once in the first render
  useEffect(() => {
    let getProducts = async () => {
      let listProducts = await getAllProduct();
      //console.log(listProducts);
      setProducts(listProducts);
    };
    getProducts();
  }, []);
  let productDisplays;
  if (products) {
    productDisplays = products.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    });
  }

  return <>{productDisplays}</>;
};
