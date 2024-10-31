import styled from "styled-components";
import React from "react";

const P = ({ text, myStyle }) => <Pcompo myStyle={myStyle}>{text}</Pcompo>;

const Pcompo = styled.p`
  ${({ myStyle }) => myStyle}
`;
export default P;
