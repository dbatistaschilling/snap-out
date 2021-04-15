import React from 'react'
import {
    MasterSlider,
    Section,
    CustomBackground,
    Event,
    EventDatesBtn,
    SectionTitle
} from '../components'


const IndexPage = () => (
  <>
    <MasterSlider />

    <div className="page-content">
        <div className="container">
            <div className="row">
                <Section url={"/"} image={"img/pics/img-01.jpg"} subject={"Tours"} />
                <Section url={"/"} image={"img/pics/img-02.jpg"} subject={"Music"} />
                <Section url={"/"} image={"img/pics/img-03.jpg"} subject={"Store"} />
            </div>
        </div>
    </div>

    <CustomBackground img={"bkg-img06"}/>

    <div className="page-content custom-background">
        <div className="container">

            <div className="row mb-80">

                <SectionTitle title={"European tour dates"} />

                <div className="col-md-12">
                    <div className="pi-events events-style-02">
                        <Event
                            subtitle={"Monday"}
                            date={"May 23"}
                            locationSubtitle={"Berlin, Germany"}
                            locationUrl={"/"}
                            locationText={"Arena Berlin"}
                            tickets={[
                                { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                                { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                                { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                            ]}
                        />
                        <Event
                            subtitle={"Wednesday"}
                            date={"May 25"}
                            locationSubtitle={"London. UK"}
                            locationUrl={"/"}
                            locationText={"The Underworld"}
                            tickets={[
                                { name: "Fan club", isSoldOut: true, ticketUrl: "/" },
                                { name: "Vip tickets", isSoldOut: false, ticketUrl: "/" },
                                { name: "Common", isSoldOut: false, ticketUrl: "/" },
                            ]}
                        />
                        <Event
                            subtitle={"Thursday"}
                            date={"Jun 02"}
                            locationSubtitle={"London, UK"}
                            locationUrl={"/"}
                            locationText={"The Macbeth"}
                            tickets={[
                                { name: "Fan club", isSoldOut: true, ticketUrl: "/" },
                                { name: "Vip tickets", isSoldOut: false, ticketUrl: "/" },
                                { name: "Common", isSoldOut: false, ticketUrl: "/" },
                            ]}
                        />
                        <Event
                            subtitle={"Friday"}
                            date={"Jun 03"}
                            locationSubtitle={"London, UK"}
                            locationUrl={"/"}
                            locationText={"The Old Blue Last"}
                            tickets={[
                                { name: "Fan club", isSoldOut: true, ticketUrl: "/" },
                                { name: "Vip tickets", isSoldOut: true, ticketUrl: "/" },
                                { name: "Common", isSoldOut: false, ticketUrl: "/" },
                            ]}
                        />
                        <Event
                            subtitle={"Friday"}
                            date={"Jun 03"}
                            locationSubtitle={"Budapest, Hungary"}
                            locationUrl={"/"}
                            locationText={"Budapest Park"}
                            tickets={[
                                { name: "Fan club", isSoldOut: true, ticketUrl: "/" },
                                { name: "Vip tickets", isSoldOut: true, ticketUrl: "/" },
                                { name: "Common", isSoldOut: false, ticketUrl: "/" },
                            ]}
                        />
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 centered">
                    <EventDatesBtn />
                </div>
            </div>
        </div>
    </div>

    <CustomBackground img={"bkg-img07"}/>

    <div className="page-content custom-background">
        <div className="container">
            <div className="row mb-80">

                <SectionTitle title={"Music"} />

                <div className="col-md-12">
                    <div className="carousel-container">
                        <div className="latest-portfolio-carousel owl-carousel">
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">live from london</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-1" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-1" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">rock stram vol.1</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-2" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-2" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-03.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">rocking star</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-3" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-3" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-04.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">live at berlin</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-4" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-4" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-05.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">Born to Rock</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-5" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-5" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-06.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">Musician Party</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-6" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-6" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-07.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">Go Loud Or Go Home</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-7" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-7" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="latest-portfolio-item clearfix">
                                    <div className="portfolio-item-container clearfix">
                                        <div className="portfolio-img">
                                            <a href="music-album-single-creative.html">
                                                <img src="img/pics/music-album-08.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                            </a>
                                        </div>
                                        <h3><a href="music-album-single-creative.html">Go Loud Or Go Home</a></h3>
                                        <ul className="portfolio-meta">
                                            <li><a href="band-store.html">Store</a></li>
                                            <li><a href="http://www.apple.com/lae/itunes/">iTunes</a></li>
                                            <li><a href="#audio-popup-8" className="listen-audio-popup-trigger">Listen</a></li>
                                        </ul>

                                        <div id="audio-popup-8" className="audio-popup mfp-hide">
                                            <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="page-content custom-background custom-section-padding bkg-img08 mb-130 bkg-border">

      <div className="container">

          <div className="row">
          </div>

      </div>
      </div>
      <div className="page-content">

      <div className="container">
          <div className="row">

              <div className="col-md-12 mb-0 centered">
    
                  <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                      <h2>Live at Coachella</h2>
                  </div>
              </div>

              <div className="col-md-1 hidden-xs">

              </div>

              <div className="col-md-10 centered">
                <iframe
                  src="https://www.youtube.com/embed/MOwhkVpwKn4"
                  width={100}
                  height={500}
                  frameBorder={0}
                  // webkitallowfullscreen
                  // mozallowfullscreen
                  // allowFullScreen
                />
              </div>

              <div className="col-md-1 hidden-xs">

              </div>
          </div>

      </div>
      </div>

      <div className="page-content custom-background custom-section-padding bkg-img09 mb-130 bkg-border">

      <div className="container">

          <div className="row">
          </div>

      </div>
      </div>
      <div className="page-content">

      <div className="container">
          <div className="row mb-40">

              <div className="col-md-12 mb-0 centered">
    
                  <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                      <h2>Featured store items</h2>
                  </div>
              </div>

              <div className="col-md-12 mb-0">
                  <div className="woocommerce">
                      <ul className="products">
                          <li className="product">
                              <a href="#" className="woocommerce-LoopProduct-link">
                                  <img src="img/shop/shop-item-01.jpg" alt="Placeholder" height="300" />
                                  <h3>Rockabilly shirt</h3>

                                  <span className="price">
                                      <span className="amount">
                                          <span>$</span>40</span>
                                  </span>
                              </a>
                              <a href="#" className="button">Add to cart</a>
                          </li>
                          <li className="product">
                              <a href="#" className="woocommerce-LoopProduct-link">
                                  <img src="img/shop/shop-item-02.jpg" alt="Placeholder" height="300" />
                                  <h3>rock ‘n roll</h3>

                                  <span className="price">
                                      <span className="amount">
                                          <span>$</span>40</span>
                                  </span>
                              </a>
                              <a href="#" className="button">Add to cart</a>
                          </li>
                          <li className="product">
                              <a href="#" className="woocommerce-LoopProduct-link">
                                  <img src="img/shop/shop-item-03.jpg" alt="Placeholder" height="300" />
                                  <h3>rock star</h3>

                                  <span className="price">
                                      <span className="amount">
                                          <span>$</span>40</span>
                                  </span>
                              </a>
                              <a href="#" className="button">Add to cart</a>
                          </li>
                          <li className="product">
                              <a href="#" className="woocommerce-LoopProduct-link">
                                  <img src="img/shop/shop-item-04.jpg" alt="Placeholder" height="300" />
                                  <h3>live at berlin</h3>

                                  <span className="price">
                                      <span className="amount">
                                          <span>$</span>40</span>
                                  </span>
                              </a>
                              <a href="#" className="button">Add to cart</a>
                          </li>
                      </ul>
                  </div>
              </div>

          </div>
          <div className="row">

              <div className="col-md-12 centered">
                  <a href="#" className="btn btn-center triggerAnimation animated centered" data-animate="fadeInUp">
                      <span>
                          Visit the store
                      </span>
                  </a>
              </div>
          </div>

      </div>
      </div>
      <div className="page-content custom-background custom-section-padding bkg-img10 mb-130 bkg-border">

      <div className="container">

          <div className="row">
          </div>

      </div>
      </div>

      <div className="page-content custom-background">
      <div className="container">

          <div className="row">

              <div className="col-md-12 mb-0 centered clearfix">
    
                  <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                      <h2>Latest buzz</h2>
                  </div>
              </div>

              <div className="col-md-12">
                  <div className="carousel-container">

                      <div className="latest-posts-carousel-03 owl-carousel">
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Live at coachella 2016</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Europe tour presale starts today</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-03.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Rock your mind - get your tickets</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Live at coachella 2016</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Europe tour presale starts today</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-03.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Rock your mind - get your tickets</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-01.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Live at coachella 2016</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-02.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Europe tour presale starts today</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="owl-item">
                              <div className="latest-post-item clearfix">
                                  <div className="post-container clearfix">
                                      <div className="post-media">
                                          <a href="news-single-creative-dark.html">
                                              <img src="img/blog/music-band-post-03.jpg" alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                                          </a>
                                      </div>

                                      <div className="post-body">
                                          <ul className="post-meta">
                                              <li className="post-author">By: <a href="">Musician</a></li>
                                              <li className="post-category"><a href="">Music</a></li>
                                              <li className="post-date">May 21</li>
                                          </ul>
                                          <h3><a href="news-single-creative-dark.html">Rock your mind - get your tickets</a></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </>
)

export default IndexPage
