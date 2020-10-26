import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { mergeClasses } from '@material-ui/styles';

import Comp from "./comp";

import project1 from "../image/file/images/ecommerce.png";
// import project2 from "../image/file/images/connect4.png"
import project3 from "../image/file/images/snap.png"


// theme =>
const useStyles = makeStyles(({
    mainContainer: {
        background: "#233",
        height: "100%",

    }, cardContainer: {
        maxWidth:345,
        margin:"5rem auto"
    }
}))


const Portfolio = () => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={mergeClasses.mainContainer}>
                <Navbar />
                <Comp/>

                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="140" image={project1} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        E-Commerce
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Site de Vente de Vetement, Realisé en Groupe (1 mois ), principalement en React-JS et Laravel
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                   
                                    <Button size="small" color="primary">
                                        Live Demo (Bientot ...)
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="140" image={project3} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        My Snap
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Projet Réaliser en Groupe, en utilisant React Native
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Live Demo (Bientot ...)
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
