import React from "react";
import styled from "styled-components";

function Grid({ myStyle, children }) {
  return <Gridcompo myStyle={myStyle}>{children}</Gridcompo>;
}
const Gridcompo = styled.div`
  display: grid;
  width: 100%;
  gap:40px 100px;
  grid-template-columns: repeat(2, 1fr);
  ${({ myStyle }) => myStyle}
`;

export default Grid;
