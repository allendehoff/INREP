import React from "react"
import { Form, Button } from "react-bootstrap"

function VitalsForm(props) {
    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group>
                <Form.Label>Heart Rate</Form.Label>
                <Form.Control
                    name="HR"
                    placeholder="Heart Rate"
                    type="number"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Respiratory Rate</Form.Label>
                <Form.Control
                    name="RR"
                    placeholder="Respiratory Rate"
                    type="number"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>BP Systolic</Form.Label>
                <Form.Control
                    name="BPs"
                    placeholder="Systolic"
                    type="number"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>BP Diastolic</Form.Label>
                <Form.Control
                    name="BPd"
                    placeholder="Diastolic"
                    type="number"
                    onChange={props.onChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Oxygen Saturation</Form.Label>
                <Form.Control
                    name="oxygen"
                    placeholder="O2 sat"
                    type="number"
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

export default VitalsForm