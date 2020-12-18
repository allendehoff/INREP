import React from "react"
import { Form, Button } from "react-bootstrap"

function PatientInformationForm(props) {
    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                    name="age"
                    placeholder="Age"
                    type="number"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Sex</Form.Label>
                <Form.Control
                    name="sex"
                    placeholder="Sex"
                    type="string"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Chief Complaint</Form.Label>
                <Form.Control
                    name="chiefComplaint"
                    placeholder="CC"
                    type="string"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>MOI/HPI</Form.Label>
                <Form.Control
                    name="moiHpi"
                    placeholder="MOI/ HPI"
                    type="string"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Oxygen Treatment</Form.Label>
                <Form.Control
                    name="oxygenTx"
                    placeholder="O2 Treatment"
                    type="string"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Pt coming From:</Form.Label>
                <Form.Control
                    name="from"
                    placeholder="Pickup Location"
                    type="string"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Button 
            onClick={props.onSubmit}
            variant="primary" 
            type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default PatientInformationForm