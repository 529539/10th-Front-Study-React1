import React, { useState } from "react";

const Ternary = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState(false);
  //열기-닫기와 열림-닫힘을 따로 저장할 state 2개

  const onClick = () => {
    //클릭할 때마다 상태를 반대로 바꾸는 컴포넌트
    {
      open ? setOpen(false) : setOpen(true);
    }
    {
      text ? setText(false) : setText(true);
    }
    /*
    etOpen(!open);
    setText(!text)
    */
  };

  return (
    <div>
      <button onClick={onClick}>
        {open ? <span>열기</span> : <span>닫기</span>}
        {/* true면 열기, false면 닫기를 출력 */}
      </button>
      <p>{text ? <span>열림</span> : <span>닫힘</span>}</p>
      {/* true면 열림, false면 닫힘을 출력 */}
    </div>
  );
};

export default Ternary;
