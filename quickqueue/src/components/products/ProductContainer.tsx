import React, { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductCard } from "./ProductCard";
import { getAllProduct } from "../../services/product-functions";
import { Grid } from "@material-ui/core";

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
    productDisplays = products.map((product, i) => {
      return (
        <Grid xs={4} item key={i}>
          <ProductCard product={product} />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid container spacing={3}>
        {productDisplays}
      </Grid>
    </>
  );
};
