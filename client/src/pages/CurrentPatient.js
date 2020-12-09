import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Form, Container, Row, Col, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Moment from 'react-moment';
import 'moment-timezone';
import VitalsForm from "../components/Vitals/VitalsForm"
import NewVitals from "../components/Vitals/NewVitals"

import { useParams } from "react-router-dom"
import API from "../utils/API"

const dayjs = require("dayjs")


function CurrentPatient() {
    const [entries, setEntries] = useState(1)

    const [ptInfo, setPtInfo] = useState({})

    const blankVitals = {
        time: "notime",
        HR: "Not Reported",
        RR: "Not Reported",
        BPs: "Not Reported",
        BPd: "Not Reported",
        oxygen: "Not Reported",
    }

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

    function initVitals() {
        setVitals({...vitals, time:dayjs().format("HH:mm:ss")})
    }

    function handleVitalsSubmit(event) {
        event.preventDefault();
        if (vitals.HR) {
            API.updateVitals(id, vitals)
                .then(setVitals(blankVitals))
        }
        // .exec(loadById(id))
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
                        {vitals.time? (
                            <VitalsForm onChange={handleVitalsInput} onSubmit={handleVitalsSubmit}/>
                        ): (
                            <NewVitals onClick={initVitals}/>
                        )}
                        
                    </Card.Body>
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