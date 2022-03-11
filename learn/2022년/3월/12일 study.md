# Vue 스타일가이드

[https://kr.vuejs.org/v2/style-guide/](https://kr.vuejs.org/v2/style-guide/)

우선순위 A,B는 반드시 지키는 것이 좋다.

### 컴포넌트 여러개 만들기

# 자식 컴포넌트와 props

### LottoBall.vue

```jsx
<template>
  <div class="ball" :style="{ background }">{{ number }}</div>
</template>

<script>
export default {
  name: "LottoBall",
  props: ["number"],
  data() {
    let background;
    return {
      background,
    };
  },
};
</script>

<style>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>
```

### LottoGenerator.vue

```jsx
<template>
  <div>
    <div>당첨숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" number="5"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if="redo">한 번 더!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
};
</script>
<style scoped></style>
```

### 위와 같이 컴포넌트 간의 부모자식 관계가 형성될때 props로 데이터를 주고받는다.

### Read only ⇒ props로 받는 자식컴포넌트에서는 데이터를 methods를 이용해 변경이 불가능하다.

### 데이터를 변경하는 올바른 방법은

데이터를 바꾸는 부모의 메서드를 자식에게 props로 전달

### 컴포넌트 불러오기

```jsx
import LottoBall from "./LottoBall";

export default {
  components: {
    "lotto-ball": LottoBall,
  },
};
```

vue에서는 파스칼 케이스를 자동으로 케밥케이스로 바꿔준다

```jsx
"lotto-ball": LottoBall, => LottoBall
```

컴포넌트 이름을 다르게 할 수 있지만, 그렇게 할 이유가 없기 때문에 동일하게 하는 편

### props에 들어가는 데이터의 자료형을 선언해줘야 한다.

```jsx
props: {
    number: Number,
  },
```

# watch

### 어떤 값이 바꼈는지 안바꼈는지 감시하는 기능

### 객체가 아닌 값을 watch하는게 좋다.

### 자주 쓰는것은 좋진 않다.
