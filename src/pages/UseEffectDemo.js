import React, {useEffect, useState} from 'react';

const UseEffectDemo = () => {

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    return ()=> {
      clearTimeout(timeout);
    }
  });

  return (
      <div className="w-full text-center">
        <p>The counter is increasing with a timer</p>
        <br/>
        <h1 className="text-center text-4xl">{counter}</h1>
      </div>
  );
};

export default UseEffectDemo;
