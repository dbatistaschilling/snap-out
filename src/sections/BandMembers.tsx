import React, { useContext } from 'react'
import {
  PageContent, TeamMember
} from '../components'
import Loader from "react-loader-spinner";
import { AppContext } from '../contexts/app-cotext'

export const BandMembersSection = () => {

    const { data } = useContext(AppContext)

    if (Object.keys(data.memberSection).length === 0) {
        return <div id="members">
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
        <div id="members">
            <br/>
            <br/>
            <br/>
            <br/>
            <PageContent>
                <div className="col-md-12 centered clearfix mb-0">
                    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                        <h2>{data.memberSection.title}</h2>
                    </div>
                </div>
                {
                    data.memberSection.members?.map(member => (
                        <TeamMember
                            key={member.id}
                            member={member}
                        />
                    ))
                }
                {/* <TeamMember
                img={"assets/img/pics/member1.png"}
                alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
                url={"/flavia-mazzetti"}
                name={"Flavia Mazzetti"}
                role={"Voce, Chitarra"}
                />
                <TeamMember
                img={"assets/img/pics/member3.png"}
                alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
                url={"/raul-ruggieri"}
                name={"Raul Ruggieri"}
                role={"Basso, tastiere, 2°voce"}
                />
                <TeamMember
                img={"assets/img/pics/member4.png"}
                alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
                url={"/laca-ruggieri"}
                name={"Laca Ruggieri"}
                role={"Batteria, violino, voce distorta"}
                />
                <TeamMember
                img={"assets/img/pics/member5.png"}
                alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
                url={"/luca-parente"}
                name={"Luca Parente"}
                role={"Chitarra, cori"}
                />
                <TeamMember
                img={"assets/img/pics/member2.png"}
                alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
                url={"/elisa-marsella"}
                name={"Elisa Marsella"}
                role={"Chitarra, tastiera, cori"}
                /> */}
            </PageContent>
        </div>
    )
}
