import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
// import Moment from 'react-moment';
// import 'moment-timezone';

import PatientCard from "../components/PatientCard/PatientCard"
import VitalsForm from "../components/Vitals/VitalsForm"
import NewVitals from "../components/Vitals/NewVitals"
import CriticalWarnings from "../components/CriticalWarning/CriticalWarnings"
import CriticalWarnSelect from "../components/CriticalWarning/CritWarnSelect"

import { useParams } from "react-router-dom"
import API from "../utils/API"

const dayjs = require("dayjs")


function CurrentPatient() {
    // const [entries, setEntries] = useState(1)

    const [ptInfo, setPtInfo] = useState({})

    const blankVitals = {
        time: "",
        HR: "Not Reported",
        RR: "Not Reported",
        BPs: "Not Reported",
        BPd: "Not Reported",
        oxygen: "Not Reported",
    }
    const [vitals, setVitals] = useState(blankVitals)


    const criticalsAllFalse = {
        pending: false,
        CPR: false,
        stroke: false,
        trauma1: false,
        trauma2: false,
        intubated: false,
        fallWithThinners: false
    }
    const [criticalWarnings, setCriticalWarning] = useState(criticalsAllFalse)

    // const [update, setUpdate] = useState("")

    const { id } = useParams()
    // let idOnly = ({ id }.id).slice(3)

    useEffect(() => {

        // console.log(id)
        loadById(id)
        // console.log(ptInfo)
    }, [])

    function loadById(id) {
        // console.log(id)
        API.findById(id)
            .then((ptData) => {
                setPtInfo(ptData)
            })
    }

    function handleVitalsInput(event) {
        const { name, value } = event.target;
        setVitals({ ...vitals, [name]: value })
    };

    function initVitals() {
        // console.log(ptInfo)
        setVitals({ ...vitals, time: dayjs().format("HH:mm:ss") })
    }

    function handleVitalsSubmit(event) {
        event.preventDefault();
        if (vitals.HR !== "Not Reported") {
            API.updateVitals(id, vitals)
                .then(setVitals(blankVitals))
                .then(loadById(id))
        }
        // .exec(loadById(id))
        // console.log(vitals)
        // console.log("here")
    }

    function initCriticals() {
        setCriticalWarning({ ...criticalWarnings, pending: true })
    }

    function handleCriticalsInput(event) {
        // console.log(event.target.checked)
        const { name, checked } = event.target
        setCriticalWarning({ ...criticalWarnings, [name]: checked })
    }

    function handelCriticalsSubmit(event) {
        event.preventDefault()
        setCriticalWarning({ ...criticalWarnings, pending: false })
        // console.log(criticalWarnings)
        // const warningsString = JSON.stringify(criticalWarnings)
        // console.log(warningsString)
        API.updateCriticalWarnings(id, criticalWarnings)
            .then(setCriticalWarning(criticalsAllFalse))
            .then(loadById(id))
    }

    return (
        <Container style={{paddingTop:"2rem"}}>
            {/* <Navbar>
                <NavbarBrand>this is the page for patient ID: {id}</NavbarBrand>
            </Navbar> */}
            <Row className="justify-content-center">
                <Col lg={8}>
                    {ptInfo.data ? (
                        <PatientCard patient={ptInfo.data} />

                    ) : (<h3>Error</h3>)
                    }
                </Col>
                <Col lg={4}>
                    <Row className="justify-content-center">
                        {criticalWarnings.pending ? (
                            <CriticalWarnSelect
                                // style={{ width: "80%" }}
                                onChange={handleCriticalsInput}
                                onSubmit={handelCriticalsSubmit}
                            />
                        ) : (
                                <CriticalWarnings
                                    // style={{ width: "80%" }}
                                    onClick={initCriticals}
                                // loadPtInfo={loadById}
                                // warnings={ptInfo}
                                />
                            )}
                    </Row>
                    <Row className="justify-content-center">
                        <Card style={{ width: "80%", marginBottom: "1rem" }}>
                            <Card.Header>New Vitals</Card.Header>
                            <Card.Body>
                                {vitals.time ? (
                                    <VitalsForm onChange={handleVitalsInput} onSubmit={handleVitalsSubmit} />
                                ) : (
                                        <NewVitals onClick={initVitals} />
                                    )}
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentPatient