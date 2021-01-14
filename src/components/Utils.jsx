import React from 'react';
import faker from 'faker';

export const Logo = () => {
  return (
    <div className="logo">
      <a href="https://www.moma.org/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Museum_of_Modern_Art_logo.svg" alt="MoMA logo" height="20" fill="fff" />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/volivers/" target="_blank"><i className="fa fa-fw fa-linkedin" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://github.com/volivers" target="_blank"><i className="fa fa-fw fa-github" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://dribbble.com/volivers" target="_blank"><i className="fa fa-fw fa-dribbble" style={{ fontSize: '1.75em' }}></i></a>
      </div>

      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </div>

  );
};

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newArtwork = () => {
  const artists = ["Vincent van Gogh", "Andy Warhol", "Pablo Picasso", "Salvador Dalí"];
  const sampleArtist = artists[Math.floor ( Math.random() * artists.length )];
  const sampleTitle = faker.lorem.words();
  const statusChance = Math.random();

  return {
    id: Math.floor(Math.random() * 1000),
    title: sampleTitle,
    artist: sampleArtist,
    collection: 'Modern Art',
    medium: 'Oil on canvas',
    dimensions: '73 x 92',
    status:
      statusChance > 0.66
        ? "Done"
        : statusChance > 0.33 ? "In progress" : "Backlog"
  };
};

export const makeArtworks = len => {
  return range(len).map(d => {
    return {
      ...newArtwork(),
      children: range(10).map(newArtwork)
    };
  });
};

const newTask = () => {
  const sampleTitle = faker.git.commitMessage();
  const sampleDate = faker.date.recent();
  const statusChance = Math.random();

  return {
    id: Math.floor(Math.random() * 1000),
    title: sampleTitle,
    date: sampleDate,
    priority:
      statusChance > 0.66
        ? "High"
        : statusChance > 0.33 ? "Medium" : "Low"
  };
};

export const makeTasks = len => {
  return range(len).map(d => {
    return {
      ...newTask(),
      children: range(10).map(newTask)
    };
  });
};
