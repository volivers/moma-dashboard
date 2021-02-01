import faker from 'faker';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newArtwork = (index) => {
  const artists = ["Vincent van Gogh", "Andy Warhol", "Pablo Picasso", "Salvador Dalí"];

  return {
    id: index,
    title: faker.lorem.words(),
    artist: artists[Math.floor ( Math.random() * artists.length )],
    collection: "Modern Art",
    medium: 'Oil on canvas',
    dimensions: '73 x 92',
    task_id: Math.floor(Math.random() * (13 - 1) + 1)
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
    artwork_id: Math.floor ( Math.random() * 100 ),
    priority:
      randChance > 0.66
        ? "High"
        : randChance > 0.33 ? "Medium" : "Low",
    userName:
      randChance > 0.75
        ? "Ross"
        : randChance > 0.5
        ? "Rachel"
        : randChance > 0.25
        ? "Phoebe" : "Joey",
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
    userName: "Banksy",
    firstName: "Robert",
    LastName: "Banks",
    email: "banksy@gmail.com",
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