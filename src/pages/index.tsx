import React from 'react'
// import dynamic from 'next/dynamic'
import NewMasterSlider from '../sections/NewMasterSlider'
import AboutSection from '../sections/About'
import BandMembersSection from '../sections/BandMembers'
import EventSection from '../sections/Event'
import VideoGridSection from '../sections/VideoGrid'
import ContactSection from '../sections/Contact'

// const MasterSlider = dynamic(() => import('../sections/MasterSlider'))

// const NewMasterSlider = dynamic(() => import('../sections/NewMasterSlider'))
// const AboutSection = dynamic(() => import('../sections/About'))
// const BandMembersSection = dynamic(() => import('../sections/BandMembers'))
// const EventSection = dynamic(() => import('../sections/Event'))
// const VideoGridSection = dynamic(() => import('../sections/VideoGrid'))
// const ContactSection = dynamic(() => import('../sections/Contact'))

const IndexPage = () => (
  <>
    {/* <MasterSlider /> */}
    <NewMasterSlider />
    <AboutSection />
    <BandMembersSection />
    <EventSection />
    <VideoGridSection />
    <ContactSection />
    {/* <AlbumsSection />
    <StoreSection />
    <CustomBackground img={"bkg-img09"}/>
    <ToursSection /> */}
  </>
)

export default IndexPage
