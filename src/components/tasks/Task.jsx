import React, { useState } from 'react';
import moment from 'moment';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../styles/TaskStyles';

const Task = ({ task }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [completed, setCompleted] = useState("false");

  const handleTaskCompleted = () => {
    setOpen(false);
    setCompleted("true");
  };

  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
        className={task.priority === "High" ? classes.error : task.priority === "Medium" ? classes.warning : classes.info}
        key={task.id}
        task={task}
        action={ task.completed === "false" ?
          <IconButton aria-label="done" size="small" onClick={handleTaskCompleted}>
            <DoneIcon />
          </IconButton> : ""
        }
      >
        {task.title}
        <Chip
          size="small"
          className={classes.chip}
          avatar={<ScheduleIcon />}
          label={moment(task.date).format("MMM D")}
        />
        <Chip
          size="small"
          className={classes.chip}
          avatar={<AccountCircleIcon />}
          label={task.userName}
        />
      </Alert>
    </Collapse>
  );
};

export default Task;