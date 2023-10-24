import React from 'react'

function Navbar() {
  return (

        <ul className="nav nav-tabs navbar-expand-lg">
            <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                Clima
                </span>
            </li>
  
  
            <li className="nav-item">
                <span className="nav-link disabled" aria-disabled="true">
                Transporte
                </span>
            </li>
        </ul>

    
  )
}

export default Navbar