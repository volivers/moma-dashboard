import React, { useState, useEffect } from 'react';
import { makeTasks } from '../common/Utils';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import Alert from '@material-ui/lab/Alert';
import TaskForm from './TaskForm';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import AssignmentIcon from '@material-ui/icons/Assignment';
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
  error: {
    backgroundColor: 'rgba(255, 69, 96, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  warning: {
    backgroundColor: 'rgba(254, 176, 25, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  info: {
    backgroundColor: ' rgba(0, 227, 150, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  wrapperTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  wrapperFiltering: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  wrapperBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btnFav: {
    margin: '0 10px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  wrapperList: {
    maxHeight: '140vh',
    overflow: 'auto',
    marginBottom: '80px'
  }
}));

const TaskList = ({ task }) => {
  const classes = useStyles();
  const initTasks = makeTasks(13);


  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "completed":
          setCompletedFilter(e.target.value);
          break;
      case "priority":
          setPriorityFilter(e.target.value);
          break;
      default: break;
    }
  }

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(initTasks);
  },[])

  const [completedFilter, setCompletedFilter] = useState("");
  useEffect(() => {
    const filtered = initTasks.map(task => ({ ...task, filtered: task.completed.includes(completedFilter) }));
    setTasks(filtered)
  }, [completedFilter])

  const [priorityFilter, setPriorityFilter] = useState("");
  useEffect(() => {
    const filtered = initTasks.map(task => ({ ...task, filtered: task.priority.includes(priorityFilter) }));
    setTasks(filtered);
  }, [priorityFilter])

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className="tasks-list">
      <div className={classes.wrapperBtn}>
        <Tooltip title="Create task">
          <Fab color="primary" aria-label="add" size="large" className={classes.btnFav} tasks={tasks} onClick={handleOpenModal}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <TaskForm open={open} setOpen={setOpen} tasks={tasks} />
        <Tooltip title="Edit task">
          <Fab aria-label="edit" size="large" className={classes.btnFav} task={task}>
            <EditIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Export tasks">
          <Fab aria-label="export"  size="large" className={classes.btnFav}>
            <CloudDownloadIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className="wrapper-tasks" >
        <div className={classes.wrapperTitle}>
          <h2><AssignmentIcon /> Tasks</h2>
          <div className={classes.wrapperFiltering}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="completed-native-simple">Status</InputLabel>
                  <Select
                    native
                    value={completedFilter}
                    onChange={(e) => handleFilterChange(e, "completed")}
                    inputProps={{
                      name: 'completed',
                      id: 'completed-native-simple',
                    }}
                  >
                <option aria-label="None" value="" />
                <option value={"true"}>Completed</option>
                <option value={"false"}>In progress</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="priority-native-simple">Priority</InputLabel>
              <Select
                native
                value={priorityFilter}
                onChange={(e) => handleFilterChange(e, "priority")}
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
          </div>
        </div>
        <div className={classes.wrapperList}>  
          {tasks.map(task => task.filtered === true ? (
              <div>
                <Alert
                  variant="filled"
                  severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
                  className={task.priority === "High" ? classes.error : task.priority === "Medium" ? classes.warning : classes.info}
                  key={task.id}
                  task={task}
                  action={
                    <IconButton aria-label="done" size="small" >
                      <DoneIcon />
                    </IconButton>
                  }
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
          ) : '')}
        </div>
      </div>
    </div>
  );
}

export default TaskList;