# **Execution Context, 실행 컨텍스트**

> 참고자료 [poiemaweb](https://poiemaweb.com/js-execution-context)

### 단어

evaluate, 평가하다. 이벨류에이트

execution, 실행. 엑스큐션

context, 맥락.

Execution Context, 실행 컨텍스트는
scope, hoisting, this, function, closure 등의 동작원리를 담고 있는
자바스크립트의 핵심원리이다.

ECMAScript Spec에 따르면
실행 컨텍스트를 실행 가능한 코드를
형상화하고 구분하는 추상적인 개념이라고 정의한다.

좀 더 쉽게 말하자면
실행 컨텍스트는 실행 가능한 코드가
실행되기 위해 필요한 환경 이라고 할 수 있다.

### 실행가능한 코드

1. Global code ➡️ 전역에 존재하는 코드
2. Function code ➡️ 함수 내에 존재하는 코드
3. Eval code ➡️ eval 함수로 실행되는 코드
   ⭐ 문자로 표현된 자바스크립트 코드를 실행하는 함수

일반적인 실행 가능한 코드는 전역코드와 함수코드이다.

### 실행에 필요한 여러가지 정보

1. Variable, 변수
   전역변수, 지역변수, 매개변수, 객체의 프로퍼티
2. Function declaration, 함수 선언
3. Scope, 변수의 유효범위
4. this

실행에 필요한 정보를 형상화하고 구분하기 위해
자바스크립트 엔진은
실행 컨텍스트를 물리적 객체의 형태로 관리 한다.

```jsx
var x = "xxx";

function foo() {
  var y = "yyy";

  function bar() {
    var z = "zzz";
    console.log(x + y + z);
  }
  bar();
}
foo();
```

코드를 실행하면
실행 컨텍스트 Stack, 스택이 생성되고 소멸한다.
현재 실행중인 컨텍스트에서
이 컨텍스트와 관련없는 코드가 실행되면 새로운 컨텍스트가 생성된다.
이 컨텍스트는 스택에 쌓이게 되고 컨트롤이 이동한다.

![논리적 스택 구조를 가지는 실행 컨텍스트 스택](https://poiemaweb.com/img/ec_1.png)
**<center>논리적 스택 구조를 가지는 실행 컨텍스트 스택</center>**
