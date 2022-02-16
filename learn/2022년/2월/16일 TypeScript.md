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
