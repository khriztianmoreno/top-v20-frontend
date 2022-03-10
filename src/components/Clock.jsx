import React, { useState } from 'react'

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 5000)

  return(
    <div>
     <h1>La hora es: {time}</h1>
    </div>
  )
}

export default Clock
