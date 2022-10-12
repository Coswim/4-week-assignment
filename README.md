
## 컴포넌트 구성
* components
  * Header
  * Form
  * CardList
* pages
  * Home
  * Read
  
## 컴포넌트 구성에 대한 이유

<img width="1044" alt="스크린샷 2022-10-12 오후 11 59 51" src="https://user-images.githubusercontent.com/96973915/195378011-5f8afa3f-24cb-4190-8b4e-185fe6a6a06e.png">


리덕스를 사용하게 된다면, dispatch를 어디서 써야하는지, 어느 컴포넌트로 전역변수를 불러와 사용할 것인지 생각해 보았다.

헤더와 폼을 따로 분리해주고 Form 컴포넌트 에서는 addtodo state에 값을 넣어주는 기능단위기 때문에 actionCreator, dispatch를 한번에 사용할 컴포넌트들로 쪼갰다.

아직 작성중





