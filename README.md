# Turtle Movie Chat

> Art museum task manager dashboard created with React and [Context API](https://reactjs.org/docs/context.html#api), using [Material-UI](https://material-ui.com/) and [ApexCharts.js](https://material-ui.com/) to power the user experience and data visualization.

## Overview

In the art world, it is rumoured that **Banksy** along with a team of famous street artists
are launching a top secret plan to break into the [Museum of Modern Art](https://www.moma.org/), and replace
their artworks with street art ones.

To make this mighty plan happen, they need a system where they can create and organize tasks,
while tracking their progress as well as all the data of the artworks to be replaced.

The goal of this project was to design and build an interface displaying the team's tasks,
data and timeline in a single overview.

## Live version

The live version is available at: <https://moma-dashboard.netlify.app/>

## Install

This project was created using [CRA](https://github.com/facebook/create-react-app).
To run the code, first install all the packages needed with:

`npm install`

After the installation, start the project executing the command:

`npm start`

It will open [http://localhost:3000](http://localhost:3000) (default),
so you can view the project in the browser.

## Features

This project was built upon 3 main features: Task Manager, Artworks Table and Analytics.

After breaking them down, **Banksy** is able to:

1. Task Manager
    * List all tasks
    * Filter tasks by date, priority and assignee
    * Mark a task as completed
    * Create a new task
2. Artworks Table
    * List all artworks
    * Filter artworks by search value
    * Sort artworks according to column
3. Analytics
    * View the operational Metrics:
        * Total artworks
        * % of urgent tasks
        * % of completed tasks 
    * Track the operations Timeline:
        * Number of tasks per month

All the features were implemented using the [Material-UI](https://material-ui.com/) framework except the Analytics.
For this feature, in particular, [ApexCharts.js](https://material-ui.com/) was used given the data visualization needs.

It should be noted that this project used React's [Context API](https://reactjs.org/docs/context.html#api) for state management purposes,
despite having been fed with randomized data.

### Demo

<!-- ![Demo](./demo.gif) -->

## Architecture

The project was architectured in the following way:

### `/src`

The `/src` contains all the React codebase, as well as the `App.scss` overall stylesheet.

```
.
├── components
│   ├── artworks
│   │   └── ArtworksTable.jsx
│   ├── common
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── SideDrawer.jsx
│   ├── metrics
│   │   ├── CompletedTasks.jsx
│   │   ├── TotalArtworks.jsx
│   │   └── UrgentTasks.jsx
│   ├── tasks
│   │   ├── Task.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── timeline
│   │   └── Timeline.jsx
│   └── Dashboard.jsx
├── constants
│   └── actions.jsx
├── contexts
│   ├── artworks.context.jsx
│   ├── tasks.context.jsx
│   └── users.context.jsx
├── data
│   └── makeData.jsx
├── hooks
│   └── useInputState.jsx
├── reducers
│   └── tasks.reducer.jsx
├── styles
│   ├── ArtworksTableStyles.jsx
│   ├── SideDrawerStyles.jsx
│   ├── TaskFiltersStyles.jsx
│   ├── TaskFormStyles.jsx
│   ├── TaskListStyles.jsx
│   └── TaskStyles.jsx
├── App.jsx
├── App.scss
└── index.jsx

```

#### `/components`

This folder includes all the components used to build the project, dumb and smart ones.

While the dumb components used were clustered at the `/common` folder, smart components were
arranged according to the their features under `/artworks`, `metrics`, `/tasks` and `/timeline`.

#### `/contexts`, `/constants` and `/reducers`

Given the usage of React's [Context API](https://reactjs.org/docs/context.html#api), all the context components, reducer functions
and actions needed can be found under these 3 folders.

#### `/data`

It contains all the functions used to randomize data about artworks, tasks and users
needed to feed this project.

#### `/hooks`

It includes all the customized hooks used to build this project.

#### `/styles`

Since the components were styled using [Material-UI](https://material-ui.com/)’s styling solution and best practises,
their files were clustered here. This way, the components’ logic and
styles are cleanly separate.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

Please make sure to include or update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MIT License (MIT) 

Copyright © 2021 Vasco Oliveira