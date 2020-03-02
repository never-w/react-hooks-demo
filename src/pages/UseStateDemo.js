import React, {useState} from 'react';

const UseStateDemo = () => {
  const [name, setName] = useState("Issac");
  return (
      <div className="w-full text-center">
        <p>The input field is a controlled component implemented by useState hook </p>
        <br/>
        <input className="text-black border-black  border-solid border pl-2"
               value={name}
               onChange={e => setName(e.target.value)}/>
      </div>
  );
};

export default UseStateDemo;
