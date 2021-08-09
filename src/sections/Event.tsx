import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import {
  // PageBtn,
  PageContent,
  SectionTitle,
  Event,
  CustomBackground
} from '../components'
import { AppContext } from '../contexts/app-cotext'
import { EventType } from '../interfaces'

export const EventSection = () => {

    const { data } = useContext(AppContext)
    const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (data.sections.length > 0) {
          data.sections.find(section => {
            if (section.name === 'events') {
              setSectionTitle(section.title)
            }
          })
        }
    }, [data.sections])

    if (Object.keys(data.events).length === 0) {
        return <div id="events">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <PageContent>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader
                            type="Puff"
                            color="#e21f2f"
                            height={80}
                            width={80}
                        />
                        </div>
                    </PageContent>
                </div>
    }

    return (
        <div id="events">
            <CustomBackground img={"bkg-img01"} />
            <PageContent
            pageContentClasses={"custom-background"}
            rowClasses={"mb-80"}
            // pageBtn={<PageBtn url={"#"} text={"View all dates"} />}
            >
            <SectionTitle title={sectionTitle ? sectionTitle : ''} />
            <div className="col-md-12">
                <div className="pi-events events-style-02">
                    {
                        data.events?.map(({
                            id,
                            weekDay,
                            dayMonth,
                            city,
                            local
                        }: EventType) => (
                            <Event
                                key={id}
                                subtitle={weekDay!}
                                date={dayMonth!}
                                locationSubtitle={city!}
                                locationUrl={"#"}
                                locationText={local!}
                                // tickets={[
                                //     { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                                //     { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                                //     { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                                // ]}
                            />
                        ))
                    }
                    {/* <Event
                        subtitle={"Giovedì"}
                        date={"6 agosto"}
                        locationSubtitle={"Porto Cesareo"}
                        locationUrl={"#"}
                        locationText={"Myconos"}
                        tickets={[
                            { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                            { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                            { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                        ]}
                    /> */}
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
    )
}