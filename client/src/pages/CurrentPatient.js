import React, { useState, useEffect } from "react"
// import { Component } from "react"
import {  Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
// import Moment from 'react-moment';
// import 'moment-timezone';

// import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EtaUpdateButton from "../components/EtaUpdate/EtaUpdateButton"
import EtaUpdate from "../components/EtaUpdate/EtaUpdate"
import PatientCard from "../components/PatientCard/PatientCard"
import VitalsForm from "../components/Vitals/VitalsForm"
import NewVitals from "../components/Vitals/NewVitals"
import CriticalWarnings from "../components/CriticalWarning/CriticalWarnings"
import CriticalWarnSelect from "../components/CriticalWarning/CritWarnSelect"
import UpdateInformation from "../components/PatientInformation/UpdateInformation"
import PatientInformationForm from "../components/PatientInformation/PatientInformationForm"
import EMSToolbar from "../components/EMSToolbar/EMSToolbar"

import { useParams } from "react-router-dom"
import API from "../utils/API"


import io from "socket.io-client"
const socket = io()

const dayjs = require("dayjs")

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        padding: "2rem 0 4rem 0",
        textAlign: "center",
        borderBottom: "5px solid #FFD400",
        marginBottom: "3rem"
    },
    subheader: {
        textAlign: "center",
        paddingBottom: "3rem"
    }
}))

function CurrentPatient() {
    const classes = useStyles()
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

    function handleVitalsSubmit(event, data) {
        event.preventDefault();
        console.log(data)
        if (data.HR !== "Not Reported") {
            API.updateVitals(id, data)
                .then(socket.emit("update"))
                // .then(setVitals(blankVitals))
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

    function handleCriticalsSubmit(event, data) {
        event.preventDefault();
        // console.log(data)
        // setCriticalWarning({ ...criticalWarnings, pending: false })
        // // console.log(criticalWarnings)
        // // const warningsString = JSON.stringify(criticalWarnings)
        // // console.log(warningsString)
        API.updateCriticalWarnings(id, data)
            // .then(setCriticalWarning(data))
            // .then(setCriticalWarning({...criticalWarnings}))
            .then(socket.emit("update"))
            // .then(event.target.parentElement.parentElement.reset())
            .then(loadById(id))
    }

    function initEtaUpdate() {
        setEta({ ...eta, pending: true })
    }

    function handleEtaInput(event) {
        const { name, value } = event.target
        setEta({ ...eta, [name]: value })
        // console.log(eta.time)
    }

    function handleEtaSubmit(event) {
        event.preventDefault()
        // console.log(event.target.parentElement.parentElement)
        API.updateETA(id, { time: eta.time })
            .then(socket.emit("update"))
            .then(event.target.parentElement.parentElement.reset())
            // .then(setEta({ pending: false }))
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
            <Grid container>
                <Grid item xs={12} className={classes.header}>
                    <Typography variant="h2" style={{ color: "#FFD400" }}>Welcome EMS User</Typography>
                    <Typography variant="h4" style={{ color: "#B7D5D4" }}>Enter updates below to keep the hospital informed about your patient</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <EMSToolbar 
                    etaInputChange={handleEtaInput}
                    etaSubmit={handleEtaSubmit}
                    criticalSubmit={handleCriticalsSubmit}
                    vitalSubmit={handleVitalsSubmit}
                />
            </Grid>

            <Row>
                <Col>
                    {/* <div>

                </div> */}
                    {/* <Row className="justify-content-center"> */}
                    <Card >
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
                </Col>
                {/* </Row> */}
                {/* <Row className="justify-content-center"> */}
                <Col>
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
                </Col>
                {/* </Row> */}
                {/* <Row className="justify-content-center"> */}
                <Col>
                    <Card style={{ marginBottom: "1rem" }}>
                        <Card.Header>New Vitals</Card.Header>
                        <Card.Body>
                            {vitals.time ? (
                                <VitalsForm onChange={handleVitalsInput} onSubmit={handleVitalsSubmit} />
                            ) : (
                                    <NewVitals onClick={initVitals} />
                                )}
                        </Card.Body>
                    </Card>
                </Col>
                {/* </Row> */}
                {/* <Row> */}
                <Col>
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
                </Col>
                {/* </Row> */}
                {/* </Col> */}
            </Row>
            <Row className="justify-content-center">
                <Col>
                    {ptInfo.data ? (
                        <PatientCard patient={ptInfo.data} />

                    ) : (<h3>Error</h3>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentPatient