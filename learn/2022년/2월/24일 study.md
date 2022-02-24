# Authentication Check

### 아무나 진입 가능한 페이지

Landing Page, About Page

### 로그인한 회원만 진입 가능한 페이지

Detail Page

### 로그인 한 회원은 진입 못하는 페이지

Register Page, Login Page

### 관리자만 진입 가능한 페이지

Admin Page

### 이렇게 인증이 이뤄져야만 들어갈 수 있는 페이지가 있다.

### 또 인증이 필요한 것들이 있을까?

### 댓글 작성, 파일 전송, 파일 업로드 등등

### 이러한 인증들은 어떻게 할 수 있을까?

### 1. 들어갈 수 있는 페이지들에 대한 통제는 ⇒ HOC

### 2. 파일 전송, 댓글 작성 같은 것은

### Auth(HOC) ⇒ Request ⇒ Backend ⇒ 상태파악 ⇒ Auth(HOC)
