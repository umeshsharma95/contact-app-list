import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ContactList from './ContactList';
import Dropdown from './Dropdown';
import FavouriteList from './FavouriteList';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 110px",
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  tabs: {
    marginLeft: 20
  },
}));

export default function Home() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div >
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <Typography variant="h6" className={classes.title} >
                     My Contact App
                    </Typography>
                    <Dropdown/>
                    <Tabs value={value} onChange={handleChange} className={classes.tabs} aria-label="simple tabs example">
                      <Tab label="Contact List" {...a11yProps(0)} />
                      <Tab label="Favourites" {...a11yProps(1)} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
              <ContactList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FavouriteList/>
            </TabPanel>
        </div>
    )
}

