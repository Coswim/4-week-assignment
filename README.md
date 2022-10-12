
## 📌컴포넌트 구성
* components
  * Header
  * Form
  * CardList
* pages
  * Home
  * Read
  
## 📌컴포넌트 구성에 대한 이유

<img width="1044" alt="스크린샷 2022-10-12 오후 11 59 51" src="https://user-images.githubusercontent.com/96973915/195378011-5f8afa3f-24cb-4190-8b4e-185fe6a6a06e.png">

- dispatch, useSelector 훅을 사용할 위치를 생각해 화면&기능단위로 분할
- 사진상에 추가하지 못했지만 Router 컴포넌트는 App 컴포넌트에 import 되어있음
- 최상단 App 컴포넌트를 통해 Router 컴포넌트를 거쳐 url을 가지게 된 home과 Read 컴포넌트 페이지를 확인할 수 있다. home 컴포넌트에는 화면 구성단위의 컴포넌트 Header, Form, CardList를 확인할 수 있다.





