import React from "react";
// import { Card, Accordion, Row, Col } from "react-bootstrap"
// import Moment from 'react-moment';
// import 'moment-timezone';

import VitalsTable from "../Vitals/VitalsTable"
import PatientInformationTable from "../PatientInformation/PatientInformationTable"

import "./ptCardStyle.css"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "rgb(73, 72, 91)",
        border: "1px solid black"
    },
    warningField: {
        display: "flex",
        justifyItems: "space-around"
    },
    respondingUnit: {
        backgroundColor: "white",
        textAlign: "center"
    },
    etaField: {
        border: "5px solid black"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function PatientCard(props) {
    const classes = useStyles()
    // useEffect(() => {

    // }, [])

    let warningKeys = []
    function fetchTrueWarnings(obj) {
        // await loadById(id)
        for (const property in obj) {
            if (obj[property] === true) {
                warningKeys.push(property)
            }
            // return warningKeys
        }
        // console.log(warningKeys)
    }
    // console.log(props.patient.criticalWarn)
    if (props.patient.criticalWarn !== undefined) {
        fetchTrueWarnings(JSON.parse(props.patient.criticalWarn))
    }

    // const patientInfoObject = JSON.parse(props.patient.patientInformation)

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.respodingUnit}>
                    <Typography variant="p"> Unit Responding: <span>{props.patient.respondingUnit}</span></Typography>
                </Grid>
                <Grid item xs={3} className={classes.etaField}>
                    <Typography variant="h5">ETA: <span>{props.patient.ETA}</span></Typography>
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h6">Critical Warnings:</Typography>
                        </Grid>
                        <Grid item xs={8} className={classes.warningField}>
                            {warningKeys.map(warning => {
                                return <Typography variant="p" key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem" }}>{warning}</Typography>
                            })}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="Vitals"
                                >
                                    <Typography className={classes.heading}>Vitals</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <VitalsTable patient={props.patient} />
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
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