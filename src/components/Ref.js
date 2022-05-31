import React, { useRef } from "react";

const Ref = () => {
  const input = useRef(); //input 태그를 참조
  const onFocus = () => {
    input.current.focus(); //현재 참조되고 있는 곳에 포커스
  };
  setTimeout(onFocus, 3000); //3초 후에 onFocus를 실행

  /*
  const inputElement = useRef();
  setTimeout(() => inputElement.current.focus(), 3000);
  */

  return (
    <div className="App">
      <div>3초 후 포커스!</div>
      <input ref={input} placeholder="작성하시오" />
    </div>
  );
};

export default Ref;
