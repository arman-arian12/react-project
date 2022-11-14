import React, { useState } from 'react'

 function Hooks_usestate() {
    const [count,setCount]=useState(0)

   const Hendelhooks=()=>{
    setCount(count+1)
   }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={Hendelhooks}>incrimeent</button>
    </div>
  )
}
export default Hooks_usestate