import React from "react";
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
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import clsx from "clsx";

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

export const NavBar: React.FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = React.useState({
    isOpen: false,
  });
  const [cart, setCart] = React.useState({
    isOpen: false,
  });

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent) => {
    if (event.type === "keydown") {
      return;
    }
    setMenu({ isOpen });
  };

  const toggleCart = (isOpen: boolean) => (event: React.MouseEvent) => {
    if (event.type === "keydown") {
      return;
    }
    setCart({ isOpen });
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
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "All Products",
          "Electronics",
          "Jewelry",
          "Men Clothing",
          "Women Clothing",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

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
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleCart(true)}
        >
        <ShoppingCartOutlinedIcon />
        </IconButton>
        <Drawer open={cart.isOpen} onClose={toggleCart(false)} anchor="right">
          {listMenuItems()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
