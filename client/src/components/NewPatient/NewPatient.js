import React from "react"
// import { Card, Container, Row, Col } from "react-bootstrap/"
// import { Card } from "@material-ui/core"
// import API from "../../utils/API";
// import Welcome from "../../components/Welcome/Welcome"
// import NewPtButton from "./NewPtButton"
import PtInitForm from "./PtInitForm"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
// import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        padding: "2rem 0 4rem 0",
        textAlign: "center",
        // borderBottom: "5px solid #FFD400",
        marginBottom: "3rem"
    },
    subheader: {
        textAlign: "center",
        paddingBottom: "3rem"
    },
}))


function NewPatient(props) {
    const classes = useStyles()

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} className={classes.header}>
                    <Typography
                        variant="h2"
                        className="heading"
                    >Welcome EMS User
                    </Typography>
                    {/* <h1 style={{ color: "#FFD400" }}></h1> */}
                    {/* <h4 style={{ color: "#B7D5D4" }}>A tool to help EMS providers reliably send reports to Hospitals without worrying about radio signal or cell service</h4> */}
                </Grid>
                <Grid item xs={12} className={classes.subheader}>
                    <Typography
                        variant="h5"
                        className="subSubheading"
                    // style={{ color: "white" }}
                    >What unit is responding to this incident?</Typography>
                    {/* <h2 style={{ color: "white" }}>What unit is responding to this incident?</h2> */}
                </Grid>
                <Grid item xs={12}>
                    <PtInitForm />
                </Grid>
            </Grid>
            {/* <Row className="jumbotron">
                <Col>
                    <Welcome userType="EMS Provider" />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Card>
                    <Card.Header>
                        <h1>New patient</h1>
                    </Card.Header>
                    <Card.Body>
                        <PtInitForm />
                    </Card.Body>
                    {/* <a
                        className="btn btn-dark"
                        href="/ems"
                    ><h4>EMS HOME</h4></a> 
                </Card>
            </Row> */}
        </Container>
    )
}

export default NewPatient