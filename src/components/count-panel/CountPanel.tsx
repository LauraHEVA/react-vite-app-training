import React, { useState } from 'react'
import './CountPanel.css'

function CountPanel() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>
      </div>
      <p className="result">Count: {count}</p>
    </>
  )
}

export default CountPanel;
