import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 8200576753"
  const name = "Sai Vannala"

  const handleClicked = () => {
    console.log("button clicked")
  }

  return(
    <AppContext.Provider value={{phone, name, handleClicked}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;