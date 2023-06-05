# blackjack-nodejs
This is the backend for the Blackjack Decision Mobile App, built using Node.js, Express.js, and PostgreSQL. This server handles requests from the mobile application, performs calculations for the optimal blackjack decisions, and responds with recommendations.

## Getting Started

### Prerequisites
Before you begin, ensure you have installed the latest version of:

[Node.js](https://nodejs.org/en)

[PostgreSQL](https://www.postgresql.org/download/)

### Clone the repository
> git clone https://github.com/pp-huang/blackjack-nodejs.git

### Install the dependencies
```
cd blackjack-nodejs
npm install
```

### Set up PostgreSQL database by adding a .env file
```
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### Running the Application
Start the app by running:
```
npm start
```
The server should be running on http://localhost:8000

### Features
-Handles requests from the Blackjack Decision mobile app

-Uses Express.js for handling HTTP requests

-Uses PostgreSQL for storing game histories and user data

### Tech Stack
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine

Express.js: A fast, unopinionated, minimalist web framework for Node.js

PostgreSQL: A powerful, open source object-relational database system

### Future Enhancements
Add more robust error handling and validation

Expand to support multiple game rules and conditions

Optimize database queries for performance

# Enjoy the app and good luck with your Blackjack games!
