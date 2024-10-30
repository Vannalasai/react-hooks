import React, { useReducer } from "react";

const UseReducer = () => {

  const intialState = {count: 0}

  const reduce = (state, action) => {
    switch(action.type){
      case 'increase' : {
        return {count: state.count + 1}
      }
      case 'decrease' : {
        return {count: state.count - 1}
      }
      default : {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(reduce, intialState)

  return(
    <>
      <button onClick={()=>dispatch({type: 'decrease'})}>Decrease!</button>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type: 'increase'})}>Increase!</button>
    </>
  )
}

export default UseReducer;
