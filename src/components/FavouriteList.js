import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    margin: '10px auto',
    cursor: 'pointer'
},
inline: {
    padding: '20px',
},
text: {
    marginLeft: '20px',
}
}));

export default function ContactList() {
    const classes = useStyles();
    const [users, setUsers ] = useState([])
    
    return (
        <List className={classes.root}>
            {
            users.map(user => {
                    return(
                        <ListItem alignItems="flex-start" key={user.id} className={classes.inline} >
                            <Avatar alt="Remy Sharp" src={user.avatar} />
                            <ListItemText className={classes.text}>
                                {user.first_name} {user.last_name}
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
            hi FavouriteList
        </List>
    );
}