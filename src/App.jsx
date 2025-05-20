
import './App.scss'
import Topbanner from './components/Topbanner'
import Hero from './components/Hero'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import NavModal from './components/NavModal'
import RightQuick from './components/RightQuick'

function App() {

  const [topBanner, setTopBanner]=useState('')

  const upTopBanner =()=>{
    setTopBanner('up')
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const [modalOpen, setModalOpen]=useState(false)

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  const modalOpenClick=()=>{
    setModalOpen(!modalOpen)    
  }

  const rightQuickClick=(e)=>{
    e.preventDefault()
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <div className={`app-container ${topBanner}`}>
      <NavModal modalOpen={modalOpen} modalOpenClick={modalOpenClick}/>
      <Topbanner onClick={upTopBanner}/>
      <Header isScrolled={isScrolled} modalOpenClick={modalOpenClick}/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section5/>
      <Footer/>
      <RightQuick onClick={rightQuickClick} isScrolled={isScrolled}/>
    </div>
  )
}

export default App
