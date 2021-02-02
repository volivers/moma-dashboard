import React, { createContext, useReducer } from 'react';
import tasksReducer from '../reducers/tasks.reducer';
import { makeTasks } from '../data/makeData';

const defaultTasks = makeTasks(10);

export const TasksContext = createContext();
export const DispatchContext = createContext();

export function TasksProvider(props) {
  const [tasks, dispatch] = useReducer(tasksReducer, defaultTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}