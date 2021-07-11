import React, { ReactNode, useEffect, useState } from 'react'
import { Header, Footer } from "../components"
import { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact']
    const [menuActive, setMenuActive] = useState(true)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (router.asPath === '/') {
            setLoader(true)
        }
        (!mainPage.some(section => router.asPath === section)) ?
            setMenuActive(false) : setMenuActive(true)
        setTimeout(cancelLoader, 3000)
    }, [router.asPath])

    const cancelLoader = () => {
        setLoader(false)
    }

    return (
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
                imgPath={"img/svg/logo-snap-out.svg"}
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
