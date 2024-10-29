import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 8200576753"
  const name = "Sai Vannala"
  const [count, setCount] = useState(0)

  const handleClicked = () => {
    setCount(count + 1);
  }

  return(
    <AppContext.Provider value={{phone, name, handleClicked, count}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;