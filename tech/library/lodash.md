# **Lodash**

> ⭐ 객체와 배열을 조작하고 검사하는 utility library

[공식문서](https://lodash.com/docs/4.17.15)

### **설치**

```
npm install lodash --save
```

### **불러오기**

```jsx
import _ from "lodash";
```

➡️ import 할 때, {}로 감싸지 않을 경우, 통상적으로 _ 를 사용, _ 이외에 이름으로 지정해도 동작은 됨.

<br/>
<br/>
<br/>

### **자주 사용하는 Method**

\_.uniqBy

- 배열 테이터 안에서 중복되는 값들을 제거한 후 리턴
- 배열 데이터가 하나일 때 사용

\_.chunk(배열, [size=1])
