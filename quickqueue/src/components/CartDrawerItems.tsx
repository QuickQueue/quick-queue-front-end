import React, { useState, useEffect } from "react";
import axios from "axios";
import {Product} from "../models/Product";
import { List, ListItem, ListItemText } from "@material-ui/core";

interface ICartViewProps {
  getItemList: () => Promise<Product[]>;
  // itemList:Product[]
}

export const CartDrawerItems: React.FunctionComponent<ICartViewProps> = (props) => {

  const [itemList, updateItemList] = useState<Product[]>([]);

  
  useEffect(() => {
    props.getItemList().then((res) =>{
      updateItemList(res)
    })
    
  }, []);

  return(
    <List>
      {itemList.map((item:Product) => (
        <ListItem button key={item.title}>
          {/* <img */}
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  )
};
