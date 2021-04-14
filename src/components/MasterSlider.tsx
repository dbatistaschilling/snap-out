import React from 'react'

export const MasterSlider = () => (
  <div id="masterslider-band" className="master-slider ms-skin-default slider-border">
    <div className="ms-slide">
      <img src="masterslider/blank.gif" data-src="img/slider/musician-music-band-slide-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs" />
      <h2 className="ms-layer pi-caption" style={{left: '500px', top: '350px'}} data-type="text" data-effect="bottom(20)" data-duration={500} data-hide-effect="fade" data-delay={1700}>
        2016
      </h2>
      <h2 className="ms-layer pi-caption-02" style={{left: '200px', top: '475px'}} data-type="text" data-effect="fade" data-duration={500} data-hide-effect="fade" data-delay={1400}>
        EUROPEAN TOUR DATES ANNOUNCED
      </h2>
      <a href="/" className="ms-layer pi-button-02" style={{left: '490px', top: '585px'}} data-type="text" data-effect="top(20)" data-duration={500} data-hide-effect="fade" data-delay={1600}>
        View dates
      </a>
    </div>
  </div>
)