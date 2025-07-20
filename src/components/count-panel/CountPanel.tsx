import React, { useState } from 'react'

import './CountPanel.css'
import Title from '../title/Title.tsx'

function CountPanel() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title text="Botones que hacen cosas:" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>
        <p>{count}</p>
      </div>
    </>
  )
}

export default CountPanel;
