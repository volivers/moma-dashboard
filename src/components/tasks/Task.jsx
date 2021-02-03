import React, { useState, useContext } from 'react';
import { DispatchContext } from '../../contexts/tasks.context';
import { COMPLETE_TASK } from '../../constants/actions';
import moment from 'moment';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../styles/TaskStyles';

const Task = ({ id, title, date, priority, userName, completed }) => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);

  const [open, setOpen] = useState(true);

  const handleTaskCompleted = () => {
    dispatch({ type: COMPLETE_TASK, title });
    setOpen(false);
  };

  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity={priority === "High" ? "error" : priority === "Medium" ? "warning" : "info"}
        className={priority === "High" ? classes.error : priority === "Medium" ? classes.warning : classes.info}
        key={id}
        action={ completed === false ?
          <IconButton aria-label="done" size="small" onClick={handleTaskCompleted}>
            <DoneIcon />
          </IconButton> : ""
        }
      >
        {title}
        <Chip
          size="small"
          className={classes.chip}
          avatar={<ScheduleIcon />}
          label={moment(date).format("MMM D")}
        />
        <Chip
          size="small"
          className={classes.chip}
          avatar={<AccountCircleIcon />}
          label={userName}
        />
      </Alert>
    </Collapse>
  );
};

export default Task;