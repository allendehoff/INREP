import React, { Component, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Welcome from "../components/Welcome/Welcome"
import PatientCard from "../components/PatientCard/PatientCard"
import API from "../utils/API"

// import socketIOClient from "socket.io-client"


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

    useEffect(() => {
    // componentDidMount() {
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

        // console.log(id)
        loadSix()
        // console.log(ptInfo)
    },[])

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
                <Row className="jumbotron">
                    <Col>
                        <Welcome userType="Hospital User" />
                    </Col>
                </Row>
                {patients.length ? (
                    <div style={{ justifyContent: "space-around" }}>
                        {patients.map(patient => (
                            // console.log(patient)
                            <Row style={{ justifyContent: "center" }}>
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