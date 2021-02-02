import uuid from 'react-uuid'
import { ADD_TASK, COMPLETE_TASK } from '../constants/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, {
        id: uuid(),
        title: action.title,
        date: action.date,
        priority: action.priority,
        userName: action.userName,
        completed: false
      }];
    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export default reducer;
