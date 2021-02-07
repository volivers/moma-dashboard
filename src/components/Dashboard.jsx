import React from 'react';
import SideDrawer from './common/SideDrawer';
import TotalArtworks from './metrics/TotalArtworks';
import UrgentTasks from './metrics/UrgentTasks';
import CompletedTasks from './metrics/CompletedTasks';
import ArtworksTable from './artworks/ArtworksTable';
import Timeline from './timeline/Timeline';
import TaskList from './tasks/TaskList';
import Footer from './common/Footer';

const Dashboard = () => {
  return (
    <main className="app">
      <SideDrawer />
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
