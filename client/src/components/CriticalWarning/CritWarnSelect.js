import React, { useState } from "react"
// import { Form, Card, Button } from "react-bootstrap"

import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles((theme) => ({
    formgroup: {
        display: "block"
    }
}));

function CriticalWarnSelect(props) {
    const classes = useStyles();

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

    const handleSubmit = (event, data) => {
        props.onSubmit(event, data)
    }

    // function clearCheckBoxes() {
    //     setChecked(allFalse)
    // }
    return (

        <FormGroup row>
            <Grid container className={classes.formgroup}>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked.CPR}
                                onChange={handleChange}
                                name="CPR"
                                color="secondary"
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Button size="large" variant="contained" color="primary" onClick={(event) => handleSubmit(event, checked)}>Submit</Button>
            </Grid>
        </FormGroup>
    )
}

export default CriticalWarnSelect