import React from "react";
import styled from "styled-components";
import Container from "../common/container";
import { IMAGES } from "../helpers/constants";

function Logo() {
  const containerStyle = `
    position:absolute;
    top:-56px;
    left:0;
    background:inherited;
    display:flex;
    justify-content:center;
    align-items:center;
    `;
  return (
    <Container myStyle={containerStyle}>
      <Img src={IMAGES.logo} />
    </Container>
  );
}

const Img = styled.img`
  width: 110px;
  height:110px;
  border-radius: 50%;
`;
export default Logo;
