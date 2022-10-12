import React from "react";
import CardList from "../components/CardList";
import Form from "../components/Form";
import Header from "../components/Header";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;

  margin: 0 auto;
`;

const Home = () => {
  return (
    <Wrap>
      <Header />
      <Form />
      <CardList />
    </Wrap>
  );
};

export default Home;
