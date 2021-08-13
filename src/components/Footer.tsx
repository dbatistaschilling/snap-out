import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SocialLinks } from "./SocialLinks"

type menuItem = {
  url: string
  name: string
}

type props = {
  imgUrl: string
  imgPath: string
  menuActive: boolean
  menuItems: menuItem[]
  newsLetterPopupMessage?: string
  newsLetterMessage?: string
  emailPlaceholderText?: string
  copyrightUrl: string
  copyrightName: string
}

export const Footer = ({
  imgUrl,
  imgPath,
  menuActive,
  menuItems,
//   newsLetterPopupMessage,
//   newsLetterMessage,
//   emailPlaceholderText,
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
                                    <LazyLoadImage
                                        alt={"gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti."}
                                        width={119}
                                        height={29}
                                        src={imgPath}
                                    />
                                    {/* <img src={`${imgPath}?size=119x29`} alt="gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti."/> */}
                                </a>
                            </div>
                        </li>
                    </ul>
                    {
                        menuActive && (
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
                        )
                    }

                    {/* <ul className="footer-widget-container">

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
                    </ul> */}
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
                            // { url: "#", icon: "fa fa-soundcloud" },
                            // "https://www.facebook.com/pixel.industry.themes/"
                            // { url: "#", icon: "fa fa-facebook" },
                            // "http://lastfm.com"
                            // { url: "#", icon: "fa fa-lastfm" },
                            // "http://youtube.com"
                            { url: "https://www.youtube.com/watch?v=IXQJ3qwHL40", icon: "fa fa-youtube" },
                            // "https://twitter.com/pixel_industry"
                            // { url: "#", icon: "fa fa-twitter" },
                            // "https://instagram.com"
                            { url: "https://www.instagram.com/sn7pout/", icon: "fa fa-instagram" },
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