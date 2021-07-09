import React from 'react'
import { CustomBackground, PageContent } from '../components'

export const ContactSection = () =>
<div id="contact">
  <CustomBackground img={"bkg-img02"}/>
  <PageContent>
    <div className="col-md-12 mb-0">
        <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
            <h2>Contattaci</h2>
        </div>
    </div>
    <div className="col-md-2 hidden-xs">
    </div>
    <div className="col-md-4 col-sm-6">
        <h3>Booking EU</h3>
        <ul className="default-list">
            <li>bookingeu@musician.com</li>
            <li><br /></li>
            <li>Booking Manager: Jerry Howard</li>
            <li>Phone: +00 41 258 7895</li>
        </ul>
    </div>
    <div className="col-md-4 col-sm-6">
        <h3>Booking USA</h3>
        <ul className="default-list">
            <li>bookingusa@musician.com</li>
            <li><br /></li>
            <li>Booking Manager: Jesse Carroll</li>
            <li>Phone: +00 41 258 7895</li>
        </ul>
    </div>
    <div className="col-md-2 hidden-xs">
    </div>
  </PageContent>
</div>