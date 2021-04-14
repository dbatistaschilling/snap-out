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
          <script src="js/jquery-core.js"></script>
          <script src="bootstrap/js/bootstrap.min.js"></script>
          <script src="js/jquery-scripts.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="masterslider/masterslider.min.js"></script>
          <script src="owl-carousel/owl.carousel.min.js"></script>
          <script src="js/volcanno.include.js"></script>
        </body>
      </Html>
    )
  }
}
