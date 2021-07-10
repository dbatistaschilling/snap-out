import React from 'react'
import {
  // PageBtn,
  PageContent,
  SectionTitle,
  Event,
  CustomBackground
} from '../components'

export const EventSection = () =>
<div id="events">
    <CustomBackground img={"bkg-img01"} />
    <PageContent
    pageContentClasses={"custom-background"}
    rowClasses={"mb-80"}
    // pageBtn={<PageBtn url={"#"} text={"View all dates"} />}
    >
    <SectionTitle title={"Le date del Tour Europeo"} />
    <div className="col-md-12">
        <div className="pi-events events-style-02">
            <Event
                subtitle={"Giovedì"}
                date={"6 agosto"}
                locationSubtitle={"Porto Cesareo"}
                locationUrl={"#"}
                locationText={"Myconos"}
                // tickets={[
                //     { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                //     { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                //     { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                // ]}
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
</div>