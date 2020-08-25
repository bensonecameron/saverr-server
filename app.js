//! ENV
require('dotenv').config();
let bcrypt = require('bcryptjs');

//! EXPRESS
const express = require('express');
const app = express();


//! CONTROLLERS
const collection = require('./controllers/collectioncontroller')
const post = require('./controllers/postcontroller')
const user = require('./controllers/userscontroller'); 

//! DATABASE
const sequelize = require('./db'); 
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());  
app.use(require('./middleware/headers'));

//! ROUTES
app.use('/collection', collection)
app.use('/post', post)
app.use('/user', user)

app.listen(3001, function () {
  console.log("App is listening on port 3001");
})
