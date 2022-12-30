const mongoose = require('mongoose');
//added my current collection name of the database
mongoose.connect('mongodb+srv://ayxxn-shxrif:ayxxn@fisrtcluster.wgsbxrd.mongodb.net/my-projects-node-express', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./project.model');
