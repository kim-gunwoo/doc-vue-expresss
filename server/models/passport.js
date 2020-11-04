const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./user");

/*const user = {
  email: "test@test",
  passwd: "test",
};*/

passport.authenticateUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ auth: "login first" });
  }
};

// 로그인
passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true,
    },
    async (req, email, passwd, done) => {
      // 회원정보 조회
      const user = await User.find(email);

      if (!user) {
        return done(null, false, { message: "user no exist" });
      }

      if (email === user.email && passwd === user.passwd) {
        return done(null, { id: email });
      } else if (email === user.email && passwd !== user.passwd) {
        return done(null, false, { message: "passwd check" });
      }
    }
  )
);

// 회원가입
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true,
    },
    async (req, email, passwd, done) => {
      // 회원정보 조회
      const isUser = await User.find(email);
      const user = req.body;
      User.update(user);

      if (isUser) {
        return done(null, false, { message: "user is exsist" });
      } else {
        User.insert(user)
          .then(() => {
            return done(null, { id: email });
          })
          .catch((err) => {
            if (err) return done(null, false, { message: `${err}` });
            return done(null, false, { message: "insert fail" });
          });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializeUser ", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser ", id);
  done(null, id);
});

module.exports = passport;
