import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className="w-[100%] h-[100%] relative font-poppins flex flex-row bg-[rgb(31,41,55)]">
      <Navbar />
      <Hero />
      <Sidebar />
    </div>
  )
}

export default Home