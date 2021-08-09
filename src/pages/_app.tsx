import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../components/componentStyles.css'
import Layout from '../themes/Layout';
import AppProvider from '../contexts/app-cotext';
import MenuProvider from '../contexts/menu-cotext';

// import loadable from '@loadable/component';

// const AppProvider = loadable(() => import('../contexts/app-cotext'))
// const MenuProvider = loadable(() => import('../contexts/menu-cotext'))
// const Layout = loadable(() => import('../themes/Layout'))


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
      params
    } catch(err) {
      router.replace('/')
      router.reload()
    }
    return params
  }

  return (
    <>
      {
        _errorBoundary(
          <AppProvider>
            <MenuProvider>
              <Layout menuActive={menuActive} >
                <Component {...pageProps} />
              </Layout>
            </MenuProvider>
          </AppProvider>
        )
      }
    </>
  )
}

export default MyApp;