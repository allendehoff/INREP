import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Form, Container, Row, Col, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Moment from 'react-moment';
import 'moment-timezone';


import { useParams } from "react-router-dom"
import API from "../utils/API"


function CurrentPatient() {
    const [entries, setEntries] = useState(1)

    const [ptInfo, setPtInfo] = useState({})

    const [vitals, setVitals] = useState({})

    // const [update, setUpdate] = useState("")

    const { id } = useParams()
    let idOnly = ({ id }.id).slice(3)

    useEffect(() => {

        // console.log(id)
        loadById(id)
        // console.log(ptInfo)
    }, [])

    // componentDidMount

    function loadById(id) {
        // console.log(id)
        API.findById(id)
            .then((ptData) => {
                setPtInfo(ptData)
            })
        // .then(
        //     console.log(ptInfo)

        // )
    }

    // function handleInputChange(event) {
    //     // console.log(event.target)
    //     const { name, value } = event.target
    //     const updateNumber = `update${entries}`
    //     setUpdate({ [updateNumber]: value })
    //     // setUpdate({`update${entries}`: value})
    //     // setPtInfo({ ...ptInfo, [`update${entries}`]: value })
    //     // console.log(ptInfo)
    // }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     // console.log(event.target.input)
    //     // console.log(ptInfo.data._id)
    //     API.updateById(id, update)
    // }

    function handleVitalsInput(event) {
        const { name, value } = event.target;
        setVitals({ ...vitals, [name]: value })
    };

    function handleVitalsSubmit(event) {
        event.preventDefault()
        API.updateById(id, vitals)
        // console.log(vitals)
        // console.log("here")
    }


    return (
        <Container>
            <Row className="jumbotron">
                <h1>this is the page for patient ID: {id}</h1>

            </Row>
            <Row className="justify-content-center">
                <Card>
                    <Card.Header>New Vitals</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleVitalsSubmit}>
                            <Form.Group>
                                <Form.Label>Heart Rate</Form.Label>
                                <Form.Control
                                    name="HR"
                                    placeholder="Heart Rate"
                                    type="number"
                                    onChange={handleVitalsInput}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Respiratory Rate</Form.Label>
                                <Form.Control
                                    name="RR"
                                    placeholder="Respiratory Rate"
                                    type="number"
                                    onChange={handleVitalsInput}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>BP Systolic</Form.Label>
                                <Form.Control
                                    name="BPs"
                                    placeholder="Systolic"
                                    type="number"
                                    onChange={handleVitalsInput}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>BP Diastolic</Form.Label>
                                <Form.Control
                                    name="BPd"
                                    placeholder="Diastolic"
                                    type="number"
                                    onChange={handleVitalsInput}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Oxygen Saturation</Form.Label>
                                <Form.Control
                                    name="oxygen"
                                    placeholder="O2 sat"
                                    type="number"
                                    onChange={handleVitalsInput}></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                {/* <Card>
                    <Card.Header>New Message</Card.Header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Enter your message to update pt report:</Form.Label>
                            <Form.Control
                                name="newMessage"
                                type="text"
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Card> */}
            </Row>
            <Row className="justify-content-center" style={{ paddingTop: "1rem" }}>
                {ptInfo.data ? (
                    <Card>
                        <Card.Header>
                            Unit Responding: {ptInfo.data.respondingUnit}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>ETA: {ptInfo.data.ETA}</Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><b>Last Update: </b>
                                    <Moment tz="America/Denver" format="HH:mm:ss MM/DD/YYYY">
                                        {ptInfo.data.updatedAt}
                                    </Moment>
                                </ListGroupItem>
                            </ListGroup>
                            {/* <Card.Text>
                                Last Update: {ptInfo.data.updatedAt}
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                ) : (<h3>Error</h3>)
                }

            </Row>
        </Container>
    )
}

export default CurrentPatient