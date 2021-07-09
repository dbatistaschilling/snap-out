import React from 'react'
import {
  MasterSlider
} from '../components'
import {
  AboutSection,
  BandMembersSection,
  ContactSection,
  // AlbumsSection,
  EventSection,
  // StoreSection,
  // ToursSection,
  VideoGridSection
} from '../sections'

const IndexPage = () => (
  <>
    <MasterSlider />
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
