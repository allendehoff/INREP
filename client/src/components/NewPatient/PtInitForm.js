import React, { useState } from "react"
import API from "../../utils/API"
import Form from "react-bootstrap/Form"
import { useHistory } from "react-router-dom";

function PtInitForm(props) {
    const [ptInit, setPtInit] = useState({
        respondingUnit: "",
        ETA: "",
        criticalWarn: ""
    })
    const history = useHistory()
    // const [ptId, setPtId] = useState("")

    function handleInputChange(event) {
        // console.log(event.target.name)
        const { name, value } = event.target
        setPtInit({ ...ptInit, [name]: value })
    }

    function handleReroute(id) {
        history.push("/patients/" + id)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(ptInit)
        API.createPatient(ptInit).then((data) => {
            // console.log(data)
            handleReroute(data.data._id)
        })
        // .then(API.findMostRecentPatient()
        //     .then(setPtId()))
        // .then(console.log(dbModel)))

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label >Unit Responding</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="text"
                    name="respondingUnit"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>ETA</Form.Label>
                <Form.Control
                        type="text"
                        name="ETA"
                        onChange={handleInputChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Critical Warnings</Form.Label>
                <Form.Control
                        type="text"
                        name="criticalWarn"
                        onChange={handleInputChange} />
            </Form.Group>
            <Form.Control type="submit" value="Submit"></Form.Control>
            {/* <button 
            className="btn btn-warning"
            >
                <h4>Open New Incident
                </h4>
            </button> */}
        </Form>
    )
}

export default PtInitForm