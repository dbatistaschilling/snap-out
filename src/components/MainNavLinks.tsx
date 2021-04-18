import React from 'react'

type child = {
  url: string
  childName: string
}

type item = {
  itemClasses: string | null
  hasChildren: boolean
  name: string
  children: child[] | null
  noChildrenUrl: string | null
}

type props = {
  items: item[]
}

export const MainNavLinks = ({ items }: props) =>
  <div id="main-nav" className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      {
        items.map(({ itemClasses, hasChildren, name, children, noChildrenUrl }: item ) => (
          hasChildren ? (
            <li key={name} className={`menu-item-has-children dropdown ${itemClasses}`}>
              <a href="#" data-toggle="dropdown" className="dropdown-toggle" role="button">{name}</a>
              <ul className="dropdown-menu">
                {
                  children!.map(({ url, childName }: child) => (
                    <li key={childName}><a href={url}>{childName}</a></li>
                  ))
                }
              </ul>
            </li>
          ) : (
            <li key={name}>
              <a href={noChildrenUrl!} role="button">{name}</a>
            </li>
          )
        ))
      }
    </ul>
  </div>