import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../../styles/TaskFiltersStyles';

const TaskFilters = ({ completedFilter, priorityFilter, handleFilterChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapperFiltering}>
      <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="completed-native-simple">Status</InputLabel>
            <Select
              native
              value={completedFilter}
              onChange={(e) => handleFilterChange(e, "completed")}
              inputProps={{
                name: 'completed',
                id: 'completed-native-simple',
              }}
            >
          <option aria-label="None" value="">All</option>
          <option value={"true"}>Completed</option>
          <option value={"false"}>In progress</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="priority-native-simple">Priority</InputLabel>
        <Select
          native
          value={priorityFilter}
          onChange={(e) => handleFilterChange(e, "priority")}
          inputProps={{
            name: 'priority',
            id: 'priority-native-simple',
          }}
        >
          <option aria-label="None" value="">All</option>
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default TaskFilters;