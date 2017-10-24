const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '59eed42a25ef93143b87ee3f';

if (!ObjectID.isValid(id)){
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then ((todos)=>{
//     console.log('todos', todos);
// }
// )

// Todo.findOne({
//     _id: id
// }).then ((todo) =>{
//     console.log('todo', todo);
// })

User.findById('59eed42a25ef93143b87ee3f').then ((user) =>{
    if (!user){
        return console.log('Id not found');
    }
    console.log('user by id', user);
}).catch((e) => console.log(e));
// Todo.findById(id).then ((todo) =>{
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e));