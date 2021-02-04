import React from 'react';
import './App.scss';
import { ArtworksProvider } from './contexts/artworks.context';
import { TasksProvider } from './contexts/tasks.context';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <ArtworksProvider>
      <TasksProvider>
        <Dashboard />
      </TasksProvider>
    </ArtworksProvider>
  );
}

export default App;
