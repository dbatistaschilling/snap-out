import React from 'react'
import { DiscItem, PageContent, SectionTitle } from '../components'

export const AlbumsSection = () =>
<PageContent
    pageContentClasses={"custom-background"}
    rowClasses={"mb-80"}
>
  <SectionTitle title={"Music"} />
  <div className="col-md-12">
      <div className="carousel-container">
          <div className="latest-portfolio-carousel owl-carousel">
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-01.jpg"}
                  titleUrl={"#"}
                  title={"live from london"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-1"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-02.jpg"}
                  titleUrl={"#"}
                  title={"rock stram vol.1"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-2"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-03.jpg"}
                  titleUrl={"#"}
                  title={"rocking star"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-3"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-04.jpg"}
                  titleUrl={"#"}
                  title={"live at berlin"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-4"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-05.jpg"}
                  titleUrl={"#"}
                  title={"Born to Rock"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-5"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-06.jpg"}
                  titleUrl={"#"}
                  title={"Musician Party"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-6"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-07.jpg"}
                  titleUrl={"#"}
                  title={"Go Loud Or Go Home"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-7"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
              <DiscItem
                  albumImgUrl={"#"}
                  albumImgPath={"assets/img/pics/music-album-08.jpg"}
                  titleUrl={"#"}
                  title={"Just Rock"}
                  portfoliosMeta={[
                      { url: "/1", text: "Store" },
                      { url: "/2", text: "iTunes" }
                  ]}
                  audioId={"audio-popup-8"}
                  audioUrl={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}
              />
          </div>
      </div>
  </div>
</PageContent>