import React , {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MediaCard from './ContactDetails'
import { useSelector } from 'react-redux'
import { getUsers, getUserById } from '../redux/action'


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
    // const [users, setUsers ] = useState([])
    const [user, setUser ] = useState()
    const users = useSelector(state => state.users)
    getUsers()
    useEffect(() => {
        getUserById()
        console.log(users)

    }, [])
    const showDetails = (oneUser) => {
        console.log(oneUser)
        setUser(oneUser)       
    }
    
    return (
        <>
        <List className={classes.root}>
            {
            users.map(user => {
                    return(
                        <ListItem alignItems="flex-start" key={user.id} className={classes.inline} onClick={()=>showDetails(user)}>
                            <Avatar alt="Remy Sharp" src={user.avatar} />
                            <ListItemText className={classes.text}>
                                {user.first_name} {user.last_name}
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
            {users}
        </List>
        {/* {user && <MediaCard user={user}/> } */}
        </>
    );
}