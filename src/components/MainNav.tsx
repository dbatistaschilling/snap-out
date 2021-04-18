import React from 'react'
import { MainNavLinks } from "./MainNavLinks"

type props = {
  logoUrl: string
  logoImgPath: string
}

export const MainNav = ({
  logoUrl,
  logoImgPath
}: props) =>
  <div className="main-nav">
    <nav className="navbar navbar-default nav-left pi-mega">
        <div className="navbar-header">

            <div id="logo">
                <a href={logoUrl}>
                    <img src={logoImgPath} alt="Musician HTML template for music industry - musicians, bands and music blogs"/>
                </a>
            </div>

            <button className="hamburger navbar-toggle hamburger--slider-r" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>  
        </div>

        <div id="search">
            <form>
                <input className="search-submit" type="submit" />
                <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />
            </form>
        </div>

        <MainNavLinks items={[
            {
                itemClasses: "current-menu-item",
                hasChildren: true,
                name: "Home",
                children: [
                    {
                        url: "#",
                        childName: "Music artist"
                    },
                    {
                        url: "#",
                        childName: "Music band"
                    },
                    {
                        url: "#",
                        childName: "Music blog"
                    },
                    {
                        url: "#",
                        childName: "Band store"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: true,
                name: "About",
                children: [
                    {
                        url: "#",
                        childName: "About the band"
                    },
                    {
                        url: "#",
                        childName: "About artist band member"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: true,
                name: "Media",
                children: [
                    {
                        url: "#",
                        childName: "Music album view"
                    },
                    {
                        url: "#",
                        childName: "Music grid view"
                    },
                    {
                        url: "#",
                        childName: "Music album single creative"
                    },
                    {
                        url: "#",
                        childName: "Video grid"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: true,
                name: "Events",
                children: [
                    {
                        url: "#",
                        childName: "News creative dark"
                    },
                    {
                        url: "#",
                        childName: "Event single creative"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: true,
                name: "News",
                children: [
                    {
                        url: "#",
                        childName: "News creative dark"
                    },
                    {
                        url: "#",
                        childName: "News single creative dark"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: true,
                name: "Shop",
                children: [
                    {
                        url: "#",
                        childName: "Band store"
                    },
                    {
                        url: "#",
                        childName: "Shop products full"
                    },
                    {
                        url: "#",
                        childName: "Shop products sidebar left"
                    },
                    {
                        url: "#",
                        childName: "Shop products sidebar right"
                    },
                    {
                        url: "#",
                        childName: "Shop product single"
                    },
                ],
                noChildrenUrl: null
            },
            {
                itemClasses: null,
                hasChildren: false,
                name: "Contact",
                children: null,
                noChildrenUrl: "#"
            },
        ]} />

    </nav>
  </div>