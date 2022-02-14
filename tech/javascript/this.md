# **this**

> 누가 나를 불렀느냐

<br/>

## **1. 단독으로 쓴 this**

- global object를 뜻함
- Browser에서 호출하는 경우 [object Window]
- ES5에서 추가된 strict mode에서도 마찬가지

```
> this
▶️ Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, ...}

```

```
`use strict`;

var x = this;
console.log(x); // Window

```

<br/>

## **2. 함수 안에서 쓴 this**

- 함수의 주인(Window)에게 바인딩

```
function myFunction() {
    return this;
}
console.log(myFunction()); // Window

```

```
var num = 0;
function addNum() {
    this.num = 100;
    num++;

    console.log(num); // 101
    console.log(window.num); // 101
    console.log(num === window.num); // true
}

addNum();

```

- strict mode에서는 함수내 default 바인딩이 없기 때문에 undefined가 됨
- this.num 호출 시 undefined.num이 되어 에러

```
`use strict`

function myFunction(){
    return this;
}
console.log(myFunction()); // undefined

```

```
`use strict`
var num = 0;
function addNum() {
    this.num = 100; // ERROR! Cannot set property 'num' of undefined
    num++;
}

addNum();

```

<!-- 추가정보 미완료 -->

<!-- > 더 알아보기 -->

<!-- > 기술 더 알아보기 -->

<!-- > 개발용어 더 알아보기 -->

> 참고자료

[nana_log님 블로그](https://nykim.work/71)
