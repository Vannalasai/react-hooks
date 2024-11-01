//The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. useRef() only returns one item. It returns an Object called current.

import { useEffect, useRef, useState } from "react";


function UseRef(){
  const [value, setValue] = useState(0)
  const count = useRef(0)
  const inputValue = useRef("")

  const btnClicked = () => {
    console.log(inputValue.current)
    inputValue.current.style.background = "green";
  }

  useEffect(() => {
    count.current = count.current + 1;
  })

  return(
    <>
      <button onClick={() => setValue(prev => prev-1)}>-1</button>
      <h2>{value}</h2>
      <button onClick={() => setValue(prev => prev+1)}>+1</button>
      <h2>Rendering Times {count.current}!</h2>
      <input type="text" ref={inputValue}/>
      <button onClick={btnClicked}>Click here!</button>
    </>
  )
} 

export default UseRef;