import React, { useState } from "react";

const State = () => {
  const [number, setNumber] = useState(0);
  //숫자를 저장하는 state

  const onIncrease = () => {
    setNumber(number + 1);
  };
  //숫자를 1 증가시키는 컴포넌트

  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={onIncrease}>+</button>
      {/* 버튼을 클릭할 때마다 숫자를 1 증가시키는 컴포넌트 실행 */}
    </div>
  );
};

export default State;
