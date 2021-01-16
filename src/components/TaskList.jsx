import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './TaskList.scss';
import _ from "lodash";
import moment from 'moment';


import Alert from '@material-ui/lab/Alert';
import TaskForm from './TaskForm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ErrorIcon from '@material-ui/icons/Error';
import ScheduleIcon from '@material-ui/icons/Schedule';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
  //   color: props.severity === "High" ? "red" : "blue"
    margin: '10px 10px',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TaskList = ({ tasks }) => {
  const classes = useStyles();

  const [state, setState] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(true);
  };
  


  const datesToFormat = item => moment(item.date).format('MM-DD');

  const sortedTasksByDate = _(tasks)
    .groupBy(datesToFormat)
    // .mapValues(items => _.map(items, 'title'))
    .value()
    console.log(sortedTasksByDate)
  
  // const arr = Object.entries(sortedTasksByDate).map(([key, value]) => {
  //   console.log("key:", key, "\nvalue:", value)
  // })



  return (
    <div className="tasks-list">
      <div className="btn-wrapper">
        <Tooltip title="Create task">
          <Fab color="primary" aria-label="add" size="large" className="btn" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <TaskForm open={open} setOpen={setOpen} />
        <Tooltip title="Edit task">
          <Fab aria-label="edit" size="large" className="btn">
            <EditIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Export data">
          <Fab aria-label="export"  size="large" className="btn">
            <CloudDownloadIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className="wrapper-tasks" >
        <div className="title-wrapper">
          <h2><AssignmentIcon /> Tasks</h2>
        </div>
        <div className="views-wrapper" style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-end' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Views</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'priority',
                id: 'priority-native-simple',
              }}
            >
              <option value={"High"}>Date (Desc.)</option>
              <option value={"Medium"}>Date (Asc.)</option>
              <option value={"Low"}>Priority(Desc.)</option>
              <option value={"Low"}>Priority (Asc.)</option>
            </Select>
          </FormControl>
        </div>
        <div className="list-wrapper">  
          {tasks.map(task => {
            return(
              <div>
                <Alert variant="filled"
                  severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
                  // className={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
                  className={classes.root}
                  key={task.id}
                  open={completed}
                  onClose={handleClick}
                >
                  {task.title}
                  <Chip size="small" style={{ marginLeft: '10px' }} avatar={<ScheduleIcon />} label={task.user}/>
                  <Chip size="small" style={{ marginLeft: '5px' }} avatar={<AccountCircleIcon />} label={task.user}/>
                </Alert>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;