# GraphQL을 위한 PostgreSQL

# Database, 데이터베이스

- 데이터베이스는 컴퓨터 시스템에서 전자적으로 저장되고 엑세스되는 정리된 데티어 컬렉션이다.
- 웹은 기본적으로 여러명이 데이터에 접근하고, 변경하는게 목적
- 본격적으로 백엔드, 난이도 급상승
- 데이터베이스를 쓰지않고도 웹앱을 만들 수 있다.
- 컴공 기준 프로젝트를 했다면 데이터베이스는 기본

# PostgreSQL, 포스트그래스큐엘

- psql 또는 postgres라고도 함
- 북미 2위 데이터 베이스 (1위는 오라클)
- SQL을 사용하는 관계형 데이터 베이스 (RDBMS)
- 무료

# SQL, Structured Query Language

- 구조화된 정보를 처리하도록 고안된 컴퓨터 언어
- RDBMS에 쓰임
- Excel vs RDBMS

|              | Excel    | RDBMS           |
| ------------ | -------- | --------------- |
| 용량         | 65,000행 | 100억 가능      |
| 속도         | 느림     | 빠름            |
| CLI로 자동화 | 어려움   | SQL로 쉽게 구현 |

# ORACLE, 오라클

- 점유율 세계 1위
- 기업에선 유료 버전 사용
- 사용이유
  1. 고급기능과 기술지원
  2. 인력수급이 쉬움
  3. 래퍼런스가 많아 오류수정 용이
  4. 이중화로 인한 데이터 안정성

# DB수업 진행 방식

- SQL의 꽃, JOIN이 없다.
- WSL, .리눅스로 진행한다.
- TablePlus 라는 쉬운 툴을 사용한다.
- DB의 꽃 ERD를 만들어 볼것이다.

# ⭐윈도우에 리눅스를 깔것이다

파일확장명과 숨긴항목이 뜨게 하자.

### 윈도우즈 업데이트

- 재부팅 후 여러번 확인
- 선택 업데이트도 모두 할 것.

### 숨김파일 및 확장자 표시

### 윈도우즈 터미널 (화면고정, 바탕화면)

chocolatey

vscode

wsl2수동설치

vscode키고 wsl extention

code 명령어로 vscode-server 설치

미러 harukasan으로 바꿔주기

기본 순서 파워셀 말고 우분투로

sudo apt update

sudo apt install zsh

oh my zsh

기본 셀 변경

실패시 수동변경

구글링 install nodejs ubuntu

its 버전이란?

nodejs 설치

sudo npm install -g npm

sudo apt upgrade

### ubuntu 아이디 패스워드

kongom2/kongom2

cd /

cd mnt

ls -al ⇒ 우분투 확인

cd ~

pwd ⇒ 현재 디렉토리

change user password ubuntu

디비는 프론트에서 가져올 때 의미가 있다.

[https://tableplus.com/](https://tableplus.com/)

# 프로그래밍의 본질

### Group

서로 연관되는 것들의 집합

객체, 프로그램, 함수, 데이터, 테이블

RDB Modeling을 할 예정

Run / Debug

### \l ⇒ DB 리스트 출력

CREATE DATABASE test 테스트라는 디비생성

### \c test ⇒ test에 연결

CREATE DATABASE person (person 이라는 table 생성)

### \d ⇒ 연결된 DB의 전체 테이블 확인

### \d person ⇒ 연결된 DB 중 person의 컬럼 확인

🌟반드시 맨 마지막에 세미콜론을 붙여줘야 함.

# Postgres 주요 데이터 타입 6가지

postgresql data type

```sql
CREATE TABLE person (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    gender TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    email TEXT,
    create_at TIMESTAMPTZ DEFAULT now()
);
```

- INT : 정수
- SERIAL : 시퀀스 숫자
- TEXT : 문자영
- BOOL : true or false
- DATE : 날짜
- TIMESTAMPTZ : 타임존이 포함된 날짜 및 시간

⇒ 만약 현재 시간이 필요하면 now()

sudo service postgresql start

sudo -u postgres psql

# READ : SELECT

### 테이블의 모든 내용 보기

SELECT _ FROM person; ⇒ _ 는 모든 컬럼 의미

### 열 제한

SELECT id, name, gender FROM person;

### 행 제한

SELECT \* person WHERE id > 1;

SELECT \* person WHERE id ≥ 1;

SELECT \* person WHERE id ≥ 1;

### 정렬

SELECT \* FROM person ORDER BY create_at; ⇒ ASC가 디폴트, 반대는 DESC

# UPDATE

반드시 WHERE를 같이 써야 한다.

```sql
UPDATE person
    SET
        name = "kongom2coding",
        gender = "men"
    WHERE
        id = 1;
```

# DELETE, DROP

DB에선 항상 삭제하기전에, 다시 한 번 확인하는 습관을 가져야 함.

# RDB, Relational Database 관계형 데이터베이스

테이블간의 관계로 이루어져 있다.

PostgerSQL, SQLite, MySQL, MariaDB, Oracle, MSSQL

MongoDB, Cassandra는 관계형이 아님 NoSQL

### 테이블을 여러개 사용하는 이유

1. 중복 발생
2. Null 발생

### key 가 두개로 구성되어 있다.

PK, Primary key 주키

FK, Foreign key 외래키

➡️ 이 두개로 다른 테이블과 관계를 형성한다.

### ⭐ RDB Modeling 이란?

현실의 문제를 표로 추상화 시키는 과정

### Modeling 절차

1. UI 작성을 통한 업무 파악
2. Entity Relational Diagram (ERD) 설계 ⭐
3. ERD를 Table로 변환

### UI 작성을 통한 업무파악

생각을 문서화 하고, 그려보고, 가상으로 작동시켜보자!

### ERD, Entity Relational Diagram 이알디

Entity와 Entity 사이의 관계를 그림으로 나타낸 것!

### Entity 개체

하나의 주제, 그룹

나중에 table 이름이 됨 (ex. 글테이블, 유저테이블, 댓글테이블)

### Attribute (field) 속성

Entity의 하위 항목들이며, 실제 데이터

나중에 Column이 됨

### LucidChart, ERD 설계 툴

[Lucid Chart 홈페이지](https://www.lucidchart.com/pages/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_ol_allcountries_mixed_search_brand_exact_&km_CPC_CampaignId=12085501855&km_CPC_AdGroupID=117687297058&km_CPC_Keyword=lucidchart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=491660231431&km_CPC_TargetID=kwd-33511936169&km_CPC_Country=1009879&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KHs8eHrilsN_seyCYhz52rj3nbck1lFv7tMOWhsNN21lKnIwwKsZY8aAnsSEALw_wcB)

### Foreign Key를 어디에 둘까?

+——<, one to many ➡️ 많은 쪽 (ex. 휴면 설정)

+——+, one to one ➡️ 의존성을 따져야 함. 누가 몸통일지

\>-ㅁ-<, many to many ➡️ 브릿지, 매핑 테이블을 만들어야 함 (ex. 상품 주문)

![ERD설계](https://i.ibb.co/kqXPWhL/ERD.png)

Entity, 개체
