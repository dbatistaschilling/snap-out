export type AboutParagraphType = {
  id: number
  text: string
}

export type AboutSectionType = {
  id?: number
  title?: string
  paragraphs?: AboutParagraphType[]
}