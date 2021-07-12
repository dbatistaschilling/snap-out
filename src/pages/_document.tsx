import Document, { Html, Head, Main, NextScript } from "next/document";
import { HeadComponent } from '../components'

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
          <script type="text/javascript" src="assets/js/jquery-core.js" async defer></script>
          <script type="text/javascript" src="assets/js/jquery-scripts.js" async defer></script>
          <script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js" async defer></script>
          <script type="text/javascript" src="assets/js/jquery.magnific-popup.min.js" async defer></script>
          <script type="text/javascript" src="assets/masterslider/masterslider.min.js" async defer></script>
          <script type="text/javascript" src="assets/owl-carousel/owl.carousel.min.js" async defer></script>
          <script type="text/javascript" src="assets/js/volcanno.include.js" async defer></script>
        </body>
      </Html>
    )
  }
}
