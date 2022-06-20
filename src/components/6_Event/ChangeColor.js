import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  font-size: 25px;
  color: white;
  background-color: ${(porps) => porps.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUp = styled.div`
  width: 400px;
  height: 400px;
  background-color: black;
  margin: 100px auto;
  display: ${(props) => props.show};
`;

export const ChangeColor = () => {
  const [color, setColor] = useState("gold");
  const [display, setDisplay] = useState("none");
  const handleColor = () => {
    setColor("black");
    setDisplay("flex");
  };
  const handleDisplay = () => {
    setDisplay("none");
  };

  return (
    <>
      <Box bgColor={color} onClick={handleColor}>
        클릭해보세요
      </Box>
      <PopUp show={display} onClick={handleDisplay}></PopUp>
    </>
  );
};
