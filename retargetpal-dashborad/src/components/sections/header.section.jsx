import React from "react";
import Container from "../../common/container";
import P from "../../common/p";
import { IMAGES } from "../../helpers/constants";
import Logo from "../Logo";

function HeaderSection() {
  const styling = {
    container: `
        height: 328px;
        background-image:url(${IMAGES.blueWave});
        background-size: 100% 100% ;
        background-repeat: no-repeat;
        position:relative;
        background-size: cover;
        `,
    title: `
       padding: 90px 0 0;
       font-size: 26px;
       font-weight: bold;
       color: #fff;
       text-align: center;`,
    comment: `
       font-size: 18px;
       color: #fff;
       padding-top:25px;
       text-align: center;`,
  };

  const text = {
    title: `Get Your Visitors Back to\nYour Website, It’s Easy`,
    comment: `Advertise your website for as \n low as $45, all inclusive`,
  };

  return (
    <Container myStyle={styling.container}>
      <Logo />
      <P text={text.title} myStyle={styling.title} />
      <P text={text.comment} myStyle={styling.comment} />
    </Container>
  );
}

export default HeaderSection;
