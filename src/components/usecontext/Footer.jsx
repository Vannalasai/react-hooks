import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Footer = () => {

  const {phone, name, handleClicked} = useContext(AppContext)

  return(
    <div>
      <h2>Footer</h2>
      <h3>Phone: {phone}</h3>
      {/* <h3>Name: {name}</h3> */}
      <button onClick={handleClicked}>Click me!</button>
    </div>
  )
}

export default Footer;