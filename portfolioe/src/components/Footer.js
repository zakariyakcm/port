import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250,
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
     <BottomNavigation width="auto" style={{background:"#233"}}>
         <BottomNavigationAction href="https://github.com/Tadjidine24" className={classes.root} style={{ padding: 0}} icon={<GitHub/>}/>
         <BottomNavigationAction href="https://linkedin.https://www.linkedin.com/in/tadjidine-tamou-frontenddev/" className={classes.root} style={{ padding: 0}} icon={<LinkedIn/>}/>
     </BottomNavigation>
    )
}

export default Footer
