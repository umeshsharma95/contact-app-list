import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux'
import { sortList } from '../redux/action'

const useStyles = makeStyles((theme) => ({

formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
},
color: {
    color: "white"
}
}));

export default function Dropdown () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const users = useSelector(state => state.users)
  const favouriteUser = useSelector(state => state.favouriteUser)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(sortList(users, favouriteUser, e.target.value))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label" className={classes.color}>Sort By</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          className={classes.color}
        >
          <MenuItem value="none">
            <em>Sort By</em>
          </MenuItem>
          <MenuItem value={'a-z'}>A-Z</MenuItem>
          <MenuItem value={'z-a'}>Z-A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}