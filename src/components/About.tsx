import React from 'react'

type props = {
  title: string
  paragraphs: string[]
}

export const About = ({
  title,
  paragraphs
}: props) =>
<>
  <div className="col-md-2 hidden-xs hidden-sm">
  </div>
  <div className="col-md-8 centered">
    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
        <h2>{title}</h2>
    </div>
    {
      paragraphs.map(paragraph => (
        <p>{paragraph}</p>
      ))
    }
  </div>
  <div className="col-md-2 hidden-xs hidden-sm">
  </div>
</>
