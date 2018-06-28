'use strict';

import express from 'express';

const router = express.router();

import User from '../auth/model.js';
import auth from '../auth/middleware.js';

router.post('api/signup', (req, res, next) => {
  if(Object.keys(req.body).length === 0) {
    res.status(400).send('Bad Request');
  }
  else{
    User.create(req.body).then(user => res.send(user.generateToken())).catch(next);
  }
});

router.get('api/signin', auth, (req, res) => {
  if(req.body === null) {
    res.status(404).send('Not Found');
  }
  else{
    res.cookie('Token', req.token);
    res.send('This is a test');
  }
});

export default router;