import Event from "./Event"

export default interface Organization {
    id: string
    name: string
    description: string
    volunteers: string[]
    events: string[]
}