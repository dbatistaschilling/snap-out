import type { AppProps } from 'next/app';
import Script from 'next/script';
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
    <>
      <Script
        src="assets/js/volcanno.include.js"
      />
      <Script
        src="assets/js/jquery-core.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/jquery-scripts.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/bootstrap/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/masterslider/masterslider.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/owl-carousel/owl.carousel.min.js"
        strategy="beforeInteractive"
      />
      <Layout menuActive={menuActive} >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;