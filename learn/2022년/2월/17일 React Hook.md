# **React Hook**

### Library

요리를 하기 쉽게 미리 만들어 놓은 도구들

➡️ 미리 만들어 놓은 코드

### Framework

요리를 하기 위한 주방, 규칙이 있는 공간

➡️ 미리 만들어 놓은 시스템

### API

가스렌지의 손잡이, 기계를 작동시키는 도구

➡️ 미리 만들어 놓은 중개자

# React

1. 높은 점유율. 신규 프로젝트는 대부분 React
2. 페이스북이 만들고 관리
3. 앱을 컴포넌트 단위로 나누어 개발
4. Hook 2019년
5. Apllo, GraphQl의 라이브러리, 공식 튜토리얼은 리액트로 만듬

# 버전 중요성

### v17.0.2

➡️ 아주 큰 변화, 내가 적용한 것들이 다른 기술이 되었을 가능성 높음

➡️ 새 기능 추가, 업그레이드를 해도 코드는 정상 작동

➡️ 버그수정

# HTML

팀 버너스 리

전세계 과학자들이 쉽게 정보를 공유하고자 만듬

### index.html

- 해당 주소의 첫 페이지 ➡️ localhost:5000
- 만약 파일명을 study.html로 바꾼다면? ➡️ localhost:5000/study.html
- React를 build 하면 딱하나의 html인 index.html만 생성

### 참고사이트

W3Schools, MDN

```jsx
<!DOCTYPE html>// html5 버전이다.
```

# 시멘틱 태그와 <div>

### 시멘틱 태그

개발자의 가독성을 위해 쓰이는 태그

# event 와 event handler

### event

브라우저에서 일어나는 사용자 행동

클릭, 드래그, 스크롤, 타이핑, 화면 사이즈 줄이기 등

상상할 수 있는 모든 동장

### event handler

on 으로 시작하는 함수

이벤트 발생 시 동작할 함수

# .js .ts. .tsx는 import 할 때 확장자를 쓰지 않는다.

```jsx
{
// 프로젝트 설명
  "name": "kongom2reacthook",
  "version": "1.0.0",
  "description": "리액트 훅 배워보자",
  "keywords": [],
  "main": "src/index.tsx",
// 패키지 dependencies
  "dependencies": {
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-scripts": "4.0.3"
  },
  "devDependencies": {
    "@types/react": "17.0.20",
    "@types/react-dom": "17.0.9",
    "typescript": "4.4.2"
  },
// npm 명령어
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

# React에서 중요한 기술

### Component, Hook

- 하나의 컴포넌트는 하나의 역할만 해야한다.
- 컴포넌트는 이름에서 그 역할을 알 수 있어야 한다.

# 컴포넌트 트리를 그린 후 개발 해보자.

![컴포넌트 트리](https://i.ibb.co/4thdQDm/component.png)

- 데이터는 최상단 컴포넌트인 App에서 관리한다.
- props는 부모로부터 받은 객체이므로 인터페이스를 꼭 써줘야 한다.
- 컴포넌트는 동일한 이름을 가졌어도 유일한 존재여야 한다.

# 아래코드 같음

### 전개구문

```jsx
import "./styles.css";
import AppInStudent from "./Student";
import { data } from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {data.students.map((student) => {
        return <AppInStudent key={student.id} {...student} />;
      })}
    </div>
  );
}
```

```jsx
import "./styles.css";
import AppInStudent from "./Student";
import { data } from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {data.students.map((student) => {
        return (
          <AppInStudent
            key={student.id}
            name={student.name}
            age={student.age}
            isComputer={student.isComputer}
          />
        );
      })}
    </div>
  );
}
```

```jsx
import "./styles.css";
import AppInStudent from "./Student";
import { data } from "./data.json";

interface StudentInfo {
  id: number;
  name: string;
  age: number;
  isComputer: boolean;
}

const renderStudent = (student: StudentInfo) => (
  <AppInStudent key={student.id} {...student} />
);

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {data.students.map(renderStudent)}
    </div>
  );
}
```

- 프론트엔드에선 백엔드로부터 받을 데이터를 정확히 알고 있어야 한다.
- 컴포넌트를 반복할 땐 map()을 사용하고 key를 달아준다.

# Hook

### useState()

함수가 끝나도 사라지지 않는 변수

컴포넌트의 데이터 저장소

한국어로 상태라고 함

state는 변한다.

<br/>
<br/>
<br/>

### 개발 단어

attribute, 속성

dependency, 의존성

void, 빈공간
