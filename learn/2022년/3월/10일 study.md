# v-for 반복문 사용

```jsx
<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onSubmitForm">
      <input type="text" ref="answer" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      // this.tries.push(this.value);
      this.tries.push({
        try: this.value,
        result: "홈런",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>
<style></style>
```

### v-on:submit="onSubmitForm"

e.preventDefault();
변경가능 ⇒ @submit.prevent

# 숫자야구 완성

### 화면에 보이는 것은 데이터

화면과 관련없이 쓰이는 계산식은 그냥 변수

### data나 methods에는

현재 화면과 밀접한 연관이 있는 것들만 넣어주는 편이 좋다.

# 반응속도체크와 webpack watch

### node_modules와 dist는 자동으로 만들어지는 파일

### ⭐ 자동으로 빌드 (npm run build) ⇒ 더 좋은 방법이 있다?!

```jsx
"scripts": {
    "build": "webpack --watch"
  },
```

# v-bind와 vue style

### vue는 바뀌는 것 위주로 생각

state ⇒ class를 나타내는 데이터

### v-bind:XXX의 축약형 ⇒ :XXX

### 에러메세지 : You may need an additional loader to handle the result of these loaders.

로더를 추가로 설치해라.

```jsx
npm i vue-style-loader -D
npm i css-loader -D
```

### rules 추가

```jsx
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development", // 배포시 'production'
  devtool: "eval", // 배포시 'hidden-source-map' => import 해올 때 확장자를 안붙여도 됨
  resolve: {
    extensions: [".js", ".vue"], // 확장자 처리
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
```

### 웹팩 모듈에 loader ⇒ 자바스크립트가 아닌 파일을 자바스크립트로 만들어 주는 것

### 웹팩 플러그인 ⇒ 부가적인 역할 ⇒ 압축, html에 자동으로 script로 추가 등 output이 나오기 전에 추가적으로 작업을 해주는 역할

### style에 scoped를 사용시

```jsx
<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
```

css는 해당 컴포넌트에서만 유효함.

id값 뒤에 랜덤한 속성이 붙음.

### vue의 scoped 스타일

# webpack-dev-server

### webpack watch의 슈퍼셋 느낌

```jsx
npm i webpack-dev-server -D
```

```jsx
"scripts": {
    "build": "webpack --watch",
    "dev": "webpack-dev-server --hot"
  },
```

```jsx
npm run dev
```

### **webpack-dev-server@4 ⇒ webpack@5 변경 이슈**

```jsx
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development", // 배포시 'production'
  devtool: "eval", // 배포시 'hidden-source-map' => import 해올 때 확장자를 안붙여도 됨
  resolve: {
    extensions: [".js", ".vue"], // 확장자 처리
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
```

### webpack-dev-server 굉장히 편하다~

### 데이터가 중요, html에 v-bind 속성을 이용해 연결
