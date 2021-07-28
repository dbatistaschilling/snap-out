export type EventType = {
  id: number
  weekDay: string
  dayMonth: string
  city: string
  local: string
}

export type EventSectionType = {
  id?: number
  title?: string
  events?: EventType[]
}