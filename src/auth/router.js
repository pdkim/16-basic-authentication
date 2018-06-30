'use strict';

import express from 'express';

const router = express.Router();

import User from './model.js';
import auth from './middleware.js';

router.post('/api/signup', (req, res) => {
  // console.log('i am working');
  let user = new User(req.body);
  console.log(user);
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('Bad Request');
  }
  else {
    user.save()
      .then(user => res.send(user.generateToken()))
      .catch(err => console.error(err));
  }
});

router.get('/api/signin', auth, (req, res) => {
  if (req.body === null) {
    res.status(404).send('Not Found');
  }
  else {
    res.cookie('Token', req.token);
    res.send('This is a test');
  }
});

export default router;