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
        <h1>Without useCallback</h1>
        <br/>
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>Update Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>Add Delta</RandomColoredButton>
        <p className="mt-8">The above buttons will not change colored until their onclick handler
          change</p>
        <p>The right button change color every time even if delta stay unchanged</p>
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
        <h1>Without useCallback</h1>
        <br/>
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>Update Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>Add Delta</RandomColoredButton>
        <p className="mt-8">The above buttons will not change colored until their onclick handler
          change</p>
        <p>The right button change color only when delta changes</p>
      </div>
  );
};


const Container = () => {

  return <div className="flex">
    <div className="flex-1">
      <WithoutUseCallbackDemo/>
    </div>
    <div className="flex-1">
      <UseCallbackDemo/>
    </div>

  </div>
}

export default Container;

