import React, { useEffect, useState } from 'react'
import { useMediaPredicate } from 'react-media-hook';

export const MasterSlider = () => {

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
  }, [isMobileScreen]);

  useEffect(() => {
    setIsLarge(isLargeScreen)
  }, [isLargeScreen]);

  return (
    <div id="home">
      <div id="masterslider-band" className="master-slider ms-skin-default slider-border">
        {
          isMobile ? (
            <div className="ms-slide">
              <img src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} data-src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" />
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
                <img src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} data-src={`assets/img/slider/musician-music-band-slide-01${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" />
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
                <img src="assets/masterslider/blank.gif" data-src={`assets/img/slider/musician-music-band-slide-02${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" />
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
                <img src="assets/masterslider/blank.gif" data-src={`assets/img/slider/musician-music-band-slide-03${isLarge ? '' : isMobile ? '-small' : '-medium'}.png${isLarge ? '?size=1920x1030' : isMobile ? '?size=345x477' : '?size=991x532'}`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry" />
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