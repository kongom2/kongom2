# SPA 사고방식 - 데이터만 관리한다. (데이터 중심)

### 바뀌는 부분을 먼저 찾는다. ⇒ 바뀌는 부분을 데이터로

### React는 state를 선언하고 vue는 데이터를 선언한다.

### 컴포넌트는 인스턴스보다는 위에

### 스크립트는 div#root보다는 아래에

# Props와 Webpack의 중요성

### Component는 중복을 피하고 재사용을 위해 사용하지만,

달라지는 부분은 Props로 처리한다.

### Vue의 HTML 부분은 케밥케이스 ⇒ 자바스크립트 부분인 props에서는 케멀케이스로 받을 수 있다. ⇒ vue가 알아서 처리 해준다.

```jsx
케밥케이스 => <word-relay start-word="kongom1"></word-relay>
케멀케이스 => props: ['startWord'],
```

### script만 사용했을 때의 불편함과 Webpack을 배울 때의 난이도를 저울질 해보고 뭐를 선택할지 고민해보자

# Webpack 사용하기

### Webpack을 사용하려면 Node를 먼저 설치해야 함.

### Node 설치 시 NPM도 따라옴.

```jsx
node -v
npm -v
npm init
```

### package.json 파일이 생성된다. ⇒ 내가 쓰는 남의 소스코드들이 정리 되는 곳 ⇒ 정리를 Why? 소스코드마다 버전이 있다. 갯수가 늘어날 수록 버전관리의 어려움이 생긴다. 그것을 잘 기억하기 위해 이곳에 정리 한다.

```jsx
{
  "name": "number-baseball",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}
```

```jsx
npm install vue
```

### vue를 설치 한다.

```jsx
{
  "name": "number-baseball",
  "version": "1.0.0", // 프로젝트의 버전
  "description": "",
  "main": "index.js", // 가장 중요한 파일
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC", // 소스코드
  "dependencies": {
    "vue": "^3.2.31" // 개발할 때 배포할 때 두 경우에 사용
  },
	"devDependencies": { // 개발 할 때만 필요한 것
    "webpack": "^5.69.1", // 배포를 위한 보조 도구
    "webpack-cli": "^4.9.2" // 개발된 것을 웹팩처리해서 배포
  }
}
```

### NPM으로 package(남의 소스)를 관리 한다.

```jsx
npm install webpack webpack-cli -D
npm install webpack webpack-cli --save-dev
```

### -D, --save-dev는 옵션 개발할때만 이런 package를 쓰겠다.

### npm 설치 시 node_modules, package-lock.json이 생긴다.

### node_modules ⇒ 자세한건 노드교과서 참고하자

### 뭐를 쓸 때는 왜 쓰는지 잘 알고 있어야 한다.

webpack 왜 쓰죠? ⇒ script가 너무 많아져서 하나로 합치기 위함.

### entry, module, plugins, output이 기본

```jsx
git add . 를
git reset HEAD 로 되돌릴 수 있다.
```
