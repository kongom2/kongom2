# What is React?

### React?

1. 라이브러리
2. 컴포넌트 ⇒ 모듈과 비슷하게 컴포넌트로 이루어져 있어 reusable이 뛰어남
3. Virtual DOM

### Real DOM VS Virtual DOM

Virtual DOM은 Real DOM과 같은 properties들을 갖고 있으면 그냥 가볍게 Real DOM을 카피 한 것이라 보면 된다.

### Real DOM

1. 만약 10개의 리스트가 있다.
2. 그 중에 한가지의 리스트만 Update 됨
3. 전체 리스트를 다시 Reload 해야 됨
4. Super Expensive 한 작업

### Virtual DOM

1. 만약 10개의 리스트가 있다.
2. 그 중에 한가지의 리스트만 Update 됨
3. 그 바뀐 한가지 아이템만 DOM에서 바꿔준다.
4. 어떻게?

### How?

1. JSX을 렌더링 한다 그러면 Virtual DOM이 Update 됨
2. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.
3. 이 과정을 Diffing이라고 부름.
4. 그 바뀐 부분만 Real DOM에서 바꿔준다

# Create React App으로 리액트 시작하기

### 원래 리액트 앱을 처음 실행하기 위해선 Webpack이나 Babel 같은 것을 설정하기 위해서 엄청나게 많은 시간이 걸렸다. ⇒ 하지만 이제는 create-react-app Command로 바로 시작할 수 있다.

### Babel?

최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서

최신 자바스크립트 문법을 구형 브라우저에서도 실행이 될 수 있게 변환 시켜줌.

ES6 이후의 문법들을 ES5 이전 문법으로 변환

### Webpack?

라이브러리와 프레임워크들도 많이 쓰게 되면서 관리하게 되는 파일 수 도 급증하게 되었다.

복잡한 파일, 많은 모듈들을 보기 쉽게 번들링 해준다.

CRA 상에서 Webpack이 관리하는 부분은 src 폴더이다. public은 관리 안해줌

이미지 파일을 앱에 넣고 싶을 땐 src에 넣어줘야 Webpack이 모아주는 역할을 한다.

### npx create-react-app .

### 원래 create-react-app을 할 때, ⇒ npm install -g create-react-app 이렇게 했었다. global 디렉토리에 다운을 직접 받는 형태

### 이제는 npx를 이용하여 다운받지 않고도 사용가능하다.

### NPM VS NPX

# NPM, Node Package Manager

### What is NPM?

1. 저장소(registry) 역할을 한다.
2. 명령어로 다양한 것들을 실행 한다.

### npm install locally

-g 만 빼면 로컬로 다운로드

### npm install globally

-g를 붙이면 컴퓨터에 글로벌로 설치

맥의 경우 bin/directory

리눅스의 경우 /usr/local/bin

윈도우의 경우 AppData/npm

각각의 위치에 설치됨

### 그래서,

만약 install 하는 npm을 다른 프로젝트에서 쓰지 않는 다면 global로 install 할 필요가 없음

### 장점

1. disk space낭비를 막을 수 있다.
2. 항상 최신 버전을 사용할 수 있다.

# Boiler Plate에 특성화 된 구조

### Redux를 위한 폴더들

\_actions

\_reducer

### Page 넣는 폴더

components/views

### 해당 Page에 관련된 CSS 파일이나, Component 넣는 폴더

components/views/Sections

### Routing 관련 일을 처리하는 곳

App.js

### 환경변수 같은 것들을 정하는 곳

Config.js

### Higher Order Component의 약자

hoc 다른 컴포넌트를 갖는 function

- 여기서 해당 유저가 해당 페이지에 들어갈 자격이 되는지를 알아낸 후에
- 자격이 된다면 Admin component에 가게 해주고 아니라면 다른 페이지로 보내버린다.

### 여러군데서 쓰일 수 있는 것들을 이곳에 넣어두고 어디서든 사용함.

utils

# App.js React Router Dom

### 페이지 이동할 때 React Router Dom을 사용한다.

### 웹사이트 참조 ⇒ [https://reacttraining.com/react-router/web/example/basic](https://reacttraining.com/react-router/web/example/basic)

### Dependency 다운로드 ⇒ npm install react-router-dom --save

### react router dom 코드 Documentation 에서 복사하여 붙여 넣기

### 그 후 우리 앱에 맞게 바꿔서 넣기

### Page 2개 정도 만들어서 잘 되는지 테스트

# Data Request, Response Flow 그리고 Axios

### Client는 localhost:5000

Server에게 Request을 하고 Response을 받는다.

### Server는 localhost:3000

Client에게 Request을 받고 Response을 준다.

### Database와 Server는 데이터를 주고 받는다.

### Request를 할 때 지금까지는 Client가 없었기에 POSTMAN을 사용했다.

### 하지만 이제는 있으니 React부분에서 Request를 보내면 되는데

### 그 때 사용하는 것이 AXIOS, jQeury 시절 Ajax라고 보면 된다.

### npm install axios --save로 다운을 먼저 받자.

# CORS 이슈, Proxy 설정

### 두개의 다른 포트를 갖고 있는 서버는 아무 설정 없이 Request를 보낼 수 없다.

### Why?

### CORS,Cross-Origin Resource Sharing 정책 때문에 보안을 위한 정책

Same-origin requests (always allowed)

Cross-origin requests (controlled by CORS)

### HOW TO SOLVE?

여러 방법이 있으나 간단하게 Proxy로 해결해 보자.

https://create-react-app.dev/docs/proxying-api-requests-in-development

**Configuring the Proxy Manually**

npm install http-proxy-middleware --save

# What is Proxy Server?

### 1. 아이피를 Proxy Server에서 임의로 바꿔 버릴 수 있다. 그래서 인터넷에서는 접근하는 사람의 IP를 모르게 된다.

### 2. 보내는 데이터도 임의로 바꿀 수 있다.

### 기능

1. 방화벽 기능
2. 웹 필터 기능
3. 캐쉬 데이터, 공유데이터 제공 기능

### Proxy Server 사용이유

1. 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어
2. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
3. 더 나은 보안 제공
4. 이용 제한된 사이트 접근 가능

# Concurrently를 이용하여 프론트, 백 서버 한번에 켜기

### What is concurrently? ⇒ 여러개의 command를 동시에 작동 시킬 수 있는 Tool.

### 사용법

"dev": "concurrently \"npm run node\" \"npm run start --prefix client\"”

# CSS Framework Ant Design

### CSS Framework를 쓰는 이유는? ⇒ 기능을 만드는데 더욱 집중하기 위해서

### 종류

1. Material UI
2. React Bootstrap
3. Semantic UI
4. Ant Design
   - https://ant.design/
   - 중국에서 만들어짐
   - 사이즈가 큼
   - 쓰기가 편함
   - [https://jeonghwan-kim.github.io/2018/10/13/ant-design-101.html](https://jeonghwan-kim.github.io/2018/10/13/ant-design-101.html)
5. Materialize

# Redux 설명

### What is Redux? ⇒ 상태관리 라이브러리

### 상태관리란?

### Props?

1. 프로퍼티의 줄임말
2. 컴포넌트간 주고받을 땐 props을 이용해야 한다.
3. 부모에서 자식으로만 데이터를 보낼 수 있다.
4. 자식컴포넌트에서 데이터를 수정할 수 없다.

### State?

1. 부모컴포넌트에서 자식컴포넌트로 데이터를 보내는게 아닌
   그 컴포넌트안에서 데이터를 전달하려면? ⇒ State
   예를들어 검색창에 글을 입력할 때 글이 변하는 것은 state을 바꿈
2. State는 변할 수 있다.
3. State가 변하면 리렌더링 된다.

### Redux는 State를 관리하는 것.

### Redux 데이터 Flow (strict unidirectional data flow)

데이터는 한방향으로만 흐른다

1. 컴포넌트에서 시작 ⇒ 디스패치를 하면?
2. 액션으로 가고

   a plain object describing what happened. 무엇이 일어났는지 설명하는 객체

3. 리듀서로 가고

   이전 state와 action object를 받은 후에 next state를 return 한다.

4. 스토어로 가고

# Redux 세팅

### 다운받아야 할 Dependency

1. redux
2. react-redux
3. redux-promise

   리덕스 미들웨어

4. redux-thunk

   리덕스 미들웨어

### Redux 기본 구조(scaffolding) 만들기

# React Hook

### Class Component

1. 많은 기능 제공
2. 코드가 길다
3. 복잡하다
4. 성능이 상대적으로 느림

### Functional Component

1. 상대적으로 적은 기능
2. 코드가 짧다
3. 간단하다
4. 상대적으로 빠른 성능

### React 16.8 Hooks 업데이트 이후

# Login 페이지 만들기

Formik과 Yup를 사용하여 다이나믹하게 만들 수 있음
