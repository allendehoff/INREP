import React, { useState } from "react"
// import Card from "react-bootstrap/Card"
import "./style.css"
import EmsLaunch from "../components/EmsLaunch/EmsLaunch"
import NewPatient from "../components/NewPatient/NewPatient"
import PreviousPatients from "../components/PreviousPatients/PreviousPatients"

function EMS() {
    const [disp, setDisp] = useState("")
    let display

    function handleDisplayChange(newDisp) {
        setDisp(newDisp)
    }

    switch (disp) {
        case "":
            display = <EmsLaunch onClick={handleDisplayChange} />
            break
        case "newPatient":
            display = <NewPatient onClick={handleDisplayChange}/>
            break
        case "previousPatients":
            display = <PreviousPatients onClick={handleDisplayChange}/>
            break
        default:
            display = <EmsLaunch onClick={handleDisplayChange} />
    }

    // if (disp === "") {
    //     display = <EmsLaunch onClick={handleDisplayChange} />
    // }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 style={{ color: "#FFD400" }}>Welcome EMS Provider</h1>
            </div>
            <div>
                {display}
            </div>
        </div>
    )
}

export default EMS