import React, { useState } from "react"
// import { Form, Button } from "react-bootstrap"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Typography } from "@material-ui/core";

const dayjs = require("dayjs")

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
    },
    submitButton: {
        padding: "8px 22px",
        fontSize: "0.9375rem",
        minWidth: "64px",
        backgroundColor:"blue",
        // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
        /* font-weight: 500; */
        lineHeight: "1.75",
        borderRadius: "4px",
    }
}));

const blankVitals = {
    time: "",
    LOR: "Not Reported",
    HR: "Not Reported",
    RR: "Not Reported",
    BPs: "Not Reported",
    BPd: "Not Reported",
    oxygen: "Not Reported",
}

// setVitals({ ...vitals, time: dayjs().format("HH:mm:ss") })



function VitalsForm(props) {
    const classes = useStyles();

    const [vitals, setVitals] = useState(blankVitals)

    function handleVitalsInput(event) {
        // console.log(vitals.LOR)
        if (vitals.time === "") {
            setVitals({ ...vitals, time: dayjs().format("HH:mm:ss") })
        } else {
            const { name, value } = event.target;
            setVitals({ ...vitals, [name]: value })
        }
    };

    // function updateTime() {
    // }

    function handleSubmit(event, data) {
        // console.log(data)
        props.onSubmit(event, data)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.formgroup}>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="LOR"
                        variant="outlined"
                        name="LOR"
                        onChange={handleVitalsInput} />
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Oxygen Sat"
                        variant="outlined"
                        name="oxygen"
                        onChange={handleVitalsInput} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Heart Rate"
                        variant="outlined"
                        name="HR"
                        onChange={handleVitalsInput} />
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="Repiratory Rate"
                        variant="outlined"
                        name="RR"
                        onChange={handleVitalsInput} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="BP systolic"
                        variant="outlined"
                        name="BPs"
                        onChange={handleVitalsInput} />
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        label="BP diastolic"
                        variant="outlined"
                        name="BPd"
                        onChange={handleVitalsInput} />

                </Grid>
                {/* <Typography className={classes.submitButton}>SUBMIT</Typography> */}
                <Button size="large" variant="contained" color="primary" onClick={(event) => handleSubmit(event, vitals)}>Submit</Button>
            </Grid>
        </form >
    );
    // return (
    //     <Form onSubmit={props.onSubmit}>
    //         <Form.Group>
    //             <Form.Label>Heart Rate</Form.Label>
    //             <Form.Control
    //                 name="HR"
    //                 placeholder="Heart Rate"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Respiratory Rate</Form.Label>
    //             <Form.Control
    //                 name="RR"
    //                 placeholder="Respiratory Rate"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>BP Systolic</Form.Label>
    //             <Form.Control
    //                 name="BPs"
    //                 placeholder="Systolic"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>BP Diastolic</Form.Label>
    //             <Form.Control
    //                 name="BPd"
    //                 placeholder="Diastolic"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Form.Group>
    //             <Form.Label>Oxygen Saturation</Form.Label>
    //             <Form.Control
    //                 name="oxygen"
    //                 placeholder="O2 sat"
    //                 type="number"
    //                 onChange={props.onChange}></Form.Control>
    //         </Form.Group>
    //         <Button 
    //         onClick={props.onSubmit}
    //         variant="primary" 
    //         type="submit">
    //             Submit
    //         </Button>
    //     </Form>
    // )
}

export default VitalsForm