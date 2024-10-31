import React from "react";

import Container from "../../common/container";
import FlexBox from "../../common/flex-box";
import Grid from "../../common/grid";
import Button from "../../common/button";
import P from "../../common/p";
import Plan from "../plan";
import Service from "../service";

function UpgradeSection() {
  const styling = {
    container: `
     background:#34376A;
     *{
       color:white;
     }
    `,
    header: `
     font-size: 16px;
     font-weight: bold;
     line-height: 1.56;
     text-align:center;
     margin-top:60px;
    `,
    grid: `
    gap:10px;
    width:70%;
    margin-top:55px;
    `,
    flexBox: `
     width:85%;
     margin:auto;
     margin-top:25px;
    `,
    button:`
    background-color: #e87469;
    margin-right: -14px;
    margin-bottom:68px;
    `

  };
  const text = {
    header: `Upgrae today to our basic plan and start reaching your audience\neasily, quickly and more efficiently`,
    services: [
      "Custom ad creation",
      "Advanced audience settings",
      "1 Retargeting campaign",
      "1 acquisition campaign",
      "Advertise to a similar audience",
      "Full customer support",
      "Analytcis integration",
    ],
    button:`Upgrade now`
  };
  return (
    <Container myStyle={styling.container}>
      <P text={text.header} myStyle={styling.header} />
      <FlexBox myStyle={styling.flexBox} >
        <Grid myStyle={styling.grid}>
          {text.services.map((text) => (
            <Service key={text} text={text} />
          ))}
        </Grid>
        <Plan />
      </FlexBox>
      <FlexBox myStyle={`${styling.flexBox} justify-content: flex-end;`}>
        <Button myStyle={styling.button} text={text.button}/>
      </FlexBox>
    </Container>
  );
}

export default UpgradeSection;
