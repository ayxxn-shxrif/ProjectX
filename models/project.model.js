const mongoose = require('mongoose');
 
//Attributes of the Course object
var projectSchema = new mongoose.Schema({
projectName: {
type: String,
required: 'This field is required!'
},
projectLink: {
type: String
},
projectStart: {
type: String
},
projectEnd: {
type: String
}
});
 
mongoose.model('Projects', projectSchema);
