import React, { useState, useEffect, useContext } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import moment from 'moment';
import Task from './Task';
import TaskFilters from './TaskFilters';
import TaskForm from './TaskForm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useStyles from '../../styles/TaskListStyles';

const TaskList = () => {
  const classes = useStyles();
  const tasks = useContext(TasksContext);

  const [sortedTasks, setSortedTasks] = useState(tasks);
  useEffect(() => {
    const dateSorting = tasks.sort((a,b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setSortedTasks(dateSorting);
  }, [tasks])

  const [dateFilter, setDateFilter] = useState('');
  useEffect(() => {
    const filtered = tasks.map(task => ({ ...task, filtered: moment(task.date).format("MMM").includes(dateFilter) }));
    setSortedTasks(filtered);
  }, [dateFilter, tasks])

  const [priorityFilter, setPriorityFilter] = useState('');
  useEffect(() => {
    const filtered = tasks.map(task => ({ ...task, filtered: task.priority.includes(priorityFilter) }));
    setSortedTasks(filtered);
  }, [priorityFilter, tasks])

  const [userFilter, setUserFilter] = useState('');
  useEffect(() => {
    const filtered = tasks.map(task => ({ ...task, filtered: task.userName.includes(userFilter) }));
    setSortedTasks(filtered);
  }, [userFilter, tasks])

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "date":
        setDateFilter(e.target.value);
        break;
      case "priority":
        setPriorityFilter(e.target.value);
        break;
      case "user":
        setUserFilter(e.target.value);
        break;
      default: break;
    }
  }

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className="tasks-list">
      <div className={classes.wrapperBtn}>
        <Tooltip title="Create task">
          <Fab
            color="primary"
            aria-label="add"
            size="large"
            className={classes.btnFav}
            onClick={handleOpenModal}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <TaskForm open={open} setOpen={setOpen} />
        <Tooltip title="Share">
          <Fab aria-label="share" size="large" className={classes.btnFav}>
            <ShareIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Export to...">
          <Fab aria-label="export"  size="large" className={classes.btnFav}>
            <CloudDownloadIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className="wrapper-tasks" >
        <div className={classes.wrapperTitle}>
          <h2><AssignmentIcon /> Tasks</h2>
          <TaskFilters
            dateFilter={dateFilter}
            priorityFilter={priorityFilter}
            userFilter={userFilter}
            handleFilterChange={handleFilterChange}
          />
        </div>
        <div className={classes.wrapperList}>  
          {sortedTasks.map(task => task.filtered === true ? (
            <Task
              key={task.id}
              title={task.title}
              date={task.date}
              priority={task.priority}
              userName={task.userName}
              completed={task.completed}
            />
          ) : '')}
        </div>
      </div>
    </div>
  );
}

export default TaskList;