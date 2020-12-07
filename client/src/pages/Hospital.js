import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import Welcome from "../components/Welcome/Welcome"
import API from "../utils/API"



function Hospital() {
    const [patients, setPatients] = useState([])

    useEffect(() => {

        // console.log(id)
        loadSix()
        // console.log(ptInfo)
    }, [])

    function loadSix() {
        API.findSix()
            .then(res =>
                // console.log(res.data),
                setPatients(res.data),
                console.log(patients)

            )
            .catch(err => console.log(err));
    }

    return (
        <Container >
            <Row className="jumbotron">
                <Col>
                    <Welcome userType="Hospital User" />
                </Col>
            </Row>
            {patients.length ? (
                <Row>
                    {patients.map(patient => (
                        <Col sm={1} md={3} lg={3} xl={3}>
                            <Card>
                                <Card.Header>
                                    <h2>ETA: {patient.ETA}</h2>

                                </Card.Header>
                            </Card>
                        </Col>
                    ))}
                    {/* // <CardDeck>
                    //     {patients.map(patient =>(
                    //         <Card>
                    //             <h2>{patient._id}</h2>
                    //         </Card>
                    //         ))}
                    // </CardDeck> */}
                </Row>
            ) : (
                    <Row>
                        <h3>No Patients to display</h3>
                    </Row>
                )}
        </Container>
        // <h1>welcome to the Hospital page!</h1>
    )
}

export default Hospital