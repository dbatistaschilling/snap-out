import React from 'react'

type props = {
  logoUrl: string
  logoImgPath: string
}

export const MainNav = ({
  logoUrl,
  logoImgPath
}: props) =>
  <div className="main-nav">
    <nav className="navbar navbar-default nav-left pi-mega">
        <div className="navbar-header">

            <div id="logo">
                <a href={logoUrl}>
                    <img src={logoImgPath} alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
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