import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector , useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../redux/action'


const useStyles = makeStyles((theme) => ({
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
      marginBottom : 20
  },

  email: {
    display: 'flex',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'pointer'
  },
  space: {
   marginRight : theme.spacing(1),
  },  

}));

export default function ContactCard() {
  const classes = useStyles();
  const person = useSelector(state => state.user);
  const favourite = useSelector(state => state.favouriteUser);
  const dispatch = useDispatch();
  function addFavour (person) {
    const { data } = person;
    let isFavourite = favourite.some(user => user.id === data.id)
    !isFavourite && dispatch(addFavourite(data))
    isFavourite && dispatch(removeFavourite(data))
  }

  return (
     Object.keys(person).length && (<Card className={classes.root}>
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
          <Typography variant="body2" color="textPrimary" component="p" className={classes.email}>
            <EmailIcon className={classes.space} /> {person.data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.bottom}>
        <Typography variant="body2" component="p" color="textPrimary" className={classes.email} onClick={() => addFavour(person)}>
          {favourite.some(user => user.id === person.data.id) ? 
          <FavoriteIcon color="secondary" fontSize="large" /> 
          : <FavoriteBorderIcon color="secondary" fontSize="large" /> }           
          Add To Favourite
        </Typography>
        <Link href={person.support.url}>
          Support US
        </Link>
      </CardActions>
    </Card>)
    ); 
}