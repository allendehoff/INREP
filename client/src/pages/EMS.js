import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// import Card from "react-bootstrap/Card"
import "./style.css"
import EmsLaunch from "../components/EmsLaunch/EmsLaunch"
// import NewPatient from "../components/NewPatient/NewPatient"
// import PreviousPatients from "../components/PreviousPatients/PreviousPatients"
import Welcome from "../components/Welcome/Welcome"

function EMS() {
    
    return (
        <Container>
            <div
                style={{ disply: "flex", textAlign: "center", padding: "1rem 0 2rem 0", borderBottom: "5px solid #FFD400", marginBottom: "3rem" }}
            >
                <h1 style={{ color: "#FFD400" }}>Welcome EMS User</h1>
            </div>
            <Row className="justify-content-center">
                <EmsLaunch />
            </Row>
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