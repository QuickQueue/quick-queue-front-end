import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductListContext } from "./StoreFront";
import axios from "axios";
import { Product } from "../models/Product";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

interface ICartViewProps {
  getItemList: () => Promise<Product[]>;
  cartContents: Product[];
}

export const CartDrawerItems: React.FunctionComponent<ICartViewProps> = (
  props
) => {
  const history = useHistory();
  const items = React.useContext(ProductListContext);

  const [itemList, updateItemList] = useState<Product[]>([]);
  const [totalPrice, updatePrice] = useState<Number>(0);

  useEffect(() => {
    // props.getItemList().then((res) =>{
    //   updateItemList(res)
    // })

    updateItemList(items);
  }, [items]);

  useEffect(() => {
    updatePrice(itemList.reduce((a, b) => a + b.price * (b.amount || 1), 0));
  }, [itemList]);

  console.log(totalPrice);

  return (
    <List>
      {itemList.map((item: Product) => (
        <ListItem button key={item.title}>
          {`Amount ${item.amount || 1}`}
          <img src={item.image} alt={item.title} width="100" height="100" />
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
      <Divider />
      <ListItem>{`Total $${totalPrice.toFixed(2)}`}</ListItem>
      <Divider />
      <ListItem>
        <button
          className="cartNavButton"
          type="button"
          onClick={() => history.push("/payment")}
        >
          Go To Checkout
        </button>
      </ListItem>
    </List>
  );
};
