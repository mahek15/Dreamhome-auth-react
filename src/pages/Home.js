import React from 'react'
import AboutUs from '../components/Home/AboutUs'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import Subscribe from '../components/Home/Subscribe'
import Recommend from '../components/Home/Recommend'
import TopCities from '../components/Home/TopCities'
import Agents from '../components/Home/Agents'
import Blogs from '../components/Home/Blogs'

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Feature/>
      <Subscribe/>
      <Recommend/>
      <TopCities/>
      <Agents/>
      <Blogs/>
    </>
  )
}

export default Home