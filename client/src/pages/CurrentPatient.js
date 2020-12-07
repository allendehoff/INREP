import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Form, Card, Container, Row, Col } from "react-bootstrap"

import { useParams } from "react-router-dom"
import API from "../utils/API"


function CurrentPatient() {
    const [entries, setEntries] = useState(1)

    const [ptInfo, setPtInfo] = useState({})

    const [update, setUpdate] = useState("")

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

    function handleInputChange(event) {
        // console.log(event.target)
        const { name, value } = event.target
        const updateNumber = `update${entries}`
        setUpdate({[updateNumber]:value})
        // setUpdate({`update${entries}`: value})
        // setPtInfo({ ...ptInfo, [`update${entries}`]: value })
        // console.log(ptInfo)
    }
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target.input)
        // console.log(ptInfo.data._id)
        API.updateById(id, update)
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
                            <Form.Control
                                name="newMessage"
                                type="text"
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Card>
            </Row>
            <Row className="justify-content-center" style={{ paddingTop: "1rem" }}>
                {ptInfo.data ? (
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
                ) : (<h3>Error</h3>)
                }

            </Row>
        </Container>
    )
}

export default CurrentPatient