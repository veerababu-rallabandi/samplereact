import React from 'react'

function Hero({heroName}) {
    if(heroName=="jocker"){
        throw new Error('He is not hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
