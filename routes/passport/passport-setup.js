require("dotenv").config();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.googleAuthClientID,
    clientSecret: keys.googleAuthClientSecret,
}, (accesstoken, refreshToken, profile, done) => {
    console.log('passport cb function init')
    console.log(accesstoken)
    // console.log(refreshToken)
    console.log(profile)

}))




