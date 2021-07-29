import React, { ReactNode, useEffect, useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { Footer, Header } from "../components"

type LayoutProps = {
    children?: ReactNode
    menuActive: boolean
}

const Layout = ({ children, menuActive }: LayoutProps) => {

    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
    const isMobileScreen = useMediaPredicate("(max-width: 991px)");

    useEffect(() => {
        setIsMobile(isMobileScreen)
    }, []);

    useEffect(() => {
        setIsMobile(isMobileScreen)
    }, [isMobileScreen]);

    return (
        <div>
            <style global jsx>
            {` html { scroll-behavior: smooth; }`}
            </style>
            <div id="loader">
                <div id="loading-status"></div>
            </div>

            <Header menuActive={menuActive} />

            <div className={`${isMobile ? 'body-margin-mobile' : ''}`}>
                {children}
            </div>

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
    )
}

export default Layout
