import React from "react"
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // root:{
    //     textAlign:"center"
    // },
    barContainer: {
        paddingBottom:"2rem"
    },
    bar: {
        height:"10"
    },
    textContainer: {
        width:"100%",
        textAlign:"center",
    },
    text: {
        color: "#B7D5D4",
        // textAlign:"center"
    }
}))

function LoadingBar() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.barContainer}>
                <LinearProgress 
                className={classes.bar}
                thickness={4}/>
            </Grid>
            <Grid item sx={12} className={classes.textContainer}>
                <Typography variant="h5" className={classes.text}>
                    Loading, please stand by...
                    </Typography>
            </Grid>
        </Grid>
    )
}

export default LoadingBar