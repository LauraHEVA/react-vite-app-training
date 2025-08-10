import React, { useState } from 'react'
import styles from './CountPanel.module.css'

function CountPanel() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <p className={styles.result}>Count: {count}</p>
    </>
  )
}

export default CountPanel;
