import React, {useReducer} from 'react';

const initialState = {count: 0, actionRecords: []};

function reducer(state, action) {
  const date = new Date();
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        actionRecords: [...state.actionRecords, date.toTimeString() + " - " + action.type]
      };
    case 'decrement':
      return {
        count: state.count - 1,
        actionRecords: [...state.actionRecords, date.toTimeString() + " - " + action.type]
      };
    default:
      throw new Error();
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div className="w-full text-center">
        <p>Similar to Redux, useReducer allows you change the state by dispatching actions</p>
        <br/>
        <div>
          <button className="bg-white text-black w-16"
                  onClick={() => dispatch({type: 'decrement'})}>-
          </button>


          <span className="m-8">Count: {state.count}</span>
          <button className="bg-white text-black w-16"
                  onClick={() => dispatch({type: 'increment'})}>+
          </button>
          <br/>
          <br/>
          <p>Action dispatched: </p>
          {state.actionRecords.map(action => <p>{action}</p>)}
        </div>
      </div>
  );
}
