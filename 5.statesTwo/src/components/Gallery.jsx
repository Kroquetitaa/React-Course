import React from 'react'
import './Gallery.css'

const Gallery = ( { title, list} ) => {
  return (
    <section> 
        <h2> { title } </h2>
        <ul>
            { list.map( value => (
                <li key={value}>{ value }</li>
            ) )}
        </ul>
    </section>
  )
}

export default Gallery