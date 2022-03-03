# 설정파일 도입

### Input ⇒ Process ⇒ Output

Modules with Dependencies ⇒ bundle your scripts ⇒ Static assets

### 다양한 형태의 자원을 어떻게 웹팩에 전달할 것인가? ⇒ 어떤 방법으로 가공할 것인가? ⇒ 배포를 할 때 원하는 형태로 가공하는 것

### config파일을 만든다 ⇒ Why? 웹팩을 더 쉽게 사용하기 위해

### webpack 홈페이지 ⇒ documentation

Guides, 웹팩으로 할 수 있는 여러가지 일들 목록

Configuration, 웹팩을 시킬 때 사용하는 여러가지 명령을 볼 수 있다.

⇒ webpack.config.js 예제를 참조하자

```jsx
const path = require('path')

module.exports = {
	entry: "./source/index.js",
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index_bundle.js'
	}
}

=== npx webpack --entry ./source/index.js --output ./public/index_bundle.js
```

\_\_dirname, webpack.config.js파일이 위치하고 있는 현재 경로를 알려줌

```jsx
npx webpack --config webpack.config.js
webpack.config.js 형태로 파일을 만들었다면?
npx webpack 만 치고도 실행할 수 있다. => 번들링이 된다.
```

### 웹팩을 사용하는 방법

1. CLI로 명령을 통해서 옵션을 주는 방법
2. config 파일을 만들어 실행하고 싶은 코드를 적어서 시킬 수 있다.

# Mode의 도입

```jsx
const path = require('path')

module.exports = {
	mode: "development"
	entry: "./source/index.js",
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index_bundle.js'
	}
}
```

### 개발모드와 배포모드를 따로 운영하는 것이 좋다.

webpack.config.js ⇒ npx webpack

webpack.config.prod.js ⇒ npx webpack --config webpack.config.prod.js

# 웹팩의 핵심 Loader의 도입

```jsx
npm install style-loader css-loader -D
```

```jsx
const path = require('path')

module.exports = {
	mode: "development"
	entry: "./source/index.js",
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index_bundle.js'
	},
	modules: {
		rules: {
			{
				test: /\.css$/,
				use: [
					'style-loader' // 그렇게 가지고온 css 코드를 웹페이지 안에 style 태그로 주입해주는 loader
					'css-loader' // css 파일을 읽어와서 웹팩으로 가져오는 녀석
				]
			}
		]
	}
}
```

⭐ loader 우선순위 ⇒ 아래에 있는 loader가 먼저 실행

```jsx
import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
```

Asset Management에 여러가지 loader가 있으니 참고할 것.
