import React, {useState} from 'react'
import './styles/Footer.scss'
import {
  footerCenterMenu,
  footerCompany,
  footerInfoLinks,
  snsIcons,
  customerCenter
} from '../data/footerData'
const Footer = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer>
      <div className="inner">
        <div className="left">
          <h3>
            <img src={footerCompany.logo} alt="logo" />
          </h3>
          <p className="foot_txt1">
            주식회사 아모레퍼시픽 | 대표이사 : {footerCompany.ceo} <br />
            주소 : {footerCompany.address} <br/>
            사업자등록번호 : {footerCompany.bizNum}[사업자 정보확인] <br />

            통신판매업신고 : {footerCompany.salesReport}<br />
            호스팅제공자 : {footerCompany.hosting}<br />
          </p>
          <p className="foot_txt2">
            {footerCompany.copyright}
          </p>
        </div>
        <ul className="center">
          {footerCenterMenu.map((menu,idx)=>(

          <li key={idx}>
            <a href="#">{menu.title}</a>
            <ul>
              {menu.links.map((link,i)=>(
                <li key={i}>
                  <a href="#">
                    {link}
                  </a>
                </li>

              ))}
            </ul>
          </li>
          ))}
        </ul>
        <div className="right">
          <p
          onClick={()=>setIsOpen(!isOpen)} 
          className={`foot_txt3 ${isOpen ? "open" : ""}`}>
            Customer Center
          </p>
          <div className="hidden">
          <div className="tel">
            {customerCenter.tel1}<br/>
            {customerCenter.tel2}
          </div>
          <p className="foot_txt4">
            {customerCenter.time} <br />
            {customerCenter.off}
          </p>
          <a href="#" className="talk_btn">1 : 1 Talk</a>
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="info">
          {footerInfoLinks.map((link,i)=>(
            <a href={link.href} key={i}>{link.text}</a>

          ))}
        </div>
        <p className="foot_txt2">
            {footerCompany.copyright}
          </p>
        <div className="sns">
          {snsIcons.map((icon,i)=>(
            <a href='#' key={i}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer