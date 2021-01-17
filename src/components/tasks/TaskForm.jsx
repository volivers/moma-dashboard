import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const Taskform = ({ open, setOpen, tasks }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date('2021-02-08T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [state, setState] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the new task details.
          </DialogContentText>
          <Grid container justify="space-between">
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Task"
              type="title"
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="dense"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
            </MuiPickersUtilsProvider>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Priority</InputLabel>
              <Select
                margin="dense"
                native
                value={tasks.priority}
                onChange={handleChange}
                inputProps={{
                  name: 'priority',
                  id: 'priority-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="artwork-native-simple">Artwork</InputLabel>
              <Select
                margin="dense"
                native
                value={tasks.artwork_id}
                onChange={handleChange}
                inputProps={{
                  name: 'artwork',
                  id: 'artwork-native-simple',
                }}
              >
                <option aria-label="None" value="" />
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="user-native-simple">Assign to...</InputLabel>
              <Select
                margin="dense"
                native
                value={tasks.user}
                onChange={handleChange}
                inputProps={{
                  name: 'user',
                  id: 'user-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={"High"}>Robin</option>
                <option value={"Medium"}>Barney</option>
                <option value={"Low"}>Ted</option>
                <option value={"Low"}>Lilly</option>
              </Select>
            </FormControl>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Taskform;