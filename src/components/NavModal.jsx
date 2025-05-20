import React from 'react'
import './styles/NavModal.scss'
import Util from './Util'
import Nav from './Nav'
import joindata from '../data/JoinData'

const NavModal = ({ modalOpen, modalOpenClick }) => {
  return (
    <div className={`navModal ${modalOpen ? "open" : ""}`}>
      <div className="inner">
        <ul>
          <li className='n-wrap'>
            <div>
              <div className="img-wrap">
              <img src="./img/logo.png" alt="" />
              </div>
              <div className="close-btn" onClick={modalOpenClick}>
                <span></span>
                <span></span>
              </div>
            </div>
          </li>
          <li className='n-wrap login'>
            <a href="#">
              <p className="m-txt">
                로그인
              </p>
              <div className="arr">
                <span></span>
                <span></span>
              </div>
            </a>
          </li>
          <li className='n-wrap'>
            <a href="#">
              <p className="m-txt">
                전체보기
              </p>
            </a>
          </li>
          <li className='n-wrap'>
            <a href="#">
            <p className="m-txt">
                메이크업
              </p>
            </a>
          </li>
          <li className='n-wrap'>
            <a href="#">
            <p className="m-txt">
                헤어
              </p>
            </a>
          </li>
          <li className='n-wrap'>
            <a href="#">
            <p className="m-txt">
                도구
              </p>
            </a>
          </li>
          <li className='n-wrap'>
            <a href="#">
            <p className="m-txt">
                스킨케어
              </p>
            </a>
          </li>
          <li className='n-wrap blue'>
            <a href="#">
            <p className="m-txt">
                CONTENTS
              </p>
            </a>
          </li>
          <li className='n-wrap blue'>
            <a href="#">
            <p className="m-txt">
                이벤트
              </p>
            </a>
          </li>
        </ul>
        <div className="nav-list">
          <a href="#">
            회원가입
          </a>
          <a href="#">
            공지사항
          </a>
          <a href="#">
            GLOBAL
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavModal