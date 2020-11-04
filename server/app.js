// express 모듈 설정
const express = require("express");
const app = express();

// 상대경로사용을 위한 path 모듈
const path = require("path");
// 쿠키 사용 모듈
const cookieParser = require("cookie-parser");
// 로거 모듈
const logger = require("morgan");
// 크로스 도메인 모듈 Cross Origin Resource Sharing
const cors = require("cors");

// 크로스 도메인 사용
app.use(cors());

// 개발 로그 설정
app.use(logger("dev"));

// json / 기본 form 타입 사용 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 쿠키 사용
app.use(cookieParser());

// 서버내에서 정적 파일 접근 경로 설정
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')));

/*
express 세션 설정
 */
const session = require("express-session");
app.use(
  session({
    secret: "keyvalue",
    resave: false,
    saveUninitialized: true,
  })
);

/**
 passport 처리 설정
 */
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

/*
라우터 설정
*/
app.use("/health", require("./routes/health"));
app.use("/auth", require("./routes/auth"));
app.get("/test", passport.authenticateUser, (req, res) => {
  res.json({ data: "success" });
});

// 404 에러 처리
app.use((req, res, next) => {
  //next(createError(404));
  //next(Error("not found"));
  res.status(404).json("not found");
});

//  500 에러
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message || "internal server error" });
});

module.exports = app;
