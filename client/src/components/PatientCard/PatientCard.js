import React from "react";
import { Card, Accordion, Row, Col } from "react-bootstrap"
// import Moment from 'react-moment';
// import 'moment-timezone';

import VitalsTable from "../Vitals/VitalsTable"
import PatientInformationTable from "../PatientInformation/PatientInformationTable"

import "./ptCardStyle.css"

function PatientCard(props) {
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
        <div style={{backgroundColor:"white"}}>
            <Row>
                <Col>
                    <p style={{ fontSize: "1.5rem" }}>ETA: <span>{props.patient.ETA}</span></p>
                </Col>
                <Col>
                    <p style={{ fontSize: "1.25rem" }}>Unit Responding: <span>{props.patient.respondingUnit}</span></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Critical Warnings: </p>
                </Col>
                <Col>
                    {/* <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem" }}> */}
                    {warningKeys.map(warning => {
                        if (warning !== "pending") {
                            return <p key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem" }}>{warning}</p>
                        }
                    }
                    )}
                    {/* </div> */}
                </Col>
            </Row>

        </div>


        //     <Card style={{ marginBottom: "1rem", paddingBottom: "1rem", minWidth: "80%" }}>
        //         <Card.Header>
        //             Unit Responding: {props.patient.respondingUnit} |
        //         ETA: {props.patient.ETA}
        //         </Card.Header>
        //         <Card.Body>
        //             <Card.Title>Critical Warnings:
        //             <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem" }}>
        //                     {warningKeys.map(warning => {
        //                         if (warning !== "pending") {
        //                             return <p key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "0.5rem" }}>{warning}</p>
        //                         }
        //                     }
        //                     )}
        //                 </div>
        //             </Card.Title>
        //             {/* <Card.Text>ETA: {props.patient.ETA}</Card.Text> */}
        //             <Accordion defaultActiveKey="0">
        //                 <Accordion.Toggle eventKey="vitals" className="accordionButton"><span className="accBtnSpan">Vitals <span>&gt;</span></span></Accordion.Toggle>
        //                 <Accordion.Collapse eventKey="vitals">
        //                     <VitalsTable patient={props.patient} />
        //                 </Accordion.Collapse>
        //                 {/* </Card> */}
        //             </Accordion>
        //             <Accordion defaultActiveKey="0">
        //                 <Accordion.Toggle eventKey="patientInformation" className="accordionButton">
        //                     <span className="accBtnSpan">Patient Information <span>&gt;</span></span>
        //                 </Accordion.Toggle>
        //                 <Accordion.Collapse eventKey="patientInformation">
        //                     <PatientInformationTable patientObj={props.patient.patientInformation} />
        //                 </Accordion.Collapse>
        //             </Accordion>
        //         </Card.Body>
        //     </Card>
        // </div>
    )
}

export default PatientCard