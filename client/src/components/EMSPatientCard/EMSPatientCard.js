import React from "react";
// import { Card, Accordion, Row, Col } from "react-bootstrap"
// import Moment from 'react-moment';
// import 'moment-timezone';

import VitalsTable from "../Vitals/VitalsTable"
import PatientInformationTable from "../PatientInformation/PatientInformationTable"

import EMSToolbar from "../EMSToolbar/EMSToolbar"
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "rgb(193, 224, 247)",
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
        padding: "2rem 0",
        alignItems: "center"
    },
    warningHead: {
        lineHeight: "4.0",
        textAlign: "center"
    },
    warningField: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
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
        backgroundColor: "rgb(148, 65, 71)"
        // "#004777"
    },
    vitalsDetails: {
        backgroundColor: "rgb(148, 65, 71, 0.5)"
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
        backgroundColor: "rgb(105, 79, 93)"
    },
    allergiesDetail: {
        backgroundColor: "rgb(105, 79, 93, 0.5)"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function EMSPatientCard(props) {
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

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.respondingUnit}>
                    <Typography> Unit Responding: <span>{props.patient.respondingUnit}</span></Typography>
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
                                {warningKeys.map(warning => {
                                    return <Paper key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem", margin: "0.5rem 0" }}>{warning}</Paper>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Container
                    className={classes.toolbar}>
                    <EMSToolbar
                        // etaInputChange={handleEtaInput}
                        // etaSubmit={props.etaSubmit}
                        // criticalSubmit={props.criticalsSubmit}
                        // vitalSubmit={props.vitalsSubmit}
                        // ptInfoSubmit={props.ptInformationSubmit}
                        // clearForm={props.clearForm}
                    />
                </Container>
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
}

export default EMSPatientCard