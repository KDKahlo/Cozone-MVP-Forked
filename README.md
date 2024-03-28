# FSPT25 (Full Stack Party Table 25) MVP Project

## Description

This is the CoZone.gg project made in JavaScript and React framework with the database created in MySQL.

### Motivation

Welcome aboard, fellow party tabler. This MVP is a social media platform made with gamers in mind.
I wanted to focus on a problem that I could relate to, which was finding teammates to play with in games
where the matching system may not consider the player's actual skills, ideal server region, and other factors.
For now, this project can filter through the database to show users by server region.

## Setup

- Fork this repository
- Clone the forked repository
- Add your contributions
- Commit and push into the forked repository

## Dependencies

In case the following dependencies are not installed please run an npm command to install them individually:

- dotenv
- cors
- mysql
- nodemon

## Database Migration

- Access your MySQL interface
- Create a new database for the users: CREATE DATABASE cozone;
- Ensure the 'migrate' script is within the package.json file
- Run 'npm run migrate' to get a table called 'allUsers', which 
  can be found in the initial database file in the model folder.

## users.js

This is where the route methods are stored.

## POSSIBLE FEATURE EXTENSIONS

### Feature 1

Layout design, as it is very much in need of fleshing out aesthetics-wise.

### Feature 2

Profile page with statistics of the user running the application. This can be hardcoded in html for now, 
or you can use one of the records in the database using the user ID.

### Feature 3

A modal component, similar to the Featured project component in the React milestone, that pops up when
the user clicks on the picture of another user in the table and shows a brief introduction.

### Feature 4

Search bar where the user can filter through the database by Rank and/or Region.

### Feature 5

Sign up form that adds a new user into the database and is displayed on the all users page.