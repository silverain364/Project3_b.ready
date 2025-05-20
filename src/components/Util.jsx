import React from 'react'
import utilData from '../data/utilData'
const Util = () => {
    return (
            <ul className='h_right'>
                {utilData.map((item, idx)=>(
                    <li key={idx} className={item.className || ''}>
                        <a href={item.link}>
                            <img src={item.icon} alt={item.name} />
                        </a>
                    </li>
                ))}
            </ul>
    )
}

export default Util