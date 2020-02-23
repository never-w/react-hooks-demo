import React, {useEffect, useLayoutEffect, useState} from 'react';
import RandomColoredButton from '../components/RandomColoredButton';

const UseLayoutEffectDemo = () => {

  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200);
  //   }
  // }, [value]);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return (
      <div className="text-center">
        <p>value: {value}</p>
        <p>
          <RandomColoredButton onClick={() => setValue(0)}>Start</RandomColoredButton>
        </p>
      </div>
  );
};

export default UseLayoutEffectDemo;
