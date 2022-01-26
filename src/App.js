import React from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

import "./App.css"
import UseStateDemo from "./pages/UseStateDemo"
import UseEffectDemo from "./pages/UseEffectDemo"
import UseContextDemo from "./pages/UseContextDemo"
import UseReducerDemo from "./pages/UseReducerDemo"
import UseCallbackDemo from "./pages/UseCallbackDemo"
import UseMemoDemo from "./pages/useMemoDemo"
import UseRefDemo from "./pages/UseRefDemo"
import UseLayoutEffectDemo from "./pages/UseLayoutEffectDemo"
import UseImperativeHandlerDemo from "./pages/UserImperativeHandlerDemo"

const listItemClassName = "inline border-gray border-solid border m-4 p-2"

function App() {
  return (
    <Router>
      <div className="w-full h-screen text-2xl mt-8 text-center">
        <nav>
          <ul>
            <li className={listItemClassName}>
              <Link to="/useState">useState</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useEffect">useEffect</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useContext">useContext</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useReducer">useReducer</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useCallback">useCallback</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useMemo">useMemo</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useRef">useRef</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useLayoutEffect">useLayoutEffect</Link>
            </li>
            <li className={listItemClassName}>
              <Link to="/useImperativeHandler">useImperativeHandler</Link>
            </li>
          </ul>
        </nav>
        <br />
        <hr />

        <div className="mt-64 w-screen">
          <Routes>
            <Route path="/useEffect" element={<UseEffectDemo />} />
            <Route path="/useContext" element={<UseContextDemo />} />
            <Route path="/useReducer" element={<UseReducerDemo />} />
            <Route path="/useCallback" element={<UseCallbackDemo />} />
            <Route path="/useMemo" element={<UseMemoDemo />} />
            <Route path="/useRef" element={<UseRefDemo />} />
            <Route path="/useLayoutEffect" element={<UseLayoutEffectDemo />} />
            <Route
              path="/useImperativeHandler"
              element={<UseImperativeHandlerDemo />}
            />
            <Route path="/useState" element={<UseStateDemo />} />
            <Route path="/" element={<UseStateDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
