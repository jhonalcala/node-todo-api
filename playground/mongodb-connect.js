//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
var user = {name: 'ken', age: 22};
var {name} = user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
    if (error){
         console.log('Unable to connect to MongoDB');
    } else{
        console.log('Connected');
    }
    
    // db.collection('Users').insertOne({
    //     name: 'Ken',
    //     age: 25,
    //     location: 'Manila'

    // }, (error, result) =>{
    //     if(error){
    //         console.log('Unable to insert User', error);
    //     }else {

    //     }
    //     console.log(result.ops[0]._id.getTimeStamp());
    // })
    // db.collection('todos').insertOne({
    //     text: 'Something new',
    //     completed: false
    //     }, (error,result) =>{
    //    if(error){
    //        console.log('Unable to insert todo', error);
    //        } else{}
       
    //    console.log(JSON.stringify(result.ops,undefined,2));
        db.close();
})