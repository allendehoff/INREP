import React, { useState } from "react"
// import { Form, Card, Button } from "react-bootstrap"

import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Form } from "react-bootstrap";

import { useParams } from "react-router-dom"
import API from "../../utils/API"

import io from "socket.io-client"
const socket = io()
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles((theme) => ({
    formgroup: {
        display: "block"
    },
}));

function CriticalWarnSelect(props) {
    const classes = useStyles();
    const { id } = useParams()

    const [checked, setChecked] = useState({
        CPR: false,
        stroke: false,
        trauma1: false,
        trauma2: false,
        intubated: false,
        fallWithThinners: false
    })

    // const allFalse = {
    //     CPR: false,
    //     stroke: false,
    //     trauma1: false,
    //     trauma2: false,
    //     intubated: false,
    //     fallWithThinners: false
    // }

    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
        // console.log(checked)
    };

    function handleCriticalsSubmit(event, data) {
        event.preventDefault();
        // findForm(event.target)
        // console.log(event.target.parentElement.parentElement.parentElement)
        // console.log(data)
        // setCriticalWarning({ ...criticalWarnings, pending: false })
        // // console.log(criticalWarnings)
        // // const warningsString = JSON.stringify(criticalWarnings)
        // // console.log(warningsString)

        API.updateCriticalWarnings(id, data)
            // .then(setCriticalWarning(data))
            // .then(setCriticalWarning({...criticalWarnings}))
            // .then(event.target.parentElement.parentElement.reset())
            // .then(clearForm(event.target))
            .then(socket.emit("update"))
        // .then(event.target.parentElement.parentElement.reset())
        // .then(loadById(id))
    }

    // function clearCheckBoxes() {
    //     setChecked(allFalse)
    // }
    return (
        // <FormGroup row>
        //     <Grid container className={classes.formgroup}>
        //         <form>
        //             <Grid item xs={12}>
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.CPR}
                                    onChange={handleChange}
                                    name="CPR"
                                    color="primary"
                                />
                            }
                            label="CPR IN PROGRESS"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.stroke}
                                    onChange={handleChange}
                                    name="stroke"
                                    color="secondary"
                                />
                            }
                            label="STROKE ALERT"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.trauma1}
                                    onChange={handleChange}
                                    name="trauma1"
                                    color="secondary"
                                />
                            }
                            label="Trauma Level 1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.trauma2}
                                    onChange={handleChange}
                                    name="trauma2"
                                    color="secondary"
                                />
                            }
                            label="Trauma Level 2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.intubated}
                                    onChange={handleChange}
                                    name="intubated"
                                    color="secondary"
                                />
                            }
                            label="Patient Intubated"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked.fallWithThinners}
                                    onChange={handleChange}
                                    name="fallWithThinners"
                                    color="secondary"
                                />
                            }
                            label="Fall With Blood Thinners"
                        />
                    <Button size="large" variant="contained" color="primary" onClick={(event) => handleCriticalsSubmit(event, checked)}>Submit</Button>
                </FormGroup>
            </FormControl>
        </div>
                        
        //         </form>
        //     </Grid>
        // </FormGroup>
    )
    // return (
    //     <FormGroup row>
    //         <Grid container className={classes.formgroup}>
    //             <form>
    //                 <Grid item xs={12}>
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.CPR}
    //                                 onChange={handleChange}
    //                                 name="CPR"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="CPR IN PROGRESS"
    //                     />
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.stroke}
    //                                 onChange={handleChange}
    //                                 name="stroke"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="STROKE ALERT"
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.trauma1}
    //                                 onChange={handleChange}
    //                                 name="trauma1"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="Trauma Level 1"
    //                     />
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.trauma2}
    //                                 onChange={handleChange}
    //                                 name="trauma2"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="Trauma Level 2"
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.intubated}
    //                                 onChange={handleChange}
    //                                 name="intubated"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="Patient Intubated"
    //                     />
    //                     <FormControlLabel
    //                         control={
    //                             <Checkbox
    //                                 checked={checked.fallWithThinners}
    //                                 onChange={handleChange}
    //                                 name="fallWithThinners"
    //                                 color="secondary"
    //                             />
    //                         }
    //                         label="Fall With Blood Thinners"
    //                     />
    //                 </Grid>
    //                 <Button size="large" variant="contained" color="primary" onClick={(event) => handleSubmit(event, checked)}>Submit</Button>
    //             </form>
    //         </Grid>
    //     </FormGroup>
    // )
}

export default CriticalWarnSelect