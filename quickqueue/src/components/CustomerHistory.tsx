import React, { useContext } from 'react';
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

  let currentUser = useContext(UserContext);

  let userHistory = [];

  const handleChange = (e) => {

    console.log(currentUser.userId);
    setOrderStatus(e.target.value);

    axios.get(
      `http://localhost:8080/orders/history/${orderStatus}/${currentUser.userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {

        userHistory = res.data;
        console.log(userHistory)
        renderHistory(userHistory)

      })

  };

  const renderHistory = async (userHistory) => {

    if(userHistory.length === 0) {

      return console.log("No Order FOund")
      // {<p>Please try another status from the drop down menu.</p>}

    } else {

      return <p>heya we workin here!</p>

    }

    return null;
  }

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
          <MenuItem value={'PENDING'}>Pending Orders</MenuItem>
        </Select>
      </FormControl>

      <div className='historyContainer'>

          
      </div>

    </div>

  )

}