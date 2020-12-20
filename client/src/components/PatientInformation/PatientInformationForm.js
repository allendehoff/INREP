import React, { useState } from "react"
// import { Form, Button } from "react-bootstrap"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { useParams } from "react-router-dom"
import API from "../../utils/API"


import io from "socket.io-client"
const socket = io()

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    formgroup: {
        display: "inline"
    },
    input: {
        marginBottom: "0.3rem",
        backgroundColor:"white",
        borderRadius: "4px"
    }
}));

function PatientInformationForm(props) {
    const classes = useStyles()
    const { id } = useParams()

    const [patientInformation, setPatientInformation] = useState({
        age: "Not Reported",
        sex: "Not Reported",
        chiefComplaint: "Not Reported",
        moiHpi: "Not Reported",
        oxygenTx: "Not Reported",
        from: "Not Reported"
    })

    function handlePtInformationChange(event) {
        const { name, value } = event.target
        setPatientInformation({ ...patientInformation, [name]: value })
    }

    function handlePtInformationSubmit(event, data) {
        event.preventDefault()
        // console.log(event.target.parentElement.parentElement.parentElement)
        // console.log(event.target.parentElement.parentElement)
        API.updatePtInformation(id, data)
            .then(socket.emit("update"))
            .then(clearForm(event.target))
        // .then(event.target.parentElement.parentElement.parentElement.reset())
        // .then(setPatientInformation({ pending: false }))
        // .then(loadById(id))
    }

    function clearForm(target) {
        let form
        // let parent = ".parentElement"
        if (target.parentElement.nodeName === "FORM") {
            form = target.parentElement
        } else if (target.parentElement.parentElement.nodeName === "FORM") {
            form = target.parentElement.parentElement
        } else if (target.parentElement.parentElement.parentElement.nodeName === "FORM") {
            form = target.parentElement.parentElement.parentElement
        } else if (target.parentElement.parentElement.parentElement.parentElement.nodeName === "FORM") {
            form = target.parentElement.parentElement.parentElement.parentElement
        }
        return form.reset()
        // return form
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.formgroup}>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Age"
                        variant="outlined"
                        name="age"
                        onChange={handlePtInformationChange} />
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Sex"
                        variant="outlined"
                        name="sex"
                        onChange={handlePtInformationChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        className={classes.input}
                        id="outlined-basic"
                        label="Chief Complaint"
                        variant="outlined"
                        name="chiefComplaint"
                        onChange={handlePtInformationChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        className={classes.input}
                        id="outlined-basic"
                        label="MOI/ HPI"
                        variant="outlined"
                        name="moiHpi"
                        onChange={handlePtInformationChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="O2 Treatment"
                        variant="outlined"
                        name="oxygenTx"
                        onChange={handlePtInformationChange} />
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Coming From"
                        variant="outlined"
                        name="from"
                        onChange={handlePtInformationChange} />
                </Grid>
                <Button size="large" variant="contained" color="primary" onClick={(event) => handlePtInformationSubmit(event, patientInformation)}>Submit</Button>
            </Grid>
        </form >
    )

    // return (
    //     <Form onSubmit={props.onSubmit}>
    //         <Form.Group>
    //             <Form.Label>Age</Form.Label>
    //             <Form.Control
    //                 name="age"
    //                 placeholder="Age"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Sex</Form.Label>
    //             <Form.Control
    //                 name="sex"
    //                 placeholder="Sex"
    //                 type="string"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Chief Complaint</Form.Label>
    //             <Form.Control
    //                 name="chiefComplaint"
    //                 placeholder="CC"
    //                 type="string"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>MOI/HPI</Form.Label>
    //             <Form.Control
    //                 name="moiHpi"
    //                 placeholder="MOI/ HPI"
    //                 type="string"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Oxygen Treatment</Form.Label>
    //             <Form.Control
    //                 name="oxygenTx"
    //                 placeholder="O2 Treatment"
    //                 type="string"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Pt coming From:</Form.Label>
    //             <Form.Control
    //                 name="from"
    //                 placeholder="Pickup Location"
    //                 type="string"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Button
    //             onClick={props.onSubmit}
    //             variant="primary"
    //             type="submit">
    //             Submit
    //         </Button>
    //     </Form>
    // )
}

export default PatientInformationForm