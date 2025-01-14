# Photolabs 

PhotoLabs is a React-based single-page application (SPA) that allows users to view and interact with photos in various contexts. This project demonstrates the integration of React for the frontend, Express.js for the API layer, and PostgreSQL as the database for data persistence.

## Key Features

- **View Photos**: Users can browse photos from the homepage loaded dynamically via the API.
- **Photo Categories**: Navigate through various photo categories (topics) for specific collections.
- **Photo Details**: Click on a photo to view a larger version and see similar photos.
- **Like Photos**: Like any photo within the app, with a heart icon showing liked photos in the navigation.
- **Dynamic Navigation**: A navigation bar featuring topics and a notification-enabled heart icon for liked photos.
- **API Integration**: The client-side application communicates with the backend API for data handling.

## Final Product
!["screenshot description"](#)
!["screenshot description"](#)

## Technologies Used

- **Frontend**: 
  - React
  - Create React App
  - Webpack
  - Babel
- **Backend**:
  - Node.js
  - Express.js
- **Database**: PostgreSQL
- **API Communication**: HTTP with JSON format

## Dependencies

### Frontend Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-scripts`: 5.0.1
- `web-vitals`: ^2.1.4

### Backend Dependencies
- `body-parser`: ^1.18.3
- `cors`: ^2.8.5
- `dotenv`: ^7.0.0
- `express`: ^4.16.4
- `helmet`: ^3.18.0
- `pg`: ^8.5.0
- `socket.io`: ^2.2.0
- `ws`: ^7.0.0

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
