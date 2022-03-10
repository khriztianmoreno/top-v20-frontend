
import React from 'react'

const OnionHater = (props) => {
  const { onHandleChange } = props;

  // JSX
  return(
    <div>
      <textarea name="description" id="" cols="30" rows="10" onChange={onHandleChange} />
    </div>
  )
}

export default OnionHater
