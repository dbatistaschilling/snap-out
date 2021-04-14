import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        {/* <div id="loader">
            <div id="loading-status"></div>
        </div> */}

        <div className="header-wrapper header-transparent header-style-02 clearfix">
            <header id="header">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="top-bar-wrapper clearfix">
                                <div className="top-bar-inner-container">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-6 col-xs-8 clearfix">

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
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-4 clearfix">

                                            <div className="header-cart clearfix">
                                                <div className="cart-container icon-cart">
                                                    <a className="cart-contents" href="band-store.html" title="View your shopping cart">
                                                        <span className="cart-count">1</span>        
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-inner">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">

                                <div className="main-nav">

                                    <nav className="navbar navbar-default nav-left pi-mega">

                                        <div className="navbar-header">

                                            <div id="logo">
                                                <a href="home-page-music-band.html">
                                                    <img src="img/svg/musician-logo-red-white.svg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                                </a>
                                            </div>

                                            <button className="hamburger navbar-toggle hamburger--slider-r" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                                                <span className="hamburger-box">
                                                    <span className="hamburger-inner"></span>
                                                </span>
                                            </button>  
                                        </div>

                                        <div id="search">
                                            <form>
                                                <input className="search-submit" type="submit" />
                                                <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />
                                            </form>
                                        </div>

                                        <div id="main-nav" className="collapse navbar-collapse">

                                            <ul className="nav navbar-nav">
                                                <li className="menu-item-has-children dropdown current-menu-item">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Home</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="home-page-music-artist.html">Music artist</a></li>
                                                        <li className="current-menu-item"><a href="home-page-music-band.html">Music band</a></li>
                                                        <li><a href="home-page-music-blog.html">Music blog</a></li>
                                                        <li><a href="band-store.html">Band store</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children dropdown">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">About</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="about-the-band.html">About the band</a></li>
                                                        <li><a href="about-artist-band-member.html">About artist band member</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children dropdown">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Media</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="music-album-view.html">Music album view</a></li>
                                                        <li><a href="music-grid-view.html">Music grid view</a></li>
                                                        <li><a href="music-album-single-creative.html">Music album single creative</a></li>
                                                        <li><a href="video-grid.html">Video grid</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children dropdown">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Events</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="events-creative.html">Events creative</a></li>
                                                        <li><a href="event-single-creative.html">Event single creative</a></li>
                                                    </ul>
                                                </li>

                                                <li className="menu-item-has-children dropdown">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">News</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="news-creative-dark.html">News creative dark</a></li>
                                                        <li><a href="news-single-creative-dark.html">News single creative dark</a></li>
                                                    </ul>
                                                </li>
                                                
                                                <li className="menu-item-has-children dropdown">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">Shop</a>

                                                    <ul className="dropdown-menu">
                                                        <li><a href="band-store.html">Band store</a></li>
                                                        <li><a href="shop-products-full.html">Shop products full</a></li>
                                                        <li><a href="shop-products-sidebar-left.html">Shop products sidebar left</a></li>
                                                        <li><a href="shop-products-sidebar-right.html">Shop products sidebar right</a></li>
                                                        <li><a href="shop-product-single.html">Shop product single</a></li>
                                                    </ul>
                                                </li>
                                                
                                                <li>
                                                    <a href="contact-booking.html" role="button">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

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
