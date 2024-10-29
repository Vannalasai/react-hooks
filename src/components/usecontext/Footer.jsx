import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Footer = () => {

  const {phone, count, name, handleIncreaseClicked} = useContext(AppContext)

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncreaseClicked}>Increase!</button>
      <h2>Footer</h2>
      <h3>Phone: {phone}</h3>
      {/* <h3>Name: {name}</h3> */}
    </div>
  )
}

export default Footer;