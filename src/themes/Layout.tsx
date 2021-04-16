import React, { ReactNode } from 'react'
import { Header } from "../components"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        {/* <div id="loader">
            <div id="loading-status"></div>
        </div> */}

        <Header socials={[
            // "http://soundcloud.com"
            { url: "#", icon: "fa fa-soundcloud" },
            // "https://www.facebook.com/pixel.industry.themes/"
            { url: "#", icon: "fa fa-facebook" },
            // "http://lastfm.com"
            { url: "#", icon: "fa fa-lastfm" },
            // "http://youtube.com"
            { url: "#", icon: "fa fa-youtube" },
            // "https://twitter.com/pixel_industry"
            { url: "#", icon: "fa fa-twitter" },
            // "https://instagram.com"
            { url: "#", icon: "fa fa-instagram" },
        ]} />

        {children}

        <div id="footer-wrapper">

            <footer id="footer" className="pb-50">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">

                            <ul className="footer-widget-container">

                                <li className="widget widget_text">
                                    <div className="textwidget">
                                        <a href="home-page-music-band.html">
                                            <img src="img/svg/musician-logo-red-white.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <ul className="footer-widget-container">

                                <li className="widget widget_nav_menu">
                                    <ul className="menu">
                                        <li className="menu-item"><a href="news-list-creative-dark.html">News</a></li>
                                        <li className="menu-item"><a href="music-grid-view.html">Music</a></li>
                                        <li className="menu-item"><a href="video-grid.html">Videos</a></li>
                                        <li className="menu-item"><a href="events-creative.html">Events</a></li>
                                        <li className="menu-item"><a href="about-the-band">About</a></li>
                                        <li className="menu-item"><a href="contact-booking">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="footer-widget-container">

                                <li className="widget widget_text">
                                    <div className="textwidget">
                                        <a href="#newsletter-popup" className="btn btn-large btn-center newsletter-popup-trigger">
                                            <span>Sign up for our mailing list</span>
                                        </a>
                                    </div>

                                    <div id="newsletter-popup" className="mfp-hide">
                                        <h2>Sign up for our mailing list</h2>
                                        <div className="newsletter">
                                            <form>
                                                <input className="email" type="email" name="your-email" placeholder="Your email address.." />
                                                <input className="submit" type="submit" value="Subscribe" />
                                                <input name="action" type="hidden" />
                                            </form>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div id="copyright-container" className="copyright-container">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 col-sm-6">
                            <p>
                                Designed by <a href="http://www.pixel-industry.com">Pixel Industry</a>. All rights reserved.
                            </p>
                        </div>

                        <ul className="footer-widget-container col-md-6 col-sm-6 col-xs-12 copyright-right">
                            <li className="widget social-links clearfix">

                                <ul className="social-links">
                                    <li>
                                        <a target="_blank" href="http://soundcloud.com" className="fa fa-soundcloud"></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://www.facebook.com/pixel.industry.themes/" className="fa fa-facebook"></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="http://lastfm.com" className="fa fa-lastfm"></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="http://youtube.com" className="fa fa-youtube"></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://twitter.com/pixel_industry" className="fa fa-twitter"></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://instagram.com" className="fa fa-instagram"></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a href="#" className="scroll-up">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>

  </div>
)

export default Layout
