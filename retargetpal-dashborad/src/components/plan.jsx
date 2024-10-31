import React from "react";

import FlexBox from "../common/flex-box";
import P from "../common/p";
import Container from "../common/container";

export default function Plan() {
  const styling = {
    header: `
          font-size: 20px;
          font-weight: bold;
            `,
    comment: `
          font-size: 12px;
          line-height: 1.17;
          margin-top:15px;
            `,
    price: `
        font-size: 40px;
        font-weight: bold;
            `,
    coin: `
        font-size: 18px;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
            `,
    month: `
        font-size: 18px;
            `,
    insteadOf: `
        font-size: 14px;
        font-weight: 600;
            `,
    dollar: `
          font-size: 28px;
          font-weight: bold;
            `,
    subContainer: `
        margin-top:15px;
         *{
            display:inline;
         }`,
  };
  const text = {
    header: `Basic`,
    comment: `Retarget your website visitors`,
    price: `45`,
    coin: `USD`,
    insteadOf: `Instead of `,
    insteadOfPrice: `$50.00`,
    button: `Upgrade now`,
    dollar: `$`,
    month: `/month`,
  };
  return (
    <FlexBox flexDirection="column">
      <Container>
        <P myStyle={styling.header} text={text.header} />
        <P myStyle={styling.comment} text={text.comment} />
      </Container>
      <Container myStyle={styling.subContainer}>
        <P myStyle={styling.dollar} text={text.dollar} />
        <P myStyle={styling.price} text={text.price} />
        <P myStyle={styling.coin} text={text.coin} />
        <P myStyle={styling.month} text={text.month} />
      </Container>
      <Container myStyle={styling.subContainer}>
        <P myStyle={styling.insteadOf} text={text.insteadOf} />
        <P
          myStyle={`${styling.insteadOf}text-decoration: line-through;`}
          text={text.insteadOfPrice}
        />
      </Container>
    </FlexBox>
  );
}
