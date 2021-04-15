import React from 'react'

type props = {
  albumImgUrl: string
  albumImgPath: string
  titleUrl: string
  title: string
}

export const DiscItem = () =>
  <div className="owl-item">
    <div className="latest-portfolio-item clearfix">
        <div className="portfolio-item-container clearfix">
            <div className="portfolio-img">
                <a href="music-album-single-creative.html">
                    <img src="img/pics/music-album-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                </a>
            </div>
            <h3><a href="music-album-single-creative.html">live from london</a></h3>
            <ul className="portfolio-meta">
                <li><a href="band-store.html">Store</a></li>
                <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                <li><a href="#audio-popup-1" className="listen-audio-popup-trigger">Listen</a></li>
            </ul>

            <div id="audio-popup-1" className="audio-popup mfp-hide">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </div>
        </div>
    </div>
  </div>