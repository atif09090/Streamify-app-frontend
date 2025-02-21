# Music Streaming Dashboard

A React dashboard for visualizing music streaming platform analytics.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Features

- Statistics dashboard with KPI cards
- Interactive charts (user growth, revenue distribution, top songs)
- Sortable and filterable data table
- Component interaction between charts and tables

## Project Structure

```
src/
├── components/
│   ├── DashboardStats.js - Statistics cards
│   ├── DataCharts.js - Line, pie, and bar charts
│   └── DataTable.js - Sortable data grid
└── App.js - Main component
```

## Tech Stack

- React
- Tailwind CSS
- Recharts
- Heroicons

## Available Scripts

```
npm start       # Starts the development server
npm run build   # Builds the app for production
npm test        # Runs the test suite
npm run eject   # Ejects from create-react-app
```

## Data Flow

- App component maintains the selectedFilter state
- Clicking pie chart segments updates the filter
- Data table responds to filter changes
- Table supports sorting by date and stream count
- Two filter inputs for artist and song name

## Description

The dashboard displays three main sections:

1. **Stats Overview**: Shows total users, active users, streams, revenue, and top artist
2. **Charts**: User growth line chart, revenue distribution pie chart, top songs bar chart
3. **Data Table**: Lists recent streams with sortable columns and filter inputs

All components are responsive and adapt to different screen sizes using Tailwind CSS grid system.
