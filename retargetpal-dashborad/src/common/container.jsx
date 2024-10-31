import styled from "styled-components";
import React from "react";

const Container = ({ myStyle,children }) => <Divcompo myStyle={myStyle}>{children}</Divcompo>;

const Divcompo = styled.div`
width:100%;
  ${({ myStyle }) => myStyle}
`;
export default Container;
