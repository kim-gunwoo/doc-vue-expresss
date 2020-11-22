/*
server 로 사용되는 package.json 파일에 main 확인 => index.js 로 되어있음
*/
// express 사용 모듈을 가져와서 server 실행
const app = require("./app");

//  사용 DB 설정
//const lowdb = require("./config/lowdb");

/*
프로세스에 할당되어있는 포트 정보 확인 process.env.PORT 사용
const PORT = process.env.PORT || 3000
*/
const PORT = 9999;

const sequelize = require("./models/sequelize").sequelize;
sequelize.sync();

// 서버 기동
app.listen(PORT, () => console.log(`server is running localhost:${PORT}`));
