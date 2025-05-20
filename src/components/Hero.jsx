import React from 'react'
import './styles/Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import heroData from '../data/heroData'

const Hero = () => {
  return (
    <section className='hero'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className='swiper hero_slider'
        navigation={{
          nextEl: '.arr_next',
          prevEl: '.arr_prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: (number) => number < 10 ? `0${number}` : `${number}`,
          formatFractionTotal: (number) => number < 10 ? `0${number}` : `${number}`,
        }}
        loop={true}
        autoplay={{delay:5000}}
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id} className={slide.className}>
            <div className="inner">
              <div className="t-wrap">
                <p className="sub-tit">{slide.sub_title}</p>
                <h2 className="con_tit large">{slide.title}</h2>
                <p className="txt" dangerouslySetInnerHTML={{ __html: slide.description }}/>
                <a href="#" className={`con_btn`}>
                  <span className='btn_plus'>+</span> {slide.btnText}
                </a>
              </div>
            </div>

          </SwiperSlide>
        ))}

        <div className="hero_nav">
          <div className="arr_prev"></div>
          <div className="swiper-pagination swiper-pagination-fraction"></div>
          <div className="arr_next"></div>
        </div>
      </Swiper>
    </section>
  )
}

export default Hero