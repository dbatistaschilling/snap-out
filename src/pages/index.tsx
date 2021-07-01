import React from 'react'
import {
    MasterSlider,
    About,
    // Section,
    CustomBackground,
    Event,
    PageBtn,
    SectionTitle,
    DiscItem,
    WooCommerce,
    PageContent,
    BuzzItem
} from '../components'


const IndexPage = () => (
  <>
    <MasterSlider />

    {/* <PageContent>
        <Section url={"#"} image={"img/pics/img-01.jpg"} subject={"Tours"} />
        <Section url={"#"} image={"img/pics/img-02.jpg"} subject={"Music"} />
        <Section url={"#"} image={"img/pics/img-03.jpg"} subject={"Store"} />
    </PageContent>

    <CustomBackground img={"bkg-img06"}/> */}

    <PageContent>
        <About
            title={'Riguardo Snap–Out'}
            paragraphs={[
                {
                    key: '1',
                    paragraph: `
                    Il nome della Band dopo la pandemia, indica la rinascita dopo un momento oscuro. Sono un gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti.`
                },
                {
                    key: '2',
                    paragraph: `
                    Nella loro carriera il gruppo ha vinto sia premi della critica che primi premi in concorsi nazionali su tematiche sociali suonando su palchi importanti come Palatlantico Live.  Nella loro giovane carriera hanno già consolidato più di 100 esibizioni in locali importanti della realtà laziale ed italiana suonando davanti a pubblici di migliaia di persone.`
                },
                {
                    key: '3',
                    paragraph: `
                    Gli Snap – Out sono sensibili ai problemi sociali, all’integrazione, alla inclusione ed a tutte le cause delle persone fragili, uno dei problemi che per loro è prioritario è quello di decidere di vivere in un mondo migliore, non distrutto dall’inquinamento e dalle opere umane.`
                },
                {
                    key: '4',
                    paragraph: `
                    Il gruppo è la testimonianza di una inclusione riuscita avendo tra i suoi membri un ragazzo Asperger. Tra i loro idoli,  Matthew Bellamy, Thom Yorke, Flea, John Frusciante, Greta Thunberg.`
                },
            ]}
        />
    </PageContent>

    <PageContent
        pageContentClasses={"custom-background"}
        rowClasses={"mb-80"}
        pageBtn={<PageBtn url={"#"} text={"View all dates"} />}
    >
        <SectionTitle title={"Le date del Tour Europeo"} />
        <div className="col-md-12">
            <div className="pi-events events-style-02">
                <Event
                    subtitle={"Monday"}
                    date={"May 23"}
                    locationSubtitle={"Berlin, Germany"}
                    locationUrl={"#"}
                    locationText={"Arena Berlin"}
                    tickets={[
                        { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                        { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                        { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                    ]}
                />
                {/* <Event
                    subtitle={"Wednesday"}
                    date={"May 25"}
                    locationSubtitle={"London. UK"}
                    locationUrl={"#"}
                    locationText={"The Underworld"}
                    tickets={[
                        { name: "Fan club", isSoldOut: true, ticketUrl: "#" },
                        { name: "Vip tickets", isSoldOut: false, ticketUrl: "#" },
                        { name: "Common", isSoldOut: false, ticketUrl: "#" },
                    ]}
                />
                <Event
                    subtitle={"Thursday"}
                    date={"Jun 02"}
                    locationSubtitle={"London, UK"}
                    locationUrl={"#"}
                    locationText={"The Macbeth"}
                    tickets={[
                        { name: "Fan club", isSoldOut: true, ticketUrl: "#" },
                        { name: "Vip tickets", isSoldOut: false, ticketUrl: "#" },
                        { name: "Common", isSoldOut: false, ticketUrl: "#" },
                    ]}
                />
                <Event
                    subtitle={"Friday"}
                    date={"Jun 03"}
                    locationSubtitle={"London, UK"}
                    locationUrl={"#"}
                    locationText={"The Old Blue Last"}
                    tickets={[
                        { name: "Fan club", isSoldOut: true, ticketUrl: "#" },
                        { name: "Vip tickets", isSoldOut: true, ticketUrl: "#" },
                        { name: "Common", isSoldOut: false, ticketUrl: "#" },
                    ]}
                />
                <Event
                    subtitle={"Friday"}
                    date={"Jun 03"}
                    locationSubtitle={"Budapest, Hungary"}
                    locationUrl={"#"}
                    locationText={"Budapest Park"}
                    tickets={[
                        { name: "Fan club", isSoldOut: true, ticketUrl: "#" },
                        { name: "Vip tickets", isSoldOut: true, ticketUrl: "#" },
                        { name: "Common", isSoldOut: false, ticketUrl: "#" },
                    ]}
                /> */}
            </div>
        </div>
    </PageContent>

    <CustomBackground img={"bkg-img07"}/>

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
                        albumImgPath={"img/pics/music-album-01.jpg"}
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
                        albumImgPath={"img/pics/music-album-02.jpg"}
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
                        albumImgPath={"img/pics/music-album-03.jpg"}
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
                        albumImgPath={"img/pics/music-album-04.jpg"}
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
                        albumImgPath={"img/pics/music-album-05.jpg"}
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
                        albumImgPath={"img/pics/music-album-06.jpg"}
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
                        albumImgPath={"img/pics/music-album-07.jpg"}
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
                        albumImgPath={"img/pics/music-album-08.jpg"}
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

    <CustomBackground img={"bkg-img08"}/>

    <PageContent>
        <SectionTitle title={"Live at Coachella"} />
        <div className="col-md-1 hidden-xs"></div>
        <div className="col-md-10 centered">
            <iframe
                src="https://www.youtube.com/embed/MOwhkVpwKn4"
                width="70%"
                height={500}
                frameBorder={0}
                // webkitAllowFullScreen={"true"}
                // mozallowfullscreen={"true"}
                allowFullScreen={true}
            />
        </div>
        <div className="col-md-1 hidden-xs"></div>
    </PageContent>

    <CustomBackground img={"bkg-img09"}/>

    <PageContent rowClasses={"mb-40"} pageBtn={<PageBtn url={"#"} text={"Visit the store"} />}>
        <SectionTitle title={"Featured store items"} />
        <WooCommerce
            products={[
                {
                    url: "#",
                    imgPath: "img/shop/shop-item-02.jpg",
                    name: "rock ‘n roll",
                    currency: "$",
                    price: "40"
                },
                {
                    url: "#",
                    imgPath: "img/shop/shop-item-03.jpg",
                    name: "rock star",
                    currency: "$",
                    price: "40"
                },
                {
                    url: "#",
                    imgPath: "img/shop/shop-item-04.jpg",
                    name: "live at berlin",
                    currency: "$",
                    price: "40"
                },
                {
                    url: "#",
                    imgPath: "img/shop/shop-item-05.jpg",
                    name: "Champs Shirt",
                    currency: "$",
                    price: "40"
                },
            ]}
        />
    </PageContent>

    <CustomBackground img={"bkg-img10"}/>

    <PageContent pageContentClasses={"custom-background"}>

        <SectionTitle title={"LATEST BUZZ"} />

        <div className="col-md-12">
            <div className="carousel-container">
                <div className="latest-posts-carousel-03 owl-carousel">
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-01.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Live at coachella 2016"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-02.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Europe tour presale starts today"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-03.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Rock your mind - get your tickets"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-01.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Live at coachella 2016"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-02.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Europe tour presale starts today"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-03.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Rock your mind - get your tickets"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-01.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Live at coachella 2016"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-02.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Europe tour presale starts today"}
                    />
                    <BuzzItem
                        url={"#"}
                        img={"img/blog/music-band-post-03.jpg"}
                        authorUrl={"#"}
                        authorName={"Musician"}
                        categoryUrl={"#"}
                        categoryName={"Music"}
                        date={"May 21"}
                        eventUrl={"#"}
                        eventName={"Rock your mind - get your tickets"}
                    />
                </div>
            </div>
        </div>
    </PageContent>
  </>
)

export default IndexPage
