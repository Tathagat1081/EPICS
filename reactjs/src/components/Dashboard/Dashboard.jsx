import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Drawer,AppBar, IconButton, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles((theme) => ({
    app: {
        background: "white"
    },
    icon: {
        color: "#1f60b7"
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
        </div>

    )
}
export default Dashboard;