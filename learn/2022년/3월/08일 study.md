### none0 = ‘none0’; ⇒ 변수 선언 시 아무것도 붙이지 않고 변수이름만 사용하면 그 값은 Global에 저장된다.

### var var0 = ‘var0’; ⇒ var로 변수 선언 시에도 Global에 저장된다.

### let let0 = ‘let0’ ⇒ let으로 변수 선언 시 Script에 저장된다.

### const const0 = ‘const0’ ⇒ const로 변수 선언시에도 Script에 저장된다.

### 자바스크립트는

1. Scope 안에 Script에서 먼저 값을 가져온다.
2. 그곳에 값이 없으면 Global에서 값을 가져온다.

### window === Global, Global을 window 객체에 저장한다.

### Global > Script > Local, Scope 체이닝
