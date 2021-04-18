import React from 'react'
// import { CartIconNotification } from "./CartIconNotification"
import { MainNav } from "./MainNav"
import { SocialLinks } from "./SocialLinks"

export const Header = () =>
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
                                    </ul>
                                </div>

                                {/* <CartIconNotification url={"#"} title={"View your shopping cart"} cartCount={"1"} /> */}
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

                        <MainNav logoUrl={"#"} logoImgPath={"img/svg/musician-logo-red-white.svg"} />

                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>