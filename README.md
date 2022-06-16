# 리액트 기초

### 리액트 기초배우기

## 리액트 설치

npx create-react-app 프로젝트명

## 리액트 실행

npm run start

## 리액트 포트 변경

PORT=3001 npm run start

## 불변성 유지

- map
  =>배열안의 요소를 새로운 배열로 만들어줌
  =>map( 변수 => 새로 만들 배열 )

- key
  =>key는 React가 어떤 항목을 변경,추가 또는 삭제할지 식별하는 것을 돕는다

## 패키지 설치

npm install --save 패키지명

## 패키지 삭제

npm uninstall 패키지명

## node_modules 복구

npm i(install)

- 리액트 스타일
  =>jsx문법에서 class는 className을 사용해야됨
  =>태그 내부에서도 사용할수 있지만 외부로 사용가능
  단 반드시 스타일을 사용하는 컨포넌트에 import 시킬것
  =>import "./styles/styles.css";

- styled-components
  =>태그 이름을 지정하지 않아도 되는 장점이있음
  =>프롭스로 값을 전달 받을수 있음
  =>npm install --save styled-components
  =>
  --save옵션은 패키지 제이슨에 dependency항목에 추가하는건데 생략 가능함
  =>기본 스타일은 scss와 비슷함

## 설치

- [x] npm i styled-components
      =>스타일 컴포넌트 사용

- [x] npm i styled-reset
      =>리셋 스타일 사용
