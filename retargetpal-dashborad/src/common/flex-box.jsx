import styled from "styled-components";
import React from "react";

const FlexBox = ({ flexDirection, myStyle, children }) => (
  <Divcompo flexDirection={flexDirection} myStyle={myStyle}>
    {children}
  </Divcompo>
);

const Divcompo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    ${({ myStyle }) => myStyle};
`;
export default FlexBox;
