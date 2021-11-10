import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import '../../pages/Home/Home.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useHistory } from "react-router";



const Login = () => {

    const [errorL, setErrorL] = useState(false);
    const [email, setLoginEmail] = useState('')
    const [password, setLoginPassword] = useState('')

    const history = useHistory();



    const submitHandler = async (e) => {
        if (!email || !password) {
            setErrorL(true);
            return;
        } else {
            console.log(email, password)
            setErrorL(false);
            e.preventDefault()
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const { data } = await axios.post('/api/user/login', { email, password }, config)
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            //    localStorage.setItem('username', JSON.stringify({ name: 'Jonh Doe' }));

            if (data.token)
                history.push("/quiz");
            else
                return

        }

    }
    return (
        <div className="settings__select">
            {errorL && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

            <div style={{ height: 20 }}></div>

            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Email"
                variant="outlined"
                onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your password"
                variant="outlined"
                onChange={(e) => setLoginPassword(e.target.value)}
            />


            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={submitHandler}
            >
                Login
        </Button>

        </div>
    )
}

export default Login
