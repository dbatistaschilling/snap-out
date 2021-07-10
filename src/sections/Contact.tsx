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
    <div className="col-md-12 col-sm-12 centered">
        <h3>Scrivi agli snap</h3>
        <ul className="default-list">
            <li>snap@snapout.it</li>
            <li><br /></li>
            <li>Manager di eventi: Ruggero Ruggeri</li>
            <li>telefono: +39 348 710 1958</li>
        </ul>
    </div>
    <div className="col-md-2 hidden-xs">
    </div>
  </PageContent>
</div>