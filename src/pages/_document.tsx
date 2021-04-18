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
          <script src="js/jquery-core.js" defer></script>
          <script src="bootstrap/js/bootstrap.min.js" defer></script>
          <script src="js/jquery-scripts.js" defer></script>
          <script src="js/jquery.magnific-popup.min.js" defer></script>
          <script src="masterslider/masterslider.min.js" defer></script>
          <script src="owl-carousel/owl.carousel.min.js" defer></script>
          <script src="js/volcanno.include.js" defer></script>
        </body>
      </Html>
    )
  }
}
