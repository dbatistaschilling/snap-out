import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../themes/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {

  const [menuActive, setMenuActive] = useState(true)

  useEffect(() => {
    const reload = localStorage.getItem('RELOAD')
    if ((router.pathname === '/' || router.pathname === `${process.env.BACKEND_URL}/`) && !reload) {
      // setCookie(null, 'RELOAD', 'true')
      localStorage.setItem('RELOAD', 'true')
      checkReload()
    }
  }, [])

  useEffect(() => {
    console.log(router.pathname);
    if ((router.pathname === '/' || router.pathname === `${process.env.BACKEND_URL}/`)) {
      setMenuActive(true)
      checkReload()
    } else {
      // setCookie(null, 'RELOAD', 'true')
      localStorage.setItem('RELOAD', 'true')
      setMenuActive(false)
    }
  }, [router.pathname])

  const checkReload = () => {
    const reload = localStorage.getItem('RELOAD')
    if (reload === 'true') {
      // setCookie(null, 'RELOAD', 'false')
      localStorage.setItem('RELOAD', 'false')
      if (process.env.NODE_ENV === 'production') {
        router.replace(`${process.env.BACKEND_URL}/`)
      } else {
        router.replace('/')
      }
      router.reload()
    }
  }

  return (
      <Layout menuActive={menuActive}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;