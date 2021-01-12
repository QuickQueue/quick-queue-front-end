import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import '../styles/RegisterForm.css';
import { UserContext } from '../App';


export const RegisterForm: React.FunctionComponent<any> = (props) => {
    const history = useHistory();

    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(e.target.value);
  };
    return(
        <p>Helooo
        </p>
    )
}