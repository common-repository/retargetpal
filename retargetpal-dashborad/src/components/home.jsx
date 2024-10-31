import React, { useState, useEffect } from "react";

import Button from "../common/button";
import Container from "../common/container";
import Title from "../common/title";
import { ADTECH_FRONT_DEV } from "../constans/constans";
import myAxios from "../helpers/my-axios";
import Info from "./info";
import NewUserPage from "./pages/new-user-page";

export default function Home() {
  const [isSignedUser, setIsSignedUser] = useState(false);
  useEffect(() => {
    myAxios
      .post("/api/v1/plugin/isSigned", {
        userHash: window.userInfoFromWP?.pass,
      })
      .then(({ data }) => setIsSignedUser(data))
      .catch((e) => console.log(e.message));
  }, []);

  const handleClick = () => {
    const userInfoJsonBase64 = Buffer.from(
      JSON.stringify(window.userInfoFromWP)
    ).toString("base64");
    window.open(`${ADTECH_FRONT_DEV}/wix-app/${userInfoJsonBase64}/wordpress`);
  };

  return (
    <Container>
      {isSignedUser ? (
        <>
          {/* <Title text="welcome BACK  to retagetPal" />
          <Info />
          <Button onClick={handleClick}>
            click here for RESUME of our service
          </Button> */}
          <NewUserPage />
        </>
      ) : (
        <NewUserPage />
      )}
    </Container>
  );
}
