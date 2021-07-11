import React from 'react'
import {
  PageContent, TeamMember
} from '../components'

export const BandMembersSection = () =>
<div id="members">
    <br/>
    <br/>
    <br/>
    <br/>
    <PageContent>
        <div className="col-md-12 centered clearfix mb-0">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>Membri della band</h2>
            </div>
        </div>
        <TeamMember
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
        />
    </PageContent>
</div>