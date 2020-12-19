import React from "react"
// import { Row, Col } from "react-bootstrap"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


// import Card from "react-bootstrap/Card"
import "./style.css"
// import EmsLaunch from "../components/EmsLaunch/##EmsLaunch"
// import NewPatient from "../components/NewPatient/NewPatient"
// import PreviousPatients from "../components/PreviousPatients/PreviousPatients"
// import Welcome from "../components/Welcome/Welcome"
import { Typography } from "@material-ui/core";

const links = [
    {
        title: "New Patient",
        route: "/new"
    },
    {
        title: "Previous Patients",
        route: "/previous"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        padding: "2rem 0 4rem 0",
        textAlign: "center",
        borderBottom: "5px solid #FFD400",
        marginBottom: "3rem"
    },
    subheader: {
        textAlign: "center",
        paddingBottom: "3rem"
    },
    button: {
        // size: "large",
        // height: ""
    }
}))

function EMS() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} className={classes.header}>
                    <Typography variant="h2" style={{ color: "#FFD400" }}>Welcome EMS User</Typography>
                    {/* <h4 style={{ color: "#B7D5D4" }}>A tool to help EMS providers reliably send reports to Hospitals without worrying about radio signal or cell service</h4> */}
                </Grid>
                <Grid item xs={12} className={classes.subheader}>
                    <Typography variant="h5" style={{ color: "white" }}>What would you like to do?</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {links.map((link) => (
                            <Grid item key={link.title}>
                                <Button size="large" variant="contained" className={classes.button} href={link.route}>{link.title}</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* <Row className="justify-content-center">
                <EmsLaunch />
            </Row> */}
        </Container>

        // const [disp, setDisp] = useState("")
        // let display

        // function handleDisplayChange(newDisp) {
        //     setDisp(newDisp)
        // }

        // switch (disp) {
        //     case "":
        //         display = <EmsLaunch onClick={handleDisplayChange} />
        //         break
        //     case "newPatient":
        //         display = <NewPatient onClick={handleDisplayChange}/>
        //         break
        //     case "previousPatients":
        //         display = <PreviousPatients onClick={handleDisplayChange}/>
        //         break
        //     default:
        //         return
        // }

        // if (disp === "") {
        //     display = <EmsLaunch onClick={handleDisplayChange} />
        // }
        // <UserContainer userType="EMS Provider">
        //     <EmsLaunch/>
        // </UserContainer>

        // <div className="container">
        //     <div className="jumbotron">
        //         <h1 style={{ color: "#FFD400" }}>Welcome EMS Provider</h1>
        //     </div>
        //     <div>
        //         <EmsLaunch/>
        //     </div>
        // </div>
    )
}

export default EMS