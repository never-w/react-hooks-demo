import React, { forwardRef, useImperativeHandle, useRef } from "react"
import Button from "../components/Button"

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    // define a custom method for ref
    focusMe: () => {
      inputRef.current.focus()
    },
  }))

  return (
    <input
      ref={inputRef}
      className="text-black border-black  border-solid border pl-2"
    />
  )
})

const UseImperativeHandlerDemo = () => {
  const ref = useRef()

  return (
    <div className="text-center">
      <p>The example code is based on the example from official doc</p>
      <br />

      <FancyInput ref={ref} />

      <br />
      <Button
        onClick={(e) => {
          // call the custom method
          ref.current.focusMe()
        }}
      >
        Click me to focus fancy input
      </Button>
      <br />
      <p>
        Basically, there is few situation where you need to use
        userImperativeHandler.
        <br />I would recommend to check out this Youtube video
        <a href="https://www.youtube.com/watch?v=HxY7SzIN44o">
          https://www.youtube.com/watch?v=HxY7SzIN44o
        </a>
      </p>
    </div>
  )
}

export default UseImperativeHandlerDemo
