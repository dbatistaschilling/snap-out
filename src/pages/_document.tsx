import Document, { Html, Head, Main, NextScript } from "next/document";
import { HeadComponent } from '../components'

export default class MyDocument extends Document {

  componentDidMount(){
    jQuery(document).ready(function ($) {
      'use strict';

      // MASTER SLIDER START
      VolcannoInclude.masterSliderInit("masterslider-band");

      // INCLUDE LATEST PORTFOLIO CAROUSEL
      VolcannoInclude.owlCarouselInit('latest-portfolio-carousel');

      // INCLUDE LATEST POSTS CAROUSEL
      VolcannoInclude.owlCarouselInit('latest-posts-carousel-03');

      // FOOTER NEWSLETTER
      VolcannoInclude.magnificPopupInit('newsletter-popup');

      // AUDIO POPUP
      VolcannoInclude.magnificPopupInit('audio-popup');
  });
  }

  render() {
    return (
      <Html>
        <Head>
          <HeadComponent />
          <script type="text/javascript" src="assets/js/jquery-core.js" defer></script>
          <script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js" defer></script>
          <script type="text/javascript" src="assets/js/jquery-scripts.js" defer></script>
          <script type="text/javascript" src="assets/js/jquery.magnific-popup.min.js" defer></script>
          <script type="text/javascript" src="assets/masterslider/masterslider.min.js" defer></script>
          <script type="text/javascript" src="assets/owl-carousel/owl.carousel.min.js" defer></script>
          <script type="text/javascript" src="assets/js/volcanno.include.js" defer></script>
        </Head>
        <body className="dark-theme music-band">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
