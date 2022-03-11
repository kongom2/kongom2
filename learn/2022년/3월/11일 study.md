# computed

### 연산은 computed에서 하는 편이 좋다.

### data와 computed의 차이점

data는 문자 그대로의 데이터

computed는 데이터를 가공해서 쓰고 싶을 때

### 그런데 굳이 computed를 쓰는 이유는?

computed에 있는 값은 캐싱이 된다.

캐싱이 뭐지? 미리받아놓고 필요할 때 바로 쓰는 것

### computed를 안쓰면?

template 내에서 한 데이터만 변경했는데도 연산되는 부분까지 같이 변경된다.

### 성능상의 중요한 문제

데이터가 함수를 이용해 가공된다면 성능향상을 위해 computed를 쓰는 것이 좋다.

# v-show

v-show=”false” ⇒ display:none;

v-show=”true” ⇒ 화면에 보임

```jsx
<template>
  <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
  <div v-show="result.length">
    <div>평균시간 : {{ average }}ms</div>
    <button @click="onReset">리셋</button>
  </div>
</template>
```

### 그렇다면, v-if와 차이점이 무엇인가?

v-show ⇒ html상 태그가 존재

v-if ⇒ 코드 자체가 주석처리

### 태그의 존재 유무가 차이점 ⇒ 태그유무에 따라 레이아웃에 영향을 미침

단순히 눈에만 안보이게 할 때

아에 없애야 할 때

### 위 두가지 상황을 고려하여 알맞게 사용

v-if를 사용하는 경우가 많다.

# template

### 무의미하게 div를 사용하는 경우가 많다.

그 경우 해당 태그를 template으로 감싸도 된다.

### html상 없는 태그로 보이게 된다.

### 최상의 template 안에 바로 또 template을 못쓴다.

# vue devtools

### 편하게 디버깅 가능

### 데이터도 확인 가능

### 성능 체크 가능

### 배포환경에서 vue-devtools를 못보게 해야 할 것

Vue.config.devtools = false;

# Vue 컴포넌트 생성시

### 두단어 이상을 사용하는 것이 좋음.

태그와 헷갈릴 가능성이 많다.

### webpack-dev-server 사용시 dist > app.js 파일이 생성되지 않음

파일로 만들지 않고 메모리에 저장함.

실제 동작은 똑같이 작동

### 의미가 불분명한 변수는 따로 이름을 붙여주는 것이 좋다.

```jsx
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};
export default {
  data() {
    return {
      imgCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {},
  methods: {
    onClickButton(choice) {},
  },
};
```

# vue 라이프 사이클

[라이프사이클](<[https://manhyuk.github.io/images/vue/vue-lifecycle.png](https://manhyuk.github.io/images/vue/vue-lifecycle.png)>)

### created ⇒ 컴포넌트가 보여지긴 하지만 화면에 나타나기 전.

### mounted ⇒ 화면에 나타난 후.

### updated ⇒ 화면에 데이터가 바뀌어서 화면이 다시 그려질 때

### destroyed ⇒ 화면에서 완전히 사라질 때

### 각각의 라이프 사이클이 실행되기전 실행할 때 ⇒ before가 붙은 애들을 사용

### 컴포넌트는 사라졌는데 인터벌은 계속 동작하게 되는 경우 ⇒ beforeDestroy에서 clearInterval()

메모리 누수 방지

### setInterval setTimeout 했으면 beforeDestroy에서 클리어를 해줘야 한다.

### 60프레임 이상이 되도록 해야한다.

### async를 쓰는 이유는 await를 쓰기 위함, await를 쓰는 이유는 promise 처리를 위해서
