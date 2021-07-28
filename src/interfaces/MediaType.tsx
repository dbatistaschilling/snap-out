export type MediaType = {
  id: number
  url: string
  text: string
}

export type MediaSectionType = {
  id?: number
  title?: string
  videos?: MediaType[]
}