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
import TaskForm from './components/TaskForm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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

  useEffect(() => { makeData() },[])

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

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
          <ArtworksTable artworks={artworks}/>
        </div>
        <div className="wrapper-timeline">
          <Timeline artworks={artworks} tasks={tasks} />
        </div>
      </div>
      <div className="right-scene">
        <div className="btn-wrapper">
          <Tooltip title="Create task">
            <Fab color="primary" aria-label="add" size="large" className="btn" onClick={handleOpen}>
              <AddIcon />
            </Fab>
          </Tooltip>
          <TaskForm open={open} setOpen={setOpen} />
          <Tooltip title="Edit task">
            <Fab aria-label="edit" size="large" className="btn">
              <EditIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Export data">
            <Fab aria-label="export"  size="large" className="btn">
              <CloudDownloadIcon />
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
