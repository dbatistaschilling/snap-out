export type ContactType = {
  id: number
  message: string
  email: string
  eventManager: string
  phone: string
}

export type ContactSectionType = {
  id?: number
  title?: string
  info?: ContactType
}