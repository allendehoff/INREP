import React from "react";
import { Card, Accordion } from "react-bootstrap"
// import Moment from 'react-moment';
// import 'moment-timezone';

import VitalsTable from "../Vitals/VitalsTable"

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

    return (
        <Card style={{ marginBottom: "1rem", paddingBottom: "1rem", minWidth: "80%" }}>
            <Card.Header>
                Unit Responding: {props.patient.respondingUnit} |
                ETA: {props.patient.ETA}
            </Card.Header>
            <Card.Body>
                <Card.Title>Critical Warnings:
                    <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem" }}>
                        {warningKeys.map(warning => {
                            if (warning !== "pending") {
                                return <p key={warning} style={{ backgroundColor: "red", color: "white", borderRadius: "2px", padding: "1rem" }}>{warning}</p>
                            }
                        }
                        )}
                    </div>
                </Card.Title>
                {/* <Card.Text>ETA: {props.patient.ETA}</Card.Text> */}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle eventKey="vitals">Vitals</Accordion.Toggle>
                        <Accordion.Collapse eventKey="vitals">
                            <VitalsTable patient={props.patient} />
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </Card.Body>
        </Card>
    )
}

export default PatientCard