import React from 'react'
import Benefits from '../components/Benefits'
import Gallerie from '../components/Gallerie'
import Intro from '../components/Intro'
import OurActivities from '../components/OurActivities'
import OurIntro from '../components/OurIntro'
import Video from '../components/Video'

const Home = () => {
  return (
    <div>
      <Intro/>
      <OurIntro/>
      <OurActivities/>
      <Video/>
      <Benefits/>
      <Gallerie/>
    </div>
  )
}

export default Home