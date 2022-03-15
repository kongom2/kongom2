# 생성자와 new

[생활코딩](https://www.youtube.com/watch?v=qnOX3M7VpQ8)

프로토타입 기반 프로그래밍

자바스크립트의 객체는 헷갈릴 수 있음

변수와 메서드를 객체라는 곳에 넣는다.

연관되어있는 것을 그룹핑

문법적인 체계 ⇒ 객체

하나하나가 독립된 프로그램처럼

좋은 부품의 로직을 만드는 것이다.

# 객체

### 상황에 따라 다르지만 개념은 같다.

객체 내의 변수는 ⇒ 프로퍼티

객체 내의 함수는 ⇒ 메서드

메서드 내의 this는 자기가 포함되어 있는 객체를 가리킨다.

객체와 프로퍼티, 메서드를 분리하여 작성한다면 ⇒ 다른 코드의 개입이나 가독성이 안좋아질 수 있음

객체를 시작하고 닫는 기호 {} 사이에 프로퍼티와 메서드를 직접 넣는 다면 그 안에 응집되어 있어서 가독성도 좋고 중간에 무언가 끼어들어 내용이 변조되는 일도 없게 된다.

```jsx
const person = {};
person.name = "kongom2";
person.introduce = function () {
  return `My name is ${this.name}`;
};
document.write(person.introduce());
```

```jsx
const person = {
	'name' : 'kongom2'
	'introduce' : function() {
			return `My name is ${this.name}`
	}
}
document.write(person.introduce())
```

# 중복을 제거하기 위한 스킬 ⇒ 생성자, new

자바스크립트를 이해하는데 가장 중요한 키워드 ⇒ 객체 이전에 함수 ⇒ 함수에 대한 이해가 흔들리면 객체 또한 흔들린다.

함수는 자바스크립트의 일꾼이다.

### 생성자, constructor

객체를 만드는 역할을 하는 함수

자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라

### ⭐ 객체를 만드는 창조자라고 할 수 있다.

```jsx
function Person() {} // 이 함수는 어떤 값도 리턴하고 있지 않다.
const p0 = Person();
p0; // undefined
const p = new Person(); // new를 붙힌 맥락에서의 함수는 함수가 아닌, {객체}생성자가 된다.
p; // Person {}
```

### 생성자는 객체에 대한 초기화를 한다.

```jsx
function Person(name) {
	this.name = name;
	this.introduce = function() {
		return `My name is ${this.name}`
	}
}

const p1 = new Person('kongom1');
document.write(p1.introduce()+'<br/>';

const p2 = new Person('kongom2');
document.write(p2.introduce();
```
