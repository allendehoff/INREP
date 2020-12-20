import React from "react"
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

function VitalsTable(props) {
    const classes = useStyles()
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="vitals table">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>LOR</TableCell>
                        <TableCell>HR</TableCell>
                        <TableCell>RR</TableCell>
                        <TableCell>BP</TableCell>
                        <TableCell>O2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.patient.vitals.slice(0).reverse().map(vitals =>
                        <TableRow key={vitals.time}>
                            <TableCell component="th" scope="row">
                                {vitals.time}
                            </TableCell>
                            <TableCell>{vitals.LOR}</TableCell>
                            <TableCell >{vitals.HR}</TableCell>
                            <TableCell >{vitals.RR}</TableCell>
                            <TableCell>{vitals.BPs}/{vitals.BPd}</TableCell>
                            <TableCell>{vitals.oxygen}%</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
    // return (
    //     <Table striped bordered patient={props.patient}>
    //         <thead>
    //             <tr>
    //                 <th>Time</th>
    //                 <th>HR</th>
    //                 <th>RR</th>
    //                 <th>BP</th>
    //                 <th>O2</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {props.patient.vitals.slice(0).reverse().map(vitals =>
    //                 <tr key={vitals.time}>
    //                     <td>{vitals.time}</td>
    //                     <td>{vitals.HR}</td>
    //                     <td>{vitals.RR}</td>
    //                     <td>{vitals.BPs}/{vitals.BPd}</td>
    //                     <td>{vitals.oxygen}%</td>
    //                 </tr>
    //             )}
    //         </tbody>
    //     </Table>
    // )
}

export default VitalsTable