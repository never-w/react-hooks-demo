import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import UseStateDemo from './pages/UseStateDemo';
import UseEffectDemo from './pages/UseEffectDemo';
import UseContextDemo from './pages/UseContextDemo';
import UseReducerDemo from './pages/UseReducerDemo';
import UseCallbackDemo from './pages/UseCallbackDemo';
import UseMemoDemo from './pages/useMemoDemo';
import UseRefDemo from './pages/UseRefDemo';
import UseLayoutEffectDemo from './pages/UseLayoutEffectDemo';

function App() {
  return (
      <Router>
        <div className="w-full h-screen text-2xl mt-8">
          <nav>
            <ul>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/">Home</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useState">useState</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useEffect">useEffect</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useContext">useContext</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useReducer">useReducer</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useCallback">useCallback</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useCallback">useCallback</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useMemo">useMemo</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useRef">useRef</Link>
              </li>
              <li className="inline border-gray border-solid border m-4 p-2">
                <Link to="/useLayoutEffect">useLayoutEffect</Link>
              </li>
            </ul>
          </nav>
          <br/>
          <hr/>

          <div className="mt-64 w-screen">
            <Switch>
              <Route path="/useState">
                <UseStateDemo/>
              </Route>
              <Route path="/useEffect">
                <UseEffectDemo/>
              </Route>
              <Route path="/useContext">
                <UseContextDemo />
              </Route>
              <Route path="/useReducer">
                <UseReducerDemo />
              </Route>
              <Route path="/useCallback">
                <UseCallbackDemo />
              </Route>
              <Route path="/useMemo">
                <UseMemoDemo />
              </Route>
              <Route path="/useRef">
                <UseRefDemo />
              </Route>
              <Route path="/useLayoutEffect">
                <UseLayoutEffectDemo />
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>


  );
}

export default App;
