import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);

  //   const handlePlus = () => setNum(num + 1);

  //   const handleMinus = () => setNum(num - 1);

  return (
    <div>
      <h3>{num}</h3>
      {/* <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button> */}
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// [] => 배열 비구조화 할당

// =>state에 담긴 값을 변경하려면 this.setState({})를 이용하여 변경

// *객체 비구조화 할당
// =>const {속성, 속성} = 객체명;
// =>객체의 내용을 쉽게 뽑아쓸수있게 만듬

// *Hooks
// =>기존 클래스형 컴포넌트에서 비효율적인 부분을 개선하여
// 사용하기 편리하게 만듬
