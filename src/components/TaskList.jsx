import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './TaskList.scss';
import _ from "lodash";
import moment from 'moment';
import Alert from '@material-ui/lab/Alert';
import TaskForm from './TaskForm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const TaskList = ({ tasks }) => {

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
    .mapValues(items => _.map(items, 'title'))
    .value()
  
  // const arr = Object.entries(sortedTasksByDate).map(([key, value]) => {
  //   console.log("key:", key, "\nvalue:", value)
  // })
  // console.log(arr)



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
      <div className="wrapper-tasks">
        <div className="title-wrapper">
          <h2><AssignmentIcon /> Tasks</h2>
        </div>
        <div className="list-wrapper">  
          {tasks.map(task => {
            return(
              <div className="task-item">
                <Alert variant="filled"
                  severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
                  className={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"}
                  key={task.id}
                  open={completed}
                  onClose={handleClick}
                >{task.title}
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