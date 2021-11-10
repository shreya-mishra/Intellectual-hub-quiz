import React from 'react'
import { Link } from 'react-router-dom'
import SideDrawer from '../Drawer/SideDrawer'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header__icon">
            <div style={{ width: "4%" }}></div>

            <div className="header">
                <Link to="/" className="title">
                    <h2>Intellectual Hub</h2>

                </Link>
            </div>
            <SideDrawer>
                <IconButton color="inherit" className="icon">
                    <MenuIcon />
                </IconButton>
            </SideDrawer>
        </div>




    )
}

export default Header
