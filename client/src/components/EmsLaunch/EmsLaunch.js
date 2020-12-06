import React from "react"
import Card from "react-bootstrap/Card"

function EmsLaunch(props) {
    // function createNewPatient() {
    //     props.onClick("newPatient")
    // }

    // function previousPatients() {
    //     props.onClick("previousPatients")
    // }
    return (
        <Card>
            <Card.Header><h1>What would you like to do?</h1></Card.Header>
            <Card.Body>
                <a
                    className="btn btn-dark"
                    href="/new"
                    // onClick={createNewPatient}
                ><h4>New Patient</h4></a>
                <a
                    className="btn btn-dark"
                    href="/previous"
                    // onClick={previousPatients}
                ><h4>Previous Patients</h4></a>
                {/* <button className="btn btn-dark"><h4>Previous Patient</h4></button> */}
            </Card.Body>
        </Card>
    )
}

export default EmsLaunch