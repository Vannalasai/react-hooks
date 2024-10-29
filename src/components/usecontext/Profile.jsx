import React, { useContext } from "react";
import Contact from "./contact";
import { AppContext } from "./AppContext";

const Profile = () => {

  const {timer} = useContext(AppContext)
  return (
    <div>
      <h2>Profile</h2>
      <p>Render Count: {timer}</p>
      <Contact />
    </div>
  )
}

export default Profile;