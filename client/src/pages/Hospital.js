import React, { Component, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Welcome from "../components/Welcome/Welcome"
import PatientCard from "../components/PatientCard/PatientCard"
import API from "../utils/API"

// import socketIOClient from "socket.io-client"
// const socket = socketIOClient("http://localhost:3000/")

import io from "socket.io-client"
const socket = io()


// let socket
function Hospital() {
    // class Hospital extends Component {
    //     constructor() {
    //         super();
    //         this.state = {
    //             patients: []
    //         }
    //         socket = socketIOClient("http://localhost:3001/")
    //     }
    const [patients, setPatients] = useState([])

    function loadSix() {
        API.findSix()
            .then(res =>
                // console.log(res.data),
                // this.setState({patients: res.data}),
                setPatients(res.data),
                // console.log(this.state.patients)

            )
            .catch(err => console.log(err));
    }
    useEffect(() => {
        // componentDidMount() {

        // console.log(id)
        loadSix()
        // console.log(ptInfo)
    }, [])
    // socket.on('hello', ({ message }) => alert(message));

    // socket.on('hello', () => {console.log("hello world")});

    socket.on("hello", () => {
        loadSix()
    })

    // function loadSix() {
    //     API.findSix()
    //         .then(res =>
    //             // console.log(res.data),
    //             setPatients(res.data),
    //             console.log(patients)

    //         )
    //         .catch(err => console.log(err));
    // }
    // render() {
    return (
        <Container >
            <div
                style={{ disply: "flex", textAlign: "center", padding: "1rem 0 2rem 0", borderBottom: "5px solid #FFD400", marginBottom: "3rem" }}
            >
                <h1 style={{ color: "#FFD400" }}>Welcome Hospital User</h1>
                <h4 style={{ color: "#B7D5D4" }}>Here are the most recent updates regarding your incoming patients from EMS</h4>
            </div>
            {/* <Row className="jumbotron">
                <Col>
                    <Welcome userType="Hospital User" />
                </Col>
            </Row> */}
            {patients.length ? (
                <div style={{ justifyContent: "space-around" }}>
                    {patients.map(patient => (
                        // console.log(patient)
                        <Row key={patient._id} style={{ justifyContent: "center" }}>
                            <PatientCard patient={patient} />
                        </Row>
                    ))}
                </div>
            ) : (
                    <Row>
                        <h3>No Patients to display</h3>
                    </Row>
                )}
        </Container>
        // <h1>welcome to the Hospital page!</h1>
    )
    // }
}

export default Hospital