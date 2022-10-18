import passport from 'passport';

// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

import 'dotenv/config';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //will have to add the user to our database later

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));


passport.serializeUser(function(user, done){
  done(null, user);
})

passport.deserializeUser(function(user, done){
  done(null, user);
})

export const authController = {
   isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
  }
}



// export default passport;
export default passport;