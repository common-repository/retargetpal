import React from "react";
import Container from "../../common/container";
import FlexBox from "../../common/flex-box";
import HeaderSection from "../sections/header.section";
import HowWorksSection from "../sections/how_works.section";
import OurFeaturesSection from "../sections/our_features.section";
import TargetSection from "../sections/target.section";
import UpgradeSection from "../sections/upgrade.section";

function NewUserPage() {
    const containerStyle=`
    width:720px;
    margin:auto;
    margin-top:10%;
    background-color: white;
    margin-bottom:95px;
    `
  return (
    <Container myStyle={containerStyle}>
      <FlexBox flexDirection='column'>
        <HeaderSection />
        <TargetSection />
        <HowWorksSection />
        <OurFeaturesSection />
        <UpgradeSection />
      </FlexBox>
    </Container>
  );
}

export default NewUserPage;
