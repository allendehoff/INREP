import React, { useEffect } from "react"
// import { useEffect } from "react"
// import { Table } from "react-bootstrap"

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

function PatientInformationTable(props) {
    const classes = useStyles()
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
        // console.log(infoArray)
    }
    // useEffect(()=> {

    if (props.patientObj !== undefined) {
        infoObjToArr(props.patientObj)
    }

    // })

    // console.log(patientInfoObject)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="vitals table">
                <TableHead>
                    <TableRow>
                        <TableCell>Age</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Chief Complaint</TableCell>
                        <TableCell>MOI/HPI</TableCell>
                        <TableCell>O2 Treatment</TableCell>
                        <TableCell>From</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {infoArray.map(info =>
                            <TableCell key={info}>{info}</TableCell>
                        )}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
    // return (
    //     <Table striped bordered >
    //         <thead>
    //             <tr>
    //                 <th>Age</th>
    //                 <th>Sex</th>
    //                 <th>Chief Complaint</th>
    //                 <th>MOI/HPI</th>
    //                 <th>O2 Treatment</th>
    //                 <th>From</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 {infoArray.map(info =>
    //                     <td key={info}>{info}</td>
    //                 )}
    //             </tr>
    //         </tbody>
    //     </Table>
    // )
}

export default PatientInformationTable