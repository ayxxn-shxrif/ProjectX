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
type: Date
},
projectEnd: {
type: Date
}
});
 
mongoose.model('Projects', projectSchema);
