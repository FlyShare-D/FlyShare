const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

const GOOGLE_CLIENT_ID = '108684906027-4ghtu8006hvnr1vccaftr2nvsu61id7i.apps.googleusercontent.com';

const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/homepage",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //will have to add the user to our database later

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile);
    // });
  }
));

passport.serializeUser(function(user, done){
  done(null, user);
})

passport.deserializeUser(function(user, done){
  done(null, user);
})

// export default passport;
