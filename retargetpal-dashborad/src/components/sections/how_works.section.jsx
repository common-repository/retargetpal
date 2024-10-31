import React from "react";
import Container from "../../common/container";
import FlexBox from "../../common/flex-box";
import P from "../../common/p";
import Img from "../../common/Img";
import { IMAGES } from "../../helpers/constants";
import PicAndText from "../pic_and_text";

function HowWorksSection() {

  const styling = {
    header: `
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: #34376a;
        margin-top:100px;
        margin-bottom:50px;
        `,
    flexBox: `
        justify-content: center;
        `,
    arrows:`
     width:50px;
     padding-bottom:60px;
    `,
  };

  const text = {
    header: `How RetargetPal works`,
    firstPicHeader: `Users are visiting and\nleaving your website`,
    firstPicComment: `Most of your visitors are leaving your\nwebsite without buying `,
    secondPicHeader: `RetargetPal targets\nthem online`,
    secondPicComment: `RetargetPal simply targets them\nusing ads, while visitng different\nwebsites`,
    thirdPicHeader: `Retargeted visitors are\nbuying your product`,
    thirdPicComment: `Your returning visitors are more likely to\nshow interest in your products and buy\nfrom you`,
  };
  return (
    <Container>
      <P text={text.header} myStyle={styling.header} />
      <FlexBox myStyle={styling.flexBox}>
        <PicAndText
          header={text.firstPicHeader}
          comment={text.firstPicComment}
          picNumber="1"
          picture={IMAGES.speaker}
        />
        <Img src={IMAGES.arrow} myStyle={`${styling.arrows}margin-right:10px;`}/>
        <PicAndText
          header={text.secondPicHeader}
          comment={text.secondPicComment}
          picNumber="2"
          picture={IMAGES.ad}
        />
        <Img src={IMAGES.twoArrows} myStyle={`${styling.arrows}margin-left:15px;`}/>
        <PicAndText
          header={text.thirdPicHeader}
          comment={text.thirdPicComment}
          picNumber="3"
          picture={IMAGES.magnet}
        />
      </FlexBox>
    </Container>
  );
}

export default HowWorksSection;
