import React from "react";


function Header(){
  console.log("Header Rendered!")
  return(
    <>
      <h2>Header</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, et?</p>
    </>
  )
}

export default React.memo(Header);