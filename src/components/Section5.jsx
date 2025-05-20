import React, { useEffect } from 'react'
import './styles/Section5.scss'
import instarData from '../data/instarData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section5 = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section className='sc5'>
            <div className="inner">
                <h2 className="con_tit">
                    Instagram
                </h2>
                <p className="txt_5">
                    @b.ready__official
                </p>
                <ul className="s5_lst">
                    {instarData.map((data, index) => (
                        <li
                            data-aos='fade-up'
                            data-aos-delay={data.delay}
                            key={index}>
                            <a href="#">
                                <img src={data.src} alt={`img-${index}`} />
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#" className='instagramLogo'>
                <img src="./img/instaImg.png" alt="" />
                </a>
            </div>
        </section>
    )
}

export default Section5