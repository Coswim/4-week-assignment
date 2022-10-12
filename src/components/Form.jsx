import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/modules/AddTodo";
import { type } from "@testing-library/user-event/dist/type";

const TodoBox = styled.div`
  background-color: black;
  color: white;

  border-radius: 10px;

  width: 800px;

  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px auto;
`;
const TodoBoxInput = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;

  padding: 10px;
`;

const TodoBoxInputSpan = styled.span`
  font-size: 20px;
  font-weight: 600;

  margin: 5px 0;
`;

const TodoBoxInput1 = styled.input`
  height: 50px;
  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
`;

const TodoBoxInput2 = styled.input`
  height: 100%;
  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
`;

const ButtonArea = styled.div`
  height: 200px;

  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: pink;
  top: 15px;
  height: 170px;

  border-radius: 10px;

  cursor: pointer;
`;
const Form = () => {
  //렌더링 되기 이전에 Ref.current.value 값을 참조 할 수 없음.
  let titleRef = useRef();
  let descRef = useRef();

  const dispatch = useDispatch();
  const addTodo = () => {
    const todos = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      isDone: false,
    };
    dispatch(addTodoAction(todos));

    titleRef.current.value = "";
    descRef.current.value = "";
  };

  return (
    <TodoBox>
      <TodoBoxInput>
        <TodoBoxInputSpan>title</TodoBoxInputSpan>
        <TodoBoxInput1 ref={titleRef} />
        <TodoBoxInputSpan>contents</TodoBoxInputSpan>
        <TodoBoxInput2 ref={descRef} />
      </TodoBoxInput>

      <ButtonArea>
        <Button onClick={addTodo}>SAVE</Button>
      </ButtonArea>
    </TodoBox>
  );
};

export default Form;
