import React, { ReactNode, useContext, useEffect } from 'react'
import { Footer, Header } from "../components"
import { AppContext } from '../contexts/app-cotext'

type LayoutProps = {
    children?: ReactNode
    menuActive: boolean
}

const Layout = ({ children, menuActive }: LayoutProps) => {

    const { data, notLoading } = useContext(AppContext)
    useEffect(() => {
        // const fetchVolcanno = async () => {
        //     const volcanno = (await import('../../public/assets/js/volcanno.include')).default
        //     volcanno()
        // }
        // if (notLoading) {
        //     fetchVolcanno()
        // }
    }, [notLoading])

    return (
        <div>
            <style global jsx>
            {` html { scroll-behavior: smooth; }`}
            </style>
            <div id="loader">
                <div id="loading-status"></div>
            </div>

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
    )
}

export default Layout
