import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import {
  PageContent, PageTitle
} from '../components'
import { AppContext } from '../contexts/app-cotext'
import { MediaType } from '../interfaces'

export const VideoGridSection = () => {

    const { data } = useContext(AppContext)
    const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (data.sections.length > 0) {
          data.sections.find(section => {
            if (section.name === 'media') {
              setSectionTitle(section.title)
            }
          })
        }
    }, [data.sections])

    if (Object.keys(data.media).length === 0) {
        return <div id="media">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <PageContent>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader
                            type="Puff"
                            color="#e21f2f"
                            height={80}
                            width={80}
                        />
                        </div>
                    </PageContent>
                </div>
    }

    return (
        <div id="media">
            <br/>
            <br/>
            <PageTitle title={sectionTitle ? sectionTitle : ''} style={"01"} pageTitle={"01"} />
            <PageContent>
            {
                data.media?.map(({
                    id,
                    url,
                    text
                }: MediaType) => (
                    <div className="col-md-6 col-xs-12 mb-0" key={id} style={{
                        marginBottom: 20, paddingBottom: 30
                    }}>
                        <div className="video-item">
                            <div className="video-media">
                                <iframe
                                    src={url}
                                    width="100%"
                                    height="312"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    // webkitallowfullscreen
                                    // mozallowfullscreen
                                ></iframe>
                            </div>
                            <h2>{text}</h2>
                        </div>
                    </div>
                ))
            }
                {/* <div className="col-md-6 col-xs-12 mb-0">
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
                </div> */}
            {/* </PageContent>
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
                </div> */}
                {/* <div className="col-md-6 col-xs-12 mb-0">
                    <div className="video-item">
                        <div className="video-media">
                            <img src="assets/img/pics/img-05.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                            <div className="mask">
                                <a href="https://www.youtube.com/embed/hBn8ANP2l0M" title="Blue whisper" className="video-item-trigger zoom">
                                    <img src="assets/img/svg/youtube-play-icon.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
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
                            <img src="assets/img/pics/video-item-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                            <div className="mask">
                                <a href="https://www.youtube.com/embed/hBn8ANP2l0M" title="Blue whisper" className="video-item-trigger zoom">
                                    <img src="assets/img/svg/youtube-play-icon.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                </a>
                            </div>
                        </div>
                        <h2><a href="https://www.youtube.com/embed/hBn8ANP2l0M" className="video-item-trigger" title="Big time perfectionism">musician - big time perfectionism</a></h2>
                    </div>
                </div> */}
            </PageContent>
        </div>
    )
}
