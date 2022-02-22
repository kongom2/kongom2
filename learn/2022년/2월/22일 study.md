#

### auth route 만들기

### Why? & What?

1. 페이지 이동 때마다 로그인되었는지 안되어 있는지, 관리자 유저인지등을 체크
2. 글을 쓸 때나 지울 때 권한이 있는지 체크

### How?

- Server에서는 Token을 DB에 넣어 둠
- Client에서는 Token을 Cookie에 넣어 둠

위 두가지 Token이 맞는지 계속 체크

Incode(암호화)와 Decode(복호화)

1. Cookie에서 저장된 Token을 Server에서 가져와서 복호화 한다.
2. 복호화 하면 User ID가 나오는데 그 User ID를 이용해서 데이터 베이스 User Collection에서 유저를 찾은 후 Cookie에서 받아온 Token이 유저도 갖고 있는지 확인

### 일치하지 않는다면? ⇒ Authentication False

### 일치 한다면? ⇒ Authentication True!! ⇒ 그 해당 하는 유저의 정보들을 선별해서 (아이디, 이미지 등등)

# 로그아웃 기능 만들기

### 로그아웃 Route 만들기

### 로그아웃 하려는 유저를 데이터베이스에서 찾아서

### 그 유저의 토큰을 지워 준다.
