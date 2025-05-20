import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section1.scss'
const Section1 = () => {

  useEffect(()=>{

    Aos.init({duration:1000})

  },[])



  return (
    <section className='sc1'>
      <div className="inner">
        <div className="img-wrap" data-aos="fade-right">
          <img src="./img/b.ready_intro.gif" alt="intro" />
        </div>
        <div className="t-wrap" data-aos="fade-left">
          <h2 className="con_tit">
            B.READY IS ...
          </h2>
          <div className="txt">
            더 세련된 방식으로 나를 표현하도록 도와주는 <br />
            각자의 개성과 다양성을 존중하고 포용하는 <br />
           스타일링에 필요한 모든 것을 제공하는<br />
           <div className="strong"><span>토탈 스타일링 브랜드</span>입니다.</div>
          </div>
          <a href="#" className="con_btn">MEET B.READY</a>
        </div>
      </div>
    </section>
  )
}

export default Section1