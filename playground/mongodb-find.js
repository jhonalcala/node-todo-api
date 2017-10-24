//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'ken', age: 22};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
    if (error){
         console.log('Unable to connect to MongoDB');
    } else{
        console.log('Connected');
    }
    
    // db.collection('todos').find().count().then((count) =>{
    //     console.log(`todos count ${count}`);
    // }, (error) =>{
    //                 console.log('Unable to fetch data');
    // })
        //db.close();
        db.collection('Users').find({name: 'Ken'}).toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined,2));
        })
    
})