import React, { useContext } from 'react'
import { ExampleContext } from '../context/context'

const PrimerComponente = () => {
  const { name } = useContext( ExampleContext );
  return (
    <div>
        { name }
    </div>
  )
}

export default PrimerComponente