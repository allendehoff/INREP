import React from "react"
import { Form, Button } from "react-bootstrap"

function EtaUpdate(props) {
    return (
        <Form
            onSubmit={props.onSubmit}
        >
            <Form.Group>
                <Form.Label>What is you ETA?</Form.Label>
                <Form.Control
                    name="time"
                    placeholder="0000"
                    // type="number"
                    onChange={props.onChange}
                />
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

export default EtaUpdate