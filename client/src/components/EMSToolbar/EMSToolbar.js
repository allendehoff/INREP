import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import FormGroup from '@material-ui/core/FormGroup'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EtaUpdate from "../EtaUpdate/EtaUpdate"
import CriticalWarnSelect from '../CriticalWarning/CritWarnSelect';
import VitalsForm from "../Vitals/VitalsForm"
import PatientInformationForm from "../PatientInformation/PatientInformationForm"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 300,
        border: "2px solid black",
        borderRadius: "5px",
        marginBottom:"1rem",
        backgroundColor:"lightgray"
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabpanel: {
        display: "block",
        overflow: "auto",
    },
    input: {
        margin: "0 0.5rem",
    },
    inputContainer: {
        marginBottom: "1rem"
    }
}));

function EMSToolbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                // aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Update ETA" {...a11yProps(0)} style={{ backgroundColor: "rgb(73, 72, 91)" }} />
                <Tab label="Critical Warnings" {...a11yProps(1)} style={{ backgroundColor: "red" }} />
                <Tab label="Update Vitals" {...a11yProps(2)} style={{ backgroundColor: "rgb(148, 65, 71)" }} />
                <Tab label="Patient Information" {...a11yProps(3)} style={{ backgroundColor: "rgb(169, 197, 160)" }} />
                <Tab label="Interventions" {...a11yProps(4)} style={{ backgroundColor: "rgb(220, 96, 46)" }} />
                <Tab label="History" {...a11yProps(5)} style={{ backgroundColor: "rgb(175, 162, 255)" }} />
                <Tab label="Allerigies" {...a11yProps(6)} style={{ backgroundColor: "rgb(105, 79, 93)" }} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <EtaUpdate onSubmit={props.etaSubmit} />
                {/* <form className={classes.root, classes.form} onSubmit={props.etaSubmit}>
                    <div className={classes.inputContainer}>
                        <TextField
                            className={classes.input}
                            required
                            variant="outlined"
                            label="ETA"
                            // placeholder="MS-21"
                            // helperText="Required"
                            onChange={props.etaInputChange}
                            type="text"
                            name="time"
                        />
                    </div>
                    <Button size="large" variant="contained" color="primary" onClick={props.etaSubmit}>Submit</Button>
                </form> */}
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabpanel}>
                {/* <FormGroup row> */}
                <CriticalWarnSelect onSubmit={props.criticalSubmit} />
                {/* </FormGroup> */}
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabpanel}>
                <VitalsForm onSubmit={props.vitalSubmit} />
            </TabPanel>
            <TabPanel value={value} index={3} className={classes.tabpanel}>
                <PatientInformationForm onSubmit={props.ptInfoSubmit} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                This feature is coming soon...
      </TabPanel>
            <TabPanel value={value} index={5}>
                This feature is coming soon...
      </TabPanel>
            <TabPanel value={value} index={6}>
                This feature is coming soon...
      </TabPanel>
        </div>
    );
}

export default EMSToolbar