import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  //input 창에 출력할 state와 제출 이후 텍스트로 출력한 state를 따로 사용

  const onSubmit = (e) => {
    e.preventDefault(); //폼을 제출해도 페이지가 새로고침 되지 않도록 함
    setText(input); //제출하면 input 값을 출력할 텍스트에 넘겨주기
    setInput(""); //제출 후 input 창 비우기
  };
  const onChange = (e) => {
    setInput(e.target.value); //입력하면 input에 변화 적용
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} />
        <button type="submit">제출</button>
      </form>
      <p>{text}</p> {/* 텍스트 출력하기 */}
    </div>
  );
};

export default Form;
