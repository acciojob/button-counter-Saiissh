
import React from "react";
import './../styles/App.css';

const App = () => {
  let [val,setVal]=useState(0);
  return (
    <div>
         <p>Button clicked {val} times</p>
    <button onClick={()=>{setVal(val+1)}}>Click me</button>
    
    </div>
  )
}

export default App
