import React from 'react';
import faker from 'faker';

export const Logo = () => {
  return (
    <div className="logo">
      <a href="https://www.moma.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/djlmbrvcx/image/upload/v1610641278/Museum_of_Modern_Art_logo_white_fkxk0o.svg" alt="MoMA logo" height="20" />
      </a>
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

const newArtwork = (index) => {
  const artists = ["Vincent van Gogh", "Andy Warhol", "Pablo Picasso", "Salvador Dalí"];
  const statusChance = Math.random();

  return {
    id: index,
    title: faker.lorem.words(),
    artist: artists[Math.floor ( Math.random() * artists.length )],
    collection: "Modern Art",
    medium: 'Oil on canvas',
    dimensions: '73 x 92',
    task_id: Math.floor(Math.random() * (13 - 1) + 1),
    status:
      statusChance > 0.66
        ? "Done"
        : statusChance > 0.33 ? "In progress" : "Backlog"
  };
};

export const makeArtworks = len => {
  return range(len).map((artwork, index) => {
    return {
      ...newArtwork(index + 1)
    };
  });
};

const newTask = (index) => {
  const randChance = Math.random();

  return {
    id: index,
    title: faker.git.commitMessage(),
    date: faker.date.recent(),
    artwork_id: Math.floor ( Math.random() * 250 ),
    priority:
      randChance > 0.66
        ? "High"
        : randChance > 0.33 ? "Medium" : "Low",
    user:
      randChance > 0.75
        ? "Robin"
        : randChance > 0.5
        ? "Barney"
        : randChance > 0.25
        ? "Ted" : "Lilly",
    completed:
      randChance > 0.5
        ? "true" : "false"
  };
};

export const makeTasks = len => {
  return range(len).map((task, index) => {
    return {
      ...newTask(index + 1)
    };
  });
};

const currentUser = (index) => {
  return {
    id: index,
    firstName: "Ted",
    LastName: "Mosby",
    email: "ted.mosby@gmail.com",
    password: faker.internet.password()
  };
};

export const makeCurrentUsers = len => {
  return range(len).map((user, index) => {
    return {
      ...currentUser(index + 1)
    };
  });
};