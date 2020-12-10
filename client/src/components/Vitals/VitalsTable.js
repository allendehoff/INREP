import React from "react"
import {Table} from "react-bootstrap"

function VitalsTable(props) {
    return (
        <Table striped bordered patient={props.patient}>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>HR</th>
                    <th>RR</th>
                    <th>BP</th>
                    <th>O2</th>
                </tr>
            </thead>
            <tbody>
                {props.patient.vitals.slice(0).reverse().map(vitals =>
                    <tr>
                        <td>{vitals.time}</td>
                        <td>{vitals.HR}</td>
                        <td>{vitals.RR}</td>
                        <td>{vitals.BPs}/{vitals.BPd}</td>
                        <td>{vitals.oxygen}%</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default VitalsTable