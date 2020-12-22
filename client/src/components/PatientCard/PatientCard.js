import React, { useState, useEffect } from "react";
// import { Card, Accordion, Row, Col } from "react-bootstrap"
// import Moment from 'react-moment';
// import 'moment-timezone';

import VitalsTable from "../Vitals/VitalsTable"
import PatientInformationTable from "../PatientInformation/PatientInformationTable"

// import "./ptCardStyle.css"

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Component } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#E3E0DD",
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "2rem"
    },
    respondingUnit: {
        // backgroundColor: "white",
        textAlign: "center",
        borderBottom: "1px solid black"
    },
    header: {
        marginBottom: "1rem",
        borderBottom: "1px solid black"
    },
    warningContainer: {
        // padding: "2rem 0",
        alignItems: "center"
    },
    warningHead: {
        lineHeight: "4.0",
        textAlign: "center",
    },
    warningField: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderLeft: "1px solid black"
    },
    etaField: {
        border: "5px solid black",
        backgroundColor: "rgb(73, 72, 91)",
        color: "white",
        textAlign: "center",
        alignItems: "center"
    },
    etaText: {
        lineHeight: "4.0"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeight,
    },
    vitalsHead: {
        backgroundColor: "rgb(234, 186, 107)"
        // "#004777"
    },
    vitalsDetails: {
        backgroundColor: "rgb(234, 186, 107, 0.5)"
    },
    ptInfoHead: {
        backgroundColor: "rgb(169, 197, 160)"
    },
    ptInfoDetails: {
        backgroundColor: "rgb(169, 197, 160, 0.5)"
    },
    interventionsHead: {
        backgroundColor: "rgb(220, 96, 46)"
    },
    interventionsDetail: {
        backgroundColor: "rgb(220, 96, 46, 0.5)"
    },
    historyHead: {
        backgroundColor: "rgb(175, 162, 255)"
    },
    historyDetail: {
        backgroundColor: "rgb(175, 162, 255, 0.5)"
    },
    allergiesHead: {
        backgroundColor: "rgb(158, 208, 230)"
    },
    allergiesDetail: {
        backgroundColor: "rgb(158, 208, 230, 0.5)"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function PatientCard(props) {
    const classes = useStyles()
    const alertField = document.getElementById("alert")
    const warningField = document.getElementById("warning")

    // const [alerts, setAlerts]= useState([])
    // const [warnings, setWarnings] = useState([])
    let allKeys = []
    let alertKeys = []
    let warningKeys = []
    // let propertyString
    function fetchTrueWarnings(obj) {
        // await loadById(id)
        for (const property in obj) {
            if (obj[property] === true) {
                // console.log(JSON.stringify(property))
                // let propertyString = JSON.stringify(property)
                // warningKeys.push(JSON.stringify(property))
                warningKeys.push(property)
                // allKeys.push(property)
                // console.log(allKeys)
                // if (propertyString === "TRAUMA1") {
                //     console.log(property)
                //     // alertKeys.push(property)
                //     // setAlerts(...alerts, property)
                //     // console.log(alerts)
                // }
                //  else if (JSON.stringify(property)) {
                //     // warningKeys.push(property)
                //     // setWarnings(...warnings, property)
                //     // console.log(warnings)
                // }
                // return property
            }
            // return warningKeys
        }
        // console.log(warningKeys)
    }
    // console.log(props.patient.criticalWarn)
    if (props.patient.criticalWarn !== undefined) {
        // displayWarnings(JSON.parse(props.patient.criticalWarn))
        fetchTrueWarnings(JSON.parse(props.patient.criticalWarn))
    }

    // function displayWarnings(obj) {
    //     fetchTrueWarnings(obj, () => {
    //         return console.log("warnings" + {warningKeys})
    //     })
    // }

    // const patientInfoObject = JSON.parse(props.patient.patientInformation)

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.respondingUnit}>
                    <Typography> UNIT RESPONDING: <span>{props.patient.respondingUnit}</span></Typography>
                </Grid>
                <Grid container className={classes.header}>
                    <Grid item xs={3} className={classes.etaField}>
                        <Typography className={classes.etaText} variant="h5">ETA: <span>{props.patient.ETA}</span></Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container className={classes.warningContainer}>
                            <Grid item xs={4} className={classes.warningHead}>
                                <Typography variant="h6">CRITICAL WARNINGS</Typography>
                            </Grid>
                            <Grid item xs={8} className={classes.warningField}>
                                <Grid container>
                                    <Grid item id="alert" xs={12} className={classes.warningField}>
                                        {warningKeys.map(alert => {
                                            if ((alert === "CPR") || (alert === "STROKE") || (alert=== "TRAUMA1")) {
                                                return <Paper key={alert} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0", minWidth:"105px", textAlign:"center"  }}>{alert}</Paper>
                                            }
                                        })}
                                    </Grid>
                                    <Grid item id="warning" xs={12} className={classes.warningField}>
                                        {warningKeys.map(warning => {
                                            if ((warning === "TRAUMA2") || (warning === "INTUBATED") || (warning === "STEMI")) {
                                                return <Paper key={warning} style={{ backgroundColor: "yellow", color: "black", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0", minWidth:"105px", textAlign:"center" }}>{warning}</Paper>
                                            }
                                        })}
                                    </Grid>
                                    {/* {warningKeys.map(warning => {
                                        // {
                                        //     () => {

                                        if (warning === ("CPR" || "STROKE" || "TRAUMA1")) {
                                            alertField.append(<Paper key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0" }}>{warning}</Paper>)
                                        } else {
                                            warningField.append(<Paper key={warning} style={{ backgroundColor: "yellow", color: "black", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0" }}>{warning}</Paper>)
                                        }
                                    }
                                    )
                                    } */}
                                    {/* // return <Paper key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0" }}>{warning}</Paper>
                                    // })} */}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Container>
                    <Grid item xs={12}>
                        <div className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    className={classes.vitalsHead}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="Vitals"
                                >
                                    <Typography className={classes.heading}>VITALS</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    className={classes.vitalsDetails}
                                >
                                    <VitalsTable patient={props.patient} />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    className={classes.ptInfoHead}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="Patient Information"
                                >
                                    <Typography className={classes.heading}>PATIENT INFORMATION</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.ptInfoDetails}>
                                    <PatientInformationTable patientObj={props.patient.patientInformation} />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    className={classes.interventionsHead}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="Interventions"
                                >
                                    <Typography className={classes.heading}>INTERVENTIONS</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.interventionsDetail}>
                                    <Typography>This feature is coming soon...</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    className={classes.historyHead}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="History"
                                >
                                    <Typography className={classes.heading}>HISTORY</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.historyDetail}>
                                    <Typography>This feature is coming soon...</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    className={classes.allergiesHead}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="Allergies"
                                >
                                    <Typography className={classes.heading}>ALLERGIES</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.allergiesDetail}>
                                    <Typography>This feature is coming soon...</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>
                </Container>
            </Grid>
        </div>
    )

    // return (
    //     <div style={{backgroundColor:"white"}}>
    //         <Row>
    //             <Col>
    //                 <p style={{ fontSize: "1.5rem" }}>ETA: <span>{props.patient.ETA}</span></p>
    //             </Col>
    //             <Col>
    //                 <p style={{ fontSize: "1.25rem" }}>Unit Responding: <span>{props.patient.respondingUnit}</span></p>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col>
    //                 <p>Critical Warnings: </p>
    //             </Col>
    //             <Col>
    //                 {/* <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem" }}> */}
    //                 {warningKeys.map(warning => {
    //                     if (warning !== "pending") {
    //                         return <p key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem" }}>{warning}</p>
    //                     }
    //                 }
    //                 )}
    //                 {/* </div> */}
    //             </Col>
    //         </Row>

    //     </div>


    //     //     <Card style={{ marginBottom: "1rem", paddingBottom: "1rem", minWidth: "80%" }}>
    //     //         <Card.Header>
    //     //             Unit Responding: {props.patient.respondingUnit} |
    //     //         ETA: {props.patient.ETA}
    //     //         </Card.Header>
    //     //         <Card.Body>
    //     //             <Card.Title>Critical Warnings:
    //     //             <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem" }}>
    //     //                     {warningKeys.map(warning => {
    //     //                         if (warning !== "pending") {
    //     //                             return <p key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem" }}>{warning}</p>
    //     //                         }
    //     //                     }
    //     //                     )}
    //     //                 </div>
    //     //             </Card.Title>
    //     //             {/* <Card.Text>ETA: {props.patient.ETA}</Card.Text> */}
    //     //             <Accordion defaultActiveKey="0">
    //     //                 <Accordion.Toggle eventKey="vitals" className="accordionButton"><span className="accBtnSpan">Vitals <span>&gt;</span></span></Accordion.Toggle>
    //     //                 <Accordion.Collapse eventKey="vitals">
    //     //                     <VitalsTable patient={props.patient} />
    //     //                 </Accordion.Collapse>
    //     //                 {/* </Card> */}
    //     //             </Accordion>
    //     //             <Accordion defaultActiveKey="0">
    //     //                 <Accordion.Toggle eventKey="patientInformation" className="accordionButton">
    //     //                     <span className="accBtnSpan">Patient Information <span>&gt;</span></span>
    //     //                 </Accordion.Toggle>
    //     //                 <Accordion.Collapse eventKey="patientInformation">
    //     //                     <PatientInformationTable patientObj={props.patient.patientInformation} />
    //     //                 </Accordion.Collapse>
    //     //             </Accordion>
    //     //         </Card.Body>
    //     //     </Card>
    //     // </div>
    // )
}

export default PatientCard