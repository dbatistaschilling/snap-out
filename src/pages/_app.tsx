import type { AppProps } from 'next/app';
// import Layout from '../themes/Layout';
// import AppProvider from '../contexts/app-cotext';
// import MenuProvider from '../contexts/menu-cotext';
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../styles/styles.css';
import "../styles/slider.css"

const AppProvider = dynamic(import("../contexts/app-cotext"));
const MenuProvider = dynamic(import("../contexts/menu-cotext"));
const Layout = dynamic(import("../themes/Layout"));

function MyApp({ Component, pageProps, router }: AppProps) {

  const [menuActive, setMenuActive] = useState(true)

  useEffect(() => {
    onRouteChange();
  }, [router.pathname]);

  async function onRouteChange() {
    if (router.pathname === '/' && !menuActive) {
      setMenuActive(true)
      router.replace('/')
      router.reload()
    } else if (router.pathname !== '/')  {
      setMenuActive(false)
    };
  }

  const _errorBoundary = (params: JSX.Element) => {
    try {
      return params
    } catch(err) {
      router.replace('/')
      router.reload()
    }
    // return params
  }

  return (
    <>
      <AppProvider>
        <MenuProvider>
          <Layout menuActive={menuActive} >
            <Component {...pageProps} />
          </Layout>
        </MenuProvider>
      </AppProvider>
      {/* {
        _errorBoundary(
          <AppProvider>
            <MenuProvider>
              <Layout menuActive={menuActive} >
                <Component {...pageProps} />
              </Layout>
            </MenuProvider>
          </AppProvider>
        )
      } */}
    </>
  )
}

export default MyApp;