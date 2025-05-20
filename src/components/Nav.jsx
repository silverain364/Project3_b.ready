import React from 'react'
import navData from '../data/navData'

const Nav = () => {
  return (
    <nav>
        <ul>
            {navData.map((item, idx)=>(
                <li key={idx}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav