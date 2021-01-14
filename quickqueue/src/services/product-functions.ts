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

export const getProductCategories = async (): Promise<string[]> => {
  try {
    let res = await client.get("/categories");

    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
