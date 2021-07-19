import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../themes/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {

  const [menuActive, setMenuActive] = useState(true)
  useEffect(() => storePathValues, [router.pathname]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    if (!prevPath) {
      storage.setItem("prevPath", 'null');
    } else {
      storage.setItem("prevPath", prevPath);
    }
    storage.setItem("currentPath", globalThis.location.pathname);

    checkMenu(storage)
    checkReload(storage)
  }

  const checkReload = (storage: Storage) => {
    const prevPath = storage.getItem("prevPath");
    const currentPath = storage.getItem("currentPath");

    console.log('prevPath', prevPath);
    console.log('currentPath', currentPath);

    if (prevPath === 'null' || (prevPath !== '/' && currentPath === '/')) {
      router.replace('/')
      router.reload()
    }
  }

  const checkMenu = (storage: Storage) => {
    const currentPath = storage.getItem("currentPath");
    if (currentPath === '/'){
      setMenuActive(true)
    } else {
      setMenuActive(false)
    }
  }

  return (
      <Layout menuActive={menuActive}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;