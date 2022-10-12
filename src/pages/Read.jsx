import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BoxSt = styled.div`
  width: 100%;
  height: 700px;
`;

const CardSt = styled.div`
  width: 400px;
  height: 400px;

  border: 2px solid gray;
  border-radius: 20px;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContents = styled.div`
  font-size: 30px;
  margin: 50px;
`;

const Read = () => {
  const {
    state: { item },
  } = useLocation();
  console.log(item);
  return (
    <BoxSt>
      <CardSt>
        <Link to="/">돌아가기</Link>
        <span>id : {item.id}</span>
        <CardContents>{item.title}</CardContents>
        <div>{item.desc}</div>
      </CardSt>
    </BoxSt>
  );
};

export default Read;
