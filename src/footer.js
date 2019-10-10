import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        // background:"linear-gradient(to right, #ffcc00, #ff6600, #ff6600, #ff8533, #ffcc00)"
    },
    links: {
        fontSize: '20px',
        padding: '5px',
        listStyle: 'none'
    },
    title: {
        margin: '50px 0 0 50px'
    },
    form: {
        border: "solid 2px #663d00",
        // background:"linear-gradient(to right, #ffcc00, #ff6600, #ff8533)",
        background:"linear-gradient(to right, #ffcc00, #ff6600, #ff6600, #ff8533, #ffcc00)",
        borderRadius: 10,
        margin: 25,
        padding: 25
    },
    radiobuttonbox: {
        marginTop: 25,
        marginBottom: 15
    },
    radiobuttons: {
        display: "inline-block"
    },
    checkboxes: {
        marginTop: 10,
        marginBottom: 25
    },
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

            <Grid item xs={6}>
                <ul>
                    <li  className={classes.links}>
                        <Icon color="secondary" style={{ padding: 5 }}>favorite</Icon>
                        <Link to="/">Home</Link>
                    </li>
                    <li  className={classes.links}>
                        <Icon color="secondary" style={{ padding: 5 }}>favorite</Icon>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                    <h2 className={classes.title}>Travel links:</h2>

                <ul>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.worldtravelguide.net" target="_blank">World Travel Guide</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.finnair.com/fi-fi" target="_blank">Finnair</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.lonelyplanet.com" target="_blank">Lonely Planet</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.ebookers.fi" target="_blank">Ebookers</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.airbnb.fi" target="_blank">Airbnb</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.supersaver.fi" target="_blank">Supersaver</a>
                    </li>
                    <li className={classes.links}>
                        <Icon style={{ padding: 5 }}>favorite</Icon>
                        <a href="https://www.trivago.fi" target="_blank">Trivago</a>
                    </li>
                </ul>
            </Grid>   

            <Grid item xs={6}>
            <form className={classes.form}>

                <Typography variant="subtitle1">General information</Typography>

                <TextField 
                    fullWidth 
                    margin="normal" 
                    label="First name" 
                />
                <TextField 
                    fullWidth 
                    margin="normal" 
                    label="Last name" 
                />
                <TextField 
                    fullWidth 
                    margin="normal" 
                    label="Email" 
                    type="email" 
                />
                <TextField 
                    fullWidth 
                    margin="normal" 
                    label="Phone" 
                    type="phone" 
                />
                <TextField 
                    fullWidth 
                    required 
                    margin="normal" 
                    label="Password" 
                    type="password" 
                />

                <FormControl fullWidth className={classes.radiobuttonbox}>
                    {/* <FormLabel component="legend">Radio button example</FormLabel> */}

                    <Typography variant="subtitle1">What's your favorite European capital?</Typography>

                    <RadioGroup className={classes.radiobuttons} aria-label="city" name="city1">
                        <FormControlLabel 
                            value="paris" 
                            control={<Radio />} 
                            label="Paris" 
                        />
                        <FormControlLabel 
                            value="budapest" 
                            control={<Radio />} 
                            label="Budapest" 
                        />
                        <FormControlLabel 
                            value="reykjavik" 
                            control={<Radio />} 
                            label="Reykjavik" 
                        />
                        <FormControlLabel 
                            value="prague" 
                            control={<Radio />} 
                            label="Prague" 
                        />
                        <FormControlLabel 
                            value="london" 
                            control={<Radio />} 
                            label="London" 
                        />
                        <FormControlLabel 
                            value="berlin" 
                            control={<Radio />} 
                            label="Berlin" 
                        />
                        <FormControlLabel 
                            value="dublin" 
                            control={<Radio />} 
                            label="Dublin" 
                        />
                        <FormControlLabel 
                            value="barcelona" 
                            control={<Radio />} 
                            label="Barcelona" 
                        />
                        <FormControlLabel 
                            value="rome" 
                            control={<Radio />} 
                            label="Rome" 
                        />
                        <FormControlLabel 
                            value="other" 
                            control={<Radio />} 
                            label="Other" 
                        />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth className={classes.checkboxes}>
                    <FormLabel component="label">Subscription</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Subscribe to the newsletter"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Yes, I would like to receive offers to my email"
                                labelPlacement="end"
                            />
                        </FormGroup>
                </FormControl>

                <Button variant="contained" color="link">Send</Button>

            </form>
            </Grid>
            </Grid>
        </div>
    );
}

export default Footer;