import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState(true);
  let styles={
    backgroundColor:theme?"black":"white",
    color:theme?"white":"black",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
   
    
  }
  let btn={
    color:theme?"red":"black",
    backgroundColor:theme?"black":"red",
    border:" 2px solid red ",
    padding:"10px 20px",
    borderRadius:"10px"

  }

  function toggleTheme(){
    setTheme((prev)=>!prev)
  }
  return (
    <div style={styles}>
        <button style={btn} onClick={toggleTheme}>click me</button>
    </div>
  )
}

export default App
