import Document, { Html, Head, Main, NextScript } from "next/document";
// import loadable from '@loadable/component';
// import { HeadComponent } from '../components'
import dynamic from "next/dynamic";
const HeadComponent = dynamic(import("../components/HeadComponent"));

// const HeadComponent = loadable(() => import('../components/HeadComponent'))

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <HeadComponent />
        </Head>
        <body className="dark-theme music-band">
          <Main />
          <NextScript />
          {/* <script type="text/javascript" src="assets/js/jquery-core.js" defer></script>
          <script type="text/javascript" src="assets/js/jquery-scripts.js" defer></script>
          <script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js" defer></script>
          <script type="text/javascript" src="assets/js/jquery.magnific-popup.min.js" defer></script>
          <script type="text/javascript" src="assets/masterslider/masterslider.min.js" defer></script>
          <script type="text/javascript" src="assets/owl-carousel/owl.carousel.min.js" defer></script>
          <script type="text/javascript" src="assets/js/volcanno.include.js" defer></script> */}
          <script type="text/javascript" src="assets/masterslider/masterslider.min.js" defer></script>
          <script type="text/javascript" src="assets/owl-carousel/owl.carousel.min.js" defer></script>
          <script type="text/javascript" src="assets/js/volcanno.include.js" defer></script>
        </body>
      </Html>
    )
  }
}
