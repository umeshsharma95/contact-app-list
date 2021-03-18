import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import Card from './ContactDetails'
import { getUserById } from '../redux/action'
import Modal from '@material-ui/core/Modal';


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
},
paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ContactList() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const favouriteUser = useSelector(state => state.favouriteUser)
    const dispatch = useDispatch()

    function showUser (oneUser) {
        dispatch(getUserById(oneUser.id))
        handleOpen()
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <List className={classes.root}>
                {
                favouriteUser.map(user => {
                        return(
                            <ListItem alignItems="flex-start" key={user.id} className={classes.inline} onClick={()=>showUser(user)}>
                                <Avatar alt="Remy Sharp" src={user.avatar} />
                                <ListItemText className={classes.text}>
                                    {user.first_name} {user.last_name}
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Card />
                </div>
            </Modal>
        </>
    );
}
