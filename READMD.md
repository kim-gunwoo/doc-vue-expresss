# Doc : Node { Vue, Express }

## Setup

```bash
client : Vue
server : Express
```

## Setup Vue

```bash
# vue project init use
vue init webpack-simple .

# use axios vue-router vuex
npm i axios vue-router vuex (o)

```

## Setup Express

```bash
# express project dependencies
body-parser (x)) => express.json() , express.urlencoded({ extended: false }))
npm i express (o)
express-session
cookie-parser (o)
connect-flash

# compression : gzip
npm i compression (o)

# login passport : passport , auth : jsonwebtoken
npm i passport passport-local
jsonwebtoken

# cookie session save store : session-file-store
npm i session-file-store

# DB use lowdb , key generate : shortid
npm i lowdb shortid

# request info : morgan
npm i morgan (o)

# encryption utility : bcrypt
npm i bcrypt

# cross domain : cors
npm i cors (o)

# devDependencies
# reload server : nodemon
npm i -D nodemon (o)

```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## docs for

```bash
# Vue
http://vuejs.github.io/vue-loader

# Express
https://expressjs.com/ko/4x/api.html
```
