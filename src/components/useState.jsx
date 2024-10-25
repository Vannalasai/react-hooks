import { useState } from "react";

function UseState() {
    const [name, setName] = useState("Black")
    const [isFirstName, setIsFirstName] = useState()
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("React")

    const changeName = () => {
      if(isFirstName){
        setName("Red")
      } else {
        setName("Black")
      }
      setIsFirstName(!isFirstName)
    }

    const increaseCountValue = () => {
      setCount(count => count + 1)
      setCount(count => count + 1)
      setCount(count => count + 1)
      setCount(count => count + 1)
    }

    const changeInputValue = (event) => {
        // console.log(event.target.value)
        setValue(event.target.value)
    }

    return(
      <>
        <h3>My favorite color is {name}!</h3>
        <button onClick={changeName}>{name === "Black" ? "Red" : "Black"}</button>
        <p>Count : {count}</p>
        <button onClick={increaseCountValue}>Increase by 4</button>

        <h3>React State Input Name: {value}</h3>
        <input type="text" onChange={() => changeInputValue(event)}/>
      </>
    )
}

export default UseState;