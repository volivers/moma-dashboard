import React, { useState, useEffect } from 'react';
import './App.scss';
import { Footer, makeArtworks, makeTasks } from './components/Utils';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TaskList from './components/TaskList';
import ArtworksTable from './components/ArtworksTable';
import Timeline from './components/Timeline';
import SideDrawer from './components/SideDrawer';

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const makeData = () => {
      setArtworks(makeArtworks(250));
      setTasks(makeTasks(100));
  };

  useEffect(() => { makeData(); },[])

  return (
    <div className="app">
      <SideDrawer />
      <div className="left-scene">
        <h1>Dashboard</h1>
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
    </div>
  );
}

export default App;
