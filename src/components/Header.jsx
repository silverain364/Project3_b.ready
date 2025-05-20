import React, { useEffect, useState } from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './Util'
const Header = ({ isScrolled, modalOpenClick }) => {
  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="inner">
        <div className="mob_btn" onClick={modalOpenClick}>
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}img/mob-btn.png`} alt="mob-btn" />
          </a>
        </div>
        <Nav />
        <h1 className="logo">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="" />
          </a>
        </h1>
        <Util />
      </div>
    </header>
  )
}

export default Header