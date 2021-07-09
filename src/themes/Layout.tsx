import React, { ReactNode } from 'react'
import { Header, Footer } from "../components"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
    <div>
        <style global jsx>
        {` html { scroll-behavior: smooth; }`}
        </style>

        <div id="loader">
            <div id="loading-status"></div>
        </div>

        <Header />

        {children}

        <Footer
            imgUrl={"/"}
            imgPath={"img/svg/logo-snap-out.svg"}
            menuItems={[
                {
                    url: "#",
                    name: "Home"
                },
                {
                    url: "#aboutSnapOut",
                    name: "Sulla Band"
                },
                {
                    url: "#members",
                    name: "Membri"
                },
                {
                    url: "#events",
                    name: "Eventi"
                },
                {
                    url: "#media",
                    name: "Media"
                },
                {
                    url: "#contact",
                    name: "Contatto"
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
