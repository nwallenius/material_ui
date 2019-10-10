import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import postsdata from './postsdata';


const Posts = ({ match }) => {
    return (
        <div style={{marginTop: 120, marginBottom: 20, padding: 20}}>
            <Grid container justify="flex-start" alignItems="flex-start" spacing={2}>
                {postsdata.map(postitem => (
                    <Grid item xs={4}>
                        <Card key={postitem.id}>
                            <CardMedia
                                component="img"
                                alt={postitem.title}
                                height="250"
                                image={postitem.image}
                            />
                            <CardContent>
                                <Typography variant="h6">{postitem.title}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`${match.url}${postitem.id}`}>
                                    <Button variant="outlined" color="disabled">Read more</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Posts;