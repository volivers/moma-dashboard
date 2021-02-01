import React from 'react';
import { format } from 'date-fns';
import Alert from '@material-ui/lab/Alert';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../styles/TaskStyles';

const Task = ({ task }) => {
  const classes = useStyles();

  return (
    <div>
      <Alert
        variant="filled"
        severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
        className={task.priority === "High" ? classes.error : task.priority === "Medium" ? classes.warning : classes.info}
        key={task.id}
        task={task}
        action={ task.completed === "false" ?
          <IconButton aria-label="done" size="small" >
            <CloseIcon />
          </IconButton> : ""
        }
      >
        {task.title}
        <Chip
          size="small"
          className={classes.chip}
          avatar={<ScheduleIcon />}
          label={format(task.date, "dd/MM")}
        />
        <Chip
          size="small"
          className={classes.chip}
          avatar={<AccountCircleIcon />}
          label={task.userName}
        />
      </Alert>
    </div>
  );
};

export default Task;