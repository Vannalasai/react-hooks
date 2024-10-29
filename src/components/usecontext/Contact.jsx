import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {

  const {phone, name, count} = useContext(AppContext)

  return(
    <div>
      <h2>Contact</h2>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default Contact;