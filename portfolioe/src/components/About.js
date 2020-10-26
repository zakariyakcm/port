import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
    },
    taille: {
        marginLeft: "4rem",
        marginRight: "4rem",
    }

}));


const About = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    A propos de Moi
                </Typography>
                <Box component="div" className={classes.taille}>

                    <Box component="div" className={classes.taille}>
                        <Typography variant="h6" align="center" className={classes.subHeading}>
                            Je suis Etudiant Développeur web au Samsung Campus,
                            en première année. Je suis en recherche d’un contrat de
                            professionnalisation/d'apprentissage pour
                            la deuxième année au Samsung Campus qui
                            se déroulera en alternance du 02/11/2020 au
                            30/10/2021.
                            Rythme : 3 semaines entreprise / 1 semaine école
                            Je suis polyvalent, déterminé et créatif.
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Voici mes Coordonnées :
                         </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            tadjidinetamou@gmail.com
                         </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>
                            0761568802
                         </Typography>
                    </Box>


                </Box>
            </Box>
        </>
    )
}

export default About
