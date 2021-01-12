import React from 'react';
import './App.scss';
import { Navbar, Logo, Footer } from './components/Utils';
import TaskList from './components/TaskList';
import Deliverables from './components/Deliverables';
import Milestones from './components/Milestones';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="left-scene">
        <h1 className="m-4">Dashboard</h1>
        <div className="wrapper-tasks m-4 px-3">
          <div className="title-wrapper">
            <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em' }}></i>
            <h2>Tasks</h2>
          </div>
          <TaskList />
        </div>
      </div>

      <div className="right-scene">
        <Logo />
        <div className="wrapper-deliverables m-4">
          <div className="title-wrapper">
            <i className="fa fa-fw fa-heart" style={{ fontSize: '1.5em' }}></i>
            <h2>Deliverables</h2>
          </div>
          <Deliverables />
        </div>
        <div className="wrapper-milestones m-4">
          <div className="title-wrapper">
            <i className="fa fa-fw fa-history" style={{ fontSize: '1.5em' }}></i>
            <h2>Milestones</h2>
          </div>
          <Milestones />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
