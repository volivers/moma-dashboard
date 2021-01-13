import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList = ({ tasks }) => {

  return (
    <ListGroup variant="flush">
      {tasks.map(task => {
        return(
          <ListGroup.Item key={task.id}>{task.title}</ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;