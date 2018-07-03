'use strict';

require('dotenv').config();
const superagent = require('superagent');
const mongoose = require('mongoose');
const app = require('../src/app.js');


jest.mock('../src/auth/model.js');

xdescribe('Authentication Server should', () => {

  const PORT = 3001;

  beforeAll( () => {
    mongoose.connect('mongodb://localhost:27017/lab-16');
    app.start(PORT);
  });

  afterAll( () => {
    app.stop();
    mongoose.connection.close();
  });


  xit('send 400 when creating an account with no info', () => {
    return superagent.post('http://localhost:3001/signup')
      .then(response => {
        expect(response.statusCode).toBe(400);
      })
      .catch(console.error());
  });

  xit('send 400 when creating an account with incomplete info', () => {
    return superagent.post('http://localhost:3001/signup')
      .send({username:'phil'})
      .then(response => {
        expect(response.statusCode).toBe(400);
      })
      .catch(console.error());
  });


  xit('create a new user upon successful signup', () => {
    return superagent.post('http://localhost:3001/signup')
      .send({username:'phil', password:'123'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
      .catch(console.error());
  });


  xit('get a 401 on a bad login if no data is entered', () => {
    return superagent.get('http://localhost:3001/signin')
      .then(response => { 
        console.log(response);
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });


  xit('get a 401 on a bad login if wrong data is entered', () => {
    return superagent.get('http://localhost:3001/signin')
      .auth('foo','bar')
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });


  xit('get a 200 on a good login', () => {
    return superagent.get('http://localhost:3001/signin')
      .auth('phil','kim')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

});