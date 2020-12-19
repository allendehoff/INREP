import React, { useState } from "react"
import API from "../../utils/API"
import Form from "react-bootstrap/Form"
// import {Form} from "@material-ui/core"
import { useHistory } from "react-router-dom";


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import { TextField } from "@material-ui/core";

import io from "socket.io-client"
const socket = io()

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: "0.5rem",
            width: '25ch',
        },
    },
    inputContainer: {
        // display:"flex",
        // justifyItems:"space-around"
        paddingBottom: "2rem",
    },
    form: {
        backgroundColor: "lightgray",
        padding: "1rem",
        color: "black"
    },
    input: {
        margin: "0 0.5rem"
    },
    buttonDiv: {
        justifyItems: "center"
    }
}));

function PtInitForm(props) {
    const classes = useStyles()

    const [ptInit, setPtInit] = useState({
        respondingUnit: "",
        ETA: "",
        // criticalWarn: ""
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

        // if (navigator.onLine){

        API.createPatient(ptInit).then((data) => {
            // console.log(data)
            handleReroute(data.data._id)
        }).then(socket.emit("update"))
        // } else {console.log("offlineoffline")}

        // .then(API.findMostRecentPatient()
        //     .then(setPtId()))
        // .then(console.log(dbModel)))

    }

    return (
        <Grid container justify="center">
            <form className={classes.root, classes.form} onSubmit={handleSubmit}>
                <div className={classes.inputContainer}>
                    <TextField
                        className={classes.input}
                        required
                        variant="outlined"
                        label="Unit Responding"
                        placeholder="MS-21"
                        helperText="Required"
                        onChange={handleInputChange}
                        type="text"
                        name="respondingUnit"
                    />
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        label="ETA"
                        helperText="Optional (Can update later)"
                        type="text"
                        name="ETA"
                        onChange={handleInputChange}
                    />
                </div>
                <div className={classes.buttonDiv}>
                    <Button size="large" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </form>
        </Grid>
        // <Form onSubmit={handleSubmit}>
        //     <Form.Group>
        //         <Form.Label >Unit Responding</Form.Label>
        //         <Form.Control
        //             onChange={handleInputChange}
        //             type="text"
        //             name="respondingUnit"
        //         />
        //     </Form.Group>
        //     {/* <Form.Group>
        //         <Form.Label>ETA</Form.Label>
        //         <Form.Control
        //                 type="text"
        //                 name="ETA"
        //                 onChange={handleInputChange}
        //             />
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Critical Warnings</Form.Label>
        //         <Form.Control
        //                 type="text"
        //                 name="criticalWarn"
        //                 onChange={handleInputChange} />
        //     </Form.Group> */}
        //     <Form.Control className="btn btn-primary" type="submit" value="Initiate Patient Report"></Form.Control>
        //     {/* <button 
        //     className="btn btn-warning"
        //     >
        //         <h4>Open New Incident
        //         </h4>
        //     </button> */}
        // </Form>
    )
}

export default PtInitForm