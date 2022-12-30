require('./models/mongodb');
 
//Import the necessary packages
const express = require('express');
var app = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const projectController = require('./controllers/projectController');
 
app.use(bodyparser.urlencoded({
extended: true
}));
 
//Create a welcome message and direct them to the main page
app.get('/', (req, res) => {
res.send('<h2 style="font-family: Malgun Gothic; color: midnightblue ">a simple personal data storing site using mongodb and node.js</h2>Click on right<b> <a href="/project">click here to see demo</a> </b>');
});
app.use(bodyparser.json());
 
//Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/'}));
app.set('view engine', 'hbs');

app.engine('handlebars', exphb.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})); 
//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
 
//Set the Controller path which will be responding the user actions
app.use('/project', projectController);
