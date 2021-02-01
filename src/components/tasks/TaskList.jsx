import React, { useState, useEffect } from 'react';
import { makeTasks } from '../../utils/Utils';
import Task from './Task';
import TaskForm from './TaskForm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../../styles/TaskListStyles';

const TaskList = ({ task }) => {
  const classes = useStyles();
  const initTasks = makeTasks(13);

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
            <Task task={task} />
          ) : '')}
        </div>
      </div>
    </div>
  );
}

export default TaskList;