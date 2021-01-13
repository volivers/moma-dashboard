import React from 'react';
import Alert from '@material-ui/lab/Alert';

const TaskList = ({ tasks }) => {

  return (
    <div className="tasks-list">
      {tasks.map(task => {
        return(
          <Alert variant="filled" severity="error" key={task.id} className="m-2" onClose={() => {}}>
            {task.title}
          </Alert>
        );
      })}
    </div>
  );
}

export default TaskList;