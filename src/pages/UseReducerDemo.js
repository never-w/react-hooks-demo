import React, {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div className="w-full text-center">
        <button className="bg-white text-black w-16"
                onClick={() => dispatch({type: 'decrement'})}>-
        </button>
        <span className="m-8">Count: {state.count}</span>
        <button className="bg-white text-black w-16"
                onClick={() => dispatch({type: 'increment'})}>+
        </button>
      </div>
  );
}
