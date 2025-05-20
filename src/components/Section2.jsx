import React, { useRef, useEffect } from 'react'
import './styles/Section2.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import sc2Data from '../data/sc2Data'
const Section2 = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)


  useEffect(() => {
    if (swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }

  }, [])

  return (
    <section className='sc2'>
      <div className="inner">
        <div className="t-wrap">
          <h2 className="con_tit">
            <span>B.READY</span> BEST ITEM
          </h2>
          <p className="txt_2">
            Shop By Category
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          className='s2_slider'
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            type: 'progressbar'
          }}
          loop={true}
        >
          {sc2Data.map((item) => (
            <SwiperSlide key={item.id}>
              <a href="#">
                <div className="rel">
                  <div className="img-wrap">
                    <img src={item.image} alt="img" />
                  </div>
                  <div className="info-wrap">
                    <div className="category">
                      <div className={`icon ${item.best ? 'best':'none'}`}>best</div>
                      <div className={`icon ${item.new ? 'new':'none'}`}>new</div>
                    </div>
                    <div className='name'>
                      {item.name}
                    </div>
                    <div className="price-wrap">
                      <p className="percent">{item.percent}</p>
                      <p className="saleprice">{item.salePrice}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}

        </Swiper>
        <button className='custom-prev' ref={prevRef} type='button' />
        <button className='custom-next' ref={nextRef} type='button' />

      </div>
    </section>
  )
}

export default Section2