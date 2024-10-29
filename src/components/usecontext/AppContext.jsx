import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 8200576753"
  const name = "Sai Vannala"
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)

  const handleIncreaseClicked = () => {
    setCount(count + 1);
  }

  const handleDecreaseClicked = () => {
    setCount(count - 1);
  }

  useEffect(()=> {
    setTimeout(() => {
      setTimer(timer + 1)
    }, 1000)
  },[timer])

  return(
    <AppContext.Provider value={{phone, name, handleIncreaseClicked, handleDecreaseClicked, count, timer}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;