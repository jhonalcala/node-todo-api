//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
    if (error){
         console.log('Unable to connect to MongoDB');
    } else{
        console.log('Connected');
    }
    
    console.log('Connected to MongoDB');
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59eea66826d2603b8cc84c76')

    },{
        $set: {
            name: 'MargoLove'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: 'Alcala'
    }).then((res)=>{
        console.log(res);
    })
    
})