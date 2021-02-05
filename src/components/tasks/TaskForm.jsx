import React, { useState, useContext } from 'react';
import { DispatchContext } from '../../contexts/tasks.context';
import useInputState from '../../hooks/useInputState';
import { ADD_TASK } from '../../constants/actions';
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
import useStyles from '../../styles/TaskFormStyles';

const Taskform = ({ open, setOpen }) => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  
  const [selectedTitle, handleTitleChange, clearTitle] = useInputState('');
  const [selectedPriority, handlePriorityChange] = useInputState('High');
  const [selectedUserName, handleUserNameChange] = useInputState('Banksy');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    dispatch({
              type: ADD_TASK,
              title: selectedTitle,
              date: selectedDate,
              priority: selectedPriority,
              userName: selectedUserName
    });
    handleCloseModal();
    clearTitle();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the new task details.
          </DialogContentText>
          <form onSubmit={handleNewTask}>
            <Grid container justify="space-between">
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Task"
                type="title"
                fullWidth
                value={selectedTitle}
                onChange={handleTitleChange}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="dense"
                    id="date-picker-dialog"
                    label="Date"
                    format="dd/MM/yyyy"
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
                  value={selectedPriority}
                  onChange={handlePriorityChange}
                  inputProps={{
                    name: 'priority',
                    id: 'priority-native-simple',
                  }}
                >
                  <option value={"High"}>High</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"Low"}>Low</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="user-native-simple">Assign to...</InputLabel>
                <Select
                  margin="dense"
                  native
                  value={selectedUserName}
                  onChange={handleUserNameChange}
                  inputProps={{
                    name: 'user',
                    id: 'user-native-simple',
                  }}
                >
                  <option value={"Banksy"}>Banksy</option>
                  <option value={"Invader"}>Invader</option>
                  <option value={"Vhils"}>Vhils</option>
                  <option value={"Obey"}>Obey</option>
                </Select>
              </FormControl>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNewTask} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Taskform;