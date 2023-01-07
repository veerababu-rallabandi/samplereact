import React from 'react'

function Person({pvalue}) {
  return (
    <div>
      <h2>{pvalue.id} {pvalue.Name}</h2>
    </div>
  )
}

export default Person
