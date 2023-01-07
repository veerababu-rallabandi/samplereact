import React, { useState } from 'react'

function UserInput(initialvalue) {
  const [value, setValue] = useState(initialvalue)

  const reset = () => {
    setValue(value)
  }
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }

  return [value, bind, reset]
}

export default UserInput
