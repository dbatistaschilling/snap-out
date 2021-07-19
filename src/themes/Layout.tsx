import React, { ReactNode, useEffect, useState } from 'react'
import { Header, Footer } from "../components"
import  { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    // const mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact']
    const [menuActive, setMenuActive] = useState(true)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        refreshPage()
    }, [])

    useEffect(() => {
        console.log(router);
        if (!(router.pathname === '/') &&
            !(router.pathname === `${process.env.BACKEND_URL}/`)) {
            setMenuActive(false)
            setReload(true)
        } else {
            setMenuActive(true)
        }
        refreshPage()
    }, [router.pathname])

    const refreshPage = async () => {
        const localFirsLoad = await localStorage.getItem('firstLoad')
        if (!localFirsLoad || reload) {
            await localStorage.setItem('firstLoad', 'false')
            setReload(false)
            router.reload()
        }
    }

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
