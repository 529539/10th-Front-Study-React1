import React from "react";

const Box = () => {
  //첫 번째 박스를 생성하는 컴포넌트
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      1st Box
      <Box2></Box2>
      {/* 두 번째 박스를 생성하는 컴포넌트를 첫 번째 박스 안에서 실행 */}
    </div>
  );
};

const Box2 = () => {
  //두 번째 박스를 생성하는 컴포넌트
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      2nd Box
      <Box3></Box3>
      {/* 세 번째 박스를 생성하는 컴포넌트를 두 번째 박스 안에서 실행 */}
    </div>
  );
};

const Box3 = () => {
  //세 번째 박스를 생성하는 컴포넌트
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      3rd Box
    </div>
  );
};

export default Box;
