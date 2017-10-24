//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
    if (error){
         console.log('Unable to connect to MongoDB');
    } else{
        console.log('Connected');
    }
    
    console.log('Connected to MongoDB');
    
    // //deleteMany
    //  db.collection('Users').deleteMany({name: 'Ken'}).then((res)=>{
    //      console.log(res);
    // })
    //deleteOne
    // db.collection('todos').deleteOne({text: 'To eat Lunch'}).then((res)=>{
    //     console.log(res);
    // })

    //findOneAndDelete
        //  db.collection('Users').findOneAndDelete({_id: '"59eea7b93d37ef1b0c044b09"'}).then((res)=>{
        //      console.log
        //  })

    //db.close();
})