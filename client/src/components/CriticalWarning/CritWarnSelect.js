import React from "react"
import { Form, Card, Button } from "react-bootstrap"

function CriticalWarnSelect(props) {
    return (
        <Card style={{width:"80%", marginBottom:"1rem"}}>
            <Card.Header>Select The Critical Warnings You Need</Card.Header>
            <Card.Body>
                <Form onSubmit={props.onSubmit}>
                    <Form.Group>
                        <Form.Check
                            inline
                            type="checkbox"
                            name="CPR"
                            label="CPR IN PROGRESS"
                            onChange={props.onChange}
                            value="true" />
                        <Form.Check
                            inline
                            type="checkbox"
                            name="Stroke"
                            label="Stroke Alert"
                            onChange={props.onChange}
                            value="true" />
                        <Form.Check
                            inline
                            type="checkbox"
                            name="Trauma 1"
                            label="Trauma 1"
                            onChange={props.onChange}
                            value="true" />
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Trauma 2"
                            name="Trauma 2"
                            onChange={props.onChange}
                            value="true" />
                        <Form.Check
                            inline
                            type="checkbox"
                            name="Intubated"
                            label="Intubated"
                            onChange={props.onChange}
                            value="true" />
                        <Form.Check
                            inline
                            type="checkbox"
                            name="Fall With Thinners"
                            label="Fall with blood thinners"
                            onChange={props.onChange}
                            value="true" />
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit"
                    onClick={props.onSubmit}>
                        Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CriticalWarnSelect