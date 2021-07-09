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
        img={"img/pics/member1.png"}
        alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
        url={"/FlaviaMazzetti"}
        name={"Flavia Mazzetti"}
        role={"Voce, Chitarra"}
        />
        <TeamMember
        img={"img/pics/member3.png"}
        alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
        url={"/RaulRuggieri"}
        name={"Raul Ruggieri"}
        role={"Basso, tastiere, 2°voce"}
        />
        <TeamMember
        img={"img/pics/member4.png"}
        alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
        url={"/LacaRuggieri"}
        name={"Laca Ruggieri"}
        role={"Batteria, violino, voce distorta"}
        />
        <TeamMember
        img={"img/pics/member5.png"}
        alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
        url={"/LucaParente"}
        name={"Luca Parente"}
        role={"Chitarra, cori"}
        />
        <TeamMember
        img={"img/pics/member2.png"}
        alt={"Musician HTML template for music industry - musicians, bands and music blogs"}
        url={"/ElisaMarsella"}
        name={"Elisa Marsella"}
        role={"Chitarra, tastiera, cori"}
        />
    </PageContent>
</div>