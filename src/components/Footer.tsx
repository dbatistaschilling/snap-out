import React from 'react'
import { SocialLinks } from "./SocialLinks"

type menuItem = {
  url: string
  name: string
}

type props = {
  imgUrl: string
  imgPath: string
  menuItems: menuItem[]
  newsLetterPopupMessage: string
  newsLetterMessage: string
  emailPlaceholderText: string
  copyrightUrl: string
  copyrightName: string
}

export const Footer = ({
  imgUrl,
  imgPath,
  menuItems,
  newsLetterPopupMessage,
  newsLetterMessage,
  emailPlaceholderText,
  copyrightUrl,
  copyrightName
}: props) =>
  <div id="footer-wrapper">
    <footer id="footer" className="pb-50">
        <div className="container">

            <div className="row">
                <div className="col-md-12">

                    <ul className="footer-widget-container">

                        <li className="widget widget_text">
                            <div className="textwidget">
                                <a href={imgUrl}>
                                    <img src={imgPath} alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="footer-widget-container">
                        <li className="widget widget_nav_menu">
                            <ul className="menu">
                              {
                                menuItems.map(({ url, name }: menuItem) => (
                                  <li key={name} className="menu-item"><a href={url}>{name}</a></li>
                                ))
                              }
                            </ul>
                        </li>
                    </ul>

                    <ul className="footer-widget-container">

                        <li className="widget widget_text">
                            <div className="textwidget">
                                <a href="#newsletter-popup" className="btn btn-large btn-center newsletter-popup-trigger">
                                    <span>{newsLetterPopupMessage}</span>
                                </a>
                            </div>

                            <div id="newsletter-popup" className="mfp-hide">
                                <h2>{newsLetterMessage}</h2>
                                <div className="newsletter">
                                    <form>
                                        <input className="email" type="email" name="your-email" placeholder={emailPlaceholderText} />
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
                        Designed by <a href={copyrightUrl}>{copyrightName}</a>. All rights reserved.
                    </p>
                </div>

                <ul className="footer-widget-container col-md-6 col-sm-6 col-xs-12 copyright-right">
                    <li className="widget social-links clearfix">
                      <SocialLinks socials={[
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
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <a href="#" className="scroll-up">
        <i className="fa fa-chevron-up"></i>
    </a>
  </div>