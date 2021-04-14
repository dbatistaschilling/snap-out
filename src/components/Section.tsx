import React from 'react'

type props = {
  url: string
  image: string
  subject: string
}

export const Section = ({ url, image, subject }: props) =>
  <div className="col-md-4 col-sm-4 col-xs-12 mb-0">
    <a href={url} className="block-button">
        <img src={image} alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
        <h3>{subject}</h3>
    </a>
  </div>