import React, { ReactNode, useEffect, useState } from 'react'
import { Header, Footer } from "../components"
import  { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact']
    const [menuActive, setMenuActive] = useState(true)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        function refreshPage(){
            window.location.reload();
        }
        const firstLoad = async (refreshPage: () => void) => {
            const localFirsLoad = await localStorage.getItem('firstLoad')
            if (!localFirsLoad || reload) {
                await localStorage.setItem('firstLoad', 'false')
                // router.push('/')
                // location.reload()
                refreshPage()
            }
        }
        firstLoad(refreshPage)

        if (!mainPage.some(section => router.asPath === section)) {
            setMenuActive(false)
            setReload(true)
        } else {
            setReload(false)
            setMenuActive(true)
        }
    }, [router.asPath])

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
