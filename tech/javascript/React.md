# React

리액트의 본질 ⇒ 사용자 정의 태그를 만드는 것.

부품을 남들과 공유 할 수 있고 남들의 것을 가져다 사용할 수도 있음

### class vs function 2가지 방식

# 개발환경 셋팅

```jsx
npx create-react-app . // CRA 설치

npm start // 개발환경 시작
```

# 개발 3대 작업

### 설치, 수정, 배포

```jsx
npm run build

npx serve -s build
```

# 컴포넌트 만들기

# props

우리가 만든 컴포넌트도 속성을 가지면 좋겠다~

{ } 사이의 내용은 표현식으로 취급

# Event

# useState의 경쟁자 useReducer

```jsx
import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  function counterReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }
  const [count, countDispatch] = useReducer(counterReducer, 0);
  function down() {
    countDispatch({ type: "DOWN", number: number });
  }
  function up() {
    countDispatch({ type: "UP", number: number });
  }
  function reset() {
    countDispatch({ type: "RESET", number: number });
  }
  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }
  return (
    <div className="App">
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}

export default App;
```
