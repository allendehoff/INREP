import React from "react"
import  {Navbar, Nav, NavLink } from "react-bootstrap"

function Navigation(props) {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>INREP</Navbar.Brand>
            <Navbar.Collapse className="mr-auto justify-content-end">
                <NavLink disabled>Account</NavLink>
                <NavLink disabled>Support</NavLink>
                {/* <Navbar.Text disabled>Account</Navbar.Text>
                <Navbar.Text disabled>Support</Navbar.Text> */}
            </Navbar.Collapse>
            {/* <Nav className="mr-auto justify-content-end" >
                <NavLink disabled>Account</NavLink>
                <NavLink disabled>Support</NavLink>
            </Nav> */}
        </Navbar>
    )
}

export default Navigation