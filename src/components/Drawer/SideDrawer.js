import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import "./SideDrawer.css";
import { sections } from '../../Data/Data';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import ComponentModal from '../ComponentModal/ComponentModal';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

const SideDrawer = ({ children }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    var arr = JSON.parse(localStorage.getItem('userInfo'));
    const [open, setOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem("userInfo");
        setOpen(true);

    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Avatar src="/broken-image.jpg" />
                    </ListItemIcon>
                    <ListItemText
                        primary={!arr ? "Hello, Guest" : `Hello ${arr.name}`}
                    />

                </ListItem>
                {sections.map((text, index) => (
                    <Link to={text.url} >
                        <ListItem button key={text.title}  >
                            <ListItemIcon>{text.icon} </ListItemIcon>
                            <ListItemText primary={text.title} />
                        </ListItem>
                    </Link>

                ))}
                <Link onClick={logout}>

                    <ListItem>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={!arr ? "Login" : `Logout`}
                        />

                    </ListItem>
                </Link>

            </List>

        </div>
    );

    return (
        <div>
            <React.Fragment key={"right"}>
                <Button onClick={toggleDrawer("right", true)}>{children}</Button>
                <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
export default SideDrawer;