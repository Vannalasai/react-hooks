import { useCallback, useState } from "react";
import React from "react";
import Header from "./Header";


function UseCallback(){
  
  const [count, setCount] = useState(0)

  const newFn = useCallback(()=>{},[])

  return(
    <>
      <Header newFn={newFn}/>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Here!</button>
    </>
  )
}

export default UseCallback;