import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  listitem: {
    display: "inline-block",
    width: 150,
    textAlign: "right"
  }
});


const listitems = [
    {
        text: "Home",
        path: '/',
        id: 1
    },
    {
        text: "Contact",
        path: '/contact',
        id: 2
    }
];


const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        {/* <Typography>{item.text}</Typography> */}
                        <Link to={item.path}>{item.text}</Link>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </div>
    );
}

export default MainNavigation;