export type MemberType = {
  id: number
  name: string
  role: string
  image: string
  alt: string
  url: string
}

export type MemberSectionType = {
  title?: string
  members?: MemberType[]
}
