import { Button, StepIcon, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import '../../pages/Home/Home.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useHistory } from "react-router";



const Signup = () => {

    const [errorS, setErrorS] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pic, setPic] = useState('')

    const history = useHistory();
    const handleSubmit = async () => {
        if (!name || !email || !password) {
            setErrorS(true);
            return;
        } else {
            setErrorS(false);
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const { data } = await axios.post('/api/user', { name, email, password, pic }, config)
            console.log(data.token);

            localStorage.setItem('userInfo', JSON.stringify(data))
            if (data.token)
                history.push("/quiz");
            else
                return
            // fetchQuestions(category, difficulty);
        }
    };

    return (
        <div className="settings__select">
            {errorS && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

            <div style={{ height: 20 }}></div>

            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                style={{ marginBottom: 25 }}
                variant="contained"
                component="label"
                color="secondary"
                onChange={(e) => { console.log(e.target.value); setPic(e.target.value) }}
            >
                Upload Profile Pic
  <input
                    type="file"
                    accept="image/*"

                    hidden
                />

            </Button>

            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
            >
                Done
        </Button>
        </div>
    )
}

export default Signup
