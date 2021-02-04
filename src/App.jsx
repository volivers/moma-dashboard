import React from 'react';
import './App.scss';
import { UsersProvider } from './contexts/users.context';
import { ArtworksProvider } from './contexts/artworks.context';
import { TasksProvider } from './contexts/tasks.context';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <UsersProvider>
      <ArtworksProvider>
        <TasksProvider>
          <Dashboard />
        </TasksProvider>
      </ArtworksProvider>
    </UsersProvider>
  );
}

export default App;
