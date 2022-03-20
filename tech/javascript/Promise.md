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

### callback 함수를 소비하는 함수를 만들어 보자

```jsx
words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function myfilter(origin, callback) {
  const result = [];
  for (let i = 0; i < origin.length; i++) {
    let current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}
newWords = myfilter(words, (element) => element.length > 6);
console.log(newWords);
```

# Promise

### 검색어 : Synchronous vs Asynchronous

### Synchronous 동기

순차적으로 실행

### Asynchronous 비동기

병렬적으로 실행

![https://media.vlpt.us/images/dorazi/post/dadf63e9-5994-4967-bc3f-ca0bc173897c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-31%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.29.45.png](https://media.vlpt.us/images/dorazi/post/dadf63e9-5994-4967-bc3f-ca0bc173897c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-31%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.29.45.png)

### 서버와 브라우저가 통신을 할 때 ⇒ 언제 끝날 지 예측하기가 어려움 ⇒ 다른일 하다가 통신이 끝날을 때 콜백하며 호출

### const fetched = fetch(’https://jsonplaceholder.typicode.com/posts’)

.then(function(result){}) ⇒ fetch를 통해서 실행한 결과가 성공 했을 때.

➡️ response 객체가 전달된다.

.catch(function(reason){}) ⇒ fetch를 통해서 실행한 결과가 실패 했을 때.

```jsx
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // then 안에 then이 들어가는 Nested promise
    response.json().then(function (data) {
      console.log("data", data);
    });
    return response.json();
  })
  .catch(function (reason) {
    console.log("reason", reason);
  })
  .then(function (data) {
    // promise chaining
    console.log("data", data);
  });
```
