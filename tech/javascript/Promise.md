[https://www.youtube.com/watch?v=TAyLeIj1hMc&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI](https://www.youtube.com/watch?v=TAyLeIj1hMc&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI)

### first class citizen? 1급 시민 또는 1급 객체

숫자는 변수의 값이 될 수 있다. ⇒ 1급 시민

조건문은 변수의 값이 될 수 없다. ⇒ 2급 시민

함수도 변수의 값이 될 수 있다. ⇒ 1급 시민

함수가 다른 함수의 리턴값이 될 수 있다면? ⇒ 1급 시민

함수가 다른 함수의 입력값이 될 수 있다면? ⇒ 1급 시민

# 그렇다면 callback은 무엇이냐?

```jsx
val = function('kongom1') { // 이 자체는 콜백 함수는 아니다.
				return 'kongom2'
			}
function fn(arg) {
	arg()
}
fn(val) // val이라는 함수가 fn의 입력값으로 전달되어 호출이 된다고 하면, 이 맥락에서 callback function이 된다.
```

### filter()를 한번 보자

```jsx
arr.filter(callback(element[, index[, array]])[, thisArg])
```

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function callback(element) {
  console.log(element);
}
words.filter(callback);
```

spray
limit
elite
exuberant
destruction
present

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function callback(element) {
  console.log(element);
  if (element.length > 6) {
    return true;
  } else {
    return false;
  }
}
words.filter(callback);

newWords = words.filter(callback);
console.log(newWords);
```

['exuberant', 'destruction', 'present'];

### 코드를 줄여보자

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function callback(element) {
  return element.length > 6;
}
newWords = words.filter(callback);
console.log(newWords);
```

### 익명함수를 활용

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
newWords = words.filter(function (element) {
  return element.length > 6;
});
console.log(newWords);
```

### Arrow function 활용

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
newWords = words.filter((element) => {
  return element.length > 6;
});
console.log(newWords);
```

### Arrow function에서 파라미터 값이 하나라면

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
newWords = words.filter((element) => {
  return element.length > 6;
});
console.log(newWords);
```

### 작성한 return 값이 1줄이라면

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
newWords = words.filter((element) => element.length > 6);
console.log(newWords);
```
