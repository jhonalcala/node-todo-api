const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');
const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 123
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });

  describe('GET /todos/:id', () =>{
  it('should get id', (done) =>{
    request(app)
    .get(`/todos/id ${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res) => {
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    end(done);
  })

  it('should return 404 if todo not found', (done) =>{
    var hexID = new ObjectID().toHexString();
    
    request(app)
    .get(`/todos/${hexID}`)
    .expect(404)
    .end(done)
  })

  it('Should return 404 if todo non-object ids', (done) =>{
    request(app)
    .get('/todos/123')
    .expect(404)
    .end(done)
  })
  describe('PATCH /todos/:id', () =>{
    it('Should update the todo', (done) =>{
      //grad id of first item
      var hexID = todos[0].toHexString();
      var text = 'This should be the new text';
      //update text, set completed true
      request(app)
      .patch(`/todos/${hexID}`)
      .send({completed: true, text
      })
      //200
      .expect(200)
      .expect((res)=>{
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(res.body.todo.completedAt).toBe('number');
      })
      .end(done);
      //text is changed, completed is true completedat is a number .toBeA
    })
    it('Should update the todo', (done) =>{
      //grab id of second todo item
      var hexID = todos[1].toHexString();
      var text = 'This should be the new text!~!';
      request(app)
      //update text, set completed to false
      .patch(`/todos/${hexID}`)
      .send({completed: false, text
      })
      //200
      .expect(200)
      .expect((res)=>{
        //text is changed, completed false, completedAt is null
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toNotExist();
      })

    
    
    
    
  })
})

});
