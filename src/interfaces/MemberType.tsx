export type MemberPageTextType = {
  id?: number
  paraghraph?: string
}

export type SocialsType = {
  id?: number
  url?: string
  icon?: string
}

export type MemberPageType = {
  pageTitlePicture?: string
  title?: string
  text?: MemberPageTextType[]
  socialsPhrase?: string
  socials?: SocialsType[]
}

export type MemberType = {
  id?: number
  name?: string
  role?: string
  image?: string
  alt?: string
  url?: string
  memberPage?: MemberPageType
}
