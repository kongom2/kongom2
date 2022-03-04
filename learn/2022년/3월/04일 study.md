# Output 설정

```jsx
const path = require('path')

module.exports = {
	mode: "development"
	entry: {
				index: "./source/index.js",
				about: "./source/about.js",
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name]_bundle.js'
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

# 플러그인 도입

### 복합적이고 자유롭게 동작시킬 수 있다.

### htmlwebpackplugin

```jsx
npm install html-webpack-plugin -D
```

```jsx
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development"
	entry: {
				index: "./source/index.js",
				about: "./source/about.js",
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name]_bundle.js'
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
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			filename: './index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './source/about.html',
			filename: './about.html',
			chunks: ['about']
		}),
	]
}
```

### 소스코드가 변경이 감지 되었을 때 자동으로 컴파일 실행

```jsx
npx webpack --watch
```

### DevServer

live reload

⇒ 소스코드 저장 시 자동으로 리로드

hot module replacement

⇒ 수정된 부분만 변경되어 정보가 유지되는 기능

### Code splitting

### Lazy loading

### 일을 잘하려면 웹팩이 필요하다.
