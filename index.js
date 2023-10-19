//import express from 'express'; Node now have support for ES6+ sintax, adding a "type": "module" in package.json
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport')

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
//another way of doing the same thinks as the line above
//require('./routes/authRoutes')app();

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets main.js or main.css
  app.use(express.static('client/build'));

  //Express will serve up production assets index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5001;

app.listen(PORT);