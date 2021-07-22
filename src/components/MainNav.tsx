import React from 'react';
import { MainNavLinks } from "./MainNavLinks";

type props = {
  logoUrl: string
  logoImgPath: string
  menuActive: boolean
}

export const MainNav = ({
  logoUrl,
  logoImgPath,
  menuActive
}: props) =>
  <div className="main-nav">
    <nav className="navbar navbar-default nav-left pi-mega">
        <div className="navbar-header">

            <div id="logo">
                {
                    process.env.NODE_ENV === 'production' ? (
                        <a href={`${logoUrl}`}>
                            <img src={logoImgPath} alt="gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti."/>
                        </a>
                    ) : (
                        <a href={logoUrl}>
                            <img src={logoImgPath} alt="gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti."/>
                        </a>
                    )
                }
            </div>

            <button className="hamburger navbar-toggle hamburger--slider-r" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
{/*
        <div id="search">
            <form>
                <input className="search-submit" type="submit" />
                <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />
            </form>
        </div> */}
        {
            menuActive && (
                <MainNavLinks items={[
                    {
                        itemClasses: "current-menu-item",
                        hasChildren: false,
                        name: "Home",
                        children: [
                            // {
                            //     url: "#",
                            //     childName: "Music artist"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Music band"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Music blog"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Band store"
                            // },
                        ],
                        noChildrenUrl: "#"
                    },
                    {
                        itemClasses: null,
                        hasChildren: false,
                        name: "Sulla Band",
                        children: [
                            // {
                            //     url: "#",
                            //     childName: "About the band"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "About artist band member"
                            // },
                        ],
                        noChildrenUrl: "#aboutSnapOut"
                    },
                    {
                        itemClasses: null,
                        hasChildren: false,
                        name: "Membri",
                        children: [
                            // {
                            //     url: "#",
                            //     childName: "About the band"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "About artist band member"
                            // },
                        ],
                        noChildrenUrl: "#members"
                    },
                    {
                        itemClasses: null,
                        hasChildren: false,
                        name: "Eventi",
                        children: [
                            // {
                            //     url: "#",
                            //     childName: "News creative dark"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Event single creative"
                            // },
                        ],
                        noChildrenUrl: "#events"
                    },
                    {
                        itemClasses: null,
                        hasChildren: false,
                        name: "Media",
                        children: [
                            // {
                            //     url: "#",
                            //     childName: "Music album view"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Music grid view"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Music album single creative"
                            // },
                            // {
                            //     url: "#",
                            //     childName: "Video grid"
                            // },
                        ],
                        noChildrenUrl: "#media"
                    },
                    {
                        itemClasses: null,
                        hasChildren: false,
                        name: "Contatto",
                        children: null,
                        noChildrenUrl: "#contact"
                    },
                    // {
                    //     itemClasses: null,
                    //     hasChildren: true,
                    //     name: "Shop",
                    //     children: [
                    //         {
                    //             url: "#",
                    //             childName: "Band store"
                    //         },
                    //         {
                    //             url: "#",
                    //             childName: "Shop products full"
                    //         },
                    //         {
                    //             url: "#",
                    //             childName: "Shop products sidebar left"
                    //         },
                    //         {
                    //             url: "#",
                    //             childName: "Shop products sidebar right"
                    //         },
                    //         {
                    //             url: "#",
                    //             childName: "Shop product single"
                    //         },
                    //     ],
                    //     noChildrenUrl: null
                    // },
                ]} />
            )
        }
    </nav>
  </div>