import React from 'react'
import {
  PageContent, PageTitle
} from '../components'

export const VideoGridSection = () =>
<div id="media">
    <br/>
    <br/>
    <PageTitle title={"Videos"} style={"01"} pageTitle={"01"} />
    <PageContent>
        <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                    <iframe
                        src="https://www.youtube.com/embed/IXQJ3qwHL40"
                        width="100%"
                        height="312"
                        frameBorder="0"
                        allowFullScreen={true}
                        // webkitallowfullscreen
                        // mozallowfullscreen
                    ></iframe>
                </div>
                <h2>MADVILLE - I Gatti di Schrödinger - New Born (Muse cover)</h2>
            </div>
        </div>
        <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                    <iframe
                        src="https://www.youtube.com/embed/ILC6It72y5o"
                        width="100%"
                        height="312"
                        frameBorder="0"
                        allowFullScreen={true}
                        // webkitallowfullscreen
                        // mozallowfullscreen
                    ></iframe>
                </div>
                <h2>I Gatti Di Schrödinger - Bataclan - live@Madville</h2>
            </div>
        </div>
    </PageContent>
    <PageContent>
        <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                    <iframe
                        src="https://www.youtube.com/embed/ma094F4TguY"
                        width="100%"
                        height="312"
                        frameBorder="0"
                        allowFullScreen={true}
                        // webkitallowfullscreen
                        // mozallowfullscreen
                    ></iframe>
                </div>
                <h2>I Gatti Di Schrödinger - Hysteria (Muse cover) - live @ Madville</h2>
            </div>
        </div>
        {/* <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                    <img src="img/pics/img-05.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                    <div className="mask">
                        <a href="https://www.youtube.com/embed/hBn8ANP2l0M" title="Blue whisper" className="video-item-trigger zoom">
                            <img src="img/svg/youtube-play-icon.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                        </a>
                    </div>
                </div>
                <h2><a href="https://www.youtube.com/embed/hBn8ANP2l0M" className="video-item-trigger" title="Live at berlin">musician - live at berlin</a></h2>
            </div>
        </div> */}
        {/* <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                <iframe
                        src="https://player.vimeo.com/video/22648523"
                        width="100%"
                        height="312"
                        frameBorder="0"
                        allowFullScreen={true}
                        // webkitallowfullscreen
                        // mozallowfullscreen
                    ></iframe>
                </div>
                <h2>Musician - live in london</h2>
            </div>
        </div> */}
        {/* <div className="col-md-6 col-xs-12 mb-0">
            <div className="video-item">
                <div className="video-media">
                    <img src="img/pics/video-item-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                    <div className="mask">
                        <a href="https://www.youtube.com/embed/hBn8ANP2l0M" title="Blue whisper" className="video-item-trigger zoom">
                            <img src="img/svg/youtube-play-icon.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                        </a>
                    </div>
                </div>
                <h2><a href="https://www.youtube.com/embed/hBn8ANP2l0M" className="video-item-trigger" title="Big time perfectionism">musician - big time perfectionism</a></h2>
            </div>
        </div> */}
    </PageContent>
</div>
