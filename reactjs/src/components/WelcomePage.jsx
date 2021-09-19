import React from 'react';
import HomePage from "../resources/HomePage.jpg";
import { makeStyles } from '@mui/styles';
import { Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "50%",
        marginLeft: "40px",
        paddingTop: "20px",
        position: "absolute",
        marginTop: "25%",
        height: "32vh"
    },
    container: {
        position: "relative",
        display: "flex",
    },
    text: {
        fontSize: "25"
    },
    homePage: {
        maxHeight: "70vh",
        inlineSize: "-webkit-fill-available",
        objectFit: "cover",
    },
}))
const WelcomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <img src={HomePage} className={classes.homePage} />
            <Paper elevation={5} className={classes.paper} >
                <div>
                    <Typography variant="h5">
                        What is COVID 19 ?
                    </Typography>
                    <br />
                    <Typography variant="body3">
                        COVID - 19 is an infectious disease caught by the recently found virus known as SARs - CoV2(or Coronavirus).Before the outbreak originated in Wuhan, China on December 2019, there was no information about this virus.
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}
export default WelcomePage;