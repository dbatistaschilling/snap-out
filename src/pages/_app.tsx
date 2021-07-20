import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../themes/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {

  const [menuActive, setMenuActive] = useState(true)

  useEffect(() => {
    initialPathValues()
  }, [router.pathname]);

  async function initialPathValues() {
    if (router.pathname === '/') {
      setMenuActive(true)
    } else {
      setMenuActive(false)
    }
    if (router.asPath.includes('#')) {
      router.replace('/')
      router.reload()
    }
  }

  return (
      <Layout menuActive={menuActive} >
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;