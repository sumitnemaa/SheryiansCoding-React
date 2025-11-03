import React, { useState } from 'react'
import Login from "./components/Login";
import JoinUs from "./components/JoinUs";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? (<Login setToggle={setToggle} />) : (<JoinUs setToggle={setToggle} />)}
    </>
  )
}

export default App