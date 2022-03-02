# 기술이 등장하는 것은 불편함 때문에 의미가 있다.

Webpack이 없었다면?

➡️ 변수 이름이 충돌하는 문제

➡️ 이런한 문제를 해결하기 위해 나온 개념이 Module

Module이란 무엇인가?

Module은 최신브라우저에 탐재되어 있다.

hello.js와 world.js에서 word값을 export 하지 않으면 각각의 자바스크립트 파일안에서만 유효한 값이 된다.

import export는 최신 기술 ⇒ 오래된 브라우저에서 동작하지 않음

여러가지 파일을 직접적으로 다운로드 받는다고 하면 네트워크 커넥션이 많아짐 ⇒ 사용자, 제공자 입장에서 더 많은 컴퓨팅 파워를 사용할 수 밖에 없음 ⇒ 네트워크에 부하가 많이 생기면서 속도가 저하되는 현상

사용자 ⇒ 사용자 경험 저하

제공자 ⇒ 컴퓨터 자원 많이 소모 ⇒ 비용 증가

웹에서도 모듈의 개념을 사용하고 싶다는 생각

여러개의 파일을 하나로 묶어서 제공하고 싶다는 생각들을 가진 사람들이 만든 것이 bundler

# 웹팩 도입 효과 ⇒ 리팩토링

### 리팩토링

구동되는 동작은 그대로 유지 ⇒ 내부의 코드를 효율적으로 바꾸는 행위

```jsx
npm init // => package.json 생성
npm install -D webpack webpack-cli
```

### entry 파일 생성 ⇒ index.js

```jsx
import hello_word from "./source/hello.js";
import world_word from "./source/world.js";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
```

```jsx
npx webpack --entry ./source/index.js --output ./public/index_bundle.js
```

```jsx
import hello_word from "./hello.js";
import world_word from "./world.js";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
```
