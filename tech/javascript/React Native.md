# Learn once, write anywhere

한번 작성한 코드로 ios와 안드로이드에 동시에 배포는 사실상 불가능

### 코드 푸쉬 기능이 있는 것은 장점

### 트렌드 상 플러터가 뜨고 있지만 리액트네이티브가 시장을 지배중이다.

# 개발환경

### Expo CLI ⇒ 제로초 님은 비추천 why? 교육용이라고 생각함.

### React Native CLI

### ⭐ chocolatey 설치

```jsx
PS C:\Users\kongo> choco
Chocolatey v0.12.1
```

확인

안깔려 있을 시 ⇒ 순서대로 진행 [https://chocolatey.org/install](https://chocolatey.org/install)

### ⭐ jdk 설치

### ⭐ Android studio 설치

[](https://developer.android.com/studio?gclid=Cj0KCQjw5-WRBhCKARIsAAId9Fmm86g3xbJjFb0O2SW2Z471PQvw1OpiwNxpLEGRkPngFIzqCREp-VsaAgBgEALw_wcB&gclsrc=aw.ds)

- API level 30 추천

```jsx
C:\Users\kongo\AppData\Local\Android\Sdk\platform-tools

adb.exe 확인
```

### 환경변수 설정

윈도우 검색 > 환경변수

```jsx
ANDROID_HOME
C:\Users\kongo\AppData\Local\Android\Sdk
```

Git bash ⇒ 리눅스와 명령어가 같다

which로 위치를 알 수 있다.

```jsx
$ which choco
/c/ProgramData/chocolatey/bin/choco
```

```jsx
$ which javac
/c/Program Files/Java/jdk-13.0.2
```

# 프로젝트 시작

### 시작은 C:\Users\kongo 여기서 하자.

```jsx
npm i -g react-native
```

타입스크립트가 적혀진 리액트네이티브 템플릿으로 시작한다.

```jsx
npx react-native init FoodDeliveryApp --template react-native-template-typescript
ls
cd FoodDeliveryApp
```

# index.js

프로젝트의 시작점

### 아이폰 베이스로 작업 후 안드로이드로 보면 봐줄만함

아이폰 안드로이드 최적화 작업이 필요함

### <Text><View>

텍스트가 포함되어 있으면 반드시 <Text를 사용해야함>

### SafeAreaView

노치 부분 죽은 공간을 채워 줌

최상단에 사용하는 것이 좋다.

### StatusBar

상태바 디자인 가능

### ScrollView ⇒ FlatList

스크롤시 사용, 그러나 컨텐츠 양이 많아질 때 성능 저하 이슈가 있음 그 땐 FlatList 사용

### 하나의 파일에 2개 이상의 컨포넌트 넣는 것

비추

# 메트로 서버

### 새로고침

To reload the app press "r"

### 개발자 메뉴

To open developer menu press "d"

### Flipper

디버깅 툴

```jsx
flipper-plugin-async-storage
```

# 앱이름 변경

android > app > src > main > res > values > strings.xml app.json의 displayName

```jsx
<resources>
    <string name="app_name">FoodDeliveryApp</string>
</resources>
```

ios > FoodDeliveryApp > Info.plist의 CF BundleDisplayName

# 단축키

[https://developer.android.com/studio/intro/keyboard-shortcuts?hl=ko](https://developer.android.com/studio/intro/keyboard-shortcuts?hl=ko)

# 리액트 네이게이션 사용

```jsx
npm i @react-navigation/native @react-navigation/native-stack
```

# 리액트 네이티브 옵션

[https://reactnavigation.org/docs/screen-options/](https://reactnavigation.org/docs/screen-options/)

# Type Script?

매개변수, 리턴값, 변수 에 타입을 붙이는 것