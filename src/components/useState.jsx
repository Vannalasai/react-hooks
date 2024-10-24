import { useState } from "react";

function UseState() {
    const [name, setName] = useState("Black")
    const [isFirstName, setIsFirstName] = useState()

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
      </>
    )
}

export default UseState;