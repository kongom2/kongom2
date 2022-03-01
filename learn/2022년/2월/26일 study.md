# 프로젝트 구조와 웹팩 빌드

```jsx
import Vue from "vue";

new Vue().$mount("#root");
// vue 인스턴스
```

ES2015 최신문법 package에서 vue 설치한것을 불러온다.

```jsx
"scripts": {
    "build": "webpack"
  },
```

npm run(scripts) build ⇒ webpack이 실행된다. ⇒ 이상태에서는 에러가 남 ⇒ 에러를 하나씩 해결할 것.

1. path가 절대경로가 아니다

   ```jsx
   const path = require('path')
   path: path.join(__dirname),
   ```

   node에서 절대경로 적을 때 번거로운 점을 해결해주는 것이 있다.

   path 라는 module, node가 만들어 둔 script

   path의 join 메서드를 활용하여 \_\_dirname 으로 현재경로에 접근이 가능하다.
