import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <p>Website Designed by <StyledLink href="https://www.willnahmens.com/">Will Nahmens Web Development</StyledLink></p>
        <p>&copy; {new Date().getFullYear()} Lorenzo Bernardez</p>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #32373e;
  clear: both;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;   
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
