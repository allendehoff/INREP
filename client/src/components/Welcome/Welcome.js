import React from "react"
// import {Container, Row, Col} from "react-bootstrap"

function Welcome(props) {
    return (
        <h1 style={{ color: "#FFD400" }}>Welcome {props.userType}</h1>
    )
}

export default Welcome