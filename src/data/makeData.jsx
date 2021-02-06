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
  const artist = artists[Math.floor ( Math.random() * artists.length )];
  const randChance = Math.random();

  return {
    id: index,
    title: faker.lorem.words(),
    artist: artist,
    collection:
      artist === "Andy Warhol"
        ? "American Art"
        : "European Art",
    medium: 'Oil on canvas',
    dimensions:
      randChance > 0.5
        ? '92 x 73'
        : '73 x 92'
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
    date: faker.date.between('2021-01-01', '2021-06-30'),
    priority:
      randChance > 0.66
        ? "High"
        : randChance > 0.33 ? "Medium" : "Low",
    userName:
      randChance > 0.75
        ? "Invader"
        : randChance > 0.5
        ? "Vhils"
        : randChance > 0.25
        ? "Obey" : "Banksy",
    completed: false
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