# node.js

# NodeJS?

# ExpressJS?

### 노드가 이미 다운되어 있는지 확인 ⇒ node -v

### npm init ⇒ 새로운 or 존재하는 npm package 만들기

### package.json

### index.js ⇒ 백엔드 시작점

### express js 다운 받기

### node_module ⇒ 다운받은 dependencies들은 다 이 폴더에서 관리됨.

### index.js 에서 기본적인 express js 앱 만들기 ⇒ https://expressjs.com/en/starter/hello-world.html

# MongoDB 연결

### MongoDB 사이트 가기 ⇒ [https://www.mongodb.com/](https://www.mongodb.com/)

### 회원가입하기

### Cluster 만들기

### MongoDB 유저 생성 ⇒ 아이디 비번 기억해야함. 나중에 앱과 연결시 사용

kongom2 // kongom2!

### Mongoose 알아보기 ⇒ [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose) ⇒ 간단하게 MongoDB를 편하게 쓸 수 있는 Object Modeling 이다.

### Mongoose 다운로드 ⇒ npm install mongoose —save

### App에 MongoDB 연결하기

### 잘 연결 되었는지 확인!

# MongoDB Model & Schema

### Model?

Model은 Schema를 감싸주는 역할

### Schema?

하나하나의 정보를 지정해줄 수 있는것.

```jsx
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    tpye: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
```

# Git 설치

### Git? ⇒ 분산버전관리 시스템

### Git 설치 유무 ⇒ git —version

### Git 다운로드 ⇒ https://git-scm.com/

### git init ⇒ git 저장소를 만듬

### git status ⇒

### gitignore와 node_module

.gitignore ⇒ node_module을 제외하고 깃에 올리기

이미 올린 node_module 지우기 ⇒ git rm --cached node_modules -r

### git status ⇒ node_module이 없어짐

---

### Working Directory ⇒ git add

### Staging Area ⇒ git commit

### Git repository(Local) ⇒ git push

### Git repository(Remote)

# SSH(Secure Shell)를 이용해 Git을 Github에 연결하기

### Git과 Github의 차이

Git은 툴 Github는 클라우드 서비스, Git으로 관리하고 있는 코드들을 웹에서 사람들과 편하게 공유 및 작업 가능.

### Github에서 하라는 대로 해도 안만들어질 것.

Why? 안전하게 통신하는 방법이 없기 때문 (our machine(Local)과 github의 서버 간)

### 안전하게 통신 하려면? ⇒ SSH를 설정

### 이미 SSH가 설정 되었는지 보려면? ⇒ cd ~/.ssh 에서 id_rsa 와 id_rsa.pub 확인 있으면 그대로 진행

### 없다면 SSH 설정하기 ⇒ Google 에서 Git SSH 치고 [사이트](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 들어가기

---

### 1. SSH KEY를 만든다.

### 2. SSH Agent를 Background에 킨다.

### 3. SSH Private Key를 SSH-AGENT에 넣는다. // id_rsa 와 id_rsa.pub에서 .pub 형식으로 된 것이 SSH public key 이다.

### 4. 생성된 SSH Public Key를 3rd Party에 준다.
