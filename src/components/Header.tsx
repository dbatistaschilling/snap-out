import React, { useEffect, useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
// import { CartIconNotification } from "./CartIconNotification"
import { MainNav } from "./MainNav";
import { SocialLinks } from "./SocialLinks";

type props = {
    menuActive: boolean
}

export const Header = ({ menuActive }: props) => {

    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
    const isMobileScreen = useMediaPredicate("(max-width: 767px)");

    useEffect(() => {
        setIsMobile(isMobileScreen)
    }, []);

    useEffect(() => {
        setIsMobile(isMobileScreen)
    }, [isMobileScreen]);

    return (
            <div className="header-wrapper header-transparent header-style-02 clearfix">
                <header id="header">
                    <div className={`${isMobile ? 'header-inner-mobile' : ''}`}>
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
                                                        // { url: "#", icon: "fa fa-soundcloud" },
                                                        // "https://www.facebook.com/pixel.industry.themes/"
                                                        // { url: "#", icon: "fa fa-facebook" },
                                                        // "http://lastfm.com"
                                                        // { url: "#", icon: "fa fa-lastfm" },
                                                        // "http://youtube.com"
                                                        { url: "https://www.youtube.com/channel/UCjqOpsggfiXDTtnaY6KgSbw", icon: "fa fa-youtube" },
                                                        // "https://twitter.com/pixel_industry"
                                                        // { url: "#", icon: "fa fa-twitter" },
                                                        // "https://instagram.com"
                                                        { url: "https://www.instagram.com/sn7pout/", icon: "fa fa-instagram" },
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

                        <div className="header-inner" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <MainNav
                                            logoUrl={"/"}
                                            logoImgPath={"assets/img/svg/logo-snap-out.svg"}
                                            menuActive={menuActive}
                                            isMobile={isMobile}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
    )
}