export type AboutParagraphType = {
  id: number
  text: string
}

export type AboutSectionType = {
  title?: string
  paragraphs?: AboutParagraphType[]
}