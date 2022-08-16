import React from 'react'
import './Title.css'

const Title = ( {text, number}  ) => {
  return (
    <h2>{ text } - { number }</h2>
  )
}

export default Title