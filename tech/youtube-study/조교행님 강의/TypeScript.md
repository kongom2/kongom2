# **TypeScript 맛보기**

### 개발실력은 디버그를 많이 할수록 는다.

# JavaScript

- 브라우저에서 쓰이는 단 하나의 프로그래밍 언어
- 디버그에 시간 많이 씀

# TypeScript

- 버그가 상당히 줄어듬
- 코드가 예측 가능하고 읽기 쉬어짐

# const

- 선언과 동시에 초기화 해야 함.
- 한번 값을 넣으면 바꿀 수 없음

# let

- 중급 개발자가 되기 전까지 쓸일 없음.

# function

- 수학적 함수와 프로그래밍 함수는 다른단어
- 프로그래밍 함수 : 기능을가진 재사용가능한 도구
- 함수는 미리 만들어 놨다가 필요할 때 호출하여 사용
- 함수 이름은 동사 + 명사 ex) sayHello
- 사용자는 argument, 인자를 입력해 함수로 보냄
- 함수 사용자는 함수 사용법만 알고 있으면 됨
- TS에선 함수의 parameter, 매개변수타입을 지정해야 함

```jsx
function sayHello(name: string, age: number) {
  // parameter, 매개변수
  return `안녕, ${name}. 나이는 ${age}세`;
}

const result = sayHello(`kongom2`, 24); // argument, 인자

console.log(result);
```

# Bulit-in object, 내장객체

```jsx
console.log(document) // DOM 조작
HTMLDocument: {
  "location": {
    "ancestorOrigins": {},
    "href": "https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAZwIYE8ASBTANruACjFQFtsAuZKAJxjAHMAaRVByxMEUgI2xoCUiAN4AoRBMQ1sUEDSQADQBKjgVUaWAEmElyAXwB0iQBkNgF3HAKU2JNbbDsAcgwtE7RoiAmpTsyELiiIAvCgwcfCIFAGsEBjhSACYFFmiAFgEnFzBkOFxsPQIGQmlPbwEgA",
    "origin": "https://www.typescriptlang.org",
    "protocol": "https:",
    "host": "www.typescriptlang.org",
    "hostname": "www.typescriptlang.org",
    "port": "",
    "pathname": "/play",
    "search": "",
    "hash": "#code/GYVwdgxgLglg9mABAZwIYE8ASBTANruACjFQFtsAuZKAJxjAHMAaRVByxMEUgI2xoCUiAN4AoRBMQ1sUEDSQADQBKjgVUaWAEmElyAXwB0iQBkNgF3HAKU2JNbbDsAcgwtE7RoiAmpTsyELiiIAvCgwcfCIFAGsEBjhSACYFFmiAFgEnFzBkOFxsPQIGQmlPbwEgA"
  }
}
```

# 지역변수, 전역변수

```jsx
// global variable, 전역변수
const a = 1;
const b = 2;

function showResult(a: number, b: number) {
  // local variable, 지역 변수
  a = 3;
  b = 4;
  return [a, b];
}

const [resultA, resultB] = showResult(a, b);

console.log(`
    a: ${resultA}
    b: ${resultB}
`);

console.log(`
    a: ${a}
    b: ${b}
`);
```

- 지역변수 : 함수안에서 복사해 쓰는 변수, 함수 바깥에 영향을 미치지 않는다.
- 전역변수 : 함수 바깥에서 선언한 변수, 함수 안에서 선언한 적이 없어도 함수 안에서 쓸 수 있다.
- 그러나 객체와 배열은 함수 안으로 가져오더라도 전역변수이므로, 함수의 파라미터로 쓸 땐 매우 조심해야 한다.
- 코드에서 같은 이름으로 쓰였더라도 사실은 완전히 다른 것을 의미 할 수 있다.
- TS에선 선택사항으로 return 타입을 지정할 수 있다.
- 경우에 따라선, 파라미터 또는 return이 필요없는 함수를 만들 수도 있다.

# Arrow function, 화살표 함수

```jsx
function sayHello(name: string, age: number) {
  // parameter, 매개변수
  return `안녕, ${name}. 나이는 ${age}세`;
}

const sayHello2 = (name: string, age: number) => {
  return `안녕, ${name}. 나이는 ${age}세`;
};

const result = sayHello(`kongom2`, 24); // argument, 인자
const result2 = sayHello2(`kongom2coding`, 30); // argument, 인자

console.log(result, result2);
```

- JS에선, TS에선 다른 메이저 언어들과는 다르게 함수가 곧 변수이자 데이터 이자 타입
- 객체안에 정의된 함수 ⇒ 메서드

```jsx
const myCal = {
  add: function (a: number, b: number) {
    return a + b;
  },
  subtract: function (a: number, b: number) {
    return a - b;
  },
  multiply: function (a: number, b: number) {
    return a * b;
  },
  devide: function (a: number, b: number) {
    return a / b;
  },
};

const mycalArrow = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  devide: (a: number, b: number) => a / b,
};

console.log(myCal.add(2, 2));
console.log(myCal.subtract(2, 2));
console.log(myCal.multiply(2, 2));
console.log(myCal.devide(2, 2));
console.log(mycalArrow.add(2, 2));
console.log(mycalArrow.subtract(2, 2));
console.log(mycalArrow.multiply(2, 2));
console.log(mycalArrow.devide(2, 2));
```

- JS에서는 함수는 변수이며, 하나의 자료형이다.
- 함수가 변수이기 때문에 다른 함수의 파라미터로도 쓰이고 return으로도 쓰인다.
- return이 한줄인 함수의 경우 중괄호를 생략하고 return도 생략 가능하다.
- {} 와 return을 생략할 경우 객체를 return 할 때는 꼭 ()로 감싸줘야 한다. 함수에서 {}는 함수 내용을 의미하기 때문이다.

# 콜백 함수 map(), filter()

- 함수안에 들어와서 call 되는 함수
- 함수안에 함수
- 콜백함수의 작동이 끝나야만, 바깥에 있는 함수가 처리됨.

```jsx
const student = ["kongom1", "kongom2", "kongom3", "kongom4", "kongom5"];

const newStudents = student.filter((student) => student.length > 2);

console.log(newStudents);
```

# interface

- 내가 만드는 타입

```jsx
interface Info {
  name: string;
  age: number;
}

const myInfo = {
  name: "kongom2",
  age: 20,
};

const sayHello = (person: Info): string => {
  return `안녕, ${person.name}. 나이는 ${person.age}.`;
};

console.log(sayHello(myInfo));
```

- interface는 JS엔 없고, TS에만 있는 개념
- interface는 개발자가 직접 만드는 타입이다.
- 함수의 인자로 객체를 쓸 때는, 반드시 객체를 interface로 정의해야 한다.

# **타입스크립트를 배우면서 느끼는 점**

개발을 좀 더 편하게 해주는 도구

에러를 더 많이 내도록 하여 자연스럽게 품질이 좋은 코드를 만드는 도구

철자하나 틀려서 생기는 오류

시간절약 안쓸 이유가 없는 듯

<br/>
<br/>
<br/>

### 개발 단어

declare, 선언

init, 초기화

assign, 배정하다.

expected, 예상된다.
