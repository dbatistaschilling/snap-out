type SocialType = {
  id: number
  url: string
  icon: string
}

type Text = {
  id: number
  paraghraph: string
}

type MemberPage = {
  pageTitlePicture: string
  title: string
  text: Text[]
  socialsPhrase: string
  socials: SocialType[]
}

export type MemberPageType = {
  id: number
  name: string
  role: string
  image: string
  alt: string
  url: string
  memberPage: MemberPage
}
