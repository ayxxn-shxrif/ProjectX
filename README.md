<div id="top"></div>

![aa](https://img.shields.io/badge/Built%20with-Node.js-339933?style=flat-square)

![aa](https://img.shields.io/badge/Backend-Express-191919?style=flat-square)

![aa](https://img.shields.io/badge/Frontend-Pug-2C6BC1?style=flat-square)


<div align="row">



<div style="font-family: Arial, sans-serif;" align="center">
  <h1>Store your projects with ease!</h1>

  
</div>

<div align="center">



 

🔗  <b>[Check out!](https://projectx-r5tf.onrender.com/)</b>

</div>

## Table of Contents
- [About the Project](#about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Tools](#tools)
  - [Third Party Code](#third-party-code)
- [Build Process](#build-process)
- [Usage](#usage)
- [Outcome](#outcome)
- [Wanna Contribute?](#contributions)
- [Authors](#authors)

## About the Project
A project management application, where you can store your projects in a MongoDB database. The frontend of the application is built with Pug and the backend with Express and Node.js. I wanted to experiment with different CSS styles such as Neomorphism 3D and gradients, so I decided to use them in this project though not push to this branch. I learned a lot while building this project and I hope it can be of help to someone else too!

### Features
- Add new projects with details such as name, description and date
- Delete projects
- View all projects in a list
- Edit existing projects(WIP)
- Filter projects based on their status (completed, ongoing, planned)(WIP)
- Model View Controller pattern based application.
- Authentication with use of [passport.js](https://www.passportjs.org/).
- Password encryption with [bcrypt.js](https://www.npmjs.com/package/bcryptjs).
- User session.
- Application data models based on [mongoose's](https://mongoosejs.com/) schema based solution.
- POST requests validation with [express-validator](https://express-validator.github.io/docs/).
- User sign up option.
- Login functionality.
- Logout functionality.
- Password confirmation custom validation.
- Username duplication prevention.
- Option to add new project for logged in users.

### Technologies
- Node.js
- Express
- Pug
- CSS

### Tools
- Git and GitHub
- Linux terminal
- MongoDB Atlas(mongosh-shell)
- Neovim
### Third Party Code
- mongoose
  
  
## Build process

and To run the project, simply type on ur powershell || terminal || vscode terminal:
```
bash npm_install_run.sh 
```
Then ![click here!](http://localhost:3000/)
## Usage

Else u can manually run it by following the below steps:
- Clone repository.
- Run ``npm install && npm audit fix`` command in your terminal.
- Create .env file
- In .env file set up new environmental variable named ``MONGODB_URL`` and paste your own mongoDB connection link.
- Run ``npm run start`` command in your terminal.
- Server will listen to requests from ``localhost:3000``.
- Then ![click here!](http://localhost:3000/)

## Outcome
Front page
![login example](https://github.com/ayxxn-shxrif/ProjectX/blob/v2/public/front.png)
Login page
![login example](https://github.com/ayxxn-shxrif/ProjectX/blob/v2/public/login.png)
Signup page
![login example](https://github.com/ayxxn-shxrif/ProjectX/blob/v2/public/signup.png)
Input page
![login example](https://github.com/ayxxn-shxrif/ProjectX/blob/v2/public/inputs.png)


## Contributions

Contributions are always welcome! If you have any suggestions or bug fixes, feel free to submit a pull request.



## Authors

[ayxxn-shxrif](https://ayxxn-shxrif.me) | [LinkedIn](https://linkedin.com/in/ayaansharif)

