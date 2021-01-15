import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { ProductListContext } from "./StoreFront";
import { Product } from "../models/Product";
import {
  getAllProduct,
  getProductByCategory,
} from "../services/product-functions";

interface IProductListProps {
  currentProductList: Product[];
  setCurrentProductList: (p: Product[]) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })
);

export const NavBar: React.FunctionComponent<IProductListProps> = (props) => {
  const classes = useStyles();
  //let currentList = useContext(ProductListContext);
  //let isFirstMounted = true;
  const [menu, setMenu] = React.useState({
    isOpen: false,
  });

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    text: string
  ) => {
    let category = text.toLowerCase();
    let getProductCategory = async (text: string) => {
      let listProducts = await getProductByCategory(text);
      props.setCurrentProductList(listProducts);
    };

    let getAllProducts = async () => {
      let listAllProducts = await getAllProduct();
      props.setCurrentProductList(listAllProducts);
    };

    if (category === "all products") {
      getAllProducts();
    } else {
      getProductCategory(category);
    }
    //isFirstMounted = false;
  };

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent) => {
    if (event.type === "keydown") {
      return;
    }
    setMenu({ isOpen });
  };

  const listMenuItems = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Profile", "Log out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "All Products",
          "Electronics",
          "Jewelery",
          "Men Clothing",
          "Women Clothing",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              onClick={(e) => handleClick(e, text)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
  //load once in the first render
  useEffect(() => {
    let getProducts = async () => {
      let listProducts = await getAllProduct();
      props.setCurrentProductList(listProducts);
    };
    //if (isFirstMounted)
    getProducts();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={menu.isOpen} onClose={toggleDrawer(false)}>
          {listMenuItems()}
        </Drawer>
        <Typography variant="h6" className={classes.title}>
          Quick Queue
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
