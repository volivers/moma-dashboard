import React, { useState, useEffect, useContext } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
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

  const [sortedTasks, setSortedTasks] = useState([]);
  useEffect(() => {
    const dateSorting = tasks.sort((a,b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setSortedTasks(dateSorting);
  }, [sortedTasks, tasks])

  // const [completedFilter, setCompletedFilter] = useState("");
  // useEffect(() => {
  //   const filtered = initTasks.map(task => ({ ...task, filtered: task.completed.includes(completedFilter) }));
  //   setTasks(filtered);
  // }, [completedFilter])

  // const [priorityFilter, setPriorityFilter] = useState("");
  // useEffect(() => {
  //   const filtered = initTasks.map(task => ({ ...task, filtered: task.priority.includes(priorityFilter) }));
  //   setTasks(filtered);
  // }, [priorityFilter])

  // const handleFilterChange = (e, filterType) => {
  //   switch (filterType) {
  //     case "completed":
  //       setCompletedFilter(e.target.value);
  //         break;
  //     case "priority":
  //         setPriorityFilter(e.target.value);
  //         break;
  //     default: break;
  //   }
  // }

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className="tasks-list">
      <div className={classes.wrapperBtn}>
        <Tooltip title="Create task">
          <Fab color="primary" aria-label="add" size="large" className={classes.btnFav} onClick={handleOpenModal}>
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
          {/* <TaskFilters completedFilter={completedFilter} priorityFilter={priorityFilter} handleFilterChange={handleFilterChange} /> */}
        </div>
        <div className={classes.wrapperList}>  
          {/* {tasks.map(task => task.filtered === true ? ( */}
          {sortedTasks.map(task => (
            <Task task={task} />
          // ) : '')}
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;