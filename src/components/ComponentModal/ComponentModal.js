import { Fade, makeStyles, Modal, Paper, Tab, Tabs } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import "./ComponentModal.css";
import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginLeft: "-230px",
  },
  modal: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    height: "78%",
    width: "30%",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ComponentModal = ({
  name,
  setName,
  email,
  setEmail,
  setPassword,
  password,
  open,
  setOpen,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState("0");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className='content'>
              <div>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "500px",
                    fontSize: 30,
                    marginLeft: "-50px",
                  }}>
                  Register To Play
                </span>
                <div style={{ height: "10px" }}></div>
                <Paper square className={classes.root}>
                  <Tabs
                    selectionFollowsFocus
                    value={value}
                    onChange={handleChange}
                    variant='fullWidth'
                    indicatorColor='primary'
                    textColor='primary'>
                    <Tab label='Signup' value='0' />
                    <Tab label='login' value='1' />
                  </Tabs>
                </Paper>
              </div>
            </div>
            {value === "0" ? (
              <Signup
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            ) : (
              <Login />
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ComponentModal;
