import React from 'react'
import {
  CustomBackground,
  PageContent,
  PageTitle
} from '../components'

const LacaRuggieri = () =>
<>
  <PageTitle
    title={"Laca Ruggieri"}
    subtitle={"Batteria, violino,  voce distorta"}
    style={"02"}
    pageTitle={"04"}
  />
  <PageContent>
    <div className="col-md-2 hidden-xs hidden-sm">
    </div>
    <div className="col-md-8 centered">
        <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
            <h2>the guitar hero</h2>
        </div>
        <p>Marc is real guitar expert. Marc has been group member since it’s foundation. He started playing guitar when he was in high school and been loving it since.
            Marc changed two bands as he wanted something fresh and different. He found it in “Musician” rock band. When he’s not playing, he likes to cycle around the city on his bike.</p>
    </div>
    <div className="col-md-2 hidden-xs hidden-sm">
    </div>
  </PageContent>
  <CustomBackground img={"bkg-img11"} />
  <PageContent>
    <div className="col-md-12 centered">
      <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
          <h2>follow Laca sui social network</h2>
      </div>
    </div>
    <div className="col-md-12 centered">
      <ul className="social-links filled-circles">
          <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-soundcloud"></i></a></li>
          <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  </PageContent>
</>

export default LacaRuggieri