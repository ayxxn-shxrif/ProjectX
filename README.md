
<div id="top"></div>

![aa](https://img.shields.io/badge/Built%20with-Node.js-339933?style=flat-square)

![aa](https://img.shields.io/badge/Backend-Express-191919?style=flat-square)

![aa](https://img.shields.io/badge/Frontend-Pug-2C6BC1?style=flat-square)


<div align="row">



<div style="font-family: Arial, sans-serif;">
  <h1>Store your projects with ease!</h1>
  
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
- Add new projects with details such as name, description and start-date/end-date
- Edit existing projects
- Delete projects
- View all projects in a list
- Filter projects based on their status (completed, ongoing, planned)(WIP)


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
## Usage

Else u can manually run it by following the below steps:

1. Install the project dependencies using:
```
npm i && npm audit fix
```

2. Edit the ![models/mongodb.js](https://github.com/ayxxn-shxrif/Projects-Keeper/blob/master/models/mongodb.js) file. And enter your own local db 'URI' or ![serverless db](https://www.mongodb.com/docs/) URI.

3. run the project: 
```
node script.js || nodemon script.js
```
if above steps run error free then ![click](http//:localhost:8080) this link

## Outcome

Frontpage SS.
![frontpage example](https://github.com/ayxxn-shxrif/Projects-Keeper/blob/master/example/frontpage.png)
working Db.
![working database example](https://github.com/ayxxn-shxrif/Projects-Keeper/blob/master/example/db.png?raw=true)

## Contributions

Contributions are always welcome! If you have any suggestions or bug fixes, feel free to submit a pull request.



## Authors

[ayxxn-shxrif](https://ayxxn-shxrif.me) | [LinkedIn](https://linkedin.com/in/ayaansharif)
