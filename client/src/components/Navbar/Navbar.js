// import React from "react"
// import { Navbar, Nav, NavLink } from "react-bootstrap"

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton';
// import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navigation(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href = "#" color="inherit">INREP</Link>
                    </Typography>
                    <Button disabled color="inherit">Account</Button>
                    <Button disabled color="inherit">Support</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
    // return (
    //     // <Navbar bg="dark" variant="dark">
    //     //     <Navbar.Brand>INREP</Navbar.Brand>
    //     //     <Navbar.Collapse className="mr-auto justify-content-end">
    //     //         <NavLink disabled>Account</NavLink>
    //     //         <NavLink disabled>Support</NavLink>
    //     //         {/* <Navbar.Text disabled>Account</Navbar.Text>
    //     //         <Navbar.Text disabled>Support</Navbar.Text> */}
    //     //     </Navbar.Collapse>
    //     //     {/* <Nav className="mr-auto justify-content-end" >
    //     //         <NavLink disabled>Account</NavLink>
    //     //         <NavLink disabled>Support</NavLink>
    //     //     </Nav> */}
    //     // </Navbar>
    // )
}

export default Navigation