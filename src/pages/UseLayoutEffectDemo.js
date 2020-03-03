import React, {useEffect, useLayoutEffect, useState} from 'react';
import Button from '../components/Button';

const UseEffectDemo = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);


  console.log('render UseEffect', value);

  return (
      <div className="text-center">
        <p>value: {value}</p>
        <p>
          <Button onClick={() => setValue(0)}>Start</Button>
        </p>
        <br/>
        <p>click the button, the view will flicker because of twice rendering in short time</p>
      </div>
  );
};

const UseLayoutEffectDemo = () => {

  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render useLayoutEffect', value);

  return (
      <div className="text-center">
        <p>value: {value}</p>
        <p>
          <Button onClick={() => setValue(0)}>Start</Button>
        </p>
        <br/>
        <p>click the button, the view will have no flicker issue</p>
      </div>
  );
};

const Container = () => {

  return <div className="flex">
    <div className="flex-1">
      <UseEffectDemo/>
    </div>
    <div className="flex-1">
      <UseLayoutEffectDemo/>
    </div>

  </div>
}

export default Container;
