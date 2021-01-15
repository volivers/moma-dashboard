import React, { useState, useEffect } from 'react';
import './App.scss';
import { makeArtworks, makeTasks, makeUsers } from './components/common/Utils';
import SideDrawer from './components/common/SideDrawer';
import ImplementedArtworks from './components/counters/ImplementedArtworks';
import CompletedTasks from './components/counters/CompletedTasks';
import ArtworksTable from './components/ArtworksTable';
import TotalArtworks from './components/counters/TotalArtworks';
import Timeline from './components/Timeline';
import TaskList from './components/TaskList';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Footer from './components/common/Footer';

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const makeData = () => {
      setArtworks(makeArtworks(250));
      console.log(makeArtworks(250));
      setTasks(makeTasks(100));
      console.log(makeTasks(100));
      setUsers(makeUsers(1));
  };

  useEffect(() => { makeData(); },[])

  return (
    <main className="app">
      <SideDrawer users={users}/>
      <div className="left-scene">
        <h1>Dashboard</h1>
        <div className="wrapper-counters">
          <TotalArtworks artworks={artworks}/>
          <ImplementedArtworks artworks={artworks}/>
          <CompletedTasks tasks={tasks}/>
        </div>        
        <div className="wrapper-artworks">
          <div className="title-wrapper">
            <FavoriteIcon />
            <h2>ArtWorks</h2>
          </div>
          <ArtworksTable artworks={artworks}/>
        </div>
        <div className="wrapper-timeline">
          <div className="title-wrapper">
            <ScheduleIcon />
            <h2>Timeline</h2>
          </div>
          <Timeline artworks={artworks} tasks={tasks} />
        </div>
      </div>
      <div className="right-scene">
        <div className="btn-wrapper">
          <Tooltip title="Add task">
            <Fab color="primary" aria-label="add" size="large" className="btn">
              <AddIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Edit task">
            <Fab aria-label="edit" size="large" className="btn">
              <EditIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Save view">
            <Fab aria-label="save"  size="large" className="btn">
              <SaveIcon />
            </Fab>
          </Tooltip>
        </div>
        <div className="wrapper-tasks">
          <div className="title-wrapper">
            <AssignmentIcon />
            <h2>Tasks</h2>
          </div>
          <div className="list-wrapper">
            <TaskList tasks={tasks} />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
