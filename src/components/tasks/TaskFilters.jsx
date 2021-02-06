import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../../styles/TaskFiltersStyles';

const TaskFilters = ({ dateFilter, priorityFilter, userFilter, handleFilterChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapperFiltering}>
      <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="date-native-simple">Date</InputLabel>
            <Select
              native
              value={dateFilter}
              onChange={(e) => handleFilterChange(e, "date")}
              inputProps={{
                name: 'date',
                id: 'date-native-simple',
              }}
            >
          <option aria-label="None" value="">All</option>
          <option value={"Jan"}>January</option>
          <option value={"Feb"}>February</option>
          <option value={"Mar"}>March</option>
          <option value={"Apr"}>April</option>
          <option value={"May"}>May</option>
          <option value={"Jun"}>June</option>
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
      <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="user-native-simple">Assignee</InputLabel>
            <Select
              native
              value={userFilter}
              onChange={(e) => handleFilterChange(e, "user")}
              inputProps={{
                name: 'user',
                id: 'user-native-simple',
              }}
            >
          <option aria-label="None" value="">All</option>
          <option value={"Banksy"}>Banksy</option>
          <option value={"Invader"}>Invader</option>
          <option value={"Vhils"}>Vhils</option>
          <option value={"Obey"}>Obey</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default TaskFilters;