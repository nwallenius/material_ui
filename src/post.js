import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        height: 'auto',
        marginBottom: 30
    },
    image: {
        height: 300,
        float: 'left',
        padding: '25px 25px 0 0'
    },
    text: {
        padding: '25px 0 25px 0'
    }
  });


const Post = ({ match, data }) => {
    const classes = useStyles();
    let post = data.find(p => p.id == match.params.postId);
    return (
        <div className={classes.root}>
            <div style={{marginTop: 120, marginBottom: 20, padding: 20}}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="h2">{post.title}</Typography>
                <img className={classes.image} src={post.image} alt={post.title} />
                <Typography variant="body1" className={classes.text}>{post.text}</Typography>
                {/* <Button variant="outlined">Back</Button> */}
            </div>

        </div>
    );
}

export default Post;