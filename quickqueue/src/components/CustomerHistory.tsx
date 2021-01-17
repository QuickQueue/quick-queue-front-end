import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { UserContext } from "../App";
import '../styles/CustomerHistory.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AutorenewTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CustomerHistory: React.FunctionComponent<any> = (props) => {

  const classes = useStyles();
  const [orderStatus, setOrderStatus] = React.useState('');
  const [currentOrderDisplay, updateOrderDisplay] = React.useState([]);

  let currentUser = useContext(UserContext);
  let ordersActive = [];
  let ordersPending = [];
  let ordersClosed = [];
  let onScreenOrders = [];

  useEffect(() => {

    axios.get(
      `http://localhost:8080/orders/history/active/${currentUser.userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {

        ordersActive = res.data;

      })
      axios.get(
        `http://localhost:8080/orders/history/closed/${currentUser.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
  
          ordersClosed = res.data;
  
        })
        axios.get(
          `http://localhost:8080/orders/history/pending/${currentUser.userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
    
            ordersPending = res.data;
    
          })
    
  }, [])

  useEffect(() => {

    console.log(onScreenOrders + "AT USE EFFECT")
    updateOrderDisplay(onScreenOrders)

  }, [orderStatus])
  
  const handleChange = (e) => {
    
    if(e.target.value === 'active') {

      onScreenOrders = ordersActive
      console.log(e.target.value)
      console.log(ordersActive)

    } else if (e.target.value === 'pending') {

      onScreenOrders = ordersPending
      console.log(e.target.value)
      console.log(ordersPending)
    } else if (e.target.value === 'closed') {

      onScreenOrders = ordersClosed
      console.log(e.target.value)
      console.log(ordersClosed)

    } else {

      console.log("NO ORDER HISTORY")

    }
    console.log(onScreenOrders + "AT HANDLE CHANGE")
    console.log(orderStatus);
    
  };

  // const renderHistory = () => {
  //   return userHistory.length == 0 ?
  //     (
  //       <h3>No Orders Found</h3>
  //       // <p>Please try another status from the drop down menu.</p>
  //     ) : (
  //       <p>${userHistory[0]}</p>
  //     )

  // }

  return (

    <div className='historyComponentWrapper'>
      <h2>Your Purchase History: </h2>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Order Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={orderStatus}
          onChange={handleChange}
          label="orderStatus"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'active'}>Active Orders</MenuItem>
          <MenuItem value={'closed'}>Completed Orders</MenuItem>
          <MenuItem value={'pending'}>Pending Orders</MenuItem>
        </Select>
      </FormControl>

      <div className='historyContainer'>
       {
         <p>{onScreenOrders[0] || 'empty'}</p>
       }

      </div>

    </div>

  )

}