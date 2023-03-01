import React from 'react'
import './App.css'
import {useState} from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => {
    setCount(count + multiplier)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg"
          onClick={updateCount}
        ></img>
        "
      </div>
    </div>
  )
}

export default App
