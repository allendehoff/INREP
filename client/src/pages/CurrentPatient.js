import React, { useState, useEffect } from "react"
// import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
// import Moment from 'react-moment';
// import 'moment-timezone';

import EtaUpdateButton from "../components/EtaUpdate/EtaUpdateButton"
import EtaUpdate from "../components/EtaUpdate/EtaUpdate"
import PatientCard from "../components/PatientCard/PatientCard"
import VitalsForm from "../components/Vitals/VitalsForm"
import NewVitals from "../components/Vitals/NewVitals"
import CriticalWarnings from "../components/CriticalWarning/CriticalWarnings"
import CriticalWarnSelect from "../components/CriticalWarning/CritWarnSelect"
import UpdateInformation from "../components/PatientInformation/UpdateInformation"
import PatientInformationForm from "../components/PatientInformation/PatientInformationForm"

import { useParams } from "react-router-dom"
import API from "../utils/API"


import io from "socket.io-client"
const socket = io()

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

    const [eta, setEta] = useState({
        pending: false,
        time: ""
    })

    const [patientInformation, setPatientInformation] = useState({
        pending: false,
        age: "Not Reported",
        sex: "Not Reported",
        chiefComplaint: "Not Reported",
        moiHpi: "Not Reported",
        oxygenTx: "Not Reported",
        from: "Not Reported"
    })

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
                .then(socket.emit("update"))
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

    function handleCriticalsSubmit(event) {
        event.preventDefault()
        setCriticalWarning({ ...criticalWarnings, pending: false })
        // console.log(criticalWarnings)
        // const warningsString = JSON.stringify(criticalWarnings)
        // console.log(warningsString)
        API.updateCriticalWarnings(id, criticalWarnings)
            // .then(setCriticalWarning(criticalsAllFalse))
            // .then(setCriticalWarning({...criticalWarnings}))
            .then(socket.emit("update"))
            .then(loadById(id))
    }

    function initEtaUpdate() {
        setEta({ ...eta, pending: true })
    }

    function handleEtaInput(event) {
        const { name, value } = event.target
        setEta({ ...eta, [name]: value })
    }

    function handleEtaSubmit(event) {
        event.preventDefault()
        API.updateETA(id, { time: eta.time })
            .then(socket.emit("update"))
            .then(setEta({ pending: false }))
            .then(loadById(id))
    }

    function initPatientInformation() {
        setPatientInformation({ ...patientInformation, pending: true })
    }

    function handlePtInformationChange(event) {
        const { name, value } = event.target
        setPatientInformation({ ...patientInformation, [name]: value })
    }

    function handlePtInformationSubmit(event) {
        event.preventDefault()
        API.updatePtInformation(id, patientInformation)
            .then(socket.emit("update"))
            .then(setPatientInformation({ pending: false }))
            .then(loadById(id))
    }

    return (
        <Container style={{ paddingTop: "2rem" }}>
            <div
                style={{ disply: "flex", textAlign: "center", padding: "1rem 0 2rem 0", borderBottom: "5px solid #FFD400", marginBottom: "3rem" }}
            >
                <h1 style={{ color: "#FFD400" }}>Welcome EMS User</h1>
                <h4 style={{ color: "#B7D5D4" }}>Enter updates below to keep the hospital informed about youe patient</h4>
            </div>
            <Row className="justify-content-center">
                <Col lg={8}>
                    {ptInfo.data ? (
                        <PatientCard patient={ptInfo.data} />

                    ) : (<h3>Error</h3>)
                    }
                </Col>
                <Col lg={4}>
                    <Row className="justify-content-center">
                        <Card>
                            <Card.Header>ETA:
                                 {/* <span>{ptInfo.data.ETA ? (ptInfo.data.ETA):("pending")}</span> */}
                            </Card.Header>
                            <Card.Body>
                                {eta.pending ? (
                                    <EtaUpdate
                                        onChange={handleEtaInput}
                                        onSubmit={handleEtaSubmit}
                                    ></EtaUpdate>
                                ) : (
                                        <EtaUpdateButton onClick={initEtaUpdate} />
                                    )}
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="justify-content-center">
                        {criticalWarnings.pending ? (
                            <CriticalWarnSelect
                                // style={{ width: "80%" }}
                                onChange={handleCriticalsInput}
                                onSubmit={handleCriticalsSubmit}
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
                    <Row>
                        <Card>
                            <Card.Header>Patient Information</Card.Header>
                            <Card.Body>
                                {patientInformation.pending ? (
                                    <PatientInformationForm onChange={handlePtInformationChange} onSubmit={handlePtInformationSubmit} />
                                ) : (
                                        <UpdateInformation onClick={initPatientInformation} />
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