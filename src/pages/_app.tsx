import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { AppProvider } from '../contexts/app-cotext';
import Layout from '../themes/Layout';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

  return (
    <AppProvider>
      <Layout menuActive={menuActive} >
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp;