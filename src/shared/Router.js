import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "../pages/Read";
import Home from "../pages/Home";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
        Routes안에 이렇게 작성합니다. 
        Route에는 react-router-dom에서 지원하는 props들이 있습니다.

        paht는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
        element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
		 */}

        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
