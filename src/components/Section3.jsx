import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import s3Data from '../data/sc3Data'
const Section3 = () => {

  return (
    <section className='sc3'>
          <Swiper
            modules={[Navigation, Autoplay]}
            className='swiper s3_slider'
            navigation={{
              nextEl: '.arr_next',
              prevEl: '.arr_prev',
            }}
            loop={true}
            autoplay={{ delay: 5000 }}
          >
            {s3Data.map((item, index) => (
              <SwiperSlide key={index} className={item.className}>
                <div className="inner">
                <div className="banner-txt">
                  <p className="banner-tit">{item.title}</p>
                  <p className="banner-desc">{item.desc}</p>
                  <a href="#" className="con_btn">{item.btn_txt}</a>
                </div>
                <img src={item.src} alt="" />
                </div>
              </SwiperSlide>
            ))}
            <div className="s3_nav">
              <div className="arr_prev"></div>
              <div className="arr_next"></div>
            </div>
          </Swiper>
    </section>
  )
}

export default Section3