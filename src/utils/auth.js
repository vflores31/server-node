/* eslint-disable prettier/prettier */
import passport from 'passport'
import { Strategy } from 'passport-local'

import config from './config'

passport.use(
    new Strategy((user, pass, done) => {
        if (user === config.apiUser && pass === config.apiPass) {
            return done(null, user)
        }
        return done(null, false)
    }),
)

export default passport