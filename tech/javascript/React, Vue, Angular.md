# **React, Vue, Angular**

> Frontend에서 View를 만드는 목적으로 만들어진 Javascript 도구

<br/>

## **React**

- Library이며 Facebook 개발자 Jordan Walke가 처음 만듬, Facebook에서 지원하며 공통체의 의해 유지보수 된다.
- JSX문법 사용
- Virtual DOM 지원
- Next.js로 SSR ( Server Side Rendering )이 가능
- React Native를 통해 앱개발 가능

---

Library이지만 Component를 사용한다면, Framework처럼 규칙을 지켜야 합니다.

장점은 Virtual DOM입니다. DOM tree를 추상화하여 Javascript객체로 만들어 두고 변경되는 부분은 Virtual DOM에서 처리하여 성능을 높혔습니다.

SPA ( Single Page Application ) 방식으로 진행한다면, 검색엔진 노출을 위해 SEO ( Search Engine Optimization )에 관련된 문제를 생각할 수 밖에 없습니다. 이를 위해 SSR을 염두해야 하는데 Next.js를 사용하여 이 부분을 해결할 수 있습니다.

UI ( User Interface )구성하는 개별적인 View 단위인 Component 단위로 작성하여 생산성과 유지보수에 도움이 됩니다.

JSX를 사용하여 Component를 생성할 수 있습니다.

React Native를 이용해서 APP 개발까지 가능합니다.

---

<br/>
<br/>

## **Vue**

- OSS ( Open Source Software ) Javascript Framework이며, Google의 전 개발자 Evan You가 만들었다. 그를 주축으로 유지보수 된다.
- Virtual DOM 지원
- Nuxt.js로 SSR이 가능
- 양방향과 단방향 Binding 지원
- TypeScript 지원
- NativeSrcipt
- Single File Component
- 낮은 Learning curve (학습 및 적응이 빠름)

---

React의 장점인 Virtual DOM과 Angular의 양방향 Binding을 가져왔다는 점에서 볼 때 앞으로도 발전을 기대해 볼 만한 프레임워크라고 생각합니다.

Javascript의 기본 스타일을 적극적으로 적용하고 있어서 학습하고 적응하기 쉽습니다.

Single File Componet는 .vue 파일에 HTML과 CSS 그리고 Script까지 하나로 묶어서 Component단위로 직관적인 구성이 가능합니다.

---

<br/>
<br/>

## **Angular**

- 타입스크립트 기반 오픈소스 프레임워크이며 구글 앵귤러팀이 만들고, 구글에서 지원하며 공동체에 의해 유지보수 중에 있다.
- 양방향 바인딩 지원
- TypeScript 기반
- RxJs ( Reactive Extensions For JavaScript ) : 스트림을 통한 비동기 처리 방식 지원
- 가장 체계적이고 잘 정리되어있는 문서와 튜토리얼
- 큰 러닝커브 (배울 것이 많고 어렵다)

---

라우팅, 상태관리, 폼 유효성 등 필요한 도구를 모아놓은 All In One Framework인 것이 큰 장점입니다. 그렇기 때문인지 React와 Vue.js와 비교했을 때 가장 배울 것이 많고 어려운 편입니다.

가볍고 빠르게 작업을 해야하는 프로젝트 보다는 큰 프로젝트에 사용하기 적합합니다.

TypeScript를 기반으로 하기 때문에 엄격하지만 그만큼 직관적이고 오류를 줄일 수 있을거라 생각합니다.

웹사이트가 빠르고 효율적으로 렌더링 되게 설계되어 있습니다.

MPA ( Multi Page Application )를 구성하기에는 복잡하고, SPA에서는 매우 빠르게 작동합니다.

애초에 구글이 SPA를 위해 만든 것이라고 한다.

---

<br/>
<br/>

> 기술 더 알아보기

[Library]() |

<!-- [Framework]() |
[Virtual DOM]() |
[SSR, Server Side Rendering]() |
[CSR, Client Side Rendering]() |
[SPA, Single Page Application]() |
[MPA, Multi Page Application]() |
[JSX, Javascript XML]() |
[Next.js]() |
[Nuxt.js]() |
[Component]() |
[TypeScript]() |
[React Native]() |
[SEO, Search Engine Optimization]() | -->
