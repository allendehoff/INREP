import React, {useState} from "react"
// import { Form, Button } from "react-bootstrap"
// import { useState } from "react"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'

import { useParams } from "react-router-dom"
import API from "../../utils/API"

import io from "socket.io-client"
const socket = io()

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formgroup: {
        display: "inline"
    },
    input: {
        marginBottom: "0.3rem",
        marginRight: "0.3rem",
        backgroundColor:"white",
        borderRadius: "4px"
    }
}));

function EtaUpdate(props) {
    const classes = useStyles()
    const { id } = useParams()

    const [eta, setEta] = useState({
        time: ""
    })

    function handleEtaInput(event) {
        const { name, value } = event.target
        setEta({ ...eta, [name]: value })
        // console.log(eta.time)
    }

    function handleEtaSubmit(event, data) {
        // console.log(data)
        event.preventDefault()
        // findForm(event.target)
        // console.log(event.target.parentElement)

        API.updateETA(id, { time: data.time })
            .then(clearForm(event.target))
            // .then(event.target.parentElement.reset())
            .then(socket.emit("update"))
        // .then(setEta({ pending: false }))
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
        <form className={classes.root, classes.form} onSubmit={props.etaSubmit}>
                    <div className={classes.inputContainer}>
                        <TextField
                            className={classes.input}
                            required
                            variant="outlined"
                            label="ETA"
                            // placeholder="MS-21"
                            // helperText="Required"
                            onChange={handleEtaInput}
                            type="text"
                            name="time"
                        />
                    </div>
                    <Button size="large" variant="contained" color="primary" onClick={(event) => handleEtaSubmit(event, eta)}>Submit</Button>
                </form>
        // <Form
        //     onSubmit={props.onSubmit}
        // >
        //     <Form.Group>
        //         <Form.Label>What is you ETA?</Form.Label>
        //         <Form.Control
        //             name="time"
        //             placeholder="0000"
        //             // type="number"
        //             onChange={props.onChange}
        //         />
        //     </Form.Group>
        //     <Button
        //         onClick={props.onSubmit}
        //         variant="primary"
        //         type="submit">
        //         Submit
        //     </Button>
        // </Form>
    )
}

export default EtaUpdate