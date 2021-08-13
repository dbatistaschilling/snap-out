import React, { useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';

const MasterSlider = () => {

  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const [isLarge, setIsLarge] = useState<boolean | undefined>(undefined)

  const isMobileScreen = useMediaPredicate("(max-width: 767px)");
  const isLargeScreen = useMediaPredicate("(min-width: 991px)");

  useEffect(() => {
      setIsLarge(isLargeScreen)
      setIsMobile(isMobileScreen)
  }, []);

  useEffect(() => {
    setIsLarge(isLargeScreen)
    setIsMobile(isMobileScreen)
  }, [isMobileScreen, isLargeScreen]);

  return (
    <div id="home">
      <div id="masterslider-band" className="master-slider ms-skin-default slider-border">
        {
          isMobile ? (
            <div className="ms-slide">
              {/* <LazyLoadImage
                alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                width={345}
                height={477}
                src={"assets/img/slider/musician-music-band-slide-01-small.png"}
              /> */}
              <img
                src={`assets/img/slider/musician-music-band-slide-01-small.png`}
                data-src={`assets/img/slider/musician-music-band-slide-01-small.png`}
                alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                width={345}
                height={477}
              />
              <h2 className="ms-layer pi-caption" style={{left: '350px', top: '350px'}} data-type="text" data-effect="bottom(20)" data-duration={500} data-hide-effect="fade" data-delay={1700}>
                Snap - Out
              </h2>
              <h2 className="ms-layer pi-caption-02" style={{left: '200px', top: '475px'}} data-type="text" data-effect="fade" data-duration={500} data-hide-effect="fade" data-delay={1400}>
                GRUPPO DI ROCK INDIE ITALIANO
              </h2>
              {/* <a href="/" className="ms-layer pi-button-02" style={{left: '490px', top: '585px'}} data-type="text" data-effect="top(20)" data-duration={500} data-hide-effect="fade" data-delay={1600}>
                Visualizza le date
              </a> */}
            </div>
          ) : (
            <>
              <div className="ms-slide">
                {
                  isLarge ? (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={1920}
                    //   height={1030}
                    //   src={"assets/img/slider/musician-music-band-slide-01.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-01.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-01.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={1920}
                      height={1030}
                    />
                  ) : (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={991}
                    //   height={532}
                    //   src={"assets/img/slider/musician-music-band-slide-01-medium.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-01-medium.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-01-medium.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={991}
                      height={532}
                    />
                  )
                }
                {/* <img src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} data-src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" /> */}
                <h2 className="ms-layer pi-caption" style={{left: '350px', top: '350px'}} data-type="text" data-effect="bottom(20)" data-duration={500} data-hide-effect="fade" data-delay={1700}>
                  Snap - Out
                </h2>
                <h2 className="ms-layer pi-caption-02" style={{left: '200px', top: '475px'}} data-type="text" data-effect="fade" data-duration={500} data-hide-effect="fade" data-delay={1400}>
                  GRUPPO DI ROCK INDIE ITALIANO
                </h2>
                {/* <a href="/" className="ms-layer pi-button-02" style={{left: '490px', top: '585px'}} data-type="text" data-effect="top(20)" data-duration={500} data-hide-effect="fade" data-delay={1600}>
                  Visualizza le date
                </a> */}
              </div>
              <div className="ms-slide">
                {
                  isLarge ? (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={1920}
                    //   height={1030}
                    //   src={"assets/img/slider/musician-music-band-slide-02.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-02.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-02.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={1920}
                      height={1030}
                    />
                  ) : (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={991}
                    //   height={532}
                    //   src={"assets/img/slider/musician-music-band-slide-02-medium.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-02-medium.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-02-medium.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={991}
                      height={532}
                    />
                  )
                }
                {/* <img src="assets/masterslider/blank.gif" data-src={`assets/img/slider/musician-music-band-slide-02${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" /> */}
                <h2 className="ms-layer pi-caption" style={{left: '350px', top: '350px'}} data-type="text" data-effect="bottom(20)" data-duration={500} data-hide-effect="fade" data-delay={1700}>
                  Snap - Out
                </h2>
                <h2 className="ms-layer pi-caption-02" style={{left: '200px', top: '475px'}} data-type="text" data-effect="fade" data-duration={500} data-hide-effect="fade" data-delay={1400}>
                  GRUPPO DI ROCK INDIE ITALIANO
                  {/* ANNUNCIATE LE DATE DEL TOUR EUROPEO */}
                </h2>
                {/* <a href="/" className="ms-layer pi-button-02" style={{left: '490px', top: '585px'}} data-type="text" data-effect="top(20)" data-duration={500} data-hide-effect="fade" data-delay={1600}>
                  Visualizza le date
                </a> */}
              </div>
              <div className="ms-slide">
                {
                  isLarge ? (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={1920}
                    //   height={1030}
                    //   src={"assets/img/slider/musician-music-band-slide-03.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-03.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-03.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={1920}
                      height={1030}
                    />
                  ) : (
                    // <LazyLoadImage
                    //   alt={"Masterslide picture - Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"}
                    //   width={991}
                    //   height={532}
                    //   src={"assets/img/slider/musician-music-band-slide-03-medium.png"}
                    // />
                    <img
                      src={`assets/img/slider/musician-music-band-slide-03-medium.png`}
                      data-src={`assets/img/slider/musician-music-band-slide-03-medium.png`}
                      alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"
                      width={991}
                      height={532}
                    />
                  )
                }
                {/* <img src="assets/masterslider/blank.gif" data-src={`assets/img/slider/musician-music-band-slide-03${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" /> */}
                <h2 className="ms-layer pi-caption" style={{left: '350px', top: '350px'}} data-type="text" data-effect="bottom(20)" data-duration={500} data-hide-effect="fade" data-delay={1700}>
                  Snap - Out
                </h2>
                <h2 className="ms-layer pi-caption-02" style={{left: '200px', top: '475px'}} data-type="text" data-effect="fade" data-duration={500} data-hide-effect="fade" data-delay={1400}>
                  GRUPPO DI ROCK INDIE ITALIANO
                  {/* ANNUNCIATE LE DATE DEL TOUR EUROPEO */}
                </h2>
                {/* <a href="/" className="ms-layer pi-button-02" style={{left: '490px', top: '585px'}} data-type="text" data-effect="top(20)" data-duration={500} data-hide-effect="fade" data-delay={1600}>
                  Visualizza le date
                </a> */}
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default MasterSlider