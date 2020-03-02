import React, {useRef} from 'react';
import RandomColoredButton from '../components/RandomColoredButton';

const UseRefDemo = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
      <div className="text-center">
        <p>useRef allows you to keep a reference to the dom element</p>
        <br/>
        <p><input className="text-black border-black  border-solid border pl-2" ref={inputEl}
                  type="text"/></p>
        <p>
          <RandomColoredButton onClick={onButtonClick}>Focus the input</RandomColoredButton>
        </p>
      </div>
  );
};

export default UseRefDemo;
