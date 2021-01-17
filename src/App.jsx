import React, { useState, useEffect } from 'react';
import './App.scss';
import { makeArtworks, makeTasks, makeCurrentUsers } from './components/common/Utils';
import SideDrawer from './components/common/SideDrawer';
import ImplementedArtworks from './components/counters/ImplementedArtworks';
import CompletedTasks from './components/counters/CompletedTasks';
import ArtworksTable from './components/ArtworksTable';
import TotalArtworks from './components/counters/TotalArtworks';
import Timeline from './components/Timeline';
import TaskList from './components/tasks/TaskList';
import Footer from './components/common/Footer';

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const makeData = () => {
      setArtworks(makeArtworks(250));
      console.log(makeArtworks(250));
      setTasks(makeTasks(13));
      console.log(makeTasks(13));
      setUsers(makeCurrentUsers(1));
  };

  useEffect(() => { makeData() },[])

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
          <ArtworksTable artworks={artworks}/>
          <Timeline artworks={artworks} tasks={tasks} />
      </div>
      <div className="right-scene">
        <TaskList tasks={tasks} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
