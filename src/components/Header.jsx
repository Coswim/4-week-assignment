import React from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 3rem;

  margin: 40px auto;
`;

const Header = () => {
  return <Title>My Todo List 📔</Title>;
};

export default Header;
