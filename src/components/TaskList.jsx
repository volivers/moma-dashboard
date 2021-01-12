import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Task from './Task';

const TaskList = () => {

  return (
    <ListGroup variant="flush">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ListGroup>
  );
}

export default TaskList;