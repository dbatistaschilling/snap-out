import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../themes/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {

  const [menuActive, setMenuActive] = useState(true)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    initialPathValues()
  }, [router.pathname]);

  async function initialPathValues() {
    if (router.pathname === '/' && loader){
      await setTimeout(changeLoader, 4000)
    } else if (router.asPath.includes('#')) {
      router.replace('/')
      router.reload()
    } else {
      setMenuActive(false)
    }
  }

  const changeLoader = () => {
    setLoader(false)
  }

  return (
      <Layout menuActive={menuActive} loader={loader}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;