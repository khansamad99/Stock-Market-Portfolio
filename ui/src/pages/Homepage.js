import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  appBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hero: {
    margin: "25px 0",
    padding: "0 25px",
    display: 'flex',
    alignItems: "center"
  },
  heroRight: {
    padding: "0 5%",
  },
  heroTitle: {
    fontWeight: "bold",
    marginBottom: "15px"
  }
}));

const Homepage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="lg">
        <div className={classes.appBar}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Smallcase
              </Typography>
              <Button color="inherit" href="/portfolio">My Portfolio</Button>
            </Toolbar>
          </AppBar>
        </div>

      <Grid cs={12} className={classes.hero} container>
        <Grid xs={12} md={6} item>
          <img width="100%" src={process.env.PUBLIC_URL + '/assets/smallCase-thumbnail.jpg'} alt="Thumbnail" />
        </Grid>
        <Grid className={classes.heroRight} xs={12} md={6} item>
          <Typography variant="h4" color="primary" className={classes.heroTitle}>Smallcase</Typography>
          <Typography variant="p">Stock investing made easy

          A smallcase is a basket of stocks that reflects an idea
          smallcases are portfolios of stocks or ETFs, weighted intelligently to track a theme, strategy or objective</Typography>
        </Grid>
      </Grid>
      </Container>
    )
}

export default Homepage
