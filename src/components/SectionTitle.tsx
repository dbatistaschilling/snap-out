import React from 'react'

type props = {
  title: string
}

export const SectionTitle = ({ title }: props) =>
  <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
    <h2>{title}</h2>
  </div>