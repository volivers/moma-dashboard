import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import _ from "lodash";
import { format } from 'date-fns';

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Chip from '@material-ui/core/Chip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 10px',
    textTransform: 'capitalize',
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

const TaskList = ({ tasks, task }) => {
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

  const handleOpenModal = () => {
    setOpen(true);
  };

  const [done, setDone] = useState(false);

  const handleClickDone = (e) => {
    setDone(true);
    console.log(e);
  };
  


  // const datesToFormat = item => moment(item.date).format('MM-DD');

  // const sortedTasksByDate = _(tasks)
  //   .groupBy(datesToFormat)
  //   .mapValues(items => _.map(items, 'title'))
  //   .value()
  //   console.log(sortedTasksByDate)
  
  // const arr = Object.entries(sortedTasksByDate).map(([key, value]) => {
  //   console.log("key:", key, "\nvalue:", value)
  // })



  return (
    <div className="list-wrapper">  
      {tasks.map(task => {
        return(
          <div>
            <Alert
              variant="filled"
              severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
              className={classes.root}
              id={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
              key={task.id}
              task={task}
              action={
                <IconButton aria-label="done" size="small" >
                  <DoneIcon />
                </IconButton>
              }
              open={done}
              onClick={handleClickDone}
            >
              {task.title}
              <Chip
                size="small"
                style={{ marginLeft: '5px', color: '#616161', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                avatar={<ScheduleIcon />}
                label={format(task.date, "dd/MM")}
              />
              <Chip
                size="small"
                style={{ marginLeft: '5px', color: '#616161', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                avatar={<AccountCircleIcon />}
                label={task.user}
              />
            </Alert>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;