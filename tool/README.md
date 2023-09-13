# **Design**

[패턴 저장소, Toptal](./design/Toptal.md)
- 잘 안쓰는 추세 ⇒ vue, react 같은 프론트 기술 덕
- 편리하기는 하다.

### 사용법

### DOMContentLoaded

자바스크립트 코드 위치에 상관없이 출력 가능 

⇒ 이거 안쓰면 body 태그 안에 script 에만 작성해야 함

### 자바스크립트

```java
document.addEventListener('DOMContentLoaded', function (e){}
```

### 제이쿼리

```java
$(document).ready(function(){}
```

문서가 로드되는 시점에 화면에 그려지게 하는 작업

### 브라우저 로드 과정을 알아야 겠다.

API
Add rows
Individual column searching (text inputs)
Individual column searching (select inputs)
Highlighting rows and columns
Child rows (show extra / detailed information)
Child rows with StateSave
Row selection (multiple rows)
Row selection and deletion (single row)
Form inputs
Index column
Show / hide columns dynamically
Using API in callbacks
Scrolling and Bootstrap tabs
Search API (regular expressions)
HighCharts Integration
