# Closure

생활코딩 강의 한번 듣고 Taehoon님의 설명을 들으니 이해가 더 잘 되었다.

[생활코딩 Closure](https://www.youtube.com/watch?v=bwwaSwf7vkE)

[Taehoon Closure](https://www.youtube.com/watch?v=KmpofpqkitA)

static scope, 정적 스코프 === lexical scope, 어휘적 스코프

자바스크립트는 정적 스코프를 채택

### Scope

Global > Script > Local

### Closure가 추가된 Scope

Global > Script > Closure(fn1) > Closure(fn2) > Local

내부적으로 scope를 가지고 있어서 접근 가능하다.

순수함수 ≠ 클로저

다른 프로그래밍 언어에서는 일반함수와 클로저함수의 명확한 구분을 하는 경우가 많다.

클로저는 둘러 싸여진 상태의 참조와 함께 다발로 묶여진 함수의 콤비네이션이다.

클로저는 내부 함수로부터 외부함수에의 접근권한을 준다.

클로저는 함수생성시점에 언제나 생긴다.
