import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Form, Card, Container, Row, Col } from "react-bootstrap"

import { useParams } from "react-router-dom"
import API from "../utils/API"


function CurrentPatient() {
    const [entries, setEntries] = useState(1)

    const [ptInfo, setPtInfo] = useState({})

    const { id } = useParams()

    useEffect(() => {
        let idOnly = ({ id }.id).slice(3)
        // console.log(idOnly)
        loadById(idOnly)
    }, [])

    // componentDidMount

    function loadById(id) {
        API.findById(id)
            .then((ptData) => {
                setPtInfo(ptData)
                console.log(ptInfo)
            })
    }

    function handleSubmit(data) {
        // API put call
    }
    return (
        <Container>
            <Row className="jumbotron">
                <h1>this is the page for patient ID: {id}</h1>

            </Row>
            <Row className="justify-content-center">
                <Card>
                    <Card.Header>New Message</Card.Header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Enter your message to update pt report:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                </Card>
            </Row>
            <Row className="justify-content-center" style={{paddingTop:"1rem"}}>
                <Card>
                    <Card.Header>
                        Unit Responding: {ptInfo.data.respondingUnit}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>ETA: {ptInfo.data.ETA}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>
        </Container>
    )
}

export default CurrentPatient