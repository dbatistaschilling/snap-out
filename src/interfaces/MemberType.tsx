export type MemberType = {
  id: number
  name: string
  role: string
  image: string
  alt: string
  url: string
}

export type MemberSectionType = {
  id?: number
  title?: string
  members?: MemberType[]
}
