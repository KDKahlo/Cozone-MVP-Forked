# FSPT25 (Full Stack Party Table 25) MVP Project

## Description

This is the CoZone.gg project made in JavaScript and React framework with the database created in MySQL.
It is designed to allow users to match with other players and send friend requests to team up and play together.
At the moment, the project focuses on one game called Valorant, a tactical first-person shooter game.

### Motivation

Welcome aboard, fellow party tabler. This MVP is a social media platform made with gamers in mind.
I wanted to focus on a problem that I could relate to, which was finding teammates to play with in games
where the matching system may not consider the player's actual skills, ideal server region, and other factors.
For now, this project can filter through the database to show users by server region.

## Technologies used

- React: A JavaScript framework. With its simple-to-grasp developer workflow and functionality,
applications made with React are simple to scale and components are easy to reuse.
- Vite: A build tool for React. It has a significantly faster developer server and built-in support
of modern JavaScript features such as ES Modules and faster import of CSS.
- Bootstrap: A CSS library. This enables a simple and easy way to design the layout of the project in
a uniform manner as well as allowing responsive cross-browser compatibility.

## Setup

- Fork this repository
- Clone the forked repository
- Add your contributions
- Commit and push into the forked repository

### Dependencies

- Run `npm install` in the main project folder to install server-related dependencies
- Then, run `cd client` to move to the client folder and run `npm install` to install client dependencies.

In case these dependencies are not installed, please run the following commands to install them individually in the main project folder:

- `npm install dotenv`
- `npm install cors`
- `npm install mysql`
- `npm install nodemon`

### Database Migration

- Access your MySQL interface
- Create a new database for the users: CREATE DATABASE user;
- Ensure the 'migrate' script is within the package.json file
- Run 'npm run migrate' to get a table called 'allUsers', which 
  can be found in the initial database file in the model folder.
- Add a .env file to the project folder containing the MySQL authentication:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=user
  DB_PASS=YOURPASSWORD
```

If the database cannot be accessed, please check the following:

- In database.js line 14 and helper.js line 19, check that the database name is 'user'
- In the init_db.sql file in the model folder, check that the table name the data is being inserted into is called `allUsers`

### users.js

This is where the route methods are stored.

## POSSIBLE FEATURE EXTENSIONS

- Feature 1: Layout design, as it is very much in need of fleshing out aesthetics-wise.
- Feature 2: Profile page with statistics of the user running the application. This can be hardcoded in html for now, or you can use one of the records in the database using the user ID.
- Feature 3: A modal component, similar to the Featured project component in the React milestone, that pops up when the user clicks on the picture of another user in the table and shows a brief introduction.
- Feature 4: Search bar where the user can filter through the database by Rank and/or Region.
- Feature 5: Sign up form that adds a new user into the database.

## Contributions

As it is in its skeletal stage, please feel free to play around with the design and functionality.

**Thank you!**