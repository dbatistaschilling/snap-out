import React, { ReactNode } from 'react'
import { Footer, Header } from "../components"

type LayoutProps = {
    children?: ReactNode
    menuActive: boolean
    loader: boolean
}

const Layout = ({ children, menuActive, loader }: LayoutProps) =>
<div>
    <style global jsx>
    {` html { scroll-behavior: smooth; }`}
    </style>

    {
        loader && (
            <div id="loader">
                <div id="loading-status"></div>
            </div>
        )
    }

    <Header menuActive={menuActive} />

    {children}

    <Footer
        imgUrl={"/"}
        imgPath={"assets/img/svg/logo-snap-out.svg"}
        menuActive={menuActive}
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
        // newsLetterPopupMessage={"Sign up for our mailing list"}
        // newsLetterMessage={"Sign up for our mailing list"}
        // emailPlaceholderText={"Your email address.."}
        copyrightUrl={"#"}
        copyrightName={"Wymaze Srl"}
    />
</div>

export default Layout
