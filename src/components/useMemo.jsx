import { useState , useMemo } from "react";


function UseMemo(){
  const [number, setNumber] = useState(0)

  function cubeNum(num){
    console.log("Calculation Done!");
    return Math.pow(num, 3)
  }

  const result = useMemo(() => cubeNum(number), [number]);

  return(
    <>
      <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
      <h2>Cube of the Number: {result}</h2>
    </>
  )
}

export default UseMemo;