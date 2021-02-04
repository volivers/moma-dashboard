import React, { useState, useEffect } from 'react';
import { makeCurrentUsers } from '../data/makeData';
import SideDrawer from './common/SideDrawer';
import UrgentTasks from './counters/UrgentTasks';
import CompletedTasks from './counters/CompletedTasks';
import ArtworksTable from './artworks/ArtworksTable';
import TotalArtworks from './counters/TotalArtworks';
import Timeline from './timeline/Timeline';
import TaskList from './tasks/TaskList';
import Footer from './common/Footer';

const Dashboard = () => {
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

export default Dashboard;
