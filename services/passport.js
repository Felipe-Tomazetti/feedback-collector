const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, 
async (acessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id })
      if(existingUser) {
        //we already have a record with the given profile.ID
        done(null, existingUser);
      } else {
        //we don't have a user record with this ID, create a new one
        const user = await new User({
          googleId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        }).save()
        done(null, user);
      }
  })
);