import styled from "styled-components";
import React from "react";

const Button = ({ myStyle, text, onclick }) => {
  const defaultHandleClick = () => {
    const userInfoInBase64 = Buffer.from(
      JSON.stringify(window.userInfoFromWP)
    ).toString("base64");
    window.open(
      `https://www.retargetpal.com/wix-app/${userInfoInBase64}/wordpress`
    );
  };
  return (
    <ButtonCompo
      myStyle={myStyle}
      onClick={() => (onclick ? onclick() : defaultHandleClick())}
    >
      {text || "Create your retarget ad"}
    </ButtonCompo>
  );
};

const ButtonCompo = styled.button`
  width: 190px;
  height: 42px;
  border-radius: 40.8px;
  background-color: #34376a;
  font-size: 14px;
  color: #fff;
  ${({ myStyle }) => myStyle};
`;
export default Button;
