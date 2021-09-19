import React, { useState } from 'react';
import HomePage from "../../resources/HomePage.jpg";
import { makeStyles } from '@mui/styles';
import { Drawer,AppBar, IconButton, Paper, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles((theme) => ({
    app: {
        background: "white"
    },
    homePage: {
        maxHeight: "70vh",
        inlineSize: "-webkit-fill-available",
        objectFit: "cover",
    },
    icon: {
        color: "#1f60b7"
    },
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
    
}));
const Dashboard = () => {
    const[menuDrawerOpen,setMenuDrawerOpen]=useState(false);
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" >
                <Toolbar className={classes.app}>
                    <IconButton edge="start" onClick={()=>setMenuDrawerOpen(true)}>
                        <MenuIcon className={classes.icon} />
                    </IconButton>
                    <Typography variant="h5" color="textPrimary">
                        Corona virus/COVID-19 Information Hub
                    </Typography>
                </Toolbar>

            </AppBar>
            <Drawer anchor="left" open={menuDrawerOpen} class={classes.drawer} onClose={() => setMenuDrawerOpen(false)}/>
            <div className={classes.container}>
                <img src={HomePage} className={classes.homePage} />
                <Paper elevation={5} className={classes.paper}>
                    <div>
                        <Typography  variant="h5">
                            What is COVID 19?
                        </Typography>
                        <br/>
                        <Typography variant="body3">
                            COVID-19 is an infectious disease caught by the recently found virus known as SARs-CoV2(or Coronavirus).Before the outbreak originated in Wuhan,China on December 2019,there was no information about this virus.
                        </Typography>
                    </div>
                </Paper>

            </div>
        </div>

    )
}
export default Dashboard;