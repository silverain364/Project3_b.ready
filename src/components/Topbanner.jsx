import React from 'react'
import './styles/Topbanner.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
const Topbanner = ({ onClick }) => {
    return (
        <div className='top_banner'>
            <a href="#" className='marquee-wrap'>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
                <span className="txt">새로운 스킨케어, 이제 만나보세요</span>
            </a>
        </div>
    )
}

export default Topbanner