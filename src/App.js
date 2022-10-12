//설정들
// import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodoAction, deleteTodoAction } from "./redux/modules/AddTodo";
import styled from "styled-components";

//스타일 컴포넌트 이전에 만들어둔 css 파일
// import "./App.css";

//component
import Router from "./shared/Router";

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
`;

function App() {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
}

export default App;
