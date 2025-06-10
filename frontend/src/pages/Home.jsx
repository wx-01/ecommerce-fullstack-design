import React from 'react'
import Hero from '../components/Hero'
import DealsSection from '../components/DealsSection'

const Home = () => {
  return (
    <main className="pt-19 md:relative  flex flex-col items-center justify-center md:pt-27  md:ml-18 md:mr-18 lg:ml-26 lg:mr-26">
      <Hero />
      <DealsSection />
    </main>
  )
}

export default Home