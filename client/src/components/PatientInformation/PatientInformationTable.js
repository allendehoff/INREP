import React, { useEffect } from "react"
// import { useEffect } from "react"
import { Table } from "react-bootstrap"

function PatientInformationTable(props) {
    let infoArray = []

    // let patientInfoObject
    // if(props.patientObj !== "undefined"){
    //     patientInfoObject = JSON.parse(props.patientObj)
    // }
    function infoObjToArr(obj) {
        const parsed = JSON.parse(obj)
        for (const key in parsed) {
            if (key !== "pending") {
                infoArray.push(parsed[key])
            }
        }
        console.log(infoArray)
    }
    // useEffect(()=> {

    if (props.patientObj !== undefined) {
        infoObjToArr(props.patientObj)
    }

    // })

    // console.log(patientInfoObject)

    return (
        <Table striped bordered >
            <thead>
                <tr>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Chief Complaint</th>
                    <th>MOI/HPI</th>
                    <th>O2 Treatment</th>
                    <th>From</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {infoArray.map(info =>
                        <td key={info}>{info}</td>
                    )}
                </tr>
            </tbody>
        </Table>
    )
}

export default PatientInformationTable