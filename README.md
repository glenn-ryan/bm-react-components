# BarnManager React Components

This repository contains React components for the BarnManager application, refactored from Angular to React.

## Installation

1. Clone this repository
2. Install dependencies:
```
npm install
```

## Development

To start the development server:
```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Components Structure

The main components in this project are:

- `Sidebar`: Navigation sidebar with links to different sections of the app
- `HorsesPage`: Main page for the horses section
- `HorseFilters`: Filtering options for the horse list
- `HorseList`: Grid display of horses
- `HorseCard`: Individual horse item card with details
- `FeedPage`: Page for managing horse feeding schedules
- `FeedTabs`: Navigation tabs for switching between horse profile sections
- `FeedSchedule`: Grid display of feeding schedules with time slots and categories

## Feed Management Features

The feed management system includes:

- Daily feeding schedules categorized by time (AM, PM, NC)
- Four distinct feed categories: Feed, Supplements, Medications, and Show Medications
- Frequency options for feed items (daily, specific days)
- Detailed view options with date range selection
- Action buttons for changing logs, notifications, and reporting

## Styling

The application uses Tailwind CSS for styling. The main configuration is in:

- `tailwind.config.js`: Tailwind configuration
- `postcss.config.js`: PostCSS configuration
- `src/index.css`: Global styles and Tailwind directives

## Dependencies

- React 18
- React Router 6
- React Icons
- Tailwind CSS

## Building for Production

To build the app for production:
```
npm run build
```

This creates an optimized production build in the `build` folder. 