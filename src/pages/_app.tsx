import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react';
import Layout from '../themes/Layout'

export type Props = {
  reload: string
}

type MyAppProps = AppProps & {
  props: Props
}

function MyApp({ Component, pageProps, router, props }: MyAppProps) {

  const [menuActive, setMenuActive] = useState(true)

  useEffect(() => {
    if ((router.pathname === '/' || router.pathname === `${process.env.BACKEND_URL}/`) && !props.reload) {
      setCookie(null, 'RELOAD', 'true')
      checkReload()
    }
  }, [])

  useEffect(() => {
    console.log(router.pathname);

    if ((router.pathname === '/' || router.pathname === `${process.env.BACKEND_URL}/`)) {
      setMenuActive(true)
      checkReload()
    } else {
      setCookie(null, 'RELOAD', 'true')
      setMenuActive(false)
    }
  }, [router.pathname])

  const checkReload = () => {
    if (props.reload === 'true') {
      setCookie(null, 'RELOAD', 'false')
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

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const cookies = parseCookies(appContext.ctx)

  return {
    ...appProps,
    props: {
      reload: cookies.RELOAD
    }
  }
}

export default MyApp;