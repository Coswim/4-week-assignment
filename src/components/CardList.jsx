import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, doneTodoAction } from "../redux/modules/AddTodo";
import { Link, useNavigate } from "react-router-dom";

const CardWrap = styled.div`
  width: 800px;
  margin: 0 auto;
`;
const CardSection = styled.div`
  width: 800px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  border: 1px solid black;

  width: 335px;
  height: 200px;

  margin: 10px;
  padding: 20px;

  border-radius: 20px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  width: 100%;
  height: 130px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorkingDone = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 3rem;

  margin: 40px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: black;
  border-radius: 5px;
  width: 300px;
  height: 70px;
`;

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;

  width: 70px;
  height: 35px;

  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;

  cursor: pointer;
`;

const CardList = () => {
  const navigate = useNavigate();
  const globalTodo = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const doneTodo = (id) => {
    dispatch(doneTodoAction(id));
  };

  const handleRouting = (item) => {
    navigate("/read", { state: { item } });
  };

  return (
    <CardWrap>
      <WorkingDone>Working</WorkingDone>
      <CardSection>
        {globalTodo.addtodo.map((item) => {
          return (
            <>
              {!item.isDone ? (
                <Card key={item.id}>
                  <Button onClick={() => handleRouting(item)}>상세보기</Button>
                  <Contents>
                    <Title>{item.title}</Title>
                    <div>{item.desc}</div>
                  </Contents>
                  <Buttons>
                    <Button
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    >
                      삭제
                    </Button>
                    <Button
                      onClick={() => {
                        doneTodo(item.id);
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </Button>
                  </Buttons>
                </Card>
              ) : (
                ""
              )}
            </>
          );
        })}
      </CardSection>
      <WorkingDone>Done</WorkingDone>
      <CardSection>
        {globalTodo.addtodo.map((item) => {
          return (
            <>
              {item.isDone ? (
                <Card key={item.id}>
                  <Button onClick={() => handleRouting(item)}>상세보기</Button>
                  <Contents>
                    <Title>{item.title}</Title>
                    <div>{item.desc}</div>
                  </Contents>
                  <Buttons>
                    <Button
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    >
                      삭제
                    </Button>
                    <Button
                      onClick={() => {
                        doneTodo(item.id);
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </Button>
                  </Buttons>
                </Card>
              ) : (
                ""
              )}
            </>
          );
        })}
      </CardSection>
    </CardWrap>
  );
};

export default CardList;
