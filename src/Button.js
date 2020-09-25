import React, { useState } from 'react'

const Button = () => {
  const [counter, setCouter] = useState(0)
  const handleClick = () => {
      let count = counter;
    setCouter(++count);
  }

  console.log("counter", counter)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Button;
