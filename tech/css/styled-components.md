# **styled-components**

> 스타일드 컴포넌트는 자바스크립트 파일 안에서 CSS를 작성 가능한 CSS in JS 기술입니다.

styled-components는 React를 주요 대상으로한 라이브러리입니다.
기존 CSS의 스타일링은 컴포넌트의 양이 방대해질수록, CSS파일 또한 부피가 커지고, 엄청나게 복잡해지기 시작합니다.

styled-component는 부모자식간에 얽매이는 형식이 아니라 자유로운 CSS를 만들수있어 클래스명을 고민할 필요가 없고, 프로젝트에서 쉽게 재사용할 수 있습니다.

styled-component의 사용은 자유롭게 스타일링을 해줄수 있게 도와주어 자유도의 상징인 React와도 잘 어울린다 생각해 좋다고 생각합니다.

<br/>

## **Install**

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

<br/>

## **❓Styled-components를 사용한 이유가 있나요?**

➡️ 스타일드 컴포넌트는 자바스크립트 파일 안에서 CSS를 작성 가능한 CSS in JS 기술입니다. CSS를 자바스크립트 안에 작성하게 되면서 생기는 장점이 많다고 생각해서 사용했습니다.

➡️ 첫번째로 CSS를 문서레벨이 아닌 컴포넌트 레벨로 추상화 하는 모듈성이 있고, 두번째로 자바스크립트 환경을 최대한 활용하는 이점이 있었습니다. 실제 체감으로 느꼈던 장점은 컴포넌트 단위로 CSS를 관리하다보니 가독성도 좋았고 때문에 코드를 수정할 때 잘 찾을 수 있었습니다.

➡️ 단점 또한 파악했습니다. CSS in CSS 기술들에 비해 느린속도와 별도 라이브러리 설치에 따른 번들크기의 증대 문제가 있지만 프로젝트를 하며 공부하는 단계에서는 영향이 크게 작용하지 않을 거라 판단했습니다.

➡️ 저희 프로젝트에 적합성 때문에 CSS in JS 기술을 사용했지만 업무성격에 따라 CSS in CSS 기술도 필요하다고 생각합니다.

<!-- 추가정보 미완료 -->

> 더 알아보기

[공식문서](https://styled-components.com/docs/basics#installation)

<!-- > 기술 더 알아보기 -->

<!-- [React]() | -->
<!-- [CSS]() | -->

<!-- > 개발용어 더 알아보기 -->

> 참고자료

[O-h-y-o님 Github](https://github.com/kongom2/TECH/blob/master/info/styled-components%20vs%20css.md)
