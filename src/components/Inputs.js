import React, { useState } from "react";

const Inputs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  //inputs를 저장할 state 1개

  const { username, email } = inputs;
  //inputs 값에서 username과 email을 추출

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        placeholder="이름"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="이메일"
        name="email"
        value={email}
        onChange={onChange}
      />

      <p>{username} </p>
      <p>{email}</p>
    </div>
  );
};

export default Inputs;
