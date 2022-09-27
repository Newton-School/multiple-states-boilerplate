import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <button id="btnA">
        Increment A
      </button>
      <button id = "btnB">
        Increment B
      </button>
      <div id="countA"></div>
      <div id = "countB"></div>
    </div>
  )
}


export default App;
