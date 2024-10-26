import { useEffect, useRef, useState } from "react";


function UseRef(){
  const [value, setValue] = useState(0)
  const count = useRef(0)
  const inputValue = useRef("")

  useEffect(() => {
    count.current = count.current + 1;
  })

  const btnClicked = () => {
    console.log(inputValue.current)
  }

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