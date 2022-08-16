import React from 'react'
import './Card.css'

const Card = ( { movieTitle }) => {
  return (
    <figure>
        <h3> { movieTitle } </h3>
    </figure>
  )
}

export default Card