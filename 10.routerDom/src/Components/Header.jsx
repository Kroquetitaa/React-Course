import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
                </li>
        </ul>
    </nav>
  )
}

export default Header