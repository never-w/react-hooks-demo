import React, {useCallback, useState} from 'react';
import RandomColoredButton from '../components/RandomColoredButton';


const WithoutUseCallbackDemo = () => {

  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);

  function handleIncreaseCounter(e) {
    setCounter(counter + delta)
  }

  const handleAddDelta = (e) => {
    setDelta(delta + 1);
  };

  return (
      <div className="text-center">
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>Update Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>Add Delta</RandomColoredButton>
        <p className="mt-8">The above buttons will not change colored until their onclick handler change</p>
      </div>
  );
};

const UseCallbackDemo = () => {

  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);

  function handleIncreaseCounter(e) {
    setCounter(counter + delta)
  }

  const handleAddDelta = useCallback((e) => {
    setDelta(delta + 1);
  }, [delta]);

  return (
      <div className="text-center">
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>Update Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>Add Delta</RandomColoredButton>
        <p className="mt-8">The above buttons will not change colored until their onclick handler change</p>
      </div>
  );
};

// export default WithoutUseCallbackDemo;
export default UseCallbackDemo;

