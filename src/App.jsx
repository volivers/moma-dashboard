import React, { useState, useEffect } from 'react';
import './App.scss';
import { makeCurrentUsers } from './utils/makeData';
import SideDrawer from './components/common/SideDrawer';
import UrgentTasks from './components/counters/UrgentTasks';
import CompletedTasks from './components/counters/CompletedTasks';
import ArtworksTable from './components/artworks/ArtworksTable';
import TotalArtworks from './components/counters/TotalArtworks';
import Timeline from './components/timeline/Timeline';
import TaskList from './components/tasks/TaskList';
import Footer from './components/common/Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(makeCurrentUsers(1));
  },[])

  return (
    <main className="app">
      <SideDrawer users={users} />
      <div className="left-scene">
        <h1>Dashboard</h1>
        <div className="wrapper-counters">
          <TotalArtworks />
          <UrgentTasks />
          <CompletedTasks />
        </div>        
          <ArtworksTable />
          <Timeline />
      </div>
      <div className="right-scene">
        <TaskList />
        <Footer />
      </div>
    </main>
  );
}

export default App;
