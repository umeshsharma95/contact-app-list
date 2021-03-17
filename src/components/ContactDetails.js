import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from '../api/axios'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    objectFit: 'contain'
  },
  avatar: {
      marginTop: '-70px',
      width: '120px',
      height: '120px',
      marginBottom : 30
  }
});

export default function MediaCard({ user }) {
  const classes = useStyles();
  const [person, setPerson ] = useState()

  useEffect(() => {
    async function getUser () {
        let id = '' + user.id;
        
        let { data } = await axios.get(id)
        console.log(person, data)
        setPerson(data);
        }
        getUser();
    }, [user])
    

  return (
      person ?
    (<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=898&q=80"
          title="Card image"
        />
        <CardContent align="center">
        <Avatar alt="Remy Sharp" src={person.data.avatar} className={classes.avatar}/>
          <Typography gutterBottom variant="h5" component="h2">
            {person.data.first_name} {person.data.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {person.support.text}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            <EmailIcon/> {person.data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Favourite
        </Button>
        <Link href={person.support.url}>
          Support US
        </Link>
      </CardActions>
    </Card>) : "Loading..."
  );
}