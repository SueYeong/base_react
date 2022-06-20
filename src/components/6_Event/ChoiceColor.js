import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vh;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0 auto;
  }
`;

const BtnWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(porps) => porps.bgColor};
  margin: 0 auto;
`;

export const ChoiceColor = () => {
  const [color, setColor] = useState("red");
  const handleRedColor = () => {
    setColor("red");
  };
  const handlegreenColor = () => {
    setColor("green");
  };
  const handleblueColor = () => {
    setColor("blue");
  };
  return (
    <Wrap>
      <Box bgColor={color}></Box>
      <h3>버튼을 눌러서 색상을 바꿔보세요!</h3>
      <BtnWrap>
        <button onClick={handleRedColor}>빨강</button>
        <button onClick={handlegreenColor}>초록</button>
        <button onClick={handleblueColor}>파랑</button>
      </BtnWrap>
    </Wrap>
  );
};
