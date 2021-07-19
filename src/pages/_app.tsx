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
    if (router.pathname === '/' && !props.reload) {
      setCookie(null, 'RELOAD', 'true', {
        path: '/'
      })
      checkReload()
    }
  }, [])

  useEffect(() => {
    if (router.pathname !== '/') {
      setCookie(null, 'RELOAD', 'true', {
        path: '/'
      })
      setMenuActive(false)
    } else {
      setMenuActive(true)
      checkReload()
    }
  }, [router.pathname])

  const checkReload = () => {
    if (props.reload === 'true') {
      setCookie(null, 'RELOAD', 'false', {
        path: '/'
      })
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