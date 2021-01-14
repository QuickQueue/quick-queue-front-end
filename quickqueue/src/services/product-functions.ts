import { Product } from "../models/Product";
import { fakeStoreApiBase as client } from "./fakestoreApi";

export const getAllProduct = async (): Promise<Product[]> => {
  try {
    let res = await client.get("/products");

    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getProductByCategory = async (): Promise<Product[]> => {
  try {
    let res = await client.get("/products/category/jewelery");

    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
