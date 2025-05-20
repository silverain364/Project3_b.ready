import React from 'react'
import topIcon from '/img/fixed_top.svg'
import './styles/RightQuick.scss'

const RightQuick = ({onClick, isScrolled}) => {
  return (
    <div id='right_quick' className={isScrolled ? "up" : ""}>
        <div className="talk">
        </div>
        <a href="" className='top_btn' onClick={onClick}>
            <img src={topIcon} alt="icon" />
        </a>
    </div>
  )
}

export default RightQuick