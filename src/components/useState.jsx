import { useState } from "react";

function UseState() {
    const [name, setName] = useState("Black")
    const [isFirstName, setIsFirstName] = useState()
    const [count, setCount] = useState(0);

    const changeName = () => {
      if(isFirstName){
        setName("Red")
      } else {
        setName("Black")
      }
      setIsFirstName(!isFirstName)
    }

    return(
      <>
        <h3>My favorite color is {name}!</h3>
        <button onClick={changeName}>{name === "Black" ? "Red" : "Black"}</button>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 4)}>Increase by 4</button>
      </>
    )
}

export default UseState;