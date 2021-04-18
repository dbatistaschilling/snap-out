import React, { ReactNode } from 'react'
import { Header, Footer } from "../components"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        {/* <div id="loader">
            <div id="loading-status"></div>
        </div> */}

        <Header />

        {children}

        <Footer
            imgUrl={"#"}
            imgPath={"img/svg/musician-logo-red-white.svg"}
            menuItems={[
                {
                    url: "#",
                    name: "News"
                },
                {
                    url: "#",
                    name: "Music"
                },
                {
                    url: "#",
                    name: "Videos"
                },
                {
                    url: "#",
                    name: "Events"
                },
                {
                    url: "#",
                    name: "About"
                },
                {
                    url: "#",
                    name: "Contact"
                },
            ]}
            newsLetterPopupMessage={"Sign up for our mailing list"}
            newsLetterMessage={"Sign up for our mailing list"}
            emailPlaceholderText={"Your email address.."}
            copyrightUrl={"#"}
            copyrightName={"Wymaze Srl"}
        />
  </div>
)

export default Layout
