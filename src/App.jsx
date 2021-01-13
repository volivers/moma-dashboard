import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { Navbar, Logo, Footer } from './components/Utils';
import TaskList from './components/TaskList';
import ArtworksTable from './components/ArtworksTable';
import Timeline from './components/Timeline';

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    const url = "https://raw.githubusercontent.com/volivers/moma-mock-data/master/db.json";

    try {
      const res = await axios.get(url) 
      // console.log(res.data);
      setArtworks(res.data.artworks);
      setTasks(res.data.tasks);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => { getData(); },[])

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
          <TaskList tasks={tasks} />
        </div>
      </div>

      <div className="right-scene">
        <Logo />
        <div className="wrapper-artworks m-4">
          <div className="title-wrapper">
            <i className="fa fa-fw fa-heart" style={{ fontSize: '1.5em' }}></i>
            <h2>ArtWorks</h2>
          </div>
          <ArtworksTable artworks={artworks}/>
        </div>
        <div className="wrapper-timeline m-4">
          <div className="title-wrapper">
            <i className="fa fa-fw fa-history" style={{ fontSize: '1.5em' }}></i>
            <h2>Timeline</h2>
          </div>
          <Timeline artworks={artworks} tasks={tasks} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
