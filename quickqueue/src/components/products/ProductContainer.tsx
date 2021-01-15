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
