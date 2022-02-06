# **let, const, Block-level scope**

> Reference [poiemaweb](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.

var 키워드로 선언된 변수는 아래와 같은 특징이 있다. 이는 다른 언어와는 다른 특징으로 주의를 기울이지 않으면 심각한 문제를 일으킨다.

1. Function-level scope 함수 레벨 스코프

- 함수의 코드 블록만을 스코프로 인정한다. 따라서 전역 함수 외부에서 생성한 변수는 모두 전역 변수이다. 이는 전역 변수를 남발할 가능성을 높인다.

  ❓ [전역변수를 남발하면 어떤 문제가 있는가?](../%EC%A0%84%EC%97%AD%EB%B3%80%EC%88%98%EC%9D%98%20%EB%AC%B8%EC%A0%9C%EC%A0%90.md)

- for 문의 변수 선언문에서 선언한 변수를 for 문의 코드 블록 외부에서 참조할 수 있다.
