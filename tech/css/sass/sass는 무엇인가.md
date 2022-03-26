도움 얻은 블로그, [https://nykim.work/97](https://nykim.work/97)

why? CSS를 변수화 하여 작성하기 쉽게 해주기 때문

how to, 브라우저는 이해 못하기에 컴파일러 필요

test, Sass ⇒ CSS 변환 [https://www.sassmeister.com/](https://www.sassmeister.com/)

원래 Ruby로 만들어 짐 2019년 부터 중단

node-sass, 자바스크립트 환경에서 사용 ⇒ npm install -g node-sass

최근엔 Dart Sass로 전환하는 중 ⇒ npm install sass -g

extention 사용 ⇒ Live Sass Compiler

### 설치

```jsx
npm install sass -g
```

### 확인

```jsx
npm show sass version
```

```jsx
sass --version
```

### 변환

```jsx
sass style.scss style.css
```

### 자동화 : 파일

```jsx
sass --watch style.scss style.css
```

### 자동화 : 폴더

```jsx
sass --watch scss:css
```

### 자동화 : 취소

Ctrl+C

### .map 소스맵 : 사용이유

컴파일된 소스를 원본 소스와 매핑하는 역할

개발자는 원본소스로 개발, 브라우저는 컴파일 된 소스만 파악가능

### .map 소스맵 : 생성하고 싶지 않을 때

```jsx
sass --no-source-map style.scss style.css
```

### 플래그, 가운데 명령어에 들어가는 --

여러가지 옵션이 존재, 참고 사이트 [https://sass-lang.com/documentation/cli/dart-sass](https://sass-lang.com/documentation/cli/dart-sass)

### Scout-App

The easiest way to process Sass and SCSS to CSS!
GUI 툴, [https://scout-app.io/](https://scout-app.io/)

### Live Sass Compiler
