import React, { createContext, useReducer } from 'react';
import tasksReducer from '../reducers/tasks.reducer';
import { makeTasks } from '../utils/makeData';

const defaultTasks = [makeTasks(10)];

export const TasksContext = createContext();

export function TasksProvider(props) {
  const [tasks] = useReducer(tasksReducer, defaultTasks);

  return (
    <TasksContext.Provider value={tasks}>
      {props.children}
    </TasksContext.Provider>
  );
}