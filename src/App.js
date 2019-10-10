import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';

import MainNavigation from './MainNavigation';
import Footer from './footer';
import Contact from './Contact';
import Posts from './posts';
import Post from './post';
import postsdata from './postsdata';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 25,
    // background:"linear-gradient(to right, #ff6d00, #ffa200)"
    // background:"linear-gradient(to right, #196619, #2eb82e, #70db70, #c2f0c2)"
    background:"linear-gradient(to right, #cc5200, #ff6600, #ff8533, #ffcc00)"
  },
  title: {
    flexGrow: 1,
    color: 'black'
  }
});


const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Router>

        <AppBar className={classes.root}>
          <ToolBar>
            <Typography variant="h4" className={classes.title}>Material-UI example</Typography>
            <MainNavigation />
          </ToolBar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route path="/contact" component={Contact}/>
          <Route path={`/:postId`} render={ (props) => <Post data={postsdata} {...props} /> } />
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
