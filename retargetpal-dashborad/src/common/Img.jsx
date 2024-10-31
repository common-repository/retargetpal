import React from "react";
import styled from 'styled-components'

const Img = ({ alt,src, myStyle}) => (
  <Imgcompo  src={src} myStyle={myStyle} alt={alt}/>
);

const Imgcompo = styled.img`
${({ myStyle }) => myStyle}
`
export default Img;
