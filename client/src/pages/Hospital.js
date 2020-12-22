import React, { useEffect, useState } from "react"
// import { Row, Col } from "react-bootstrap"
import "./style.css"

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Welcome from "../components/Welcome/Welcome"
import PatientCard from "../components/PatientCard/PatientCard"
import API from "../utils/API"

// import socketIOClient from "socket.io-client"
// const socket = socketIOClient("http://localhost:3000/")

import io from "socket.io-client"
const socket = io()

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        padding: "1rem 0 2rem 0",
        textAlign: "center",
        // borderBottom: "5px solid #003249",
        marginBottom: "3rem"
    },
}))
// let socket
function Hospital() {
    const classes = useStyles()
    // class Hospital extends Component {
    //     constructor() {
    //         super();
    //         this.state = {
    //             patients: []
    //         }
    //         socket = socketIOClient("http://localhost:3001/")
    //     }
    const [patients, setPatients] = useState([])

    function loadSix() {
        API.findSix()
            .then(res =>
                // console.log(res.data),
                // this.setState({patients: res.data}),
                setPatients(res.data),
                // console.log(this.state.patients)

            )
            .catch(err => console.log(err));
    }
    useEffect(() => {
        // componentDidMount() {

        // console.log(id)
        loadSix()
        // console.log(ptInfo)
    }, [])
    // socket.on('hello', ({ message }) => alert(message));

    // socket.on('hello', () => {console.log("hello world")});

    socket.on("hello", () => {
        loadSix()
    })

    return (
        <Container style={{ paddingTop: "2rem" }}>
            <Grid container>
                <Grid item xs={12} className={classes.header}>
                    <Typography variant="h2"
                    className="heading"
                    //  style={{ color: "#FFD400", fontWeight: "600", borderBottom:"2px solid #FFD400", paddingBottom:"1rem" }}
                     >Welcome Hospital User</Typography>
                    <Typography variant="h4" 
                    className="subheading"
                    // style={{ color: "#FFD400", paddingTop:"1rem"}}
                    >Here are the most recent updates regarding your incoming patients from EMS</Typography>
                </Grid>
                {patients.length ? (
                    <Grid item xs={12}>
                        {
                            patients.map(patient => (
                                // console.log(patient)
                                // <Row key={patient._id} style={{ justifyContent: "center" }}>
                                <PatientCard key={patient._id} patient={patient} />
                                // </Row>
                            ))
                        }
                    </Grid>
                ) : (
                        <Grid item xs={12}>
                            <Typography variant="h4">Loading Patients</Typography>
                        </Grid>
                    )}
            </Grid>
        </Container>
    )
    // return (
    //     <Container >
    //         <div
    //             style={{ disply: "flex", textAlign: "center", padding: "1rem 0 2rem 0", borderBottom: "5px solid #FFD400", marginBottom: "3rem" }}
    //         >
    //             <Typography variant="h2" style={{ color: "#FFD400" }}>Welcome Hospital User</Typography>
    //             <Typography variant="h4" style={{ color: "#B7D5D4" }}>Here are the most recent updates regarding your incoming patients from EMS</Typography>
    //         </div>
    //         {/* <Row className="jumbotron">
    //             <Col>
    //                 <Welcome userType="Hospital User" />
    //             </Col>
    //         </Row> */}
    //         {patients.length ? (
    //             <div style={{ justifyContent: "space-around" }}>
    //                 {patients.map(patient => (
    //                     // console.log(patient)
    //                     // <Row key={patient._id} style={{ justifyContent: "center" }}>
    //                     <PatientCard key={patient._id} patient={patient} />
    //                     // </Row>
    //                 ))}
    //             </div>
    //         ) : (
    //                 <Row>
    //                     <h3>No Patients to display</h3>
    //                 </Row>
    //             )}
    //     </Container>
    //     // <h1>welcome to the Hospital page!</h1>
    // )
    // }
}

export default Hospital