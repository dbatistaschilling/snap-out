import React from 'react'
import { CartIconNotification } from "./CartIconNotification"
import { MainNav } from "./MainNav"

type social = {
  url: string
  icon: string
}

type props = {
  socials: social[]
}

export const Header = ({
  socials,
}: props) =>
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
                                      {
                                        socials.map(({ url, icon }: social) => (
                                          <li key={url}>
                                              <a target="_blank" href={url} className={icon}></a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                </div>

                                <CartIconNotification url={"#"} title={"View your shopping cart"} cartCount={"1"} />
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