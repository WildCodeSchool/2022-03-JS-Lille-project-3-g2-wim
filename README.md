# WIM - Work In Music

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Team](#team)

## General Info

This WebApp is a music listening platform dedicated to education. It gives access to sung courses by subject (philosophy, chemistry, spanish...) and by level (college and high school) after connection.
This website includes an administration interface for courses and users on React Admin.

### Project status and progress

This project was developed by 6 developers in training at the Wild Code School of Lille (React Javascript) as an end of training project.
The objective of this application for the client is to give to see and test an application close to what will be the final product, to make concrete the project and to give to see to the networks of sponsors and potential customers of WIM.

## Technologies

### Template

- Template : Application developed on React, Node Express from a [template](https://github.com/WildCodeSchool/js-template-fullstack) developped by the Wild Code School.

**Tools used in this template:**

- _Concurrently_ : Allows to execute several commands in the same terminal
- _Husky_ : Allows to execute actions when triggered by _git_ commands
- _Vite_ : Alternative to _Create-React-App_, with fewer packages for a smoother experience
- _ESLint_ : "Code quality" tool, ensures that pre-configured rules are respected
- _Prettier_ : "code quality" tool, also focuses on code style
- _Standard Airbnb_ : One of the most famous "standards", even if it is not officially linked to ES/JS
- _Nodemon_ : Tool to restart a server each time one of the files is modified

### Other libraries

- `MySQL`: A database has been developed on mysql thanks to WorkBench
- `ReactAdmin` : Course and user management has been developed on React Admin
- `Redux`: Redux was used to manage user information at the time of connection or registration and throughout the navigation
- `Passport`: Passport was used in the backend to manage authentication
- Other miscellaneous libraries:
  - `Material UI` was used to manage the registration form.
  - `Styled Component` was used to manage the application's style.
  - `React Router` to manage the links between pages.
  - `Swiper` to manage the welcome carousel on the application.
  - `React-toastify` to manage error messages (if the user did not send an email...).
  - `Prop-types` to type the props.
  - `Axios` for API calls.

## Installation

### To start a project

    On VSCode, install Prettier - Code formatter and ESLint plugins and configure them
    Clone this repository, go inside
    Run the npm run setup command
    NB: To run the backend, an environment file with the connection data of a valid DB is required. A sample can be found in backend/.env.sample

### List of commands and meaning

    `setup` : Initialization of the frontend and backend as well as the tools
    `dev` : Start the three servers (frontend + backend + admin) in the same terminal
    dev-front : Start a React server for the frontend
    dev-back : Start an Express server for the backend
    dev-admin : Start a React server for the admin
    lint : Run code validation tools (will be executed automatically at each commit)
    fix : Fix formatting errors (to be run if lint does not pass)

## Team

A team of developers in training from March to June 2022 at the Wild Code School in Lille

- Amar
- Faycel
- Rémi
- Jérémy
- Juliane
- Thomas
