import React, { useState } from "react"
import {Card,Container, Row, Col} from "react-bootstrap/"
// import API from "../../utils/API";
import Welcome from "../../components/Welcome/Welcome"
import NewPtButton from "./NewPtButton"
import PtInitForm from "./PtInitForm"


function NewPatient(props) {
    // const [currentPt, setCurrentPt] = useState({ status: "" })
    // let patient

    // function handlePtRender(newPt) {
    //     setCurrentPt(newPt)
    // }

    // // function renderSwitch(currentPt) {
    // switch (currentPt.status) {
    //     case "":
    //         patient = <NewPtButton onClick={handlePtRender} />
    //         break
    //     case "pending":
    //         patient = <PtInitForm onSubmit={handlePtRender}/>
    //         break
    //     default:
    //     // break
    //     // patient = (<button
    //     //     className="btn btn-success"
    //     //     onClick={setCurrentPt({ status: "pending" })}
    //     // >
    //     //     <h4>Start New Patient Report</h4>
    //     // </button>)
    // }
    // }

    // function goToEmsDash() {
    //     props.onClick("")
    // }

    return (
        <Container>
            <Row className="jumbotron">
                <Col>
                    <Welcome userType="EMS Provider" />
                </Col>
            </Row>
            <Card>
                <Card.Header>
                    <h1>New patient</h1>
                </Card.Header>
                <Card.Body>
                    <PtInitForm/>
                </Card.Body>
                <a
                    className="btn btn-dark"
                    href="/ems"
                ><h4>EMS HOME</h4></a>
            </Card>
        </Container>
    )
}

export default NewPatient