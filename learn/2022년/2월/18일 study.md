```css
.test {
  color: red;
}
```

# font

1. font-size (rem쓰자)
2. color
3. text-align

# box model

최대한 시멘틱 태그를 쓸 것.

div + display:inline = span

고로 span을 쓰자

# position

### static

기본값, 움직임 불가능

### relative

부모 태그로부터 자신의 위치가 결정됨, 원래 자기가 있었던 위치에서 이동

### absolute

부모의 위치가 기준, relative와는 기준이 다름.

부모가 static이면 부모를 무시함.

부모가 static이고 조부모가 static이 아닐경우 조부모가 기준

display는 더이상 block이 아님

### fixed

시조 태그의 위치로부터 이동, 심지어 스크롤도 무시함.

display는 더이상 bloack이 아님

# layout

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

# CSS3, Bootstrap, Material-UI, Tailwind CSS

### npm

컴퓨터에 직접 설치

장점, 설치한 코드들이 변경이 되지 않음

단점, 검증이 안된 패키지를 받는다면? 용량?

### CDN

링크에 접근해서 씀

장점, 컴퓨터 성능에 영향을 미치지 않음

단점, 해당서버가 문제생긴다면? CDN 주소가 바뀐다면? 유지보수 문제

### Deno

CDN과 비슷

리액트에 함부로 쓰면 안됬던 시절이 있었다.

2021년 5월 5일, 버전5로 업데이트 하면서 제이쿼리를 버림
