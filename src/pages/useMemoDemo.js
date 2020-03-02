import React, {useCallback, useMemo, useState} from 'react';
import RandomColoredButton from '../components/RandomColoredButton';

const WithoutUseMemoDemo = () => {

  const [num, setNum] = useState(0);
  const [fibonacci, setFibonacci] = useState(0);
  const [times, setTimes] = useState(0);

  // an expensive implementation for calculating fibonacci number to simulate heavy calculation
  function fibonacciCalculator(num) {
    const arr = [0, 1];
    while (arr.length <= num) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }

    setTimes(times + 1);
    return arr[num];
  }

  return (
      <div className="text-center">
        <h1>Without useMemo</h1>
        <p>Clicking the calculate button will trigger the calculation every time</p>
        <br/>
        <p>Num: {num} </p>
        <p><RandomColoredButton onClick={() => setNum(Math.ceil(Math.random() * 100))}>Next random
          number</RandomColoredButton></p>

        <p className="mt-8">The {num}th fibonacci number: {fibonacci}</p>
        <p>Calculate fibonacci number for {times} times</p>
        <p><RandomColoredButton onClick={() => setFibonacci(fibonacciCalculator(num))}>Calculate
          fibonacci number</RandomColoredButton></p>
        <p>
          <RandomColoredButton onClick={() => setFibonacci(0)}>
            Reset fibonacci number
          </RandomColoredButton>
        </p>
      </div>
  );
};


const UseMemoDemo = () => {
  const [num, setNum] = useState(0);
  const [fibonacci, setFibonacci] = useState(0);
  const [times, setTimes] = useState(0);


  const fibonacciByCalculated = useMemo(() => {
    // an expensive implementation for calculating fibonacci number to simulate heavy calculation
    function fibonacciCalculator(num) {
      const arr = [0, 1];
      while (arr.length <= num) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      }

      setTimes(times + 1);
      return arr[num];
    }

    return fibonacciCalculator(num);
  }, [num]);

  return (
      <div className="text-center">
        <h1>With useMemo</h1>
        <p>Clicking the calculate button will trigger the calculation only when the target num changes</p>
        <br/>
        <p>Num: {num} </p>
        <p><RandomColoredButton
            onClick={useCallback(() => setNum(Math.ceil(Math.random() * 100)), [])}>Next random
          number</RandomColoredButton></p>

        <p className="mt-8">The {num}th fibonacci number: {fibonacci}</p>
        <p>Calculate fibonacci number for {times} times</p>
        <p>
          <RandomColoredButton
              onClick={useCallback(() => setFibonacci(fibonacciByCalculated), [fibonacciByCalculated])}>
            Calculate fibonacci number
          </RandomColoredButton>
        </p>
        <p>
          <RandomColoredButton onClick={useCallback(() => setFibonacci(0), [])}>
            Reset fibonacci number
          </RandomColoredButton>
        </p>
      </div>
  );
};


const Container = () => {

  return <div className="flex">
    <div className="flex-1">
      <WithoutUseMemoDemo/>
    </div>
    <div className="flex-1">
      <UseMemoDemo/>
    </div>

  </div>
}


export default Container;
