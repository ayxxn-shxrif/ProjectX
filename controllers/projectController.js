//Import the dependencies
const express = require('express');
const mongoose = require('mongoose');
//Creating a Router
var router = express.Router();
//Link
const Projects = mongoose.model('Projects');
 
//Router Controller for READ request
router.get('/',(req, res) => {
res.render("project/projectAddEdit", {
viewTitle: "write ur project detail below"
});
});
 
//Router Controller for UPDATE request
router.post('/', (req,res) => {
if (req.body._id == '')
insertIntoMongoDB(req, res);
else
updateIntoMongoDB(req, res);
});
 
//Creating function to insert data into MongoDB
function insertIntoMongoDB(req,res) {
var project = new Projects();
project.projectName = req.body.projectName;  
project.projectLink = req.body.projectLink;
project.projectStart = req.body.projectStart;
project.projectEnd = req.body.projectEnd;
project.save((err, doc) => {
if (!err)
res.redirect('project/list');
else
console.log('Error during record insertion : ' + err);
});
}     
 
//Creating a function to update data in MongoDB
function updateIntoMongoDB(req, res) {
Porjects.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
if (!err) { res.redirect('project/list'); }
else {
if (err.name == 'ValidationError') {
handleValidationError(err, req.body);
res.render("project/projectAddEdit", {
//Retaining value to be displayed in the child view
viewTitle: 'Update Projects Details',
employee: req.body
});
}
else
console.log('Error during updating the record: ' + err);
}
});
}
 
//Router to retrieve the complete list of available courses
router.get('/list', (req,res) => {
Projects.find((err, docs) => {
if(!err){
res.render("project/list", {
list: docs
});
}
else {
console.log('Failed to retrieve the project List: '+ err);
}
});
});
 
//Creating a function to implement input validations
function handleValidationError(err, body) {
for (field in err.errors) {
switch (err.errors[field].path) {
case 'projectName':
body['projectNameError'] = err.errors[field].message;
break;
default:
break;
}
}
}
 
//Router to update a project using it's ID
router.get('/:id', (req, res) => {
Projects.findById(req.params.id, (err, doc) => {
if (!err) {
res.render("project/projectAddEdit", {
viewTitle: "Update Projects Details",
project: docs
});
}
});
});
 
//Router Controller for DELETE request
router.get('/delete/:id', (req, res) => {
Projects.findByIdAndRemove(req.params.id, (err, doc) => {
if (!err) {
res.redirect('/project/list');
}
else { console.log('Failed to Delete project Details: ' + err); }
});
});
 
module.exports = router;
