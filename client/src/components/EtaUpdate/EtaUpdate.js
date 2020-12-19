import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
// import { useState } from "react"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

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
        marginRight: "0.3rem"
    }
}));

function EtaUpdate(props) {
    const classes = useStyles()
    const [eta, setEta] = useState({
        time: ""
    })

    function handleEtaInput(event) {
        const { name, value } = event.target
        setEta({ ...eta, [name]: value })
        // console.log(eta.time)
    }
    function handleSubmit(event, data) {
        // console.log(data)
        props.onSubmit(event, data)
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
                    <Button size="large" variant="contained" color="primary" onClick={(event) => handleSubmit(event, eta)}>Submit</Button>
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