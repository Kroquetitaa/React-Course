import React, { useContext } from 'react'
import { ExampleContext } from '../context/context'

const SegundoComponente = () => {

    const { sayHello } = useContext( ExampleContext )

  return (
    <div>
        { sayHello() }
    </div>
  )
}

export default SegundoComponente