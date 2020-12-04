import React from "react"
import Card from "react-bootstrap/Card"

function NewPatient(props) {
    function goBack() {
        props.onClick("")
    }

    return (
        <Card>
            <Card.Header>
                <h1>New patient</h1>
                </Card.Header>
            <Card.Body>
                <button
                    className="btn btn-dark"
                    onClick={goBack}
                    ><h4>Back</h4></button>
                {/* <button className="btn btn-dark"><h4>Previous Patient</h4></button> */}
            </Card.Body>
        </Card>
    )
}

export default NewPatient