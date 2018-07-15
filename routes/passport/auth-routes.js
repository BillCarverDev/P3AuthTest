const router = require('express').Router();
const passport = require('passport')

// auth login
router.get('/login', (req, res) => {
    res.render('login');
})

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

// auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('logging out')
})

// callback router for google to redirect to

router.get('/google/redirect', passport.authenticate('google'), (res) => {
  res.send('you reached the callback URI')
})


module.exports = router
