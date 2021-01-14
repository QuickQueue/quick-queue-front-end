import React, { useContext, useEffect, useRef, useState } from "react";
import { Product } from "../../models/Product";
import { ProductCard } from "./ProductCard";
import { getAllProduct } from "../../services/product-functions";
import { Grid } from "@material-ui/core";

interface IProductListProps {
  currentProductList: Product[];
  setCurrentProductList: (p: Product[]) => void;
}

export const ProductContainer: React.FunctionComponent<IProductListProps> = (
  props
) => {
  // const [products, setProducts] = useState<Product[]>();

  //load once in the first render
  useEffect(() => {
    //let isMounted = true;
    let getProducts = async () => {
      let listProducts = await getAllProduct();
      //console.log(listProducts);
      props.setCurrentProductList(listProducts);
    };
    getProducts();
  }, []);

  useEffect(() => {
    return () => {
      // Clean up st
    };
  });

  let productDisplays;
  if (props.currentProductList) {
    productDisplays = props.currentProductList.map((product, i) => {
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
