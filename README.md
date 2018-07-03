##Travis:
[![Build Status](https://travis-ci.com/pdkim/16-basic-authentication.svg?branch=pk16)](https://travis-ci.com/pdkim/16-basic-authentication)

##Heroku:
https://pk16-basic-authorization.herokuapp.com/

##Github:
https://github.com/pdkim/16-basic-authentication

##Feature:
Create an app using basic authorization to create a new user and sign in with the created credentials.  Should ensure access is denied if incorrect or no fields are entered.


###Intructions:
1. Go to the github link and clone the repository. You may want to fork prior to cloning the repository.
2. 'npm install' before running anything.
3. If you haven't already, install mongo. Once installed or already installed, run mongod to get mongo up and running.
4. Create a .env file with the following content: 
PORT=3000 
MONGODB_URI="mongodb://localhost/lab-16"
APP_SECRET=idontknow
5. In another terminal, 'nodemon index.js' to start server.
6. In postman, have the following tabs set to Basic Authorization:
  - POST(fail) at http://localhost:3000/api/signup
      - this will be our failure setup
  - POST(success) at http://localhost:3000/api/signup
      - in body, set to raw with the following JSON:
      {
	      "username":"Iam",
	      "password":"Working",
	      "email":"work@allDay"
      }
      - this will be our successful signup
  - GET at http://localhost:3000/api/signin
7. Attempt to sign up with POST(fail) request.  You should recieve a 400 error.
8. Run GET request.  You should get a 401 error.
9. Run POST(success) request.  You should get status code 200.
10. In GET tab, enter the newly created username and password into text boxes.
11. Run GET request.  You should get status code 200.
12. Change username and/or password and run GET again.  You should get 401 error.