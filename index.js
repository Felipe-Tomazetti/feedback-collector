//import express from 'express'; Node now have support for ES6+ sintax, adding a "type": "module" in package.json
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport')

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
//another way of doing the same thinks as the line above
//require('./routes/authRoutes')app();

const PORT = process.env.PORT || 5001;

app.listen(PORT);