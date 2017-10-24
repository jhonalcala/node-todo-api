var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
 }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) =>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e) =>{
    res.status(400).send(e);
  })
})
//valid using id isvalid
//404 - send back empty send
app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
Todo.findById(id).then((todo)=>{
  if(!todo){
    return res.send(404).send();
  
  }
  //findByID
  //success
  //if todo -send it back
  //if not tod -send back 404 send empty
  //error
  //400 and send empty body back

  res.send({todo});
}).catch((e) =>{
  return res.send(400).send();
})
})



app.listen(3000, () => {
  console.log('Started on port 3000');
});