import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContactList from './ContactList';
import Dropdown from './Dropdown';
import FavouriteList from './FavouriteList';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '100px',
    marginRight: '100px',
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

export default function Home() {
    const [ tabing, setTabing ] = useState(false)
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <Typography variant="h6" className={classes.title} onClick={() => setTabing(false)}>
                    Contact List
                    </Typography>
                    <Dropdown/>
                    <Button color="inherit" onClick={() => setTabing(true)}>Favourites</Button>
                </Toolbar>
            </AppBar>
            {!tabing && <ContactList/>}
            {tabing && <FavouriteList/>}
        </div>
    )
}

